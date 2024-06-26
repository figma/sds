# figma-token-json

A JSON representation for Figma Variables following the [W3C Tokens spec](https://github.com/design-tokens/community-group)

## Overview

Figma variable collections are merged into a single JSON file to support cross-collection aliasing. Each collection is represented with a snake cased key at the root of the JSON object. Example of how you would model two collections, "primitive" and, "semantic" where the semantic has two modes "light" and "dark":

```json
{
  "collection_primitives_color": {
    "color": {
      "$type": "color",
      "red-300": { "$value": "#C00" },
      "red-500": { "$value": "#F00" }
    }
  },
  "collection_semantic_color": {
    "$extensions": {
      "org.example": { "modes": ["light", "dark"] }
    },
    "color": {
      "$type": "color",
      "danger": {
        "$value": "{collection_primitives_color.color.red-300}",
        "$extensions": {
          "org.example": {
            "modes": {
              "light": "{collection_primitives_color.color.red-300}",
              "dark": "{collection_primitives_color.color.red-500}"
            }
          }
        }
      }
    }
  }
}
```

[`$extensions`](https://tr.designtokens.org/format/#extensions-0) is used to describe Figma modes and Figma metadata. `org.example` would be the customer's namespace.
