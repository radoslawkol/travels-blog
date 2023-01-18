import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	div.image {
		position: relative;
		width: 100%;
		height: 200px;
		img {
			object-fit: cover;
		}
	}
	span {
		color: ${({ theme }) => theme.colors.textSecondary};
	}
`;

export const Info = styled.div`
	padding: 10px;
	color: ${({ theme }) => theme.colors.textSecondary};
	h1 {
		margin: 20px 0;
	}
	span {
		font-size: 14px;
	}
	ul {
		display: flex;
		gap: 10px;
	}
`;
