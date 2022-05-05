import React from 'react';
import Route from '../classes/Route';
import { Layout } from '../components/Layout';

export default function PageContact({ route }: { route: Route }) {
	return <Layout title="Contact" path={route.path}>
		<article style={{ minHeight: 200 }}>
			<a href="mailto:contact@jannesmeyer.com">contact@jannesmeyer.com</a>
		</article>
	</Layout>;
}