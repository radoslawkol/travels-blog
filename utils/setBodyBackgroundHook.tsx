import { useEffect } from "react";

export function useSetBodyBackground({ color }) {
	useEffect(() => {
		document.body.style.background = color;
	}, [color]);
}
