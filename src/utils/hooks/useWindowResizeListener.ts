import { useRef, useEffect, useState, useCallback } from 'react';

export default function useWindowResizeListener() {
	const [vpWidth, setVpWidth] = useState(null);
	const savedHandler = useRef(null);

	const handler = useCallback((e?: any) => {
		setVpWidth(window.innerWidth);
	}, []);

	savedHandler.current = handler;

	useEffect(() => {
		handler();
		if (window.addEventListener) {
			window.addEventListener('resize', handler);
		}
		return () => window.removeEventListener('scroll', handler);
	}, []);

	return { vpWidth };
}
