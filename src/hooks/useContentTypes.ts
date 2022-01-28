import React, { useState } from 'react';

function getDefaultContentTypes(contentTypes) {
	const result = {};
	contentTypes.forEach((type) => (result[type] = true));
	return result;
}

export default function useContentTypes(contentTypes: string[]) {
	const [showContentTypes, setShowContentTypes] = useState(getDefaultContentTypes(contentTypes));

	const handleSelectedContent = (e) => {
		const { value } = e.target;
		setShowContentTypes((prev) => {
			const updatedObj = { ...showContentTypes };
			updatedObj[value] = !updatedObj[value];
			return updatedObj;
		});
	};
	return [showContentTypes, handleSelectedContent];
}
