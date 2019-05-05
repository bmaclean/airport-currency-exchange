
/**
 * isWidthUp is true when the given screen size is larger than the provided
 * threshold size, and false otherwise. Relative size determined through
 * theme.keys.breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'].
 */
const isWidthUp = (threshold, screensize, theme) => {
	const {
		breakpoints: {keys},
	} = theme;
	return keys.indexOf(screensize) > keys.indexOf(threshold);
};

export default isWidthUp;
