import { useRef, useEffect, useState, useCallback } from 'react';

export default function useScrollEventListener() {
	const [scrollData, setScrollData] = useState({ yPos: 0, prevYPos: 0, direction: 'down' });
	const savedHandler = useRef(null);

	const handler = useCallback((e) => {
		const scrollY = window.scrollY;
		setScrollData((prev) => ({
			yPos: scrollY,
			prevYPos: prev.yPos,
			direction: scrollY - prev.yPos >= 0 ? 'down' : 'up',
		}));
	}, []);

	savedHandler.current = handler;

	useEffect(() => {
		document.addEventListener('scroll', handler);
		return () => document.removeEventListener('scroll', handler);
	}, []);

	return { scrollData };
}
