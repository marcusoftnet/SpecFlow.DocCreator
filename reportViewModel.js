var reportViewModel = [
  {
    "FileName": "BasicGherkin.feature",
    "Directory": "TestData.Specs\\TestData\\00BasicGherkin",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "the initial state of the application is Running",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I ask what the application state is",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "I should see Running as the answer",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Simple GWT",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "the initial state of the application is Running",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 0,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "I have authorization to ask application state",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I ask what the application state is",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "I should see Running as the answer",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "I should see the time of the application",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 4,
            "Keyword": "But ",
            "Text": "the state of the application should not be Stopped",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Using And and But",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\00BasicGherkin\\BasicGherkin.feature",
    "Tags": null,
    "Keyword": "Feature",
    "Title": "Showing basic gherkin syntax",
    "Description": "In order to see that gherkin is a very simple langauge\r\nAs a SpecFlow evangelist\r\nI want to show that basic syntax",
    "FilePosition": null,
    "Background": null,
    "Comments": []
  },
  {
    "FileName": "Hooks.feature",
    "Directory": "TestData.Specs\\TestData\\02TagsAndHooks",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "the scenario is running",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the BeforeTestRun hook should have been executed",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Hooking into pre conditions for Test Runs in SpecFlow",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "the scenario is running",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the BeforeFeature hook should have been executed",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Hooking into pre conditions for Features in SpecFlow",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "the scenario is running",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the BeforeScenario hook should have been executed",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Hooking into pre conditions for Scenarios in SpecFlow",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "the scenario is running",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the BeforeScenarioBlock hook should have been executed",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Hooking into pre conditions for ScenarioBlocks in SpecFlow",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "the scenario is running",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the BeforeStep hook should have been executed",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Hooking into pre conditions for Steps in SpecFlow",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\02TagsAndHooks\\Hooks.feature",
    "Tags": null,
    "Keyword": "Feature",
    "Title": "Addition",
    "Description": "In order to explain the order in which hooks are run\r\nAs a SpecFlow evanglist\r\nI wan to  be able to hook into pre and post conditions in SpecFlow",
    "FilePosition": null,
    "Background": null,
    "Comments": []
  },
  {
    "FileName": "IgnoredFeature.feature",
    "Directory": "TestData.Specs\\TestData\\02TagsAndHooks",
    "ScenarioList": [],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": true,
    "Failed": false,
    "Success": false,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\02TagsAndHooks\\IgnoredFeature.feature",
    "Tags": [
      {
        "Name": "ignore"
      }
    ],
    "Keyword": "Feature",
    "Title": "Ignoring whole feature",
    "Description": "In order to show the capabilities of ignore tags in SpecFlow\r\nAs a SpecFlow evanglist\r\nI want to write a feature that is ignored all thogether",
    "FilePosition": null,
    "Background": null,
    "Comments": []
  },
  {
    "FileName": "TagDemo.feature",
    "Directory": "TestData.Specs\\TestData\\02TagsAndHooks",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": true,
        "StackTrace": null,
        "Message": "",
        "Failed": false,
        "Success": false,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "that my scenario has the @ignore tag",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I run the scenario",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the scenario is ignored",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "the missing step definitions are not reported",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": [
          {
            "Name": "ignore"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Ignored scenario",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "that my scenario has 0 tags",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I run the scenario",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "before scenario hook with '' is run",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "A scenario without tags",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "that my scenario has 1 tags",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I run the scenario",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "before scenario hook with 'testTag1' is run",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": [
          {
            "Name": "testTag1"
          }
        ],
        "Keyword": "Scenario",
        "Title": "A scenario with 1 tag",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "that my scenario has 3 tags",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I run the scenario",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "before scenario hook with 'testTag1, testTag2, testTag3' is run",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": [
          {
            "Name": "testTag1"
          },
          {
            "Name": "testTag2"
          },
          {
            "Name": "testTag3"
          }
        ],
        "Keyword": "Scenario",
        "Title": "A scenario with 3 tags",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "that my scenario has 2 tags",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I run the scenario",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "before scenario hook with 'testTag1, testTag3' is run",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": [
          {
            "Name": "testTag1"
          },
          {
            "Name": "testTag3"
          }
        ],
        "Keyword": "Scenario",
        "Title": "A scenario with 2 tags",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\02TagsAndHooks\\TagDemo.feature",
    "Tags": null,
    "Keyword": "Feature",
    "Title": "Tag demonstrator",
    "Description": "In order to show the capabilities of tags in SpecFlow\r\nAs a SpecFlow evanglist\r\nI want to write scenarios that has tags and show their usage in code",
    "FilePosition": null,
    "Background": null,
    "Comments": []
  },
  {
    "FileName": "ScenarioOutline.feature",
    "Directory": "TestData.Specs\\TestData\\03ScenarioOutline",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have entered <number 1> into the calculator",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 0,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "I have entered <number 2> into the calculator",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I press add",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the result should be <result> on the screen",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario Outline",
        "Title": "Add two positive numbers with many examples",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\03ScenarioOutline\\ScenarioOutline.feature",
    "Tags": null,
    "Keyword": "Feature",
    "Title": "Scenario outline",
    "Description": "In order to not have to type the same scenario over and over\r\nAs a SpecFlow evangelist\r\nI want to show how to use ScenarioOutline",
    "FilePosition": null,
    "Background": null,
    "Comments": [
      {
        "Text": "This is called Abstrakt Scenario in Swedish (!!!)",
        "FilePosition": {
          "Line": 7,
          "Column": 3
        }
      }
    ]
  },
  {
    "FileName": "ScenarioContext.feature",
    "Directory": "TestData.Specs\\TestData\\03ScenarioOutline\\031ScenarioContext",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I store a person called Marcus in the Current ScenarioContext",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "a person called Marcus can easily be retrieved",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Store and retrive Person Marcus from ScenarioContext",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I execute any scenario",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the ScenarioInfo contains the following information",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Field",
                    "FilePosition": null
                  },
                  {
                    "Value": "Value",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 14,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Tags",
                      "FilePosition": null
                    },
                    {
                      "Value": "showUpInScenarioInfo, andThisToo",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 15,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Title",
                      "FilePosition": null
                    },
                    {
                      "Value": "Showing information of the scenario",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 16,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": [
          {
            "Name": "showUpInScenarioInfo"
          },
          {
            "Name": "andThisToo"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Showing information of the scenario",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have a Given step",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 0,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "I have another Given step",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I have a When step",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "I have a Then step",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Show the type of step we're currently on",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": "at Specs._031ScenarioContext.ScenarioContextSteps.AnErrorOccurs() in C:\\Dev\\SpecFlow.DocCreator\\TestData.Specs\\TestData\\03ScenarioOutline\\031ScenarioContext\\ScenarioContextSteps.cs:line 61\nat lambda_method(Closure )\nat TechTalk.SpecFlow.Bindings.MethodBinding.InvokeAction(Object[] arguments, ITestTracer testTracer, TimeSpan& duration)\nat TechTalk.SpecFlow.TestRunner.ExecuteStepMatch(BindingMatch match, Object[] arguments)\nat TechTalk.SpecFlow.TestRunner.ExecuteStep(StepArgs stepArgs)\nat TechTalk.SpecFlow.TestRunner.CollectScenarioErrors()\nat Tests.TestData._03ScenarioOutline._031ScenarioContext.ScenarioContextFeaturesFeature.ScenarioCleanup() in C:\\Dev\\SpecFlow.DocCreator\\TestData.Specs\\TestData\\03ScenarioOutline\\031ScenarioContext\\ScenarioContext1.feature.cs:line 0\nat Tests.TestData._03ScenarioOutline._031ScenarioContext.ScenarioContextFeaturesFeature.DisplayErrorInformationInAfterScenario() in c:\\Dev\\SpecFlow.DocCreator\\TestData.Specs\\TestData\\03ScenarioOutline\\031ScenarioContext\\ScenarioContext.feature:line 27\n",
        "Message": "Should.Core.Exceptions.EqualException : Assert.Equal() Failure\nPosition: First difference is at position 0\nExpected: correct\nActual:   not correct",
        "Failed": true,
        "Success": false,
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "an error occurs in a step",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": [
          {
            "Name": "showingErrorHandling"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Display error information in AfterScenario",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": true,
        "Ignored": false,
        "StackTrace": null,
        "Message": "One or more step definitions are not implemented yet.\n  ScenarioContextSteps.WhenIHaveAPendingStep()",
        "Failed": false,
        "Success": false,
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I set the ScenarioContext.Current to pending",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "this step will not even be executed",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Pending step",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": true,
    "Success": false,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\03ScenarioOutline\\031ScenarioContext\\ScenarioContext.feature",
    "Tags": null,
    "Keyword": "Feature",
    "Title": "Scenario Context features",
    "Description": "In order to show how to use ScenarioContext\r\nAs a SpecFlow evangelist\r\nI want to write some simple scenarios with data in ScenarioContext",
    "FilePosition": null,
    "Background": null,
    "Comments": [
      {
        "Text": "This is not so easy to write a scenario for but I've created an AfterScenario-hook",
        "FilePosition": {
          "Line": 24,
          "Column": 2
        }
      }
    ]
  },
  {
    "FileName": "FeatureContextFeatures.feature",
    "Directory": "TestData.Specs\\TestData\\03ScenarioOutline\\032FeatureContext",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I store a person called Marcus in the current FeatureContext",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "a person called Marcus can easily be retrieved from the current FeatureContext",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Store and retrive Person Marcus from FeatureContext Current",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I execute any scenario in the feature",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the FeatureInfo contains the following information",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Field",
                    "FilePosition": null
                  },
                  {
                    "Value": "Value",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 14,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Tags",
                      "FilePosition": null
                    },
                    {
                      "Value": "showUpInScenarioInfo, andThisToo",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 15,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Title",
                      "FilePosition": null
                    },
                    {
                      "Value": "FeatureContext features",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 16,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Language",
                      "FilePosition": null
                    },
                    {
                      "Value": "en-US",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 17,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Description",
                      "FilePosition": null
                    },
                    {
                      "Value": "In order to",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 18,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Showing information of the feature",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\03ScenarioOutline\\032FeatureContext\\FeatureContextFeatures.feature",
    "Tags": [
      {
        "Name": "showUpInScenarioInfo"
      },
      {
        "Name": "andThisToo"
      }
    ],
    "Keyword": "Feature",
    "Title": "FeatureContext features",
    "Description": "In order to show how to use FeatureContext\r\nAs a SpecFlow evangelist\r\nI want to write some simple scenarios with data in FeatureContext",
    "FilePosition": null,
    "Background": null,
    "Comments": []
  },
  {
    "FileName": "BackgroundFeature.feature",
    "Directory": "TestData.Specs\\TestData\\04Background",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I add 1 to the Sum-variable",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the total sum should be 2",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Add 1 to the sum",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I add 2 to the Sum-variable",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the total sum should be 3",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Add 2 to the sum",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\04Background\\BackgroundFeature.feature",
    "Tags": null,
    "Keyword": "Feature",
    "Title": "Show the use of background",
    "Description": "In order to show how to use the Background keyword of Gherkin\r\nAs a SpecFlow evanglist\r\nI want to show that background steps are called before any scenario step",
    "FilePosition": null,
    "Background": {
      "Keyword": "Background",
      "Title": "",
      "Description": "",
      "Steps": [
        {
          "ScenarioBlock": 0,
          "StepKeyword": 0,
          "Keyword": "Given ",
          "Text": "I have initialized the Sum-variable to 0",
          "MultiLineTextArgument": null,
          "TableArg": null,
          "FilePosition": {
            "Line": 7,
            "Column": 2
          }
        },
        {
          "ScenarioBlock": 1,
          "StepKeyword": 1,
          "Keyword": "When ",
          "Text": "I add 1 to the Sum-variable",
          "MultiLineTextArgument": null,
          "TableArg": null,
          "FilePosition": {
            "Line": 8,
            "Column": 2
          }
        }
      ],
      "FilePosition": {
        "Line": 6,
        "Column": 1
      }
    },
    "Comments": []
  },
  {
    "FileName": "TableScenario.feature",
    "Directory": "TestData.Specs\\TestData\\05TablesAndAssist",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have the following persons",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name",
                    "FilePosition": null
                  },
                  {
                    "Value": "Style",
                    "FilePosition": null
                  },
                  {
                    "Value": "Birth date",
                    "FilePosition": null
                  },
                  {
                    "Value": "Cred",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 8,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Marcus",
                      "FilePosition": null
                    },
                    {
                      "Value": "Cool",
                      "FilePosition": null
                    },
                    {
                      "Value": "1972-10-09",
                      "FilePosition": null
                    },
                    {
                      "Value": "50",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 9,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Anders",
                      "FilePosition": null
                    },
                    {
                      "Value": "Butch",
                      "FilePosition": null
                    },
                    {
                      "Value": "1977-01-01",
                      "FilePosition": null
                    },
                    {
                      "Value": "500",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 10,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Jocke",
                      "FilePosition": null
                    },
                    {
                      "Value": "Soft",
                      "FilePosition": null
                    },
                    {
                      "Value": "1974-04-04",
                      "FilePosition": null
                    },
                    {
                      "Value": "1000",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 11,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I search for Jocke",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the following person should be returned",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name",
                    "FilePosition": null
                  },
                  {
                    "Value": "Style",
                    "FilePosition": null
                  },
                  {
                    "Value": "Birth date",
                    "FilePosition": null
                  },
                  {
                    "Value": "Cred",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 14,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Jocke",
                      "FilePosition": null
                    },
                    {
                      "Value": "Soft",
                      "FilePosition": null
                    },
                    {
                      "Value": "1974-04-04",
                      "FilePosition": null
                    },
                    {
                      "Value": "1000",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 15,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Using tables",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have the following persons using assist",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name",
                    "FilePosition": null
                  },
                  {
                    "Value": "Style",
                    "FilePosition": null
                  },
                  {
                    "Value": "Birth date",
                    "FilePosition": null
                  },
                  {
                    "Value": "Cred",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 19,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Marcus",
                      "FilePosition": null
                    },
                    {
                      "Value": "Very cool",
                      "FilePosition": null
                    },
                    {
                      "Value": "1972-10-09",
                      "FilePosition": null
                    },
                    {
                      "Value": "50",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 20,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Anders",
                      "FilePosition": null
                    },
                    {
                      "Value": "Butch",
                      "FilePosition": null
                    },
                    {
                      "Value": "1977-01-01",
                      "FilePosition": null
                    },
                    {
                      "Value": "500",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 21,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Jocke",
                      "FilePosition": null
                    },
                    {
                      "Value": "Soft",
                      "FilePosition": null
                    },
                    {
                      "Value": "1974-04-04",
                      "FilePosition": null
                    },
                    {
                      "Value": "1000",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 22,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I search for Jocke",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the following person should be returned using assist",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name",
                    "FilePosition": null
                  },
                  {
                    "Value": "Style",
                    "FilePosition": null
                  },
                  {
                    "Value": "Birth date",
                    "FilePosition": null
                  },
                  {
                    "Value": "Cred",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 25,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Jocke",
                      "FilePosition": null
                    },
                    {
                      "Value": "Soft",
                      "FilePosition": null
                    },
                    {
                      "Value": "1974-04-04",
                      "FilePosition": null
                    },
                    {
                      "Value": "1000",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 26,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Using tables with SpecFlow Assist",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I fill out the form like this",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Field",
                    "FilePosition": null
                  },
                  {
                    "Value": "Value",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 30,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Name",
                      "FilePosition": null
                    },
                    {
                      "Value": "Marcus",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 31,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Style",
                      "FilePosition": null
                    },
                    {
                      "Value": "very cool",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 32,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Birth date",
                      "FilePosition": null
                    },
                    {
                      "Value": "1972-10-09",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 33,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Cred",
                      "FilePosition": null
                    },
                    {
                      "Value": "100",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 34,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the following person should be returned using assist",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name",
                    "FilePosition": null
                  },
                  {
                    "Value": "Style",
                    "FilePosition": null
                  },
                  {
                    "Value": "Birth date",
                    "FilePosition": null
                  },
                  {
                    "Value": "Cred",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 36,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Marcus",
                      "FilePosition": null
                    },
                    {
                      "Value": "Very cool",
                      "FilePosition": null
                    },
                    {
                      "Value": "1972-10-09",
                      "FilePosition": null
                    },
                    {
                      "Value": "1000",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 37,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Creating a entity from field value",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\05TablesAndAssist\\TableScenario.feature",
    "Tags": null,
    "Keyword": "Feature",
    "Title": "Showing table usage",
    "Description": "In order to show how to use tables\r\nAs a SpecFlow evanglist\r\nI want to write some simple scenarios that uses tables tables",
    "FilePosition": null,
    "Background": null,
    "Comments": []
  },
  {
    "FileName": "CompareTo.feature",
    "Directory": "TestData.Specs\\TestData\\06CompareToAssist",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have the following person",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Field",
                    "FilePosition": null
                  },
                  {
                    "Value": "Value",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 10,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Name",
                      "FilePosition": null
                    },
                    {
                      "Value": "Marcus",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 11,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Style",
                      "FilePosition": null
                    },
                    {
                      "Value": "Butch",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 12,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Birth date",
                      "FilePosition": null
                    },
                    {
                      "Value": "1972-10-09",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 13,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "CompareToInstance should match this guy",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Field",
                    "FilePosition": null
                  },
                  {
                    "Value": "Value",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 15,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Name",
                      "FilePosition": null
                    },
                    {
                      "Value": "Marcus",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 16,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Style",
                      "FilePosition": null
                    },
                    {
                      "Value": "Butch",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 17,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "BirthDate",
                      "FilePosition": null
                    },
                    {
                      "Value": "10/9/1972 12:00:00 AM",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 18,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "CompareToInstance should match this guy",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Field",
                    "FilePosition": null
                  },
                  {
                    "Value": "Value",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 20,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Name",
                      "FilePosition": null
                    },
                    {
                      "Value": "Marcus",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 21,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "BirthDate",
                      "FilePosition": null
                    },
                    {
                      "Value": "10/9/1972 12:00:00 AM",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 22,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 4,
            "Keyword": "But ",
            "Text": "CompareToInstance should not match this guy",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Field",
                    "FilePosition": null
                  },
                  {
                    "Value": "Value",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 24,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Name",
                      "FilePosition": null
                    },
                    {
                      "Value": "Anders",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 25,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Style",
                      "FilePosition": null
                    },
                    {
                      "Value": "very cool",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 26,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "BirthDate",
                      "FilePosition": null
                    },
                    {
                      "Value": "10/9/1974 12:00:00 AM",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 27,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "CompareToInstance",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have the following persons using assist",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name",
                    "FilePosition": null
                  },
                  {
                    "Value": "Style",
                    "FilePosition": null
                  },
                  {
                    "Value": "Birth date",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 33,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Marcus",
                      "FilePosition": null
                    },
                    {
                      "Value": "Cool",
                      "FilePosition": null
                    },
                    {
                      "Value": "1972-10-09",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 34,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Anders",
                      "FilePosition": null
                    },
                    {
                      "Value": "Butch",
                      "FilePosition": null
                    },
                    {
                      "Value": "1977-01-01",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 35,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Jocke",
                      "FilePosition": null
                    },
                    {
                      "Value": "Soft",
                      "FilePosition": null
                    },
                    {
                      "Value": "1974-04-04",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 36,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "CompareToSet should match this",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name",
                    "FilePosition": null
                  },
                  {
                    "Value": "Style",
                    "FilePosition": null
                  },
                  {
                    "Value": "BirthDate",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 38,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Marcus",
                      "FilePosition": null
                    },
                    {
                      "Value": "Cool",
                      "FilePosition": null
                    },
                    {
                      "Value": "10/9/1972 12:00:00 AM",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 39,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Anders",
                      "FilePosition": null
                    },
                    {
                      "Value": "Butch",
                      "FilePosition": null
                    },
                    {
                      "Value": "1/1/1977 12:00:00 AM",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 40,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Jocke",
                      "FilePosition": null
                    },
                    {
                      "Value": "Soft",
                      "FilePosition": null
                    },
                    {
                      "Value": "4/4/1974 12:00:00 AM",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 41,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 4,
            "Keyword": "But ",
            "Text": "CompareToSet should not match this",
            "MultiLineTextArgument": null,
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name",
                    "FilePosition": null
                  },
                  {
                    "Value": "Style",
                    "FilePosition": null
                  },
                  {
                    "Value": "BirthDate",
                    "FilePosition": null
                  }
                ],
                "FilePosition": {
                  "Line": 43,
                  "Column": 3
                }
              },
              "Body": [
                {
                  "Cells": [
                    {
                      "Value": "Marcus",
                      "FilePosition": null
                    },
                    {
                      "Value": "Cool",
                      "FilePosition": null
                    },
                    {
                      "Value": "10/9/1972 12:00:00 AM",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 44,
                    "Column": 3
                  }
                },
                {
                  "Cells": [
                    {
                      "Value": "Anders",
                      "FilePosition": null
                    },
                    {
                      "Value": "Butch",
                      "FilePosition": null
                    },
                    {
                      "Value": "1/1/1977 12:00:00 AM",
                      "FilePosition": null
                    }
                  ],
                  "FilePosition": {
                    "Line": 45,
                    "Column": 3
                  }
                }
              ]
            },
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "CompareToSet",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\06CompareToAssist\\CompareTo.feature",
    "Tags": null,
    "Keyword": "Feature",
    "Title": "Show the compare to feature",
    "Description": "In order to show the compare to features of SpecFlow Assist\r\nAs a SpecFlow evanglist\r\nI want to show how the different versions of compareTo works",
    "FilePosition": null,
    "Background": null,
    "Comments": [
      {
        "Text": "Yes - this is a bug with the date format...",
        "FilePosition": {
          "Line": 7,
          "Column": 2
        }
      },
      {
        "Text": "CompareToSet will test only the properties that you define in the table.",
        "FilePosition": {
          "Line": 29,
          "Column": 3
        }
      },
      {
        "Text": "CompareToSet does not test the order of the objects, only that one was found that matches",
        "FilePosition": {
          "Line": 30,
          "Column": 3
        }
      }
    ]
  },
  {
    "FileName": "Svenska.feature",
    "Directory": "TestData.Specs\\TestData\\07Svenska",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Givet ",
            "Text": "att jag har knappat in 5",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 0,
            "StepKeyword": 3,
            "Keyword": "Och ",
            "Text": "att jag har knappat in 7",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "När ",
            "Text": "jag summerar",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Så ",
            "Text": "ska resultatet vara 12",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Summera 5 och 7 ska vara 12",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Language": "sv-SE",
    "SourceFile": "TestData.Specs\\TestData\\07Svenska\\Svenska.feature",
    "Tags": null,
    "Keyword": "Egenskap",
    "Title": "Summering",
    "Description": "För att slippa att göra dumma fel\r\nSom räknare\r\nVill jag kunna lägga summera",
    "FilePosition": null,
    "Background": null,
    "Comments": [
      {
        "Text": "you could also use app.config -> <specflow><language feature=\"sv\" /></specflow>",
        "FilePosition": {
          "Line": 2,
          "Column": 3
        }
      },
      {
        "Text": "to get swedish (for example) through all your features",
        "FilePosition": {
          "Line": 3,
          "Column": 3
        }
      }
    ]
  },
  {
    "FileName": "AttributeOverloading.feature",
    "Directory": "TestData.Specs\\TestData\\08AttributeOverloading",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have this simple step",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 0,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "this simple step",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 0,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "also this step",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I do something",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "I could validate that the number 2 is even",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "that the number 4 is even",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 4,
            "Keyword": "But ",
            "Text": "the number 3 is odd",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Checking number for evenness",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\08AttributeOverloading\\AttributeOverloading.feature",
    "Tags": null,
    "Keyword": "Feature",
    "Title": "Attribute overloading",
    "Description": "In order to show that steps can be used with multiple attributes\r\nAs a SpecFlow Evangelist\r\nI want to show that similar attributes can be applied to the same step definition",
    "FilePosition": null,
    "Background": null,
    "Comments": []
  },
  {
    "FileName": "CallingStepsFromSteps.feature",
    "Directory": "TestData.Specs\\TestData\\09CallingStepsFromSteps",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I am on the index page",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I enter my unsername nad password",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "I click the login button",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the welcome page should be displayed",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Log in",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I am logged in",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I dosomething meaningful",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "I should get rewarded",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Do something meaningful",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\09CallingStepsFromSteps\\CallingStepsFromSteps.feature",
    "Tags": null,
    "Keyword": "Feature",
    "Title": "Calling Steps from StepDefinitions",
    "Description": "In order to create steps of a higher abstraction\r\nAs a SpecFlow evangelist\r\nI want reuse other steps in my step definitions",
    "FilePosition": null,
    "Background": null,
    "Comments": []
  },
  {
    "FileName": "StepTransformation.feature",
    "Directory": "TestData.Specs\\TestData\\10StepTransformation",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "Dan has been registered at date 2003/03/13",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 0,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "Aslak has been registered at terminal 2",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "I should be able to see Aslak at terminal 2",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Steps with non-string arguments",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\10StepTransformation\\StepTransformation.feature",
    "Tags": null,
    "Keyword": "Feature",
    "Title": "Step Argument Transformations",
    "Description": "In order to reduce the amount of code and repetitive tasks in my steps\r\nAs a SpecFlow evanglist\r\nI want to define reusable transformations for my step arguments",
    "FilePosition": null,
    "Background": null,
    "Comments": []
  },
  {
    "FileName": "ContextInjection.feature",
    "Directory": "TestData.Specs\\TestData\\11ContextInjection",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "a feature which requires no context",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "everything is dandy",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Feature with no context",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "a feature which requires a single context",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the context is set",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Feature with a single context",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "a feature which requires multiple contexts",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the contexts are set",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Feature with multiple contexts",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "a feature which requires a recursive context",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the context is set",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "its sub-context is set",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Feature with recursive contexts",
        "Description": "",
        "FilePosition": null
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "a feature which requires a single context",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the context is set",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "the context was created by the feature with a single context scenario",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "Feature with a dependent context",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\11ContextInjection\\ContextInjection.feature",
    "Tags": null,
    "Keyword": "Feature",
    "Title": "Injecting context into step specifications",
    "Description": "In order to don't have to rely on the global shared state\r\nand to be able to define the contexts required for each scenario.\r\nAs a SpecFlow Evanglist\r\nI would like to have the system automatically inject an instance of any class as \r\ndefined in the constructor of a step file",
    "FilePosition": null,
    "Background": null,
    "Comments": []
  },
  {
    "FileName": "TestRunnerIsNotImportant.feature",
    "Directory": "TestData.Specs\\TestData\\Iteration1\\TestType1\\Important\\01TestRunner",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": null,
        "Message": null,
        "Failed": false,
        "Success": true,
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have step defintions in place",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I call a step",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the step should have been called",
            "MultiLineTextArgument": null,
            "TableArg": null,
            "FilePosition": null
          }
        ],
        "Steps": null,
        "Tags": null,
        "Keyword": "Scenario",
        "Title": "A couple of simple steps",
        "Description": "",
        "FilePosition": null
      }
    ],
    "Scenarios": null,
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\Iteration1\\TestType1\\Important\\01TestRunner\\TestRunnerIsNotImportant.feature",
    "Tags": null,
    "Keyword": "Feature",
    "Title": "The test runner is not (very) important",
    "Description": "In order to show that the test runner is just for the autogenerated stuff in SpecFlow\r\nAs a SpecFlow evanglist\r\nI want to be able to call my steps in the same manner inspite of the testrunner configured",
    "FilePosition": null,
    "Background": null,
    "Comments": []
  }
];