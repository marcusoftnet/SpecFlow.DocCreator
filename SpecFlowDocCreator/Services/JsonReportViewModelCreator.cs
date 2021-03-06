﻿using Newtonsoft.Json;

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
            // Generate JSON, with indentention
            var settings = new JsonSerializerSettings {NullValueHandling = NullValueHandling.Ignore};
            var json = JsonConvert.SerializeObject(_objectToJSONify, Formatting.Indented, settings);

            // Add viewModelStuff
            return string.Format(VIEWMODEL_TEMPLATE, json);
        }
    }
}