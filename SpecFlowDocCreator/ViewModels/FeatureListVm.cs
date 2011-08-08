using System.Collections.Generic;
using System.Linq;
using TechTalk.SpecFlow.Parser.SyntaxElements;

namespace SpecFlowDocCreator.ViewModels
{
    public class FeatureListVm : List<FeatureVm>
    {

        public int NumberOfFeatures { get; set; }
        public int NumberOfScenarios { get; set; }
        public int NumberOfSuccesfulFeatures { get; set; }
        public int NumberOfFailingFeatures { get; set; }
        public int NumberOfInconclusiveFeatures { get; set; }
        public int NumberOfIgnoredFeatures { get;  set; }


        public static FeatureListVm CreateFromFeatures(IList<Feature> specFlowFeatures)
        {
            var featureListVm = new FeatureListVm();
            featureListVm.AddRange(
                specFlowFeatures.Select(FeatureVm.CreateFromSpecFlowFeature));

            return featureListVm;
        }
    }
}
