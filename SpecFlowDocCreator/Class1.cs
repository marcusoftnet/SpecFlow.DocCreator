//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;

//namespace SpecFlowDocCreator
//{
//    namespace TechTalk.SpecFlow.Reporting.FeatureDocumentationReport
//    {
//        using System.Globalization;
//        using System.IO;

//        using Newtonsoft.Json;

//        public class FeatureDocumentationReportGenerator
//        {
//            private const string FEATURE_PATTERN = "*.feature";

//            private readonly FeatureDocumentationReportParameters parameters;

//            private CultureInfo FEATURE_LANGUGE = CultureInfo.CreateSpecificCulture("en-US"); // TODO: Should be inparameter 

//            public FeatureDocumentationReportGenerator(FeatureDocumentationReportParameters parameters)
//            {
//                this.parameters = parameters;
//            }

//            public FeatureDocumentationReportParameters Parameters
//            {
//                get
//                {
//                    return parameters;
//                }
//            }

//            public void Generate()
//            {
//                ValidateDirectory();

//                // Get all feature-files in the folder
//                var featureFiles = Directory.GetFiles(parameters.Directory, FEATURE_PATTERN, SearchOption.AllDirectories);

//                // Parse files
//                var parsedFiles = ParserHelper.GetParsedFeatures(featureFiles, FEATURE_LANGUGE);

//                // Create JSON
//                var json = JsonConvert.SerializeObject(parsedFiles);

//            }

//            private void ValidateDirectory()
//            {
//                if (!Directory.Exists(this.parameters.Directory))
//                {
//                    var message = string.Format("Cannot find the directory '{0}'");
//                    throw new DirectoryNotFoundException(message);
//                }
//            }
//        }
//    }
//    namespace TechTalk.SpecFlow.Reporting.FeatureDocumentationReport
//    {
//        using System.Globalization;
//        using System.IO;

//        using Newtonsoft.Json;

//        public class FeatureDocumentationReportGenerator
//        {
//            private const string FEATURE_PATTERN = "*.feature";

//            private readonly FeatureDocumentationReportParameters parameters;

//            private CultureInfo FEATURE_LANGUGE = CultureInfo.CreateSpecificCulture("en-US"); // TODO: Should be inparameter 

//            public FeatureDocumentationReportGenerator(FeatureDocumentationReportParameters parameters)
//            {
//                this.parameters = parameters;
//            }

//            public FeatureDocumentationReportParameters Parameters
//            {
//                get
//                {
//                    return parameters;
//                }
//            }

//            public void Generate()
//            {
//                ValidateDirectory();

//                // Get all feature-files in the folder
//                var featureFiles = Directory.GetFiles(parameters.Directory, FEATURE_PATTERN, SearchOption.AllDirectories);

//                // Parse files
//                var parsedFiles = ParserHelper.GetParsedFeatures(featureFiles, FEATURE_LANGUGE);

//                // Create JSON
//                var json = JsonConvert.SerializeObject(parsedFiles);

//            }

//            private void ValidateDirectory()
//            {
//                if (!Directory.Exists(this.parameters.Directory))
//                {
//                    var message = string.Format("Cannot find the directory '{0}'");
//                    throw new DirectoryNotFoundException(message);
//                }
//            }
//        }
//    }
//} 
