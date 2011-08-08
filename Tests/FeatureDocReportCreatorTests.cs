using System;
using System.Collections.Generic;
using NUnit.Framework;
using Should.Fluent;
using SpecFlowDocCreator.Services;
using TechTalk.SpecFlow.Parser.SyntaxElements;

namespace Tests
{
    [TestFixture]
    public class FeatureDocReportCreatorTests
    {
        private IList<Feature> feature_list;
        private NUnitReportParser nUnitReportParser;
        private IFeatureDocReportCreator reportCreator;

        [TestFixtureSetUp]
        public void TestSetup()
        {
            var specFlowReportGenerator = new SpecFlowReportGenerator(TestConstants.ROOT_TESTDATA, "en-US");
            feature_list = specFlowReportGenerator.GetSpecFlowFeatures();
            nUnitReportParser = new NUnitReportParser(TestConstants.ROOT_TESTDATA + @"\NUnitReport\TestResult.xml");

            reportCreator = new FeatureDocReportCreator(feature_list, nUnitReportParser);
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
            // Act
            var result = reportCreator.CreateFeatureDocReport();

            // Assert
            Assert.IsNotNull(result.Features);
            Assert.AreEqual(feature_list.Count, result.NumberOfFeatures);
        }

        [Test]
        public void should_return_the_number_of_scenarios()
        {
            // Act
            var result = reportCreator.CreateFeatureDocReport();

            // Assert
            Assert.AreEqual(38, result.NumberOfScenarios);
        }

        [Test]
        public void should_return_number_of_sucessfull_features()
        {
            // Act
            var result = reportCreator.CreateFeatureDocReport();

            // Assert
            Assert.AreEqual(14, result.NumberOfSuccesfulFeatures);
        }

        [Test]
        public void should_return_number_of_failed_features()
        {
            // Act
            var result = reportCreator.CreateFeatureDocReport();

            // Assert
            Assert.AreEqual(1, result.NumberOfFailingFeatures);
        }

        [Test]
        public void should_return_number_of_inconclusive_features()
        {
            // Act
            var result = reportCreator.CreateFeatureDocReport();

            // Assert
            Assert.AreEqual(1, result.NumberOfInconclusiveFeatures);
        }

        [Test]
        public void should_return_number_of_ignored_features()
        {
            // Act
            var result = reportCreator.CreateFeatureDocReport();

            // Assert
            Assert.AreEqual(1, result.NumberOfIgnoredFeatures);
        }


    }
}
