using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using TechTalk.SpecFlow.Parser;
using TechTalk.SpecFlow.Parser.SyntaxElements;

namespace SpecFlowDocCreator.Services
{
    public class SpecFlowReportGenerator : ISpecFlowReportGenerator
    {
        private readonly string rootPath;

        private const string FEATURE_PATTERN = "*.feature";
        private readonly SpecFlowLangParser specFlowParser;
        private readonly CultureInfo currentCultureInfo;

        public SpecFlowReportGenerator(string rootPath, string featureLanguage)
        {
            this.rootPath = rootPath;
            currentCultureInfo = CultureInfo.CreateSpecificCulture(featureLanguage);
            specFlowParser = new SpecFlowLangParser(currentCultureInfo); 
        }
        

        public IList<Feature> GetSpecFlowFeatures()
        {
            var featureFileList = Directory.GetFiles(rootPath, FEATURE_PATTERN, SearchOption.AllDirectories);

            return featureFileList.Select(ParseSpecFlowFeature).ToList();
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
    }
}