using System.IO;
using Newtonsoft.Json;
using SpecFlowDocCreator.Services;
using SpecFlowDocCreator.ViewModels;

namespace SpecFlowDocCreator
{
    using NConsoler;

    public class FeatureDocCreator
    {
        private static ISpecFlowReportGenerator specflowReportGenerator;
        private static INUnitReportParser nunitReportParser;
        private static IFeatureDocReportCreator featureReportCreator;
        private static IJsonReportViewModelCreator jsonCreator;
        
        [Action("Generates documentation for SpecFlow features")]
        public static void CreateFeatureDocumentation(
            [Required(Description = "Root-folder for the features")]
                string featureFolder,
            [Optional("en-US", Description = "The language used in the feature-files.")]
                string language,
            [Optional("", Description = "Path to a NUnit testresult XML file.")]
                string testResultFile
            )
        {
            // Get specflow features
            specflowReportGenerator = new SpecFlowReportGenerator(featureFolder, language);
            var features = specflowReportGenerator.GetSpecFlowFeatures();

            // Create NUnit parser
            nunitReportParser = new NUnitReportParser(testResultFile);

            // create new structure
            featureReportCreator = new FeatureDocReportCreator(features, nunitReportParser);
            var report = featureReportCreator.CreateFeatureDocReport();

            // Generate JSON
            jsonCreator = new JsonReportViewModelCreator(report);
            var json = jsonCreator.CreateViewModel();

            // Save to file (reportViewModel.js)
            File.WriteAllText("reportViewModel.js", json);
        }

    }
}