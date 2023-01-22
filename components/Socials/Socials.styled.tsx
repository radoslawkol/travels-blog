import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	gap: 10px;
	padding: 10px 0;
	a {
		font-size: 18px;
		color: ${({ color }) =>
			color ? color : ({ theme }) => theme.colors.textWhite};
	}
`;
