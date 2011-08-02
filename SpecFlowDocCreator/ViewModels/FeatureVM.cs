namespace SpecFlowDocCreator.ViewModels
{
    using System.Collections.Generic;

    using TechTalk.SpecFlow.Parser.SyntaxElements;

    public class FeatureVm : Feature
    {
        public string FileName { get;  set; }
        public string Directory { get;  set; }

        public IList<ScenarioVm> ScenarioList { get; set; }
    }
}