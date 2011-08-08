using System;

namespace SpecFlowDocCreator.ViewModels
{
    using TechTalk.SpecFlow.Parser.SyntaxElements;

    public class StepVm : ScenarioStep
    {
        public static StepVm CreateFromSpecFlowScenario(ScenarioStep specFlowScenarioStep)
        {
            return new StepVm
                       {
                         Keyword = specFlowScenarioStep.Keyword,
                         MultiLineTextArgument = specFlowScenarioStep.MultiLineTextArgument,
                         ScenarioBlock = specFlowScenarioStep.ScenarioBlock,
                         StepKeyword = specFlowScenarioStep.StepKeyword,
                         TableArg = specFlowScenarioStep.TableArg,
                         Text = specFlowScenarioStep.Text
                       };
        }
    }
}