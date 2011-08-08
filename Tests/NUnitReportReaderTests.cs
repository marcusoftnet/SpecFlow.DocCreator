using NUnit.Framework;
using Should.Fluent;
using SpecFlowDocCreator.Services;
using SpecFlowDocCreator.Services.NUnit;

namespace Tests
{
    [TestFixture]
    public class NUnitReportReaderTests
    {
        private const string RESULTFILE = TestConstants.ROOT_TESTDATA + @"\NUnitReport\TestResult.xml";
        private INUnitReportParser _nunitReportParser;

        [TestFixtureSetUp]
        public void TestSetup()
        {
            _nunitReportParser = new NUnitReportParser(RESULTFILE);
        }

        
        [Test]
        public void should_return_successful_result_for_succesful_feature_by_title()
        {
            // Arrange
            var featureTitle = @"Showing basic gherkin syntax";
           
            // Act
            var featureResult =  _nunitReportParser.GetFeatureResult(featureTitle);

            // Assert
            featureResult.Name.Should().Equal("ShowingBasicGherkinSyntaxFeature");
            featureResult.Success.Should().Equal(true);
            featureResult.Asserts.Should().Equal(0);
            featureResult.Results[0].TestCases.Count.Should().Equal(2);
        }
            
    }
}
