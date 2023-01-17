import styled from "styled-components";

export const Container = styled.div`
	max-width: 800px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
		flex-direction: row;
	}
	img {
		border-radius: 50%;
		object-fit: cover;
	}

	h2 {
		font-size: 32px;
		text-transform: uppercase;
		color: ${({ theme }) => theme.colors.darkBrown};
	}
	i {
		color: ${({ theme }) => theme.colors.textSecondary};
	}
	p {
		margin-top: 10px;
		letter-spacing: 0.5px;
		color: ${({ theme }) => theme.colors.textSecondary};
	}
`;
