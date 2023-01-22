import { categorySchema } from "./category";
import { defineType, defineField, defineArrayMember } from "sanity";
import { authorSchema } from "./author";

export const articleSchema = defineType({
	title: "Article",
	name: "article",
	type: "document",
	fields: [
		defineField({
			title: "Title",
			name: "title",
			type: "string",
			validation: (rule) => rule.required().min(30).max(60),
		}),
		defineField({
			title: "Slug",
			name: "slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
				isUnique: (value, context) => context.defaultIsUnique(value, context),
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Categories",
			name: "categories",
			type: "array",
			of: [{ type: "reference", to: [{ type: categorySchema.name }] }],
		}),
		defineField({
			title: "Author",
			name: "author",
			type: "reference",
			to: [{ type: authorSchema.name }],
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Cover Image",
			name: "coverImage",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			title: "Date",
			name: "date",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Content",
			name: "content",
			type: "array",
			of: [
				defineArrayMember({
					type: "block",
					styles: [
						{ title: "Normal", value: "normal" },
						{ title: "H1", value: "h1" },
						{ title: "H2", value: "h2" },
						{ title: "H3", value: "h3" },
						{ title: "H4", value: "h4" },
						{ title: "H5", value: "h5" },
						{ title: "H6", value: "h6" },
						{ title: "Quote", value: "blockquote" },
					],
				}),
				defineArrayMember({
					type: "image",
					options: {
						hotspot: true,
					},
				}),
			],
		}),
	],
});
