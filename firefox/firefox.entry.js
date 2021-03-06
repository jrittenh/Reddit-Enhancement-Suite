/* @flow */

/* Firefox-specific polyfills */

import 'intersection-observer';

// Firefox doesn't support objects in URLSearchParams constructor (until Firefox 54)
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#Browser_compatibility
window.URLSearchParams = class URLSearchParams extends window.URLSearchParams {
	constructor(init) {
		if (typeof init === 'object' && !Array.isArray(init)) {
			init = Object.entries(init);
		}
		super(init);
	}
};
