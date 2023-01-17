import styled from "styled-components";

export const Article = styled.article`
	width: 300px;
	height: 300px;
	border-radius: 15px;
	box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.226);

	div {
		height: 140px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 10px 10px 20px;
		color: ${({ theme }) => theme.colors.textSecondary};

		h3 {
			font-size: 20px;
			text-transform: capitalize;
		}

		button {
			width: fit-content;
			padding: 8px;
			font-size: 14px;
			border: none;
			border-radius: 5px;
			letter-spacing: 1px;
			text-transform: capitalize;
			background-color: ${({ theme }) => theme.colors.bgSecondary};
			cursor: pointer;
			transition: background-color 0.3s, color 0.3s, border 0.3s;
			a {
				text-decoration: none;
				color: ${({ theme }) => theme.colors.textWhite};
			}

			&:hover {
				background-color: transparent;
				border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
				a {
					color: ${({ theme }) => theme.colors.textSecondary};
				}
			}
		}
	}

	img {
		width: 300px;
		height: 160px;
		object-fit: cover;
		border-radius: 15px 15px 0 0;
	}
`;
