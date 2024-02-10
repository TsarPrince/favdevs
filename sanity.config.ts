// sanity.config.ts
import { defineConfig } from "sanity";
import schemaTypes from "./rankspark/schemas";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { pageStructure, singletonPlugin } from "./rankspark/plugins/settings";
import settings from "./rankspark/schemas/settings";
import { table } from "@sanity/table";
import { codeInput } from "@sanity/code-input";

export default defineConfig({
  name: "rankspark",
  title: "RankSpark",
  projectId: "btb9magv",
  dataset: "production",
  plugins: [
    structureTool({
      structure: pageStructure([settings]),
    }),
    visionTool(),
    singletonPlugin(["settings"]),
    table(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
