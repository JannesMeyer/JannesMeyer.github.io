import React from 'react';
import { Layout } from '../components/Layout';
import Route from '../classes/Route';

export default function PageHome({ route }: { route: Route }) {
	return <Layout title="Portfolio" path={route.path}>

		<article className="Hello">
			<a href="/contact"><img src="/images/photo.png" width="100" height="100" /></a>
			<p>Hi,</p>
			<p>My name is Jannes Meyer. I am a full-stack engineer and these are some of my projects.</p>
		</article>

		<article>
			<h2>Filter Canvas</h2>
			<a className="Image" href="/filter-canvas/"><img src="/images/projects/filtercanvas.png" /></a>
			<p>Single-page application that manages <a href="http://en.wikipedia.org/wiki/Pipeline_%28software%29">filter and pipes</a> configurations.</p>
			<p>It features a hand-tuned drag-and-drop implementation and unlimited undo/redo.</p>
			<p><h4><a href="/filter-canvas/">Demo</a></h4></p>
			<p><a href="https://github.com/JannesMeyer/filter-canvas">Source code on GitHub</a></p>
			<ul>
				<li>JavaScript (ES6 transpiled via <a href="https://babeljs.io/">Babel</a>)</li>
				<li><a href="https://webpack.js.org/">webpack</a></li>
				<li><a href="http://stylus-lang.com/">stylus</a></li>
				<li><a href="https://immutable-js.github.io/immutable-js/">Immutable.js</a></li>
				<li>Internationalisation (translated into three languages)</li>
			</ul>
		</article>

		<article>
			<h2>TabAttack</h2>
			<a className="Image" href="https://chrome.google.com/webstore/detail/tabattack/ginflokhdahakklidfjlogllkkhokidj"><img src="/images/projects/tabattack2.png" /></a>
			<p>TabAttack is a browser extension that helps you export all open tabs into a Markdown document, then close the tabs. This is useful if you want to reduce the number of open tabs by archiving them in a searchable format.</p>
			<p>There is also a feature to re-open all links from a saved Markdown document.</p>
			<p><a href="https://chrome.google.com/webstore/detail/tabattack/ginflokhdahakklidfjlogllkkhokidj">Available on the Chrome Web Store</a></p>
			<ul>
				<li>JavaScript (ES6 transpiled via <a href="https://babeljs.io/">Babel</a>)</li>
				<li><a href="https://webpack.js.org/">webpack</a></li>
				<li><a href="http://stylus-lang.com/">stylus</a></li>
				<li><a href="https://commonmark.org/">Markdown</a></li>
				<li><a href="https://reactjs.org/">React</a></li>
				<li><a href="https://ace.c9.io/">Ace Editor</a></li>
				<li><a href="https://developer.chrome.com/extensions">Chrome Extension API</a></li>
			</ul>
		</article>

		<article>
			<h2>MyScoreboard</h2>
			<p><a href="https://github.com/JannesMeyer/MyScoreboard">Source code on GitHub</a></p>
			<ul>
				<li>Objective-C</li>
				<li>MVC</li>
				<li>Twitter API</li>
				<li><a href="https://github.com/RestKit/RestKit">RestKit</a></li>
			</ul>
		</article>

		<article>
			<h2>Cubic Interpolation</h2>
			<a className="Image" href="https://github.com/JannesMeyer/computergrafik"><img src="/images/projects/cubicinterpolation.png" /></a>
			<p>This project was used to learn OpenGL and the task was to render a cubic interpolation for a <a href="https://github.com/JannesMeyer/computergrafik/blob/master/data/mesh1.txt">4x4 mesh of elevation data</a>.</p>
			<p><a href="https://github.com/JannesMeyer/computergrafik">Source code on GitHub</a></p>
			<ul>
				<li>C++</li>
				<li>OpenGL</li>
				<li><a href="https://www.glfw.org/">GLFW</a></li>
			</ul>
		</article>

	</Layout>;
}