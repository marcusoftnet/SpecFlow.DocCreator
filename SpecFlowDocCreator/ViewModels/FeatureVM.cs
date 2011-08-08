using System.IO;

namespace SpecFlowDocCreator.ViewModels
{
    using TechTalk.SpecFlow.Parser.SyntaxElements;

    public class FeatureVm : Feature
    {
        public string FileName { get; set; }
        public string Directory { get; set; }

        public new ScenarioListVm Scenarios { get; set; }

        public static FeatureVm CreateFromSpecFlowFeature(Feature specFlowFeature)
        {
            return new FeatureVm
                       {
                           Background = specFlowFeature.Background,
                           Comments = specFlowFeature.Comments,
                           Description = specFlowFeature.Description,
                           Directory = Path.GetDirectoryName(specFlowFeature.SourceFile),
                           FileName = Path.GetFileName(specFlowFeature.SourceFile),
                           Keyword = specFlowFeature.Keyword,
                           Language = specFlowFeature.Language,
                           Scenarios = ScenarioListVm.CreateFromSpecFlowScenarios(specFlowFeature.Scenarios),
                           SourceFile = specFlowFeature.SourceFile,
                           Tags = specFlowFeature.Tags,
                           Title = specFlowFeature.Title
                       };
        }
    }
}