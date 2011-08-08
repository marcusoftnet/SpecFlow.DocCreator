using SpecFlowDocCreator.ViewModels;

namespace SpecFlowDocCreator.Services
{
    public interface IFeatureDocReportCreator
    {
        FeatureListVm CreateFeatureDocReport();
    }
}