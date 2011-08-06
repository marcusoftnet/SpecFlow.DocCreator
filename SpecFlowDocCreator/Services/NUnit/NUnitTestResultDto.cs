﻿using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace SpecFlowDocCreator.Services.NUnit
{
    public class NUnitTestResultDto
    {

        public NUnitTestResultDto(XElement result)
        {
            TestCases = result.Elements("test-case").Select(tc => new NUnitTestCaseDto(tc)).ToList();
            TestSuites = result.Elements("test-suite").Select(ts => new NUnitTestSuiteDto(ts)).ToList();
        }
        public IList<NUnitTestCaseDto> TestCases { get; set; }
        public IList<NUnitTestSuiteDto> TestSuites { get; set; }
    }
}