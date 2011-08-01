namespace SpecFlowDocCreator.ViewModels
{
    using System.Collections.Generic;

    public class FeatureVM
    {
        public string Path { get; set; }
        public string FileName { get; set; }
        public string Directory { get; set; }
        public string Title { get; set; }

        public string Description { get; set; }

        public IList<ScenarioVM> Scenarios { get; set; }
    }
}