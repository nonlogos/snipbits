import { useState } from 'react';

export default function useTouchSwipe(viewLength: number) {
	const [touchPos, setTouchPos] = useState(null);
	const [viewNum, setViewNum] = useState(viewLength);
	const [newViewIndex, setNewViewIndex] = useState(null);

	const handleTouchStart = (e) => {
		if (!e.touches || !e.touches[0] || !e.touches[0].clientX) {
			return;
		}
		setTouchPos(e.touches[0].clientX);
	};

	const handleTouchSwipe = (clientX, currentIndex) => {
		if (touchPos === null || clientX === undefined) {
			return;
		}
		const diff = touchPos - clientX;
		let newIndex = currentIndex;
		if (diff > 20) {
			newIndex = currentIndex === viewNum ? viewNum : (newIndex += 1);
		} else if (diff < -20) {
			newIndex = currentIndex === 1 ? 1 : (newIndex -= 1);
		}
		setNewViewIndex(newIndex);
	};

	return { newViewIndex, handleTouchStart, handleTouchSwipe, setViewNum };
}
