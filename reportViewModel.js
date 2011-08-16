var reportViewModel = [
  {
    "FileName": "BasicGherkin.feature",
    "Directory": "TestData.Specs\\TestData\\00BasicGherkin",
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Result": "Success",
    "Time": "0.848",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.339",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "the initial state of the application is Running"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I ask what the application state is"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "I should see Running as the answer"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Simple GWT",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.027",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "the initial state of the application is Running"
          },
          {
            "ScenarioBlock": 0,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "I have authorization to ask application state"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I ask what the application state is"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "I should see Running as the answer"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "I should see the time of the application"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 4,
            "Keyword": "But ",
            "Text": "the state of the application should not be Stopped"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Using And and But",
        "Description": ""
      }
    ],
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\00BasicGherkin\\BasicGherkin.feature",
    "Keyword": "Feature",
    "Title": "Showing basic gherkin syntax",
    "Description": "In order to see that gherkin is a very simple langauge\r\nAs a SpecFlow evangelist\r\nI want to show that basic syntax",
    "Comments": []
  },
  {
    "FileName": "Hooks.feature",
    "Directory": "TestData.Specs\\TestData\\02TagsAndHooks",
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Result": "Success",
    "Time": "0.071",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.009",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "the scenario is running"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the BeforeTestRun hook should have been executed"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Hooking into pre conditions for Test Runs in SpecFlow",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.009",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "the scenario is running"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the BeforeFeature hook should have been executed"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Hooking into pre conditions for Features in SpecFlow",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.009",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "the scenario is running"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the BeforeScenario hook should have been executed"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Hooking into pre conditions for Scenarios in SpecFlow",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.018",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "the scenario is running"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the BeforeScenarioBlock hook should have been executed"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Hooking into pre conditions for ScenarioBlocks in SpecFlow",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.009",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "the scenario is running"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the BeforeStep hook should have been executed"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Hooking into pre conditions for Steps in SpecFlow",
        "Description": ""
      }
    ],
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\02TagsAndHooks\\Hooks.feature",
    "Keyword": "Feature",
    "Title": "Addition",
    "Description": "In order to explain the order in which hooks are run\r\nAs a SpecFlow evanglist\r\nI wan to  be able to hook into pre and post conditions in SpecFlow",
    "Comments": []
  },
  {
    "FileName": "IgnoredFeature.feature",
    "Directory": "TestData.Specs\\TestData\\02TagsAndHooks",
    "Inconclusive": false,
    "Ignored": true,
    "Failed": false,
    "Success": false,
    "Result": "Ignored",
    "Time": "",
    "ScenarioList": [],
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
    "Comments": []
  },
  {
    "FileName": "TagDemo.feature",
    "Directory": "TestData.Specs\\TestData\\02TagsAndHooks",
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Result": "Success",
    "Time": "0.098",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": true,
        "Message": "",
        "Failed": false,
        "Success": false,
        "Result": "Ignored",
        "Time": "",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "that my scenario has the @ignore tag"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I run the scenario"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the scenario is ignored"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "the missing step definitions are not reported"
          }
        ],
        "Tags": [
          {
            "Name": "ignore"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Ignored scenario",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.009",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "that my scenario has 0 tags"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I run the scenario"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "before scenario hook with '' is run"
          }
        ],
        "Keyword": "Scenario",
        "Title": "A scenario without tags",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.036",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "that my scenario has 1 tags"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I run the scenario"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "before scenario hook with 'testTag1' is run"
          }
        ],
        "Tags": [
          {
            "Name": "testTag1"
          }
        ],
        "Keyword": "Scenario",
        "Title": "A scenario with 1 tag",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.009",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "that my scenario has 3 tags"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I run the scenario"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "before scenario hook with 'testTag1, testTag2, testTag3' is run"
          }
        ],
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
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.018",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "that my scenario has 2 tags"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I run the scenario"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "before scenario hook with 'testTag1, testTag3' is run"
          }
        ],
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
        "Description": ""
      }
    ],
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\02TagsAndHooks\\TagDemo.feature",
    "Keyword": "Feature",
    "Title": "Tag demonstrator",
    "Description": "In order to show the capabilities of tags in SpecFlow\r\nAs a SpecFlow evanglist\r\nI want to write scenarios that has tags and show their usage in code",
    "Comments": []
  },
  {
    "FileName": "ScenarioOutline.feature",
    "Directory": "TestData.Specs\\TestData\\03ScenarioOutline",
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Result": "Success",
    "Time": "0.143",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.027",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have entered <number 1> into the calculator"
          },
          {
            "ScenarioBlock": 0,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "I have entered <number 2> into the calculator"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I press add"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the result should be <result> on the screen"
          }
        ],
        "Keyword": "Scenario Outline",
        "Title": "Add two positive numbers with many examples",
        "Description": ""
      }
    ],
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\03ScenarioOutline\\ScenarioOutline.feature",
    "Keyword": "Feature",
    "Title": "Scenario outline",
    "Description": "In order to not have to type the same scenario over and over\r\nAs a SpecFlow evangelist\r\nI want to show how to use ScenarioOutline",
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
    "Inconclusive": false,
    "Ignored": false,
    "Failed": true,
    "Success": false,
    "Result": "Failure",
    "Time": "0.187",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.009",
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I store a person called Marcus in the Current ScenarioContext"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "a person called Marcus can easily be retrieved"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Store and retrive Person Marcus from ScenarioContext",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.054",
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I execute any scenario"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the ScenarioInfo contains the following information",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Field"
                  },
                  {
                    "Value": "Value"
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
                      "Value": "Tags"
                    },
                    {
                      "Value": "showUpInScenarioInfo, andThisToo"
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
                      "Value": "Title"
                    },
                    {
                      "Value": "Showing information of the scenario"
                    }
                  ],
                  "FilePosition": {
                    "Line": 16,
                    "Column": 3
                  }
                }
              ]
            }
          }
        ],
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
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.018",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have a Given step"
          },
          {
            "ScenarioBlock": 0,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "I have another Given step"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I have a When step"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "I have a Then step"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Show the type of step we're currently on",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "StackTrace": "at Specs._031ScenarioContext.ScenarioContextSteps.AnErrorOccurs() in C:\\Dev\\SpecFlow.DocCreator\\TestData.Specs\\TestData\\03ScenarioOutline\\031ScenarioContext\\ScenarioContextSteps.cs:line 61\nat lambda_method(Closure )\nat TechTalk.SpecFlow.Bindings.MethodBinding.InvokeAction(Object[] arguments, ITestTracer testTracer, TimeSpan& duration)\nat TechTalk.SpecFlow.TestRunner.ExecuteStepMatch(BindingMatch match, Object[] arguments)\nat TechTalk.SpecFlow.TestRunner.ExecuteStep(StepArgs stepArgs)\nat TechTalk.SpecFlow.TestRunner.CollectScenarioErrors()\nat Tests.TestData._03ScenarioOutline._031ScenarioContext.ScenarioContextFeaturesFeature.ScenarioCleanup() in C:\\Dev\\SpecFlow.DocCreator\\TestData.Specs\\TestData\\03ScenarioOutline\\031ScenarioContext\\ScenarioContext1.feature.cs:line 0\nat Tests.TestData._03ScenarioOutline._031ScenarioContext.ScenarioContextFeaturesFeature.DisplayErrorInformationInAfterScenario() in c:\\Dev\\SpecFlow.DocCreator\\TestData.Specs\\TestData\\03ScenarioOutline\\031ScenarioContext\\ScenarioContext.feature:line 27\n",
        "Message": "Should.Core.Exceptions.EqualException : Assert.Equal() Failure\nPosition: First difference is at position 0\nExpected: correct\nActual:   not correct",
        "Failed": true,
        "Success": false,
        "Result": "Error",
        "Time": "0.045",
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "an error occurs in a step"
          }
        ],
        "Tags": [
          {
            "Name": "showingErrorHandling"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Display error information in AfterScenario",
        "Description": ""
      },
      {
        "Inconclusive": true,
        "Ignored": false,
        "Message": "One or more step definitions are not implemented yet.\n  ScenarioContextSteps.WhenIHaveAPendingStep()",
        "Failed": false,
        "Success": false,
        "Result": "Inconclusive",
        "Time": "0.027",
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I set the ScenarioContext.Current to pending"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "this step will not even be executed"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Pending step",
        "Description": ""
      }
    ],
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\03ScenarioOutline\\031ScenarioContext\\ScenarioContext.feature",
    "Keyword": "Feature",
    "Title": "Scenario Context features",
    "Description": "In order to show how to use ScenarioContext\r\nAs a SpecFlow evangelist\r\nI want to write some simple scenarios with data in ScenarioContext",
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
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Result": "Success",
    "Time": "0.036",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.000",
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I store a person called Marcus in the current FeatureContext"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "a person called Marcus can easily be retrieved from the current FeatureContext"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Store and retrive Person Marcus from FeatureContext Current",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.018",
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I execute any scenario in the feature"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the FeatureInfo contains the following information",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Field"
                  },
                  {
                    "Value": "Value"
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
                      "Value": "Tags"
                    },
                    {
                      "Value": "showUpInScenarioInfo, andThisToo"
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
                      "Value": "Title"
                    },
                    {
                      "Value": "FeatureContext features"
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
                      "Value": "Language"
                    },
                    {
                      "Value": "en-US"
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
                      "Value": "Description"
                    },
                    {
                      "Value": "In order to"
                    }
                  ],
                  "FilePosition": {
                    "Line": 18,
                    "Column": 3
                  }
                }
              ]
            }
          }
        ],
        "Keyword": "Scenario",
        "Title": "Showing information of the feature",
        "Description": ""
      }
    ],
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
    "Comments": []
  },
  {
    "FileName": "BackgroundFeature.feature",
    "Directory": "TestData.Specs\\TestData\\04Background",
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Result": "Success",
    "Time": "0.071",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.018",
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I add 1 to the Sum-variable"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the total sum should be 2"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Add 1 to the sum",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.036",
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I add 2 to the Sum-variable"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the total sum should be 3"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Add 2 to the sum",
        "Description": ""
      }
    ],
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\04Background\\BackgroundFeature.feature",
    "Keyword": "Feature",
    "Title": "Show the use of background",
    "Description": "In order to show how to use the Background keyword of Gherkin\r\nAs a SpecFlow evanglist\r\nI want to show that background steps are called before any scenario step",
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
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Result": "Success",
    "Time": "0.098",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.009",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have the following persons",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name"
                  },
                  {
                    "Value": "Style"
                  },
                  {
                    "Value": "Birth date"
                  },
                  {
                    "Value": "Cred"
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
                      "Value": "Marcus"
                    },
                    {
                      "Value": "Cool"
                    },
                    {
                      "Value": "1972-10-09"
                    },
                    {
                      "Value": "50"
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
                      "Value": "Anders"
                    },
                    {
                      "Value": "Butch"
                    },
                    {
                      "Value": "1977-01-01"
                    },
                    {
                      "Value": "500"
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
                      "Value": "Jocke"
                    },
                    {
                      "Value": "Soft"
                    },
                    {
                      "Value": "1974-04-04"
                    },
                    {
                      "Value": "1000"
                    }
                  ],
                  "FilePosition": {
                    "Line": 11,
                    "Column": 3
                  }
                }
              ]
            }
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I search for Jocke"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the following person should be returned",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name"
                  },
                  {
                    "Value": "Style"
                  },
                  {
                    "Value": "Birth date"
                  },
                  {
                    "Value": "Cred"
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
                      "Value": "Jocke"
                    },
                    {
                      "Value": "Soft"
                    },
                    {
                      "Value": "1974-04-04"
                    },
                    {
                      "Value": "1000"
                    }
                  ],
                  "FilePosition": {
                    "Line": 15,
                    "Column": 3
                  }
                }
              ]
            }
          }
        ],
        "Keyword": "Scenario",
        "Title": "Using tables",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.009",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have the following persons using assist",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name"
                  },
                  {
                    "Value": "Style"
                  },
                  {
                    "Value": "Birth date"
                  },
                  {
                    "Value": "Cred"
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
                      "Value": "Marcus"
                    },
                    {
                      "Value": "Very cool"
                    },
                    {
                      "Value": "1972-10-09"
                    },
                    {
                      "Value": "50"
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
                      "Value": "Anders"
                    },
                    {
                      "Value": "Butch"
                    },
                    {
                      "Value": "1977-01-01"
                    },
                    {
                      "Value": "500"
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
                      "Value": "Jocke"
                    },
                    {
                      "Value": "Soft"
                    },
                    {
                      "Value": "1974-04-04"
                    },
                    {
                      "Value": "1000"
                    }
                  ],
                  "FilePosition": {
                    "Line": 22,
                    "Column": 3
                  }
                }
              ]
            }
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I search for Jocke"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the following person should be returned using assist",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name"
                  },
                  {
                    "Value": "Style"
                  },
                  {
                    "Value": "Birth date"
                  },
                  {
                    "Value": "Cred"
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
                      "Value": "Jocke"
                    },
                    {
                      "Value": "Soft"
                    },
                    {
                      "Value": "1974-04-04"
                    },
                    {
                      "Value": "1000"
                    }
                  ],
                  "FilePosition": {
                    "Line": 26,
                    "Column": 3
                  }
                }
              ]
            }
          }
        ],
        "Keyword": "Scenario",
        "Title": "Using tables with SpecFlow Assist",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.062",
        "StepList": [
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I fill out the form like this",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Field"
                  },
                  {
                    "Value": "Value"
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
                      "Value": "Name"
                    },
                    {
                      "Value": "Marcus"
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
                      "Value": "Style"
                    },
                    {
                      "Value": "very cool"
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
                      "Value": "Birth date"
                    },
                    {
                      "Value": "1972-10-09"
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
                      "Value": "Cred"
                    },
                    {
                      "Value": "100"
                    }
                  ],
                  "FilePosition": {
                    "Line": 34,
                    "Column": 3
                  }
                }
              ]
            }
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the following person should be returned using assist",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name"
                  },
                  {
                    "Value": "Style"
                  },
                  {
                    "Value": "Birth date"
                  },
                  {
                    "Value": "Cred"
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
                      "Value": "Marcus"
                    },
                    {
                      "Value": "Very cool"
                    },
                    {
                      "Value": "1972-10-09"
                    },
                    {
                      "Value": "1000"
                    }
                  ],
                  "FilePosition": {
                    "Line": 37,
                    "Column": 3
                  }
                }
              ]
            }
          }
        ],
        "Keyword": "Scenario",
        "Title": "Creating a entity from field value",
        "Description": ""
      }
    ],
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\05TablesAndAssist\\TableScenario.feature",
    "Keyword": "Feature",
    "Title": "Showing table usage",
    "Description": "In order to show how to use tables\r\nAs a SpecFlow evanglist\r\nI want to write some simple scenarios that uses tables tables",
    "Comments": []
  },
  {
    "FileName": "CompareTo.feature",
    "Directory": "TestData.Specs\\TestData\\06CompareToAssist",
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Result": "Success",
    "Time": "0.071",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.027",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have the following person",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Field"
                  },
                  {
                    "Value": "Value"
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
                      "Value": "Name"
                    },
                    {
                      "Value": "Marcus"
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
                      "Value": "Style"
                    },
                    {
                      "Value": "Butch"
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
                      "Value": "Birth date"
                    },
                    {
                      "Value": "1972-10-09"
                    }
                  ],
                  "FilePosition": {
                    "Line": 13,
                    "Column": 3
                  }
                }
              ]
            }
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "CompareToInstance should match this guy",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Field"
                  },
                  {
                    "Value": "Value"
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
                      "Value": "Name"
                    },
                    {
                      "Value": "Marcus"
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
                      "Value": "Style"
                    },
                    {
                      "Value": "Butch"
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
                      "Value": "BirthDate"
                    },
                    {
                      "Value": "10/9/1972 12:00:00 AM"
                    }
                  ],
                  "FilePosition": {
                    "Line": 18,
                    "Column": 3
                  }
                }
              ]
            }
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "CompareToInstance should match this guy",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Field"
                  },
                  {
                    "Value": "Value"
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
                      "Value": "Name"
                    },
                    {
                      "Value": "Marcus"
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
                      "Value": "BirthDate"
                    },
                    {
                      "Value": "10/9/1972 12:00:00 AM"
                    }
                  ],
                  "FilePosition": {
                    "Line": 22,
                    "Column": 3
                  }
                }
              ]
            }
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 4,
            "Keyword": "But ",
            "Text": "CompareToInstance should not match this guy",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Field"
                  },
                  {
                    "Value": "Value"
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
                      "Value": "Name"
                    },
                    {
                      "Value": "Anders"
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
                      "Value": "Style"
                    },
                    {
                      "Value": "very cool"
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
                      "Value": "BirthDate"
                    },
                    {
                      "Value": "10/9/1974 12:00:00 AM"
                    }
                  ],
                  "FilePosition": {
                    "Line": 27,
                    "Column": 3
                  }
                }
              ]
            }
          }
        ],
        "Keyword": "Scenario",
        "Title": "CompareToInstance",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.018",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have the following persons using assist",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name"
                  },
                  {
                    "Value": "Style"
                  },
                  {
                    "Value": "Birth date"
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
                      "Value": "Marcus"
                    },
                    {
                      "Value": "Cool"
                    },
                    {
                      "Value": "1972-10-09"
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
                      "Value": "Anders"
                    },
                    {
                      "Value": "Butch"
                    },
                    {
                      "Value": "1977-01-01"
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
                      "Value": "Jocke"
                    },
                    {
                      "Value": "Soft"
                    },
                    {
                      "Value": "1974-04-04"
                    }
                  ],
                  "FilePosition": {
                    "Line": 36,
                    "Column": 3
                  }
                }
              ]
            }
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "CompareToSet should match this",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name"
                  },
                  {
                    "Value": "Style"
                  },
                  {
                    "Value": "BirthDate"
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
                      "Value": "Marcus"
                    },
                    {
                      "Value": "Cool"
                    },
                    {
                      "Value": "10/9/1972 12:00:00 AM"
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
                      "Value": "Anders"
                    },
                    {
                      "Value": "Butch"
                    },
                    {
                      "Value": "1/1/1977 12:00:00 AM"
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
                      "Value": "Jocke"
                    },
                    {
                      "Value": "Soft"
                    },
                    {
                      "Value": "4/4/1974 12:00:00 AM"
                    }
                  ],
                  "FilePosition": {
                    "Line": 41,
                    "Column": 3
                  }
                }
              ]
            }
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 4,
            "Keyword": "But ",
            "Text": "CompareToSet should not match this",
            "TableArg": {
              "Header": {
                "Cells": [
                  {
                    "Value": "Name"
                  },
                  {
                    "Value": "Style"
                  },
                  {
                    "Value": "BirthDate"
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
                      "Value": "Marcus"
                    },
                    {
                      "Value": "Cool"
                    },
                    {
                      "Value": "10/9/1972 12:00:00 AM"
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
                      "Value": "Anders"
                    },
                    {
                      "Value": "Butch"
                    },
                    {
                      "Value": "1/1/1977 12:00:00 AM"
                    }
                  ],
                  "FilePosition": {
                    "Line": 45,
                    "Column": 3
                  }
                }
              ]
            }
          }
        ],
        "Keyword": "Scenario",
        "Title": "CompareToSet",
        "Description": ""
      }
    ],
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\06CompareToAssist\\CompareTo.feature",
    "Keyword": "Feature",
    "Title": "Show the compare to feature",
    "Description": "In order to show the compare to features of SpecFlow Assist\r\nAs a SpecFlow evanglist\r\nI want to show how the different versions of compareTo works",
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
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Result": "Success",
    "Time": "0.027",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.018",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Givet ",
            "Text": "att jag har knappat in 5"
          },
          {
            "ScenarioBlock": 0,
            "StepKeyword": 3,
            "Keyword": "Och ",
            "Text": "att jag har knappat in 7"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "När ",
            "Text": "jag summerar"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Så ",
            "Text": "ska resultatet vara 12"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Summera 5 och 7 ska vara 12",
        "Description": ""
      }
    ],
    "Language": "sv-SE",
    "SourceFile": "TestData.Specs\\TestData\\07Svenska\\Svenska.feature",
    "Keyword": "Egenskap",
    "Title": "Summering",
    "Description": "För att slippa att göra dumma fel\r\nSom räknare\r\nVill jag kunna lägga summera",
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
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Result": "Success",
    "Time": "0.045",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.027",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have this simple step"
          },
          {
            "ScenarioBlock": 0,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "this simple step"
          },
          {
            "ScenarioBlock": 0,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "also this step"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I do something"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "I could validate that the number 2 is even"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "that the number 4 is even"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 4,
            "Keyword": "But ",
            "Text": "the number 3 is odd"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Checking number for evenness",
        "Description": ""
      }
    ],
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\08AttributeOverloading\\AttributeOverloading.feature",
    "Keyword": "Feature",
    "Title": "Attribute overloading",
    "Description": "In order to show that steps can be used with multiple attributes\r\nAs a SpecFlow Evangelist\r\nI want to show that similar attributes can be applied to the same step definition",
    "Comments": []
  },
  {
    "FileName": "CallingStepsFromSteps.feature",
    "Directory": "TestData.Specs\\TestData\\09CallingStepsFromSteps",
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Result": "Success",
    "Time": "0.054",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.018",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I am on the index page"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I enter my unsername nad password"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "I click the login button"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the welcome page should be displayed"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Log in",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.027",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I am logged in"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I dosomething meaningful"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "I should get rewarded"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Do something meaningful",
        "Description": ""
      }
    ],
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\09CallingStepsFromSteps\\CallingStepsFromSteps.feature",
    "Keyword": "Feature",
    "Title": "Calling Steps from StepDefinitions",
    "Description": "In order to create steps of a higher abstraction\r\nAs a SpecFlow evangelist\r\nI want reuse other steps in my step definitions",
    "Comments": []
  },
  {
    "FileName": "StepTransformation.feature",
    "Directory": "TestData.Specs\\TestData\\10StepTransformation",
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Result": "Success",
    "Time": "0.027",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.027",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "Dan has been registered at date 2003/03/13"
          },
          {
            "ScenarioBlock": 0,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "Aslak has been registered at terminal 2"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "I should be able to see Aslak at terminal 2"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Steps with non-string arguments",
        "Description": ""
      }
    ],
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\10StepTransformation\\StepTransformation.feature",
    "Keyword": "Feature",
    "Title": "Step Argument Transformations",
    "Description": "In order to reduce the amount of code and repetitive tasks in my steps\r\nAs a SpecFlow evanglist\r\nI want to define reusable transformations for my step arguments",
    "Comments": []
  },
  {
    "FileName": "ContextInjection.feature",
    "Directory": "TestData.Specs\\TestData\\11ContextInjection",
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Result": "Success",
    "Time": "0.107",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.009",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "a feature which requires no context"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "everything is dandy"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Feature with no context",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.018",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "a feature which requires a single context"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the context is set"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Feature with a single context",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.009",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "a feature which requires multiple contexts"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the contexts are set"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Feature with multiple contexts",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.018",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "a feature which requires a recursive context"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the context is set"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "its sub-context is set"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Feature with recursive contexts",
        "Description": ""
      },
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.009",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "a feature which requires a single context"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the context is set"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 3,
            "Keyword": "And ",
            "Text": "the context was created by the feature with a single context scenario"
          }
        ],
        "Keyword": "Scenario",
        "Title": "Feature with a dependent context",
        "Description": ""
      }
    ],
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\11ContextInjection\\ContextInjection.feature",
    "Keyword": "Feature",
    "Title": "Injecting context into step specifications",
    "Description": "In order to don't have to rely on the global shared state\r\nand to be able to define the contexts required for each scenario.\r\nAs a SpecFlow Evanglist\r\nI would like to have the system automatically inject an instance of any class as \r\ndefined in the constructor of a step file",
    "Comments": []
  },
  {
    "FileName": "TestRunnerIsNotImportant.feature",
    "Directory": "TestData.Specs\\TestData\\Iteration1\\TestType1\\Important\\01TestRunner",
    "Inconclusive": false,
    "Ignored": false,
    "Failed": false,
    "Success": true,
    "Result": "Success",
    "Time": "0.018",
    "ScenarioList": [
      {
        "Inconclusive": false,
        "Ignored": false,
        "Failed": false,
        "Success": true,
        "Result": "Success",
        "Time": "0.009",
        "StepList": [
          {
            "ScenarioBlock": 0,
            "StepKeyword": 0,
            "Keyword": "Given ",
            "Text": "I have step defintions in place"
          },
          {
            "ScenarioBlock": 1,
            "StepKeyword": 1,
            "Keyword": "When ",
            "Text": "I call a step"
          },
          {
            "ScenarioBlock": 2,
            "StepKeyword": 2,
            "Keyword": "Then ",
            "Text": "the step should have been called"
          }
        ],
        "Keyword": "Scenario",
        "Title": "A couple of simple steps",
        "Description": ""
      }
    ],
    "Language": "en-US",
    "SourceFile": "TestData.Specs\\TestData\\Iteration1\\TestType1\\Important\\01TestRunner\\TestRunnerIsNotImportant.feature",
    "Keyword": "Feature",
    "Title": "The test runner is not (very) important",
    "Description": "In order to show that the test runner is just for the autogenerated stuff in SpecFlow\r\nAs a SpecFlow evanglist\r\nI want to be able to call my steps in the same manner inspite of the testrunner configured",
    "Comments": []
  }
];