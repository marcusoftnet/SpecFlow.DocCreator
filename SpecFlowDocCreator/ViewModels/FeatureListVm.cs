using System;
using System.Collections.Generic;
using System.Linq;
using SpecFlowDocCreator.Services;
using TechTalk.SpecFlow.Parser.SyntaxElements;

namespace SpecFlowDocCreator.ViewModels
{
    public class FeatureListVm : List<FeatureVm>
    {
        public int NumberOfFeatures { get { return Count; } }
        public int NumberOfScenarios { get { return this.Sum(f => f.Scenarios.Count()); } }
        public int NumberOfSuccesfulFeatures { get; private set; }
        public int NumberOfFailingFeatures { get; private set; }
        public int NumberOfIgnoredFeatures { get; private set; }

        public static FeatureListVm CreateFromFeatures(IEnumerable<Feature> specFlowFeatures)
        {
            var featureListVm = new FeatureListVm();
            featureListVm.AddRange(specFlowFeatures.Select(FeatureVm.CreateFromSpecFlowFeature));
            return featureListVm;
        }

        public void ExtendWithNUnitInfo(INUnitReportParser nUnitReportParser)
        {
            this.ForEach(f => f.ExtendWithNUnitInfo(nUnitReportParser));

            NumberOfSuccesfulFeatures = this.Where(f => f.Success).Count();
            NumberOfFailingFeatures = this.Where(f => f.Failed).Count();
            NumberOfIgnoredFeatures = this.Where(f => f.Ignored).Count();

        }
    }
}
