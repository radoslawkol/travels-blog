import styled from "styled-components";

export const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.bgPrimary};
	section.about {
		padding: 60px 40px;
		display: flex;
		justify-content: center;
	}
`;
