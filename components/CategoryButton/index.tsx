import { FC, ReactElement } from "react";
import { Button } from "./CategoryButton";

interface IProps {
	category: string;
}
const CategoryButton: FC<IProps> = ({ category }): ReactElement => {
	return <Button>{category}</Button>;
};

export default CategoryButton;
