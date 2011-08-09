using System;
using System.Collections.Generic;
using System.Linq;
using SpecFlowDocCreator.Services;
using TechTalk.SpecFlow.Parser.SyntaxElements;

namespace SpecFlowDocCreator.ViewModels
{
    public class ScenarioListVm : List<ScenarioVm>
    {
        public static ScenarioListVm CreateFromSpecFlowScenarios(IList<Scenario> specFlowScenarios)
        {
            var scenarioListVm = new ScenarioListVm();
            scenarioListVm.AddRange(specFlowScenarios.Select(ScenarioVm.CreateFromSpecFlowScenario));

            return scenarioListVm;
        }

        public void ExtendWithNUnitInfo(INUnitReportParser nUnitReportParser)
        {
            this.ForEach(s => s.ExtendWithNUnitInfo(nUnitReportParser));

            NumberOfSuccesfulScenarios = this.Where(s => s.Success).Count();
            NumberOfFailingScenarios = this.Where(s => s.Failed).Count();
            NumberOfIgnoredScenarios = this.Where(s => s.Ignored).Count();
            NumberOfInconclusiveScenarios = this.Where(s => s.Inconclusive).Count();

        }

        public int NumberOfInconclusiveScenarios { get; set; }
        public int NumberOfIgnoredScenarios { get; set; }
        public int NumberOfFailingScenarios { get; set; }
        public int NumberOfSuccesfulScenarios { get; set; }
    }
}