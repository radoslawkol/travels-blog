import React, { FC, ReactElement } from "react";
import Image from "next/image";
import { Card } from "./Post.styled";
const Post: FC = (): ReactElement => {
	return (
		<Card href='/articles/1'>
			<div>
				<Image
					src='https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1642&q=80'
					fill
					alt='Landscape In Thailand'
				/>
			</div>
			<p>10 Best Cities to Visit in Europe in 2023</p>
		</Card>
	);
};
export default Post;
