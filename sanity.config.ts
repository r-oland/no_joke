import { visionTool } from "@sanity/vision";
import { aboutStructure } from "lib/aboutStructure";
import { dataset, projectId } from "lib/sanity.api";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import aboutType from "schemas/docs/about";
import { schemaTypes } from "./schemas";

export default defineConfig({
  basePath: "/studio",
  title: "portfolio",
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure: aboutStructure(aboutType),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
