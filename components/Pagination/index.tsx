import { FC, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "./Pagination.styled";

interface IProps {
	fetchNextPage: () => void;
	fetchPrevPage: () => void;
	currentPage: number;
	lastPage: number;
}

const Pagination: FC<IProps> = ({
	fetchNextPage,
	fetchPrevPage,
	currentPage,
	lastPage,
}): ReactElement => {
	return (
		<Container>
			<button onClick={fetchPrevPage}>
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
			<div>
				<span>{currentPage + 1}</span>
				<span>/</span>
				<span>{lastPage}</span>
			</div>
			<button onClick={fetchNextPage}>
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
		</Container>
	);
};

export default Pagination;
