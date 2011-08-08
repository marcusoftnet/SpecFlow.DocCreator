using SpecFlowDocCreator.Services.NUnit;

namespace SpecFlowDocCreator.Services
{
    public interface INUnitReportParser
    {
        NUnitTestSuiteDto GetFeatureResult(string featureTitle);
        bool ParsedOK {get; }
    }
}