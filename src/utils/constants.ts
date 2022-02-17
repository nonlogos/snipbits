import {
	Article as BlogIcon,
	ScissorsCut as SnippetIcon,
	Bookmark3 as BookmarkIcon,
	Sun as LightIcon,
	SunCloudy as DimIcon,
	Moon as DarkIcon,
} from '@styled-icons/remix-line';

export const contentTypes = [
	{ name: 'blogs', icon: BlogIcon, fill: '--primary' },
	{ name: 'snippets', icon: SnippetIcon, fill: '--secondary-1' },
	{ name: 'bookmarks', icon: BookmarkIcon, fill: '--secondary-2' },
];

// Constants for keyboard event management
export const ARROW_DOWN = 'ArrowDown';
export const ARROW_UP = 'ArrowUp';
export const ENTER = 'Enter';

export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';
export const DIM_THEME = 'dim';

export const themeModes = [
	{ mode: 'light', icon: LightIcon },
	{ mode: 'dim', icon: DimIcon },
	{ mode: 'dark', icon: DarkIcon },
];
