import { readdir, readFile } from 'node:fs';

const path = './';
const options = {
  recursive: true
}

const htmlFileRegExp = /.+\.(html|md|markdown)$/;
const searchRegExp = /^layout:\s.+$/gm
// const deprecatedClassRegExp = /["\s]([pm][lr](?:-(?:sm|md|lg|xl))?-[0-5]|(?:text|float)(?:-(?:sm|md|lg|xl))?-(?:left|right)|sr-only|text-muted|close)["\s]/;
// const deprecatedClassRegExpGlobal = /["\s]([pm][lr](?:-(?:sm|md|lg|xl))?-[0-5]|(?:text|float)(?:-(?:sm|md|lg|xl))?-(?:left|right)|sr-only|text-muted|close)["\s]/g;

console.log(`\n==== [SEARCHING in: ${path}] ====`);

readdir(path, options, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  const htmlFiles = files.filter(file => !file.search(htmlFileRegExp));

  htmlFiles.forEach(file => {
    readFile(`${path}/${file}`, 'utf8', (err, data) => {
      if (err) {
        console.error("Could not read file.", err);
        process.exit(1);
      }

      if (data.search(searchRegExp) !== -1) {
        const matches = data.match(searchRegExp);

        matches.forEach(match => console.log(`[FOUND]: "${match}" in ${file}`));
      }
    });
  });
});

console.log(`\n====   [RESULTS]    ====`);
