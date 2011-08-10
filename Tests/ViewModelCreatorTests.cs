using System.Collections.Generic;
using NUnit.Framework;
using Should.Fluent;
using SpecFlowDocCreator.Services;

namespace Tests
{
    [TestFixture]
    public class JsonReportViewModelCreatorCreatorTests
    {
        private TestClassToJSonify objectToJSONify;
        private IJsonReportViewModelCreator jsonCreator;

        [TestFixtureSetUp]
        public void Setup()
        {
            objectToJSONify = new TestClassToJSonify
                                   {
                                       Title = "Level 1",
                                       list = new List<TestClassToJSonify>
                                                  {
                                                      new TestClassToJSonify
                                                          {
                                                              Title = "Level 2",
                                                              list = new List<TestClassToJSonify>
                                                                         {new TestClassToJSonify {Title = "Level 3"}}
                                                          },
                                                      new TestClassToJSonify
                                                          {
                                                              Title = "Level 2.1",
                                                              list = new List<TestClassToJSonify>
                                                                         {new TestClassToJSonify {Title = "Level 3"}}
                                                          }
                                                  }
                                   };

            jsonCreator = new JsonReportViewModelCreator(objectToJSONify);

        }

        private class TestClassToJSonify
        {
            public IList<TestClassToJSonify> list;
            public string Title { get; set; }
        }

        [Test]
        public void should_create_a_js_file_with_a_json_viewmodel_from_a_object()
        {
            // Act
            var jsonViewModel = jsonCreator.CreateViewModel();

            // Assert
            jsonViewModel.Should().Not.Be.NullOrEmpty();
        }
    }
}
