using System.Xml.Linq;
using NUnit.Framework;
using Should.Fluent;
using SpecFlowDocCreator.Services;
using SpecFlowDocCreator.Services.NUnit;

namespace Tests
{
    [TestFixture]
    public class NUnitTestSuiteDtoTests
    {
        private const string SUCESS_NODE = @"<test-suite type='TestFixture' name='ShowingBasicGherkinSyntaxFeature' description='In order to see that gherkin is a very simple langauge&#xA;As a SpecFlow evangelist&#xA;I want to show that basic syntax' executed='True' result='Success' success='True' time='0.641' asserts='2'>
                    <results>
                      <test-case name='Tests.TestData._00BasicGherkin.ShowingBasicGherkinSyntaxFeature.SimpleGWT' description='Simple GWT' executed='True' result='Success' success='True' time='0.230' asserts='0' />
                      <test-case name='Tests.TestData._00BasicGherkin.ShowingBasicGherkinSyntaxFeature.UsingAndAndBut' description='Using And and But' executed='True' result='Success' success='True' time='0.020' asserts='0' />
                    </results>
                  </test-suite>";

        private const string INCONCLUSIVE_NODE = @"<test-case name='Tests.TestData._03ScenarioOutline._031ScenarioContext.ScenarioContextFeaturesFeature.PendingStep' description='Pending step' executed='True' result='Inconclusive' success='False' time='0.030' asserts='0'>
                            <reason>
                              <message><![CDATA[One or more step definitions are not implemented yet.
  ScenarioContextSteps.WhenIHaveAPendingStep()]]></message>
                            </reason>
                          </test-case>";

        [Test]
        public void should_create_a_successful_test_suite_from_nunit_result_xmlelement()
        {
            // Arrange
            var node =XElement.Parse(SUCESS_NODE);

            // Act
            var nunitTestSuite = new NUnitTestSuiteDto(node);
            
            // Assert
            nunitTestSuite.Name.Should().Equal("ShowingBasicGherkinSyntaxFeature");
            nunitTestSuite.Success.Should().Equal(true);
            nunitTestSuite.Asserts.Should().Equal(2);
            nunitTestSuite.Results.Count.Should().Equal(1);
            nunitTestSuite.Results[0].TestCases.Count.Should().Equal(2);
            nunitTestSuite.Results[0].TestCases[0].Name.Should().Equal("Tests.TestData._00BasicGherkin.ShowingBasicGherkinSyntaxFeature.SimpleGWT");
            nunitTestSuite.Results[0].TestCases[1].Name.Should().Equal("Tests.TestData._00BasicGherkin.ShowingBasicGherkinSyntaxFeature.UsingAndAndBut");
            nunitTestSuite.Results[0].TestSuites.Count.Should().Equal(0);
        }

        [Test]
        public void should_create_an_inconclusive_test_case()
        {
            // Arrange
            var node = XElement.Parse(INCONCLUSIVE_NODE);

            // Act
            var testCase = new NUnitTestCaseDto(node);

            // Assert
            testCase.Name.Should().Equal(
                "Tests.TestData._03ScenarioOutline._031ScenarioContext.ScenarioContextFeaturesFeature.PendingStep");
            testCase.Success.Should().Equal(false);
            testCase.Result.Should().Equal("Inconclusive");
            testCase.ReasonMessage.Should().Contain("One or more step definitions are not implemented yet.");
        }
      

    }
}
