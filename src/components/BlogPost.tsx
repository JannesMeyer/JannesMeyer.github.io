import React from 'react';
import ArticleRoute from '../classes/ArticleRoute';

interface BlogPostProps {
	post: ArticleRoute;
	showPreview?: boolean;
}

export function BlogPost({ post, showPreview }: BlogPostProps) {
	return <article className="BlogPost">
		<time className="PublishDate">{post.dateStr}</time>
		{showPreview && <h1><a href={post.path} dangerouslySetInnerHTML={{ __html: post.titleHTML }} /></h1>}
		{!showPreview && <h1 dangerouslySetInnerHTML={{ __html: post.titleHTML }} />}
		<div dangerouslySetInnerHTML={{ __html: (showPreview ? post.previewHTML || post.contentHTML : post.contentHTML) }} />
		{showPreview && post.previewHTML && <a href={post.path + '#continue'}>Continue reading →</a>}
	</article>;
}