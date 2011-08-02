namespace SpecFlowDocCreator.ViewModels
{
    using System.Collections.Generic;

    using TechTalk.SpecFlow.Parser.SyntaxElements;

    public class ScenarioVm : Scenario
    {
        public new IList<StepVm> Steps { get; set; }
    }
}