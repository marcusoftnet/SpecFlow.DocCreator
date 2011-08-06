using System.Xml.Linq;
using NUnit.Framework;
using Should.Fluent;
using SpecFlowDocCreator.Services;
using SpecFlowDocCreator.Services.NUnit;

namespace Tests
{
    public class NUnitTestSuiteDtoTests
    {

        [Test]
        public void should_create_a_successful_test_suite_from_nunit_result_xmlelement()
        {
            // Arrange
            var fixtureName = "ShowingBasicGherkinSyntaxFeature";
            var fixtureResult = true;
            var fixtureAsserts = 12;
            var testCaseName1 = "Tests.TestData._00BasicGherkin.ShowingBasicGherkinSyntaxFeature.SimpleGWT";
            var testCaseName2 = testCaseName1 + "2";
            var node = new XElement("test-suite",
                        new XAttribute("type","TestFixture"),
                        new XAttribute("name", fixtureName),
                        new XAttribute("description", "In order to see that gherkin is a very simple langauge&#xA;As a SpecFlow evangelist&#xA;I want to show that basic syntax"),
                        new XAttribute("executed", true),
                        new XAttribute("result", "Success"),
                        new XAttribute("success", fixtureResult),
                        new XAttribute("time", "0.400"),
                        new XAttribute("asserts", fixtureAsserts),
                    new XElement("results",
                        new XElement("test-case",
                            new XAttribute("name", testCaseName1),
                            new XAttribute("description", "Simple GWT"),
                            new XAttribute("executed", true),
                            new XAttribute("result", "Success"),
                            new XAttribute("success", true),
                            new XAttribute("time", "0.218"),
                            new XAttribute("asserts", 0)
                            ),
                        new XElement("test-case",
                            new XAttribute("name", testCaseName2),
                            new XAttribute("description", "Simple GWT"),
                            new XAttribute("executed", true),
                            new XAttribute("result", "Success"),
                            new XAttribute("success", true),
                            new XAttribute("time", "0.218"),
                            new XAttribute("asserts", 0)
                            )
                       )
                   );

            // Act
            var nunitTestSuite = new NUnitTestSuiteDto(node);
            
            // Assert
            nunitTestSuite.Name.Should().Equal(fixtureName);
            nunitTestSuite.Success.Should().Equal(fixtureResult);
            nunitTestSuite.Asserts.Should().Equal(fixtureAsserts);
            nunitTestSuite.Results.Count.Should().Equal(1);
            nunitTestSuite.Results[0].TestCases.Count.Should().Equal(2);
            nunitTestSuite.Results[0].TestCases[0].Name.Should().Equal(testCaseName1);
            nunitTestSuite.Results[0].TestCases[1].Name.Should().Equal(testCaseName2);
            nunitTestSuite.Results[0].TestSuites.Count.Should().Equal(0);
        }
      
    }
}
