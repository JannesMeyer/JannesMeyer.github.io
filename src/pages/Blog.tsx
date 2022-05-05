import React from 'react';
import { BlogPost } from '../components/BlogPost';
import Route from '../classes/Route';
import { articles } from '../routes';
import { Layout } from '../components/Layout';

/**
 * Blog article overview
 */
export default function Blog({ route }: { route: Route }) {
	return <Layout title="Blog" path={route.path}>
		{articles.map(p => <BlogPost showPreview post={p} key={p.path} /> )}
	</Layout>;
}