import { defaultConfig } from "../config.js";
import { crawl, write } from "./core.js";
import { promises as fs } from 'fs';
import path from 'path';

import type { Config } from "./config.js";

// Ensure only the directory exists
const ensureDirectoryExists = async (filePath: string) => {
  const dirPath = path.dirname(filePath); // Extract the directory path from the full file path

  // Ensure directory exists (create it if necessary)
  await fs.mkdir(dirPath, { recursive: true });
  console.log(`Directory ensured: ${dirPath}`);
};

const fetchData = async () => {
  for (let index = 0; index < defaultConfig.data.length; index++) {
    const datapoint = defaultConfig.data[index];
    const { category, outputFileName, url } = datapoint;

    // Define the output path based on category and outputFileName
    let outputPath = 'output/';
    if (typeof category === 'string' && category !== '') {
      outputPath += `${category}/`;
    }
    outputPath += `${outputFileName}.json`;

    try {
      // Ensure directory exists (create directory if necessary)
      await ensureDirectoryExists(outputPath);
    } catch (err) {
      console.error(`Failed to create directory for ${outputPath}:`, err);
      continue;  // Skip this iteration if directory creation fails
    }

    // Create the url configuration for crawling
    const urlConfig: Config = {
      url,
      outputFileName: outputPath,
      match: `${url}/**`,  // Match all sub-pages under the main URL
      maxPagesToCrawl: 20000,
      maxTokens: 2000000,  // Max tokens for the output file
    };

    console.log(`Crawling started for: ${url}`);

    // Ensure crawl is completed before proceeding
    await crawl(urlConfig);

    console.log(`Crawl completed for: ${url}. Writing output...`);

    // Ensure write operation is completed before moving to the next crawl
    await write(urlConfig);

    console.log(`Writing completed for: ${outputPath}`);
  }
};

fetchData().then(() => {
  console.log("All crawls have been completed.");
}).catch((error) => {
  console.error("An error occurred during the crawling process:", error);
});
