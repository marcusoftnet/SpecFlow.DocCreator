namespace SpecFlowDocCreator.Services.NUnit
{
    public interface INUnitReportParser
    {
        NUnitTestSuiteDto GetFeatureResult(string featureTitle);
    }
}