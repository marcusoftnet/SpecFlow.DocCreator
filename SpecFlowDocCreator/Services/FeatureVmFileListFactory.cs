namespace SpecFlowDocCreator.Services
{
    using System;
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
        private SpecFlowLangParser specFlowParser;

        public FeatureVmFileListFactory(string rootPath, string featureLanguage)
        {
            this.rootPath = rootPath;
            this.specFlowParser = new SpecFlowLangParser(CultureInfo.CreateSpecificCulture(featureLanguage)); ;
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
            var vm = new FeatureVm
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
                    FileName = Path.GetFileName(featureFile)
                };

            vm.ScenarioList = CreateScenarioList(specFlowFeature);

            return vm;
        }

        private IList<ScenarioVm> CreateScenarioList(Feature specFlowFeature)
        {
            return specFlowFeature.Scenarios.Select(specFlowScenario => new ScenarioVm
                {
                    Description = specFlowScenario.Description,
                    Keyword = specFlowScenario.Keyword,
                    Steps = specFlowScenario.Steps,
                    Tags = specFlowScenario.Tags,
                    Title = specFlowScenario.Title
                }).ToList();
        }
    }
}