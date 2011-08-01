namespace Tests
{
    using System.IO;
    using NUnit.Framework;
    using Should.Fluent;
    using SpecFlowDocCreator.Services;

    [TestFixture]
    public class FeatureVMListFactoryTests
    {
        private const string ROOT_TESTDATA = @"..\..\..\TestData\";
        private const string EMPTY_FOLDER = ROOT_TESTDATA + @"EmptyFolder";
        private const string NON_EXSISTING_PATH = @"C:\DOESNTEXSIST";

        private IFeatureVMFileListFactory featureFileListFactory;
        
        [SetUp]
        public void Setup()
        {
            featureFileListFactory = new FeatureVmFileListFactory(EMPTY_FOLDER, "en-US");
        }

        [Test]
        public void should_throw_exception_for_non_existing_directory()
        {
            // Arrange
            var exceptionCaught = false;
            var message = string.Empty;

            featureFileListFactory = new FeatureVmFileListFactory(NON_EXSISTING_PATH, "en-US");

            // Act
            try
            {
                featureFileListFactory.GetFeatures();
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
        public void should_return_empty_feature_list_for_empty_directory()
        {
            // Act
            var features = featureFileListFactory.GetFeatures();

            // Assert
            features.Should().Not.Be.Null();
            features.Count.Should().Equal(0);
        }
    }
}
