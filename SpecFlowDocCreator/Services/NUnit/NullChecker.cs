using System.Xml.Linq;

namespace SpecFlowDocCreator.Services.NUnit
{
    public static class NullChecker
    {
        public static string ValueOrEmptyString(this XAttribute attribute)
        {
            return attribute != null ? attribute.Value : string.Empty;
        }

        public static bool ValueOrFalse(this XAttribute attribute)
        {
            return attribute != null ? bool.Parse(attribute.Value) : false;
        }

        public static int ValueOrZero(this XAttribute attribute)
        {
            return attribute != null ? int.Parse(attribute.Value) : 0;
        }
    }
}