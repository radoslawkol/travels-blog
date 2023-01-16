import { defineField, defineType } from "sanity";

export const photoCategorySchema = defineType({
	title: "PhotoCategory",
	name: "photoCategory",
	type: "document",
	fields: [
		defineField({
			title: "Category",
			name: "category",
			type: "string",
			validation: (rule) => rule.required().max(20),
		}),
	],
});
