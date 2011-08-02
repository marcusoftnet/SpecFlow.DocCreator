namespace Tests
{
    using NUnit.Framework;
    using Should.Fluent;

    using SpecFlowDocCreator.Services;
    using SpecFlowDocCreator.ViewModels;

    [TestFixture]
    public class FeatureVMListFactory_SingleFileTests
    {
        private const string ROOT_TESTDATA = @"..\..\TestData\";
        private const string ONE_FEATURE_FOLDER = ROOT_TESTDATA + @"00BasicGherkin";
        private const string FEATUREFILE_BASIC = "BasicGherkin.feature";
        
        private IFeatureVMFileListFactory featureFileListFactory;
        private FeatureVm featureVMUnderTest;
        
        [SetUp]
        public void Setup()
        {
            featureFileListFactory = new FeatureVmFileListFactory(ONE_FEATURE_FOLDER, "en-US");
            var features = featureFileListFactory.GetFeatures();
            features.Count.Should().Equal(1);

            featureVMUnderTest = features[0];
        }

        [Test]
        public void should_set_the_filename_of_the_features()
        {
            // Assert
            this.featureVMUnderTest.FileName.Should().Equal(FEATUREFILE_BASIC);
        }

        [Test]
        public void should_set_the_complete_path_to_the_feature_file()
        {
            // Assert
            var expectedPath = ONE_FEATURE_FOLDER + "\\" + FEATUREFILE_BASIC;
            this.featureVMUnderTest.SourceFile.Should().Equal(expectedPath);
        }

        [Test]
        public void should_set_the_directory_of_the_feature_file()
        {
            // Assert
            this.featureVMUnderTest.Directory.Should().Equal(ONE_FEATURE_FOLDER);
        }

        [Test]
        public void should_set_the_title_of_the_feature()
        {
            // Assert
            this.featureVMUnderTest.Title.Should().Equal("Showing basic gherkin syntax");
        }

        [Test]
        public void should_set_the_description_of_the_feature()
        {
            // Assert
            this.featureVMUnderTest.Description.Should().Contain("In order to");
            this.featureVMUnderTest.Description.Should().Contain("As a");
            this.featureVMUnderTest.Description.Should().Contain("I want to");
        }

        [Test]
        public void should_set_the_scenarios_of_the_feature()
        {
            // Assert
            this.featureVMUnderTest.ScenarioList.Count.Should().Equal(2);
        }
    }
}
