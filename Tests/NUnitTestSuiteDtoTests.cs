using System.Xml.Linq;
using NUnit.Framework;
using Should.Fluent;
using SpecFlowDocCreator.Services.NUnit;

namespace Tests
{
    [TestFixture]
    public class NUnitTestSuiteDtoTests
    {
        private const string FAILED_NODE = @"<test-case name='Tests.TestData._03ScenarioOutline._031ScenarioContext.ScenarioContextFeaturesFeature.DisplayErrorInformationInAfterScenario' description='Display error information in AfterScenario' executed='True' result='Error' success='False' time='0.020' asserts='0'>
                            <categories>
                              <category name='showingErrorHandling' />
                            </categories>
                            <failure>
                              <message><![CDATA[Should.Core.Exceptions.EqualException : Assert.Equal() Failure
Position: First difference is at position 0
Expected: correct
Actual:   not correct]]></message>
                              <stack-trace><![CDATA[at Specs._031ScenarioContext.ScenarioContextSteps.AnErrorOccurs() in C:\Dev\SpecFlow.DocCreator\Tests\TestData\03ScenarioOutline\031ScenarioContext\ScenarioContextSteps.cs:line 61
at lambda_method(Closure )
at TechTalk.SpecFlow.Bindings.MethodBinding.InvokeAction(Object[] arguments, ITestTracer testTracer, TimeSpan& duration)
at TechTalk.SpecFlow.TestRunner.ExecuteStepMatch(BindingMatch match, Object[] arguments)
at TechTalk.SpecFlow.TestRunner.ExecuteStep(StepArgs stepArgs)
at TechTalk.SpecFlow.TestRunner.CollectScenarioErrors()
at Tests.TestData._03ScenarioOutline._031ScenarioContext.ScenarioContextFeaturesFeature.ScenarioCleanup() in C:\Dev\SpecFlow.DocCreator\Tests\TestData\03ScenarioOutline\031ScenarioContext\ScenarioContext1.feature.cs:line 0
at Tests.TestData._03ScenarioOutline._031ScenarioContext.ScenarioContextFeaturesFeature.DisplayErrorInformationInAfterScenario() in c:\Dev\SpecFlow.DocCreator\Tests\TestData\03ScenarioOutline\031ScenarioContext\ScenarioContext.feature:line 27
]]></stack-trace>
                            </failure>
                          </test-case>";
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
            var node = XElement.Parse(SUCESS_NODE);

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

        [Test]
        public void should_create_an_failing_test_case()
        {
            // Arrange
            var node = XElement.Parse(FAILED_NODE);

            // Act
            var testCase = new NUnitTestCaseDto(node);

            // Assert
            testCase.Name.Should().Equal(
                "Tests.TestData._03ScenarioOutline._031ScenarioContext.ScenarioContextFeaturesFeature.DisplayErrorInformationInAfterScenario");
            testCase.Success.Should().Equal(false);
            testCase.Result.Should().Equal("Error");
            testCase.Failure.Message.Should().Contain("Assert.Equal() Failure");
            testCase.Failure.StackTrace.Should().Contain("Specs._031ScenarioContext.ScenarioContextSteps.AnErrorOccurs()");
        }
    }
}
