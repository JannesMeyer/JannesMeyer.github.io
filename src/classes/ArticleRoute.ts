import fs from 'fs';
import marked from 'marked';
import hljs from 'highlight.js';
import Route from './Route';

const CUT_MARKER = '- - -';
const renderer = new marked.Renderer();
renderer.code = (code, lang) => '<pre class="hljs">' + hljs.highlight(lang || 'plaintext', code).value + '</pre>';
renderer.codespan = (code) => '<code class="hljs">' + code + '</code>';

export default class ArticleRoute extends Route {

	date: Date;
	dateStr: string;
	titleHTML: string;
	title: string;
	contentHTML: string;
	previewHTML: string | undefined;

	constructor(path: string, view: React.ComponentType<any>, file: string, date: Date) {
		super(path, view);
		this.date = date;
		this.dateStr = date.toLocaleString('en-UK', { year: 'numeric', month: 'long', day: 'numeric' });
		
		// Use synchronous file reading
		let text = fs.readFileSync(file, { encoding: 'utf-8' });

		// Remove first line to extract the title
		let lineBreakPos = text.indexOf('\n');
		if (lineBreakPos === -1) {
			throw new Error('Expected at least two lines');
		}
		let titleMD = text.slice(0, lineBreakPos);
		this.titleHTML = removeHeaderTags(renderMarkdown(titleMD)).trim();
		this.title = removeHtmlTags(this.titleHTML);
		text = text.slice(lineBreakPos + 1);

		// Check for preview marker
		let cutMarkerPos = text.indexOf(CUT_MARKER);
		if (cutMarkerPos > -1) {
			// Render preview and remove marker
			this.previewHTML = renderMarkdown(text.slice(0, cutMarkerPos));
			text = text.replace(CUT_MARKER, '<a name="continue"></a>');
		}
		
		// Render content
		this.contentHTML = renderMarkdown(text);
	}
}

function renderMarkdown(text: string) {
	return marked(text, { renderer });
}

function removeHtmlTags(html: string) {
	return html.replace(/<[^>]+>/g, '');
}

function removeHeaderTags(html: string) {
	return html.replace(/<\/?h\d[^>]*>/g, '');
}