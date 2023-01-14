import { categorySchema } from "./category";
import { authorSchema } from "./author";
import { articleSchema } from "./article";
import { photoSchema } from "./photo";

export const schemaTypes = [
	articleSchema,
	authorSchema,
	photoSchema,
	categorySchema,
];
