import React from 'react';
import Master from '../components/Master';
import Route from '../classes/Route';

export default function PageContact({ route }: { route: Route }) {
	return <Master title="Contact" path={route.path}>
		<article style={{ minHeight: 200 }}>
			<a href="mailto:contact@jannesmeyer.com">contact@jannesmeyer.com</a>
		</article>
	</Master>;
}