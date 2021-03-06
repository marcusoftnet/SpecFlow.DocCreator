// ------------------------------------------------------------------------------
//  <auto-generated>
//      This code was generated by SpecFlow (http://www.specflow.org/).
//      SpecFlow Version:1.7.0.0
//      SpecFlow Generator Version:1.7.0.0
//      Runtime Version:4.0.30319.235
// 
//      Changes to this file may cause incorrect behavior and will be lost if
//      the code is regenerated.
//  </auto-generated>
// ------------------------------------------------------------------------------
#region Designer generated code
namespace Tests.TestData._03ScenarioOutline
{
    using TechTalk.SpecFlow;
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("TechTalk.SpecFlow", "1.7.0.0")]
    [System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    [NUnit.Framework.TestFixtureAttribute()]
    [NUnit.Framework.DescriptionAttribute("In order to not have to type the same scenario over and over\nAs a SpecFlow evange" +
        "list\nI want to show how to use ScenarioOutline")]
    public partial class ScenarioOutlineFeature
    {
        
        private static TechTalk.SpecFlow.ITestRunner testRunner;
        
#line 1 "ScenarioOutline.feature"
#line hidden
        
        [NUnit.Framework.TestFixtureSetUpAttribute()]
        public virtual void FeatureSetup()
        {
            testRunner = TechTalk.SpecFlow.TestRunnerManager.GetTestRunner();
            TechTalk.SpecFlow.FeatureInfo featureInfo = new TechTalk.SpecFlow.FeatureInfo(new System.Globalization.CultureInfo("en-US"), "Scenario outline", "In order to not have to type the same scenario over and over\nAs a SpecFlow evange" +
                    "list\nI want to show how to use ScenarioOutline", ProgrammingLanguage.CSharp, ((string[])(null)));
            testRunner.OnFeatureStart(featureInfo);
        }
        
        [NUnit.Framework.TestFixtureTearDownAttribute()]
        public virtual void FeatureTearDown()
        {
            testRunner.OnFeatureEnd();
            testRunner = null;
        }
        
        [NUnit.Framework.SetUpAttribute()]
        public virtual void TestInitialize()
        {
        }
        
        [NUnit.Framework.TearDownAttribute()]
        public virtual void ScenarioTearDown()
        {
            testRunner.OnScenarioEnd();
        }
        
        public virtual void ScenarioSetup(TechTalk.SpecFlow.ScenarioInfo scenarioInfo)
        {
            testRunner.OnScenarioStart(scenarioInfo);
        }
        
        public virtual void ScenarioCleanup()
        {
            testRunner.CollectScenarioErrors();
        }
        
        [NUnit.Framework.TestAttribute()]
        [NUnit.Framework.DescriptionAttribute("Add two positive numbers with many examples")]
        [NUnit.Framework.TestCaseAttribute("10", "20", "30", new string[0])]
        [NUnit.Framework.TestCaseAttribute("20", "20", "40", new string[0])]
        [NUnit.Framework.TestCaseAttribute("20", "30", "50", new string[0])]
        [NUnit.Framework.TestCaseAttribute("100", "20", "120", new string[0])]
        [NUnit.Framework.TestCaseAttribute("1000", "20", "1020", new string[0])]
        public virtual void AddTwoPositiveNumbersWithManyExamples(string number1, string number2, string result, string[] exampleTags)
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Add two positive numbers with many examples", exampleTags);
#line 8
this.ScenarioSetup(scenarioInfo);
#line 9
 testRunner.Given(string.Format("I have entered {0} into the calculator", number1));
#line 10
 testRunner.And(string.Format("I have entered {0} into the calculator", number2));
#line 11
 testRunner.When("I press add");
#line 12
 testRunner.Then(string.Format("the result should be {0} on the screen", result));
#line hidden
            this.ScenarioCleanup();
        }
    }
}
#endregion
