namespace SpecFlowDocCreator.ViewModels
{
    using System.Collections.Generic;
    using System.Linq;

    public class FeatureFolder
    {
        public List<FeatureFolder> FeatureFolders { get; set; }
        public List<Feature> Features { get; set; }

        public int TotalNumberOfFeatures
        {
            get
            {
                return this.NumberOfFeatures(this);
            }
        }

        private int NumberOfFeatures(FeatureFolder featureFolder)
        {
            return this.Features.Count + 
                featureFolder.FeatureFolders.Sum(
                    folder => this.NumberOfFeatures(folder)
                );
        }
    }
}