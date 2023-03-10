import React, { FC, ReactElement } from "react";
import Header from "@/components/Home/Header";
import { Wrapper } from "./Home.styled";
import NewsletterBanner from "../NewsletterBanner";
import LatestPosts from "./LatestPosts";
import Banner from "./Banner";
import AboutInfo from "../AboutInfo";
import { IArticleWithSlug } from "@/interfaces/IArticle";

interface IProps {
	articles: IArticleWithSlug[];
}

const Home: FC<IProps> = ({ articles }): ReactElement => {
	return (
		<Wrapper>
			<Header />
			<NewsletterBanner />
			<LatestPosts articles={articles} />
			<Banner />
			<section className='about'>
				<AboutInfo />
			</section>
		</Wrapper>
	);
};
export default Home;
