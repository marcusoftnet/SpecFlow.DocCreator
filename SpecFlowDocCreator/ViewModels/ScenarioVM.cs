using System;
using SpecFlowDocCreator.Services;

namespace SpecFlowDocCreator.ViewModels
{
    using TechTalk.SpecFlow.Parser.SyntaxElements;

    public class ScenarioVm : Scenario
    {

        public bool Inconclusive { get; private set; }
        public bool Ignored { get; private set; }
        public string StackTrace { get; set; }
        public string Message { get; set; }
        public bool Failed { get; private set; }
        public bool Success { get; private set; }
        public new StepListVm Steps { get; private set; }

        public static ScenarioVm CreateFromSpecFlowScenario(Scenario specFlowScenario)
        {
            return new ScenarioVm
                       {
                           Description = specFlowScenario.Description,
                           Keyword = specFlowScenario.Keyword,
                           Steps = StepListVm.CreateFromSpecFlowScenarioSteps(specFlowScenario.Steps),
                           Tags = specFlowScenario.Tags,
                           Title = specFlowScenario.Title
                       };
        }

        public void ExtendWithNUnitInfo(INUnitReportParser nUnitReportParser)
        {
            var testCaseResult = nUnitReportParser.GetTestCaseResult(Title);

            Success = testCaseResult.Success;
            Failed = testCaseResult.Failed;
            if (testCaseResult.Failed)
            {
                if (testCaseResult.Failure != null)
                {
                    Message = testCaseResult.Failure.Message;
                    StackTrace = testCaseResult.Failure.StackTrace;
                }
            }

            Ignored = testCaseResult.Ignored;
            if (testCaseResult.Ignored)
            {
                Message = testCaseResult.ReasonMessage;
            }

            Inconclusive = testCaseResult.Inconclusive;
            if (testCaseResult.Inconclusive)
            {
                Message = testCaseResult.ReasonMessage;
            }
        }
    }
}