import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	padding: 0 20px;

	div.image {
		position: relative;
		width: 100%;
		height: 200px;
		@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
			height: 300px;
		}
		@media (min-width: ${({ theme }) => theme.breakpoints.xxLarge}) {
			height: 400px;
		}

		img {
			object-fit: cover;
			@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
				border-radius: 5px;
			}
		}
	}
	span {
		color: ${({ theme }) => theme.colors.textSecondary};
	}
`;

export const Info = styled.div`
	padding: 10px 0;
	color: ${({ theme }) => theme.colors.textSecondary};
	h1 {
		font-size: 30px;
		margin: 20px 0;
	}
	span {
		font-size: 14px;
	}
	ul {
		display: flex;
		gap: 10px;
		list-style: none;
	}
`;
