import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const authorSchema = defineType({
	title: "Authors",
	name: "authors",
	icon: UserIcon,
	type: "document",
	fields: [
		defineField({
			title: "Name",
			name: "name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Picture",
			name: "picture",
			type: "image",
			options: { hotspot: true },
			validation: (rule) => rule.required(),
		}),
	],
});
