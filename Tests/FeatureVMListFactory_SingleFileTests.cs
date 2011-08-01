namespace Tests
{
    using System.Collections.Generic;
    using System.IO;
    using NUnit.Framework;
    using Should.Fluent;

    using SpecFlowDocCreator.Services;
    using SpecFlowDocCreator.ViewModels;

    [TestFixture]
    public class FeatureVMListFactory_SingleFileTests
    {
        private const string ROOT_TESTDATA = @"..\..\..\TestData\";
        private const string EMPTY_FOLDER = ROOT_TESTDATA + @"EmptyFolder";
        private const string ONE_FEATURE_FOLDER = ROOT_TESTDATA + @"FolderWith1Feature";
        private const string DEEP_ONE_FEATURE_FOLDER = ROOT_TESTDATA + @"Deep1Feature";
        private const string DEEP_ONE_FEATURE_PER_FOLDER = ROOT_TESTDATA + @"Deep1FeaturePerFolder";
        private const string DEEP_WITH_EMPTY_PATHS = ROOT_TESTDATA + @"FoldersWithoutFeatures";
        private const string NON_EXSISTING_PATH = @"C:\DOESNTEXSIST";

        private const string FEATUREFILE_BASIC = "BasicGherkin.feature";

        private IFeatureVMFileListFactory featureFileListFactory;


        private FeatureVM featureVMUnderTest;

        public FeatureVMListFactory_SingleFileTests()
        {
        }

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
            this.featureVMUnderTest.Path.Should().Equal(expectedPath);
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
            this.featureVMUnderTest.Scenarios.Count.Should().Equal(2);
        }

        //[Test]
        //public void should_return_a_deep_folder_structure_with_only_1_file()
        //{
        //    // Act
        //    var features = featureFileQueryService.GetFeatures(DEEP_ONE_FEATURE_FOLDER);

        //    // Assert
        //    features.FeatureFolders.Count.Should().Equal(1);
        //    features.Features.Count.Should().Equal(0);

        //    features.FeatureFolders[0].FeatureFolders.Count.Should().Equal(1);
        //    features.FeatureFolders[0].Features.Count.Should().Equal(0);

        //    features.FeatureFolders[0].FeatureFolders[0].FeatureFolders.Count.Should().Equal(0);
        //    features.FeatureFolders[0].FeatureFolders[0].Features.Count.Should().Equal(1);
        //}

        //[Test]
        //public void should_be_able_to_count_the_number_of_features_in_a_file_structure()
        //{
        //    // Act
        //    var features = featureFileQueryService.GetFeatures(DEEP_ONE_FEATURE_PER_FOLDER);

        //    // Assert
        //    features.TotalNumberOfFeatures.Should().Equal(3);
        //    features.FeatureFolders[0].TotalNumberOfFeatures.Should().Equal(2);
        //    features.FeatureFolders[0].FeatureFolders[0].TotalNumberOfFeatures.Should().Equal(1);
        //}

        //[Test]
        //[Ignore("Would love to get this test to work but don't know how now")]
        //public void should_not_included_folder_structures_with_no_feature_files_in()
        //{
        //    // Act
        //    var features = featureFileQueryService.GetFeatures(DEEP_WITH_EMPTY_PATHS);

        //    // Assert
        //    features.TotalNumberOfFeatures.Should().Equal(1);
        //    features.Features.Count.Should().Equal(1);
        //    features.FeatureFolders.Count.Should().Equal(0);

        //}

    }
}
