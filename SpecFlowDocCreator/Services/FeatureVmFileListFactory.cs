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

        public IList<FeatureVM> GetFeatures()
        {
            //Get all feature-files in the folder and subfolders
            var featureFiles = Directory.GetFiles(rootPath, FEATURE_PATTERN, SearchOption.AllDirectories);

            // Parse the features for the files
            return featureFiles.Select(
                    featureFile => this.CreateFeature(featureFile))
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

        private FeatureVM CreateFeature(string featureFile)
        {
            var specFlowFeature = this.ParseSpecFlowFeature(featureFile);

            return new FeatureVM
                {
                    Path = featureFile,
                    Directory = Path.GetDirectoryName(featureFile),
                    FileName = Path.GetFileName(featureFile),
                    Title = specFlowFeature.Title,
                    Description = specFlowFeature.Description,
                    Scenarios = CreateScenarios(specFlowFeature.Scenarios)
                };
        }

        private static IList<ScenarioVM> CreateScenarios(IEnumerable<Scenario> scenarios)
        {
            return scenarios.Select(scenario => new ScenarioVM()).ToList();
        }
    }
}