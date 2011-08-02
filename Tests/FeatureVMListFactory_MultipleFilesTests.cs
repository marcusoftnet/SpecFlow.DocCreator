namespace Tests
{
    using System.Collections.Generic;

    using NUnit.Framework;
    using Should.Fluent;

    using SpecFlowDocCreator.Services;
    using SpecFlowDocCreator.ViewModels;

    [TestFixture]
    public class FeatureVMListFactory_MultipleFilesTests
    {
        private const string ROOT_TESTDATA = @"..\..\TestData\";
        private const string SEVERAL_FEATURE_FOLDER = ROOT_TESTDATA + @"03ScenarioOutline";
        
        private IFeatureVMFileListFactory featureFileListFactory;

        private IList<FeatureVm> features;

        [SetUp]
        public void Setup()
        {
            featureFileListFactory = new FeatureVmFileListFactory(SEVERAL_FEATURE_FOLDER, "en-US");
            this.features = this.featureFileListFactory.GetFeatures();
        }

        [Test]
        public void should_return_3_features()
        {
            // Assert
            this.features.Count.Should().Equal(3);
        }

        [Test]
        public void should_be_sorted_on_directory()
        {
            // Assert
            this.features[0].Directory.Should().EndWith("03ScenarioOutline");
            this.features[1].Directory.Should().EndWith("031ScenarioContext");
            this.features[2].Directory.Should().EndWith("032FeatureContext");
        }
    }
}
