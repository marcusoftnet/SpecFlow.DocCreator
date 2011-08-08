using System.Collections.Generic;
using System.Linq;
using TechTalk.SpecFlow.Parser.SyntaxElements;

namespace SpecFlowDocCreator.ViewModels
{
    public class ScenarioListVm : List<Scenario>
    {
        public static ScenarioListVm CreateFromSpecFlowScenarios(IList<Scenario> specFlowScenarios)
        {
            var scenarioListVm = new ScenarioListVm();
            scenarioListVm.AddRange(
                specFlowScenarios.Select(ScenarioVm.CreateFromSpecFlowScenario));

            return scenarioListVm;
        }
    }
}