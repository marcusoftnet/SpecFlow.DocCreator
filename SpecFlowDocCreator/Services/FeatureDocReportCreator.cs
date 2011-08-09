using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using SpecFlowDocCreator.ViewModels;
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

        public FeatureListVm CreateFeatureDocReport()
        {
            var viewModel = FeatureListVm.CreateFromFeatures(_features);

            if (_nUnitReportParser.ParsedOK)
            {
                viewModel.ExtendWithNUnitInfo(_nUnitReportParser);
            }

            return viewModel;
        }
    }
}