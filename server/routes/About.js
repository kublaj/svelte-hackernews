'use strict';

var About = {};

About.filename = "/www/SVELTE/hacker-news/shared/routes/About.html";

About.data = function () {
	return {};
};

About.render = function ( root, options ) {
	root = root || {};
	
	return `<h1>About this site</h1>
	
	<p>Hacker News clones are the new TodoMVC. <a href="https://vue-hn.now.sh">Vue</a> has one, <a href="https://next-news.now.sh">Next</a> has one, <a href="https://react-hn.appspot.com">React</a> and <a href="https://preact-hn.appspot.com">Preact</a> have theirs. And now, Svelte has one.</p>
	
	<p>Svelte is a new kind of framework, one that compiles your component templates into fast, compact JavaScript — either client-side or server-side. You can read more about the design and philosophy in the <a href="https://svelte.technology/blog/frameworks-without-the-framework/">introductory blog post</a>.</p>
	
	<p>This app is designed to test Svelte's ideas and see if there are any essential features that we're missing, and to act as an example for people looking to build their own Svelte apps. You can see the <a href="https://github.com/sveltejs/svelte-hackernews">source code</a> and <a href="https://github.com/sveltejs/svelte-hackernews/issues">issue list</a> on GitHub. Consider it a perpetual work-in-progress.</p>`;
};

About.renderCss = function () {
	var components = [];
	
	return {
		css: components.map( x => x.css ).join( '\n' ),
		map: null,
		components
	};
};

module.exports = About;
