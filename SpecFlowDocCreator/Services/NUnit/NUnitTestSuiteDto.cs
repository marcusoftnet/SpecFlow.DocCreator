using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace SpecFlowDocCreator.Services.NUnit
{
    public class NUnitTestSuiteDto : NUnitTestCaseDto
    {
        public NUnitTestSuiteDto(XElement suiteElement) : base(suiteElement)
        {
            Type = suiteElement.Attribute("type").Value;
            Results = suiteElement.Elements("results").Select(r => new NUnitTestResultDto(r)).ToList();
        }
        public IList<NUnitTestResultDto> Results { get; set; }
    }
}