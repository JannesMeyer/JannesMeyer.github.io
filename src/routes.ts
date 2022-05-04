import fs from 'fs';
import path from 'path';
import Route from './classes/Route';
import ArticleRoute from './classes/ArticleRoute';
import PageHome from './pages/Home';
import PageBlog from './pages/Blog';
import PageContact from './pages/Contact';
import PageNotFound from './pages/NotFound';
import PageBlogPost from './pages/BlogPost';
import PageCV from './pages/CV';

export const articles = getArticles(path.join(__dirname, '../blog'), PageBlogPost);
export default [
	new Route('/', PageHome),
	new Route('/blog/', PageBlog),
	new Route('/cv', PageCV),
	new Route('/contact', PageContact),
	new Route('/404', PageNotFound),
	...articles,
];

function getArticles(dir: string, view: React.ComponentType<any>) {
	let files = fs.readdirSync(dir).sort().reverse();
	let pattern = /^(\d{4})-(\d\d)-(\d\d)-\d{1,6}-(.*)\.md$/;
	return files.map(f => f.match(pattern)).filter(isDefined).map(([ file, y, m, d, slug ]) => {
		let date = new Date(Number(y), Number(m) - 1, Number(d));
		return new ArticleRoute(`/blog/${y}/${slug}`, view, path.join(dir, file), date);
	});
}

function isDefined<T>(x: T | undefined | null): x is T {
    return (x != null);
}
