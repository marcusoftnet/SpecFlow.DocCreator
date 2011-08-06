using System.Linq;
using System.Xml.Linq;

namespace SpecFlowDocCreator.Services.NUnit
{
    public class NUnitReportParser : INUnitReportParser
    {
        private readonly XDocument _testResult;

        public NUnitReportParser(string resultsFile)
        {
            _testResult = XDocument.Load(resultsFile);
        }

        public NUnitTestSuiteDto GetFeatureResult(string featureTitle)
        {
            var nUnitTestFixtureName = featureTitle.Replace(" ", string.Empty).ToLower() + "feature";

            var testFixtureElement = FindTestFixtureElement(_testResult.Root.Element("test-suite"), nUnitTestFixtureName);

            return new NUnitTestSuiteDto(testFixtureElement);
        }

        private XElement FindTestFixtureElement(XElement element, string testFixtureName)
        {
            // test-suite
            if (element.Name == "test-suite" &&
                element.HasAttributes &&
                element.Attribute("type").Value == "TestFixture" &&
                element.Attribute("name").Value.ToLower() == testFixtureName)
            {
                return element;
            }

            return element.Elements()
                .Select(xElement => FindTestFixtureElement(xElement, testFixtureName))
                .FirstOrDefault(x => x != null);
        }

    }
}