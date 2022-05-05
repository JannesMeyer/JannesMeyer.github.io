import React from 'react';
import ArticleRoute from '../classes/ArticleRoute';

interface P {
	post: ArticleRoute;
	showPreview?: boolean;
}

export default function BlogPost(p: P) {
	return <article className="BlogPost">
		<time className="PublishDate">{p.post.dateStr}</time>
		{p.showPreview && <h1><a href={p.post.path} dangerouslySetInnerHTML={{ __html: p.post.titleHTML }} /></h1>}
		{!p.showPreview && <h1 dangerouslySetInnerHTML={{ __html: p.post.titleHTML }} />}
		<div dangerouslySetInnerHTML={{ __html: (p.showPreview ? p.post.previewHTML || p.post.contentHTML : p.post.contentHTML) }} />
		{p.showPreview && p.post.previewHTML && <a href={p.post.path + '#continue'}>Continue reading →</a>}
	</article>;
}