export interface IArticle {
	_id: string;
	title: string;
	slug: string;
	author?: { name: string };
	content?: [];
	date?: string;
	coverImage: {
		asset: {
			_id: string;
			url: string;
		};
	};
	categories: {
		category: string;
	}[];
}

export interface IArticleWithSlug extends Omit<IArticle, "slug"> {
	slug: { current: string };
}
