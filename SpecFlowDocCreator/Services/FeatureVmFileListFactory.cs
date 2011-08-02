namespace SpecFlowDocCreator.Services
{
    using System.Collections.Generic;
    using System.Globalization;
    using System.IO;
    using System.Linq;

    using SpecFlowDocCreator.ViewModels;
    using TechTalk.SpecFlow.Parser;
    using TechTalk.SpecFlow.Parser.SyntaxElements;

    public class FeatureVmFileListFactory : IFeatureVMFileListFactory
    {
        private readonly string rootPath;

        private const string FEATURE_PATTERN = "*.feature";
        private readonly SpecFlowLangParser specFlowParser;
        private readonly CultureInfo currentCultureInfo;

        public FeatureVmFileListFactory(string rootPath, string featureLanguage)
        {
            this.rootPath = rootPath;
            this.currentCultureInfo = CultureInfo.CreateSpecificCulture(featureLanguage);
            this.specFlowParser = new SpecFlowLangParser(this.currentCultureInfo); 
        }

        public IList<FeatureVm> GetFeatures()
        {
            //Get all feature-files in the folder and subfolders
            var featureFiles = Directory.GetFiles(rootPath, FEATURE_PATTERN, SearchOption.AllDirectories);

            // Parse the features for the files
            return featureFiles.Select(this.CreateFeature)
                    .OrderBy(f => f.Directory)
                    .ToList();
        }

        private Feature ParseSpecFlowFeature(string featureFile)
        {
            Feature feature;
            using (var reader = new StreamReader(featureFile))
            {
                feature = specFlowParser.Parse(reader, featureFile);
            }

            return feature;
        }

        private FeatureVm CreateFeature(string featureFile)
        {
            var specFlowFeature = this.ParseSpecFlowFeature(featureFile);
            
            return new FeatureVm
                {
                    Title = specFlowFeature.Title,
                    Description = specFlowFeature.Description,
                    Comments = specFlowFeature.Comments,
                    SourceFile = specFlowFeature.SourceFile,
                    Tags = specFlowFeature.Tags,
                    Language = specFlowFeature.Language,
                    Keyword = specFlowFeature.Keyword,
                    Background = specFlowFeature.Background,
                    Directory = Path.GetDirectoryName(featureFile),
                    FileName = Path.GetFileName(featureFile),
                    Scenarios = this.CreateScenarioList(specFlowFeature)
                };
        }

        private IList<ScenarioVm> CreateScenarioList(Feature specFlowFeature)
        {
            return specFlowFeature.Scenarios.Select(s => new ScenarioVm
                {
                    Description = s.Description,
                    Keyword = s.Keyword,
                    Steps = CreateStepsViewModel(s.Steps),
                    Tags = s.Tags,
                    Title = s.Title
                }).ToList();
        }

        private  IList<StepVm> CreateStepsViewModel(IEnumerable<ScenarioStep> specFlowSteps)
        {
            return specFlowSteps.Select(s => new StepVm
                {
                    Text = s.Text
                }).ToList();
        }
    }
}