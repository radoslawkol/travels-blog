import { defineField, defineType } from "sanity";

export const categorySchema = defineType({
	title: "Category",
	name: "category",
	type: "document",
	fields: [
		defineField({
			title: "Category Name",
			name: "category",
			type: "string",
			validation: (rule) => rule.required().max(25),
		}),
	],
});
