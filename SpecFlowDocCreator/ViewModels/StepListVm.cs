using System.Collections.Generic;
using System.Linq;
using TechTalk.SpecFlow.Parser.SyntaxElements;

namespace SpecFlowDocCreator.ViewModels
{
    public class StepListVm : List<ScenarioStep>
    {
        public static StepListVm CreateFromSpecFlowScenarioSteps(ScenarioSteps scenarioSteps)
        {
            var stepListVm = new StepListVm();
            stepListVm.AddRange(
                scenarioSteps.Select(StepVm.CreateFromSpecFlowScenario));

            return stepListVm;
        }
    }
}