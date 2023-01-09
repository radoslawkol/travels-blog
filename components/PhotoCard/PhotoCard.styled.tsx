import styled from "styled-components";

export const Card = styled.article`
	position: relative;
	width: 300px;
	height: 360px;
	border-radius: 15px;
	box-shadow: 2px 4px 10px 6px rgba(51, 45, 45, 0.164);
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
		box-shadow: 2px 4px 12px 8px rgba(51, 45, 45, 0.164);
	}
`;

export const Info = styled.div`
	position: absolute;
	bottom: 0;
	padding: 10px;
	border-radius: 0 0 15px 15px;
	background-color: rgba(245, 239, 239, 0.719);
	transform: translateY(100%);
	z-index: 1;
	transition: transform 0.5s;
	${Card}:hover & {
		transform: translateY(0%);
	}
	span {
		color: ${({ theme }) => theme.colors.darkPrimary};
	}

	h3 {
		margin-top: 10px;
		font-size: 18px;
		font-weight: 600;
		letter-spacing: 0.2px;
		text-transform: capitalize;
		color: ${({ theme }) => theme.colors.darkPrimary};
	}
`;
