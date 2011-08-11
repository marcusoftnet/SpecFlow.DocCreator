using System.IO;
using Newtonsoft.Json;
using SpecFlowDocCreator.Services;

namespace SpecFlowDocCreator.ViewModels
{
    using TechTalk.SpecFlow.Parser.SyntaxElements;

    public class FeatureVm : Feature
    {
        public string FileName { get; set; }
        public string Directory { get; set; }

        [JsonProperty(PropertyName = "ScenarioList")]
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

        public void ExtendWithNUnitInfo(INUnitReportParser nUnitReportParser)
        {
            Scenarios.ExtendWithNUnitInfo(nUnitReportParser);
        
            var featureResult = nUnitReportParser.GetFeatureResult(Title);
            Success = featureResult.Success;
            Failed = featureResult.Failed;
            
            Ignored =  featureResult.Ignored;
            Inconclusive = featureResult.Inconclusive;
                        
        }

        public bool Inconclusive { get; set; }
        public bool Ignored { get; set; }
        public bool Failed { get; set; }
        public bool Success { get; set; }
    }
}