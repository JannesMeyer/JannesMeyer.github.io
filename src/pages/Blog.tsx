import React from 'react';
import Master from '../components/Master';
import BlogPost from '../components/BlogPost';
import Route from '../classes/Route';
import { articles } from '../routes';

/**
 * Blog article overview
 */
export default function Blog({ route }: { route: Route }) {
	return <Master title="Blog" path={route.path}>
		{articles.map(p => <BlogPost showPreview post={p} key={p.path} /> )}
	</Master>;
}