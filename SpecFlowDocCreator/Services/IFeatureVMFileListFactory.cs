namespace SpecFlowDocCreator.Services
{
    using System.Collections.Generic;

    using SpecFlowDocCreator.ViewModels;

    public interface IFeatureVMFileListFactory
    {
        IList<FeatureVm> GetFeatures();
    }
}