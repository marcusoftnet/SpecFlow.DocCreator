using System.Xml.Linq;

namespace SpecFlowDocCreator.Services.NUnit
{
    public class NUnitTestFailureDto
    {

        public NUnitTestFailureDto(XElement failureNode)
        {
            StackTrace = failureNode.Element("stack-trace").Value;
            Message = failureNode.Element("message").Value;
        }
        public string StackTrace { get; set; }
        public string Message { get; set; }
    }
}