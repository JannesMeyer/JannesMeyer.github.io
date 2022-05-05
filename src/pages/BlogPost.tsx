import React from 'react';
import { BlogPost } from '../components/BlogPost';
import ArticleRoute from '../classes/ArticleRoute';
import { Layout } from '../components/Layout';

let head = <>
	<link rel="stylesheet" href="/stylesheets/code-light.css" media="(prefers-color-scheme: no-preference), (prefers-color-scheme: light)" />
	<link rel="stylesheet" href="/stylesheets/code-dark.css" media="(prefers-color-scheme: dark)" />
</>;

export default function PageBlogPost({ route: post }: { route: ArticleRoute }) {
	return <Layout title={post.title} path={post.path} head={head}>
		<BlogPost post={post} />
	</Layout>;
}