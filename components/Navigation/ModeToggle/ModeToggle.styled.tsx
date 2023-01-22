import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
`;

export const Input = styled.input`
	width: 0;
	height: 0;
	visibility: hidden;

	&:checked + Label {
		background: black;
	}
	&:checked + Label::after {
		left: 55px;
		transform: translateX(-100%);
		background: linear-gradient(180deg, #777, #3a3a3a);
	}
`;

export const Label = styled.label`
	position: relative;
	display: block;
	width: 60px;
	height: 30px;
	background: ${({ theme }) => theme.colors.white};
	border-radius: 100px;
	box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
		inset 0px -5px 15px rgba(255, 255, 255, 0.4);
	cursor: pointer;
	transition: 0.3s;

	&:active::after {
		width: 50px;
	}

	::after {
		position: absolute;
		content: "";
		width: 25px;
		height: 25px;
		top: 2.5px;
		left: 5px;
		background: linear-gradient(180deg, #ffcc89, #d8860b);
		border-radius: 100px;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
		transition: 0.3s;
	}
`;
