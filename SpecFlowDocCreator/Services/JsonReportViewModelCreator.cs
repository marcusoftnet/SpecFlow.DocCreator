using Newtonsoft.Json;

namespace SpecFlowDocCreator.Services
{
    public class JsonReportViewModelCreator : IJsonReportViewModelCreator
    {
        private readonly object _objectToJSONify;
        private const string VIEWMODEL_TEMPLATE = @"var reportViewModel = {0};";

        public JsonReportViewModelCreator(object objectToJSONify)
        {
            _objectToJSONify = objectToJSONify;
        }

        public string CreateViewModel()
        {
            // Generate JSON
            var json = JsonConvert.SerializeObject(_objectToJSONify);

            // Add viewModelStuff
            json = string.Format(VIEWMODEL_TEMPLATE, json);
            
            // Prettify
            var formatter = new JsonFormatter(json);
            return formatter.Format();
        }
    }
}