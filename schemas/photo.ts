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
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Title",
			name: "title",
			type: "string",
			validation: (rule) => rule.required().min(15).max(60),
		}),
	],
});
