import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas/index";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
	basePath: "/studio",
	name: "Travels_Blog_Content_Studio",
	title: "Travels Blog Content Studio",

	projectId,
	dataset,

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
});