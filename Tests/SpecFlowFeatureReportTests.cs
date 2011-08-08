using System;
using NUnit.Framework;
using Should.Fluent;
using SpecFlowDocCreator.Services;
using SpecFlowDocCreator.ViewModels;
using TechTalk.SpecFlow.Parser.SyntaxElements;

namespace Tests
{
    [TestFixture]
    public class SpecFlowFeatureReportTests
    {
        [Test]
        public void should_create_a_structure_for_1_specflow_feature_in_1_directory()
        {
            // Arrange 
            var path =  TestConstants.ROOT_TESTDATA +@"00BasicGherkin\";
            var specFlowReportGenerator = new SpecFlowReportGenerator(path, "en-US");
         
            // Act 
            var features = specFlowReportGenerator.GetSpecFlowFeatures();

            // Assert
            features.Should().Not.Be.Empty();
            features.Count.Should().Equal(1);
            features[0].Title.Should().Equal("Showing basic gherkin syntax");
        }

        [Test]
        public void should_create_a_structure_for_1_specflow_feature_in_deep_directory_structure()
        {
            // Arrange 
            var path = TestConstants.ROOT_TESTDATA + @"Iteration1\";
            var specFlowReportGenerator = new SpecFlowReportGenerator(path, "en-US");
            
            // Act 
            var features = specFlowReportGenerator.GetSpecFlowFeatures();

            // Assert
            features.Count.Should().Equal(1);
            features[0].Title.Should().Equal("The test runner is not (very) important");
            features[0].SourceFile.Contains(@"Important\01TestRunner\TestRunnerIsNotImportant.feature");
        }

        [Test]
        public void should_create_a_structure_for_3_specflow_features_in_a_directory_hierarch()
        {
            // Arrange 
            var path = TestConstants.ROOT_TESTDATA + @"03ScenarioOutline";
            var specFlowReportGenerator = new SpecFlowReportGenerator(path, "en-US");

            // Act 
            var features = specFlowReportGenerator.GetSpecFlowFeatures();
        
            // Assert
            features.Count.Should().Equal(3);
            features[0].SourceFile.Contains(@"03ScenarioOutline\ScenarioOutline.feature");
            features[1].SourceFile.Contains(@"03ScenarioOutline\031ScenarioContext\ScenarioContext.feature");
            features[2].SourceFile.Contains(@"03ScenarioOutline\032FeatureContext\FeatureContextFeatures.feature");
        }
    }
}
