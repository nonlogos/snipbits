import React, { useRef, useEffect, useState } from 'react';
import { navigate } from 'gatsby';

import { StyledCard, StyledContentType, StyledTimeContainer } from './card.styles';
import Tag from '../Tags';

// - The whole block should be linked and clickable if mainlink prop is passed.
// - if a function is passed in as 'mainAction' prop. The function will be called with the id prop passed in when the block is clicked.
// - It should be able to contain more than one link.
// - Content should be semantic so assistive tech can understand it.
// - The text should be selectable, like regular links.
// - Things like right-click and keyboard shortcuts should work with it
// - Its elements should be focusable when tabbing.

interface ICardActionButton {
	children: React.ReactNode;
	handleClick?: (e) => void;
	classStr?: string;
}

export default function Card({ children, mainlink, mainAction, id, type, keywords, date }) {
	const [blockClickable, setblockClickable] = useState(true);
	const cardRef = useRef(null);

	const resetBlockClickable = () => {
		// reset back to default -> for external links that opens in new window/tab
		setTimeout(() => setblockClickable((prev) => true), 100);
	};

	const handleOnClick = (e) => {
		const isTextSelected = window.getSelection().toString();
		if (isTextSelected) {
			setblockClickable(false);
		}
		if (blockClickable && !isTextSelected) {
			if (mainlink) {
				navigate(mainlink);
			} else if (mainAction) {
				mainAction(id);
			}
		}
	};

	const handleSecondaryClick = (e) => {
		e.stopPropagation();
		setblockClickable(false);
	};

	const updatedWithProps = React.Children.map(children, (child, index) => {
		if (child.type.name === 'CardActionButton') {
			return React.cloneElement(child, {
				handleClick: handleSecondaryClick,
				classStr: 'action-button',
			});
		}
		return child;
	});

	useEffect(() => {
		if (!blockClickable) {
			resetBlockClickable();
		}
	}, [blockClickable]);

	return (
		<StyledCard ref={cardRef} onClick={handleOnClick}>
			<StyledContentType className="content-type" type={type}>
				{type}
			</StyledContentType>
			<StyledTimeContainer>
				<time dateTime={date}>{date}</time>
			</StyledTimeContainer>
			{updatedWithProps}
			<Tag tags={keywords} />
		</StyledCard>
	);
}

Card.ActionButton = function CardActionButton({ children, handleClick, classStr }: ICardActionButton) {
	return (
		<div onClick={handleClick} className={classStr}>
			{children}
		</div>
	);
};
