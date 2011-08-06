using System.Xml.Linq;

namespace SpecFlowDocCreator.Services.NUnit
{
    public class NUnitTestCaseDto
    {
        public NUnitTestCaseDto(XElement resultElement)
        {
            Name = resultElement.Attribute("name").Value;
            Description = resultElement.Attribute("description").Value;
            Executed = bool.Parse(resultElement.Attribute("executed").Value);
            Result = resultElement.Attribute("result").Value;
            Success = bool.Parse(resultElement.Attribute("success").Value);
            Time = resultElement.Attribute("time").Value;
            Asserts = int.Parse(resultElement.Attribute("asserts").Value);
        }

        public string Type { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Executed { get; set; }
        public string Result { get; set; }
        public bool Success { get; set; }
        public string Time { get; set; }
        public int Asserts { get; set; }
    }
}