using System.Xml.Linq;

namespace SpecFlowDocCreator.Services.NUnit
{
    public class NUnitTestFailureDto
    {

        public NUnitTestFailureDto(XElement failureNode)
        {
            StackTrace = failureNode.Element(NUnitConstants.STACKTRACE).Value;
            Message = failureNode.Element(NUnitConstants.MESSAGE).Value;
        }
        public string StackTrace { get; set; }
        public string Message { get; set; }
    }
}