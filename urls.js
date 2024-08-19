const fs = require("fs");
const axios = require("axios");
const path = require("path");

async function fetchAndSave(url) {
  try {
    const response = await axios.get(url);
    const hostname = new URL(url).hostname;
    const filePath = path.join(__dirname, hostname);
    fs.writeFileSync(filePath, response.data);
    console.log(`Wrote to ${hostname}`);
  } catch (error) {
    console.error(`Couldn't download ${url}: ${error}`);
  }
}

async function main() {
  const fileName = process.argv[2];

  if (!fileName) {
    console.error("You must provide a filename as the first argument");
    process.exit(1);
  }

  try {
    const fileContent = fs.readFileSync(fileName, "utf-8");
    const urls = fileContent.split("\n").filter((line) => line.trim() !== "");

    await Promise.all(urls.map((url) => fetchAndSave(url)));
  } catch (error) {
    console.error(`Couldn't read the file ${fileName}`);
    process.exit(1);
  }
}

main();
