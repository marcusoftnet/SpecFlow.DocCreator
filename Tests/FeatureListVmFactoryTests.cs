using System.Collections.Generic;
using NUnit.Framework;
using Should.Fluent;
using SpecFlowDocCreator.ViewModels;
using TechTalk.SpecFlow.Parser.Gherkin;
using TechTalk.SpecFlow.Parser.SyntaxElements;

namespace Tests
{
    [TestFixture]
    public class VmFactoryTests
    {
        [Test]
        public void should_create_a_stepVm_from_a_specFlow_step()
        {
            // Arrange
            var step = CreateTestStep("Text", StepKeyword.Given);
            // Act
            var vm = StepVm.CreateFromSpecFlowScenario(step);

            // Assert
            vm.Text.Should().Equal("Text");
            vm.StepKeyword.Should().Equal(StepKeyword.Given);
        }

        [Test]
        public void should_create_a_stepListVm_from_a_list_of_steps()
        {
            // Arrange
            var specFlowSteps = CreateTestSteps(3);
            // Act
            var stepListVm = StepListVm.CreateFromSpecFlowScenarioSteps(specFlowSteps);

            // Assert
            stepListVm.Count.Should().Equal(3);
            stepListVm[0].StepKeyword.Should().Equal(StepKeyword.Given);
            stepListVm[1].Text.Should().Equal("text1");
        }

        [Test]
        public void should_create_scenario_from_specflow_scenario()
        {
            // Arrange
            var specFlowScenario = CreateTestScenario("Title");
            // Act
            var scenarioVm = ScenarioVm.CreateFromSpecFlowScenario(specFlowScenario);

            // Assert
            scenarioVm.Title.Should().Equal("Title");
            scenarioVm.Steps.Count.Should().Equal(3);
        }

        [Test]
        public void should_create_a_featureVM_from_a_feature()
        {
            // Arrange
            var f = CreateTestFeature("Feature 1");

            // Act
            var vm = FeatureVm.CreateFromSpecFlowFeature(f);

            // Assert
            vm.Title.Should().Equal("Feature 1");
        }
      

        [Test]
        public void should_create_a_featureVmlist_from_a_list_of_features()
        {
            // Arrange
            var features = new List<Feature>
                               {
                                   CreateTestFeature("Feature 1"),
                                   CreateTestFeature("Feature 2"),
                                   CreateTestFeature("Feature 3")
                               };
            // Act
            var featureListVms = FeatureListVm.CreateFromFeatures(features);

            // Assert
            featureListVms.Count.Should().Equal(3);
        }

        [Test]
        public void should_create_scenarioListVm_from_a_list_of_specFlowScenarios()
        {
            // Arrange
            var scenarios = CreateTestScenarios(3);
            // Act
            var scenarioListVm = ScenarioListVm.CreateFromSpecFlowScenarios(scenarios);

            // Assert
            scenarioListVm.Count.Should().Equal(3);
        }

        private static ScenarioStep CreateTestStep(string text, StepKeyword stepKeyword)
        {
            return new ScenarioStep {Text = text, StepKeyword = stepKeyword};
        }

        private static ScenarioSteps CreateTestSteps(int numberOfSteps)
        {
            var steps = new ScenarioSteps();
            for (var i = 0; i < numberOfSteps; i++)
            {
                steps.Add(CreateTestStep("text" + i, StepKeyword.Given));
            }

            return steps;
        }

        private static Scenario CreateTestScenario(string title)
        {
            return new Scenario
                       {
                           Title = title,
                           Steps = CreateTestSteps(3)
                       };
        }

        private static List<Scenario> CreateTestScenarios(int numberOfScenarios)
        {
            var list = new List<Scenario>();
            for (int i = 0; i < numberOfScenarios; i++)
            {
                list.Add(CreateTestScenario("Title" + i));
            }

            return list;
        }

        private static Feature CreateTestFeature(string title)
        {
            return new Feature
                       {
                           Title = title,
                           Scenarios = CreateTestScenarios(3).ToArray()
                       };
        }
    }
}
