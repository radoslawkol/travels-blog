import styled from "styled-components";

export const Card = styled.article`
	position: relative;
	width: 300px;
	height: 360px;
	border-radius: 15px;
	box-shadow: ${({ theme }) => theme.colors.boxShadowDefault};
	overflow: hidden;
	transition: box-shadow 0.5s, transform 0.5s;
	img {
		width: 100%;
		height: 360px;
		border-radius: 15px;
		object-fit: cover;
		object-position: center;
	}

	&:hover {
		transform: scale(1.05);
		box-shadow: ${({ theme }) => theme.colors.boxShadowHover};
	}
`;

export const Info = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 10px;
	border-radius: 0 0 15px 15px;
	background-color: ${({ theme }) => theme.colors.transparentDefault};
	transform: translateY(100%);
	z-index: 1;
	transition: transform 0.5s;
	${Card}:hover & {
		transform: translateY(0%);
	}
	span {
		color: ${({ theme }) => theme.colors.textSecondary};
	}

	h3 {
		margin-top: 10px;
		font-size: 18px;
		font-weight: 600;
		letter-spacing: 0.2px;
		text-transform: capitalize;
		color: ${({ theme }) => theme.colors.textSecondary};
	}
`;
