export interface IPhoto {
	_id: string;
	title: string;
	date: string;
	categories: [category: string];
	photo: {
		asset: {
			_id: string;
			url: string;
		};
	};
}
