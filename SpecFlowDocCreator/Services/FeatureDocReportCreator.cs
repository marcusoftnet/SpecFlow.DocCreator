using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using TechTalk.SpecFlow.Parser.SyntaxElements;

namespace SpecFlowDocCreator.Services
{
    public class FeatureDocReportCreator : IFeatureDocReportCreator
    {
        private readonly IList<Feature> _features;
        private readonly INUnitReportParser _nUnitReportParser;

        public FeatureDocReportCreator(IList<Feature> features, INUnitReportParser nUnitReportParser)
        {
            _features = features;
            _nUnitReportParser = nUnitReportParser;
        }

        public dynamic CreateFeatureDocReport()
        {
            // TODO: use featurelistvm and move props
            dynamic result = new ExpandoObject();
            result.Features = _features;
            
            result.NumberOfFeatures = _features.Count;
            result.NumberOfScenarios = _features.Sum(f => f.Scenarios.Count());

            var featureResults = _features.Select(f => _nUnitReportParser.GetFeatureResult(f.Title));
            result.NumberOfSuccesfulFeatures = featureResults.Where(f => f.Success).Count();
            result.NumberOfFailingFeatures = featureResults.Where(f => f.Failed).Count();
            result.NumberOfInconclusiveFeatures = featureResults.Where(f => f.Inconclusive).Count();
            result.NumberOfIgnoredFeatures = featureResults.Where(f => f.Ignored).Count();
            
            return result;
        }
    }
}