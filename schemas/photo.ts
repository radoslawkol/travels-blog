import { photoCategorySchema } from "./photoCategory";
import { defineField, defineType } from "sanity";

export const photoSchema = defineType({
	title: "Photo",
	name: "photo",
	type: "document",
	fields: [
		defineField({
			title: "Photo",
			name: "photo",
			type: "image",
			options: { hotspot: true },
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Title",
			name: "title",
			type: "string",
			validation: (rule) => rule.required().min(15).max(60),
		}),
		defineField({
			title: "Date",
			name: "date",
			type: "date",
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Categories",
			name: "categories",
			type: "array",
			of: [{ type: "reference", to: [{ type: photoCategorySchema.name }] }],
			validation: (rule) => rule.required(),
		}),
	],
});
