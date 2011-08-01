namespace SpecFlowDocCreator.Services
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;

    using SpecFlowDocCreator.ViewModels;

    public class FeatureFileQueryService : IFeatureFileQueryService
    {
        private const string FEATURE_PATTERN = "*.feature";

        public FeatureFolder GetFeatures(string featureFolder)
        {
            // Get the folder
            var folderPath = GetFolderPath(featureFolder);

            // Create viewmodel
            return CreateFeatureFolderFromPath(folderPath);
        }


        private static FeatureFolder CreateFeatureFolderFromPath(string path)
        {
            var folder = new FeatureFolder { FeatureFolders = new List<FeatureFolder>() };
            var directoriesWithFeatures = Directory.GetDirectories(path);
            
            foreach (var directory in directoriesWithFeatures)
            {
                folder.FeatureFolders.Add(CreateFeatureFolderFromPath(directory));
            }

            var featureFiles = FeaturesFilesInDirectory(path);
            folder.Features = CreateFeaturesFromFiles(featureFiles);

            return folder;
        }
                  
        private static IEnumerable<string> FeaturesFilesInDirectory(string directory)
        {
            return Directory.GetFiles(directory, FEATURE_PATTERN, SearchOption.TopDirectoryOnly);
        }
        
        private static List<Feature> CreateFeaturesFromFiles(IEnumerable<string> featureFiles)
        {
            return (from s in featureFiles 
                select new Feature { FilePath = s }
                ).ToList();
        }

        private static string GetFolderPath(string directory)
        {
            return Path.Combine(Directory.GetCurrentDirectory(), directory);
        }
    }
}