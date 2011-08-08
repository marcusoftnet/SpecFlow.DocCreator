using System;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using SpecFlowDocCreator.Services.NUnit;

namespace SpecFlowDocCreator.Services
{
    public class NUnitReportParser : INUnitReportParser
    {
        private readonly XDocument _testResult;

        public NUnitReportParser(string resultsFile)
        {
            ParsedOK = false;
            if (File.Exists(resultsFile))
            {
                _testResult = XDocument.Load(resultsFile);
                ParsedOK = true;
            }
        }

        public NUnitTestSuiteDto GetFeatureResult(string featureTitle)
        {
            var nUnitTestFixtureName = NUnItFixtureNameFromFeatureName(featureTitle);

            var testFixtureElement = FindTestFixtureElement(_testResult.Root.Element(NUnitConstants.TESTSUITE), nUnitTestFixtureName);

            return new NUnitTestSuiteDto(testFixtureElement);
        }

        public bool ParsedOK { get; private set; }

        private static string NUnItFixtureNameFromFeatureName(string featureTitle)
        {
            var fixtureName = Regex.Replace(featureTitle, @"[\W]", "");
            return fixtureName.ToLower() + "feature";
        }

        private static XElement FindTestFixtureElement(XElement element, string testFixtureName)
        {
            // test-suite
            if (element.Name == NUnitConstants.TESTSUITE &&
                element.HasAttributes &&
                element.Attribute(NUnitConstants.TYPE).Value == NUnitConstants.TESTFIXTURE &&
                element.Attribute(NUnitConstants.NAME).Value.ToLower() == testFixtureName)
            {
                return element;
            }

            return element.Elements()
                .Select(xElement => FindTestFixtureElement(xElement, testFixtureName))
                .FirstOrDefault(x => x != null);
        }

    }
}