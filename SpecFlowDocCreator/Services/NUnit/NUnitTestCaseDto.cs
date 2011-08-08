using System;
using System.Linq;
using System.Xml.Linq;

namespace SpecFlowDocCreator.Services.NUnit
{
    public class NUnitTestCaseDto
    {
        public NUnitTestCaseDto(XElement resultElement)
        {
            Name = resultElement.Attribute(NUnitConstants.NAME).ValueOrEmptyString();
            Description = resultElement.Attribute(NUnitConstants.DESCRIPTION).ValueOrEmptyString();
            Executed = resultElement.Attribute(NUnitConstants.EXECUTED).ValueOrFalse();
            Result = resultElement.Attribute(NUnitConstants.RESULT).ValueOrEmptyString();
            Time = resultElement.Attribute(NUnitConstants.TIME).ValueOrEmptyString();
            Asserts = resultElement.Attribute(NUnitConstants.ASSERTS).ValueOrZero();

            ReasonMessage = string.Empty;
            if (resultElement.Elements(NUnitConstants.REASON).Any())
            {
                ReasonMessage = resultElement.Elements(NUnitConstants.REASON).ElementAt(0).Value;
            }
            if (resultElement.Element(NUnitConstants.FAILURE) != null)
            {
                Failure = new NUnitTestFailureDto(resultElement.Element(NUnitConstants.FAILURE));
            }
        }

        public string Type { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Executed { get; set; }
        public string Result { get; set; }
        public string Time { get; set; }
        public int Asserts { get; set; }
        public string ReasonMessage { get; set; }

        public NUnitTestFailureDto Failure { get; set; }

        public bool Success { get { return Result.ToLower() == NUnitConstants.SUCCESS; } }
        public bool Ignored { get { return Result.ToLower() == NUnitConstants.IGNORED; } }
        public bool Failed { get { return Result.ToLower() == NUnitConstants.FAILURE; } }
        public bool Inconclusive { get { return Result.ToLower() == NUnitConstants.INCONCLUSIVE; } }
    }
}