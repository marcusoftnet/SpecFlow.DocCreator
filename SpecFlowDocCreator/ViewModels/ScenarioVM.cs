using System;

namespace SpecFlowDocCreator.ViewModels
{
    using TechTalk.SpecFlow.Parser.SyntaxElements;

    public class ScenarioVm : Scenario
    {
        public new StepListVm Steps { get; set; }

        public static ScenarioVm CreateFromSpecFlowScenario(Scenario specFlowScenario)
        {
            return new ScenarioVm
                       {
                           Description = specFlowScenario.Description,
                           Keyword = specFlowScenario.Keyword,
                           Steps = StepListVm.CreateFromSpecFlowScenarioSteps(specFlowScenario.Steps),
                           Tags = specFlowScenario.Tags,
                           Title = specFlowScenario.Title
                       };
        }
    }
}