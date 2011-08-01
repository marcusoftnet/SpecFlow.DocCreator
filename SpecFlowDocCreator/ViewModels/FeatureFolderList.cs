namespace SpecFlowDocCreator.ViewModels
{
    using System.Collections.Generic;

    public class FeatureFolderList : List<FeatureFolder>
    {
        public int TotalNumberOfFeatures
        {
            get
            {
                return this.Count;
            }
        }
    }
}