namespace SpecFlowDocCreator
{
    using NConsoler;

    public class Program
    {
        public static void Main(string[] args)
        {
            Consolery.Run(typeof(FeatureDocCreator), args);
        }
    }
}
