import React, { FC, ReactElement } from "react";
import Navigation from "../Navigation";
import Header from "@/components/Home/Header";
import { Wrapper } from "./Home.styled";

const Home: FC = (): ReactElement => {
	return (
		<Wrapper>
			<Navigation />
			<Header />
		</Wrapper>
	);
};
export default Home;
