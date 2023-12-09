import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

// Define a type for our custom file structure
type CustomFile = {
  name: string;
  path: string;
  content: Buffer;
};

export const readAllFilesFromDirectory = (directoryPath: string): CustomFile[] => {
  try {
    const fileNames = readdirSync(directoryPath);
    const filePaths = fileNames.map((fileName) => join(directoryPath, fileName));

    // Create an array of custom file objects
    const files = filePaths.map((filePath, index) => ({
      name: fileNames[index] as string,
      path: filePath,
      content: readFileSync(filePath),
    }));

    return files;
  } catch (error) {
    throw new Error(`Could not read directory: ${error.message}`);
  }
};
