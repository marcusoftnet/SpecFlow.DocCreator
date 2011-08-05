using System.Collections.Generic;
using TechTalk.SpecFlow.Parser.SyntaxElements;

namespace SpecFlowDocCreator.Services
{
    public interface ISpecFlowReportGenerator
    {
        IList<Feature> GetSpecFlowFeatures();
    }
}