// Copy the contents of this file and run in the console to get component JSON data.
figma.root.children.reduce((into, page) => {
  page
    .findAllWithCriteria({ types: ["COMPONENT_SET", "COMPONENT"] })
    .filter((a) => a.parent.type !== "COMPONENT_SET")
    .forEach((item) => {
      const pageName = page.name
        .split(/[^a-z0-9]+/i)
        .map((a) => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase())
        .join(" ");
      const name = item.name
        .split(/[^a-z0-9]+/i)
        .map((a) => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase())
        .join(" ");
      into[item.key] = {
        id: item.id,
        page: pageName,
        name,
        constant:
          `<FIGMA_${pageName.replace(/ /g, "_")}_${name.replace(/ /g, "_")}>`.toUpperCase(),
        description: item.description
          ? item.description.split(/\n\n+/)
          : undefined,
      };
      return into;
    }, {});
  return into;
}, {});
