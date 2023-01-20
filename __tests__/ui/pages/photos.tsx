import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styled";
import PhotosPage from "@/pages/photos";
import fakePhotos from "../../../__mocks__/photos";
import fakeCategories from "../../../__mocks__/photosCategories";

jest.mock("react-lazy-load-image-component/src/effects/blur.css", () => {});

jest.mock("@sanity/client", () => {
	return function sanity() {
		return {
			fetch: () => ({
				methodOne: [{}],
				methodTwo: [{}],
			}),
		};
	};
});

test("Render Photos Page ", async () => {
	render(
		<ThemeProvider theme={theme}>
			<PhotosPage photos={fakePhotos} categories={fakeCategories} />
		</ThemeProvider>
	);

	const title = await screen.getByText("Walking in the forest in Germany");
	const date = await screen.getByText("2023-01-16");
	const category = await screen.getByRole("button", { name: /nature/i });

	expect(title).toBeInTheDocument();
	expect(date).toBeInTheDocument();
	expect(category).toBeInTheDocument();
});
