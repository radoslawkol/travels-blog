import React, { FC, ReactElement } from "react";
import Header from "@/components/Home/Header";
import { Wrapper } from "./Home.styled";
import NewsletterBanner from "../NewsletterBanner";
import LatestPosts from "./LatestPosts";
import Banner from "./Banner";
import AboutInfo from "../AboutInfo";

interface IProps {
	articles: object[];
	categories: object[];
}

const Home: FC<IProps> = ({ articles, categories }): ReactElement => {
	return (
		<Wrapper>
			<Header />
			<NewsletterBanner />
			<LatestPosts articles={articles} categories={categories} />
			<Banner />
			<section className='about'>
				<AboutInfo />
			</section>
		</Wrapper>
	);
};
export default Home;
