using NUnit.Framework;
using Should.Fluent;
using SpecFlowDocCreator.Services;
using SpecFlowDocCreator.Services.NUnit;

namespace Tests
{
    [TestFixture]
    public class NUnitReportParserTests
    {
        private const string RESULTFILE = TestConstants.ROOT_TESTDATA + @"\NUnitReport\TestResult.xml";
        private INUnitReportParser _nunitReportParser;

        [TestFixtureSetUp]
        public void TestSetup()
        {
            _nunitReportParser = new NUnitReportParser(RESULTFILE);
        }

        [Test]
        public void should_ParsedOK_to_true_for_ok_parsed_file()
        {
            // Assert
            _nunitReportParser.ParsedOK.Should().Equal(true);
        }

        [Test]
        public void should_ParsedOK_to_false_for_non_exsisting_file()
        {
            // Act
            var parser = new NUnitReportParser(RESULTFILE + "DOSENTEXSIST");

            // Assert
            parser.ParsedOK.Should().Equal(false);
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

        [Test]
        public void should_return_a_test_case_result()
        {
            // Arrange
            var testCaseName = @"Using And and But";

            // Act
            var testCaseResult = _nunitReportParser.GetTestCaseResult(testCaseName);

            // Assert
            testCaseResult.Name.ToLower().Should().EndWith("usingandandbut");
            testCaseResult.Success.Should().Equal(true);
        }
      
        
            
    }
}
