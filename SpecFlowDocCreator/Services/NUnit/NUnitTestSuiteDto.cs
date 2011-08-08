using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace SpecFlowDocCreator.Services.NUnit
{
    public class NUnitTestSuiteDto : NUnitTestCaseDto
    {
        public NUnitTestSuiteDto(XElement suiteElement) : base(suiteElement)
        {
            Type = suiteElement.Attribute(NUnitConstants.TYPE).ValueOrEmptyString();
            Results = suiteElement.Elements(NUnitConstants.RESULTS).Select(r => new NUnitTestResultDto(r)).ToList();
        }
        public IList<NUnitTestResultDto> Results { get; set; }
    }
}