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
            var nUnitTestFixtureName = NUnitFixtureNameFromFeatureName(featureTitle);

            var testFixtureElement = FindTestFixtureElement(_testResult.Root.Element(NUnitConstants.TESTSUITE), nUnitTestFixtureName);

            return new NUnitTestSuiteDto(testFixtureElement);
        }

        public bool ParsedOK { get; private set; }

        public NUnitTestCaseDto GetTestCaseResult(string scenarioTitle)
        {
            var nunitName = SpecFlowConvertedLowerCase(scenarioTitle);
            var testCaseElement = FindTestCaseElement(_testResult.Root.Element(NUnitConstants.TESTSUITE), nunitName);

            return new NUnitTestCaseDto(testCaseElement);
        }

        private static XElement FindTestCaseElement(XElement element, string testCaseDescription)
        {
            if (element.Name == NUnitConstants.TESTCASE &&
                element.HasAttributes &&
                SpecFlowConvertedLowerCase(element.Attribute(NUnitConstants.NAME).Value).Contains(testCaseDescription))
            {
                return element;
            }

            return element.Elements()
                .Select(xElement => FindTestCaseElement(xElement, testCaseDescription))
                .FirstOrDefault(x => x != null);
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

       private static string SpecFlowConvertedLowerCase(string name)
       {
           var specFlowConverted = name.Replace("-", "_");
           return Regex.Replace(specFlowConverted, @"[\W]", "").ToLower();
        
       }
        private static string NUnitFixtureNameFromFeatureName(string featureTitle)
        {
            return SpecFlowConvertedLowerCase(featureTitle) + "feature";

           }
    }
}