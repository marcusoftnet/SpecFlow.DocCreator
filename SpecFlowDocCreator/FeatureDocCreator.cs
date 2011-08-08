using System.IO;
using Newtonsoft.Json;
using SpecFlowDocCreator.Services;
using SpecFlowDocCreator.ViewModels;

namespace SpecFlowDocCreator
{
    using NConsoler;

    public class FeatureDocCreator
    {
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
            var specflowReportGenerator = new SpecFlowReportGenerator(featureFolder, language);
            var features = specflowReportGenerator.GetSpecFlowFeatures();

            // Create NUnit parser
            var nunitParser = new NUnitReportParser(testResultFile);

            // create new structure
            var featureReportCreator = new FeatureDocReportCreator(features, nunitParser);
            var report = featureReportCreator.CreateFeatureDocReport();

            // Generate JSON
            var json = JsonConvert.SerializeObject(report);

            // Save to file (reportViewModel.js)
            // TODO: Add "var vm = " framför och ";" efter json-strängen
            File.WriteAllText("reportViewModel.js", json);
        }

    }
}