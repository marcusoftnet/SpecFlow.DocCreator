namespace Tests
{
    using NConsoler;

    using NUnit.Framework;

    using SpecFlowDocCreator;

    [TestFixture]
    public class NConsolerTests
    {
        [Test]
        public void NConsolerConfigurationShouldBeCorrect()
        {
            Consolery.Validate(typeof(FeatureDocCreator));
        }
    }
}
