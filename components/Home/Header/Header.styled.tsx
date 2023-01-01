import styled from "styled-components";

export const Wrapper = styled.div`
	background-image: url(${(props) => props.image.src});
	width: 100%;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const BgShadow = styled.div`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(57, 57, 57, 0.54);
`;

export const CentralContainer = styled.div`
	width: 80%;
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translateX(-50%);
	color: ${({ theme }) => theme.colors.white};
`;

export const Rectangle = styled.div`
	width: 14px;
	height: 60px;
	background-color: ${({ theme }) => theme.colors.bgSecondary};
`;

export const Heading = styled.h1`
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 24px;
	font-weight: 400;
	text-transform: uppercase;
	p {
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.658);
	}
`;
export const Text = styled.p`
	position: absolute;
	bottom: 5%;
	left: 50%;
	transform: translateX(-50%);
	width: 80%;
	text-align: center;
	font-size: 18px;
	letter-spacing: 1px;
	color: ${({ theme }) => theme.colors.white};
`;
