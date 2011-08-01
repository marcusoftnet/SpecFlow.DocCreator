namespace Tests
{
    using System.IO;
    using NUnit.Framework;
    using Should.Fluent;
    using SpecFlowDocCreator.Services;

    [TestFixture]
    public class FeatureFileQueryServiceTests
    {
        private const string ROOT_TESTDATA = @"..\..\..\TestData\";
        private const string EMPTY_FOLDER = ROOT_TESTDATA + @"EmptyFolder";
        private const string ONE_FEATURE_FOLDER = ROOT_TESTDATA + @"FolderWith1Feature";
        private const string DEEP_ONE_FEATURE_FOLDER = ROOT_TESTDATA + @"Deep1Feature";
        private const string DEEP_ONE_FEATURE_PER_FOLDER = ROOT_TESTDATA + @"Deep1FeaturePerFolder";
        private const string DEEP_WITH_EMPTY_PATHS = ROOT_TESTDATA + @"FoldersWithoutFeatures";
        private const string NON_EXSISTING_PATH = @"C:\DOESNTEXSIST";

        private IFeatureFileQueryService featureFileQueryService;

        [SetUp]
        public void Setup()
        {
            featureFileQueryService = new FeatureFileQueryService();
        }

        [Test]
        public void should_throw_exception_for_non_existing_directory()
        {
            // Arrange
            var exceptionCaught = false;
            var message = string.Empty;

            // Act
            try
            {
                featureFileQueryService.GetFeatures(NON_EXSISTING_PATH);
            }
            catch (DirectoryNotFoundException directoryNotFoundException)
            {
                exceptionCaught = true;
                message = directoryNotFoundException.Message;
            }
            // Assert
            exceptionCaught.Should().Be.True();
            message.Should().Contain(NON_EXSISTING_PATH);
        }

        [Test]
        public void should_return_empty_feature_folder_list_for_empty_directory()
        {
            // Act
            var features = featureFileQueryService.GetFeatures(EMPTY_FOLDER);

            // Assert
            features.Should().Not.Be.Null();
            features.Features.Should().Be.Empty();
            features.FeatureFolders.Should().Be.Empty();
        }

        [Test]
        public void should_return_1_feature_folder_with_1_feature_for_folder_with_1_feature()
        {
            // Act
            var features = featureFileQueryService.GetFeatures(ONE_FEATURE_FOLDER);

            // Assert
            features.Features.Count.Should().Equal(1);
        }

        [Test]
        public void should_return_a_deep_folder_structure_with_only_1_file()
        {
            // Act
            var features = featureFileQueryService.GetFeatures(DEEP_ONE_FEATURE_FOLDER);

            // Assert
            features.FeatureFolders.Count.Should().Equal(1);
            features.Features.Count.Should().Equal(0);

            features.FeatureFolders[0].FeatureFolders.Count.Should().Equal(1);
            features.FeatureFolders[0].Features.Count.Should().Equal(0);

            features.FeatureFolders[0].FeatureFolders[0].FeatureFolders.Count.Should().Equal(0);
            features.FeatureFolders[0].FeatureFolders[0].Features.Count.Should().Equal(1);
        }

        [Test]
        public void should_be_able_to_count_the_number_of_features_in_a_file_structure()
        {
            // Act
            var features = featureFileQueryService.GetFeatures(DEEP_ONE_FEATURE_PER_FOLDER);

            // Assert
            features.TotalNumberOfFeatures.Should().Equal(3);
            features.FeatureFolders[0].TotalNumberOfFeatures.Should().Equal(2);
            features.FeatureFolders[0].FeatureFolders[0].TotalNumberOfFeatures.Should().Equal(1);
        }

        [Test]
        [Ignore("Would love to get this test to work but don't know how now")]
        public void should_not_included_folder_structures_with_no_feature_files_in()
        {
            // Act
            var features = featureFileQueryService.GetFeatures(DEEP_WITH_EMPTY_PATHS);

            // Assert
            features.TotalNumberOfFeatures.Should().Equal(1);
            features.Features.Count.Should().Equal(1);
            features.FeatureFolders.Count.Should().Equal(0);

        }

    }
}
