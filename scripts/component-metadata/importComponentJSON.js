// paste the JSON from componentJSON.json here as the value of json.
// Then copy the contents of this file and run in the console to set the descriptions.
const json = {};
const LINE_BREAK = "\n\n";

figma.root.children.forEach(async (page) => {
  await page.loadAsync();
  page
    .findAllWithCriteria({ types: ["COMPONENT_SET", "COMPONENT"] })
    .filter((a) => a.parent.type !== "COMPONENT_SET")
    .forEach((item) => {
      const data = json[item.key];
      const description = data.description || [];
      if (description.length) {
        item.description = description.join(LINE_BREAK);
      }
    });
}, {});
