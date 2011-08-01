namespace SpecFlowDocCreator.Services
{
    using SpecFlowDocCreator.ViewModels;

    public interface IFeatureFileQueryService
    {
        FeatureFolder GetFeatures(string path);
    }
}