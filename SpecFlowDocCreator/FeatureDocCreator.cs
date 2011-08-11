using System;
using System.Diagnostics;
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
        
#if(DEBUG)
                private static readonly Stopwatch debugStopWatch = new Stopwatch();
#endif

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
#if(DEBUG)
            debugStopWatch.Start();
#endif
            // Get specflow features
            Log(string.Format("Starting generation with parameters:\n - featureFolder: {0}\n - language: {1}\n - testResultFile: {2}", 
                featureFolder, language, testResultFile));
            
            Log("Parsing Gherkin features in folder");
            specflowReportGenerator = new SpecFlowReportGenerator(featureFolder, language);
            var features = specflowReportGenerator.GetSpecFlowFeatures();
            Log(string.Format("Parsed {0} Gherkin features", features.Count));

            // Create NUnit parser
            nunitReportParser = new NUnitReportParser(testResultFile);
            var parseOnOrOff = nunitReportParser.ParsedOK ? "on" : "off";
            Log(string.Format("NUnit parsed turned {0}", parseOnOrOff));

            // create new structure
            Log("Staring report creation");
            featureReportCreator = new FeatureDocReportCreator(features, nunitReportParser);
            var report = featureReportCreator.CreateFeatureDocReport();
            Log("Report created");

            // Generate JSON
            Log("JSON generation started");
            jsonCreator = new JsonReportViewModelCreator(report);
            var json = jsonCreator.CreateViewModel();
            Log("JSON generation finnished");

            // Save to file
            File.WriteAllText("reportViewModel.js", json);

#if (DEBUG)
{
            debugStopWatch.Start();
            Console.ReadLine();  
}
#endif
        }

        private static void Log(string message)
        {
#if(DEBUG)
            message += string.Format("\n - took {0} ms", debugStopWatch.ElapsedMilliseconds);
            debugStopWatch.Restart();
#endif
            Console.WriteLine(message);
        }

    }
}