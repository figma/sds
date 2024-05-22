const fs = require("fs");

async function go() {
  const json = JSON.parse(fs.readFileSync("./icons.json"));
  fs.copyFileSync("./icons-index.txt", "../../src/icons/index.ts");
  await Promise.all(
    json.map(
      ([fileName, fileContents]) =>
        new Promise((resolve, reject) => {
          fs.writeFile(`../../src/icons/${fileName}`, fileContents, (err) =>
            err ? reject(err) : resolve()
          );
        })
    )
  );

  console.log("DONE!");
}

go();
