// const rootUrl = "https://sds-jake.netlify.app/storybook/iframe.html?";
const rootUrl = "http://localhost:6006/iframe.html?";
const url = rootUrl + "args=ARGS&id=ID&viewMode=story";

const hyphenatedName = (name) => {
  return name
    .split(" ")
    .join("")
    .replace(/([A-Z])/g, " $1")
    .trim()
    .split(/[^a-zA-Z]/g)
    .join("-");
};

figma.showUI(__html__, { height: 400, width: 800 });

run();
figma.on("selectionchange", run);

function run() {
  const node = figma.currentPage.selection[0];
  if (node && ["INSTANCE", "COMPONENT", "COMPONENT_SET"].includes(node.type)) {
    let nodeForInfo = node.type === "INSTANCE" ? node.mainComponent : node;
    let name;
    let args;
    if (nodeForInfo.type === "COMPONENT_SET") {
      name = hyphenatedName(nodeForInfo.name);
      args = "";
    } else if (nodeForInfo.type === "COMPONENT") {
      if (nodeForInfo.parent.type === "COMPONENT_SET") {
        name = hyphenatedName(nodeForInfo.parent.name);
        args = nodeForInfo.name
          .split(", ")
          .join(";")
          .replace(/=/g, ":")
          .replace(/ /g, "-")
          .toLowerCase();
        const textNode = node.children.find((a) => a.type === "TEXT");
        if (textNode) {
          args += `;children:${textNode.characters}`;
        }
      } else {
        name = hyphenatedName(nodeForInfo.name);
        args = "";
      }
    }
    const payload = url
      .replace("ARGS", args)
      .replace("ID", `figma-preview--${name.toLowerCase()}-story`);
    console.log(payload);
    figma.ui.postMessage({ type: "URL", payload });
  }
}
