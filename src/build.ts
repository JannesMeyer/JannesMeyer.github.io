import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import routes, { articles } from './routes';
import Route from './classes/Route';
import ArticleRoute from './classes/ArticleRoute';

const baseUrl = 'https://jannesmeyer.com';
const outputDir = path.join(__dirname, '../public');
const modulesDir = path.join(__dirname, '../node_modules');

// Render files with React
routes.forEach(generateFile);

// Generate feed
generateAtomFeed(articles, '/blog/feed.xml');

// Copy Highlight.js styles
copyFile(path.join(modulesDir, 'highlight.js/styles/color-brewer.css'), path.join(outputDir, 'stylesheets/code-light.css'));
copyFile(path.join(modulesDir, 'highlight.js/styles/agate.css'), path.join(outputDir, 'stylesheets/code-dark.css'));

/** Copy a file to the destination */
function copyFile(source: string, destination: string) {
    // Make sure the directory exists
	mkdirp.sync(path.dirname(destination));

    // Copy via streams
    let rs = fs.createReadStream(source);
    let ws = fs.createWriteStream(destination);
	rs.pipe(ws);
}

/** Generate static markup */
function generateFile(route: Route) {
	let p = path.join(outputDir, route.path) + (route.path.endsWith('/') ? 'index.html' : '.html');

	// Make sure the directory exists
	mkdirp.sync(path.dirname(p));

	// Generate
	let content = route.renderStaticMarkup();

	// Write
	fs.writeFileSync(p, content);
}

function generateAtomFeed(articles: readonly ArticleRoute[], feedPath: string) {
	let lastUpdate = articles.slice().sort((a, b) => b.date.getTime() - a.date.getTime())[0].date;
	let feedUrl = baseUrl + feedPath;
	let feed = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
	<title>Jannes Meyer's Blog</title>
	<link href="${feedUrl}" rel="self" />
	<link href="${baseUrl}/" />
	<id>${feedUrl}</id>
	<updated>${lastUpdate.toISOString()}</updated>\n` +
	articles.map(makeAtomEntry).join('') +
'\n\n</feed>';
	fs.writeFileSync(path.join(outputDir, feedPath), feed);
}

function makeAtomEntry(article: ArticleRoute): string {
	let entryUrl = baseUrl + article.path;
	return `	<entry>
		<title>${article.title}</title>
		<link rel="alternate" type="text/html" href="${entryUrl}"/>
		<id>${entryUrl}</id>
		<updated>${article.date.toISOString()}</updated>
		<content type="xhtml">
			<div xmlns="http://www.w3.org/1999/xhtml">
				${article.contentHTML}
			</div>
		</content>
		<author>
			<name>Jannes Meyer</name>
		</author>
	</entry>`;
}