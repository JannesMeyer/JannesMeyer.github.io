import React from 'react';
import Master from '../components/Master';
import { BlogPost } from '../components/BlogPost';
import ArticleRoute from '../classes/ArticleRoute';

let head = <>
	<link rel="stylesheet" href="/stylesheets/code-light.css" media="(prefers-color-scheme: no-preference), (prefers-color-scheme: light)" />
	<link rel="stylesheet" href="/stylesheets/code-dark.css" media="(prefers-color-scheme: dark)" />
</>;

export default function PageBlogPost({ route: post }: { route: ArticleRoute }) {
	return <Master title={post.title} path={post.path} head={head}>
		<BlogPost post={post} />
	</Master>;
}