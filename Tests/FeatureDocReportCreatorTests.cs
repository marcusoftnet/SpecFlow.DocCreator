using System;
using System.Collections.Generic;
using NSubstitute;
using NUnit.Framework;
using Should.Fluent;
using SpecFlowDocCreator.Services;
using SpecFlowDocCreator.ViewModels;
using TechTalk.SpecFlow.Parser.SyntaxElements;

namespace Tests
{
    [TestFixture]
    public class FeatureDocReportCreatorTests
    {
        private IList<Feature> feature_list;
        private INUnitReportParser nUnitReportParser;
        private IFeatureDocReportCreator reportCreator;
        private FeatureListVm result;

        [TestFixtureSetUp]
        public void TestSetup()
        {
            var specFlowReportGenerator = new SpecFlowReportGenerator(TestConstants.ROOT_TESTDATA, "en-US");
            feature_list = specFlowReportGenerator.GetSpecFlowFeatures();
            nUnitReportParser = new NUnitReportParser(TestConstants.ROOT_TESTDATA + @"\NUnitReport\TestResult.xml");

            reportCreator = new FeatureDocReportCreator(feature_list, nUnitReportParser);
            
            result = reportCreator.CreateFeatureDocReport();
        }

        [Test]
        public void should_not_track_any_nunit_data_when_no_parsing_has_been_done()
        {
            // Arrange
            nUnitReportParser = Substitute.For<INUnitReportParser>();
            nUnitReportParser.ParsedOK.Returns(false);
            reportCreator = new FeatureDocReportCreator(feature_list, nUnitReportParser);
            
            // Act
            result = reportCreator.CreateFeatureDocReport();

            // Assert
            result.ForEach(f => f.Success.Should().Equal(false));
        }
      

        [Test]
        public void should_create_report_creator_from_feature_list_and_results_parser()
        {
            // Assert
            reportCreator.Should().Not.Be.Null();
        }

        [Test]
        public void should_return_the_total_number_of_features()
        {
            // Assert
            result.Should().Not.Be.Null();
            result.NumberOfFeatures.Should().Equal(feature_list.Count);
        }
        
        [Test]
        public void should_return_the_number_of_scenarios()
        {
            // Assert
            result.NumberOfScenarios.Should().Equal(38);
        }

        [Test]
        public void should_return_number_of_sucessfull_features()
        {
            // Assert
            result.NumberOfSuccesfulFeatures.Should().Equal(14);
        }

        [Test]
        public void should_return_number_of_failed_features()
        {
            // Assert
            result.NumberOfFailingFeatures.Should().Equal(1);
        }

        [Test]
        public void should_return_number_of_ignored_features()
        {
            // Assert
            result.NumberOfIgnoredFeatures.Should().Equal(1);
        }

        [Test]
        public void should_return_number_of_sucessful_scenarios_for_a_feature()
        {
            // Assert
            result[0].Scenarios.NumberOfSuccesfulScenarios.Should().Equal(2);
        }

        [Test]
        public void should_return_number_of_failing_scenarios_for_a_feature()
        {
            // Assert
            result[5].Scenarios.NumberOfFailingScenarios.Should().Equal(1);
        }

        [Test]
        public void should_return_number_of_inconclusive_scenarios_for_a_feature()
        {
            // Assert
            result[5].Scenarios.NumberOfInconclusiveScenarios.Should().Equal(1);
        }

        [Test]
        public void should_return_number_of_ignored_scenarios_for_a_feature()
        {
            // Assert
            result[3].Scenarios.NumberOfIgnoredScenarios.Should().Equal(1);
        }
    }
}
