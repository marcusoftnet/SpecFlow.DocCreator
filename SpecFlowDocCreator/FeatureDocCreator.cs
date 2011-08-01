namespace SpecFlowDocCreator
{
    using NConsoler;

    public class FeatureDocCreator
    {
        
        [Action("Generates documentation for SpecFlow features")]
        public static void CreateFeatureDocumentation(
            [Required(Description = "Root-folder for the features")]
                string featureFolder,
            [Optional("en-US", Description = "The language used in the feature-files.")]
                string language,
            [Optional("", Description = "Path to a NUnit testresult XML file.")]
                string testResultFile
            )
        {
            
        }

    }
}