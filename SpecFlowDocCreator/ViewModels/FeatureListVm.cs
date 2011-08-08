using System.Collections.Generic;
using System.Linq;
using TechTalk.SpecFlow.Parser.SyntaxElements;

namespace SpecFlowDocCreator.ViewModels
{
    public class FeatureListVm : List<FeatureVm>
    {
        public static FeatureListVm CreateFromFeatures(List<Feature> specFlowFeatures)
        {
            var featureListVm = new FeatureListVm();
            featureListVm.AddRange(
                specFlowFeatures.Select(FeatureVm.CreateFromSpecFlowFeature));

            return featureListVm;
        }
    }
}
