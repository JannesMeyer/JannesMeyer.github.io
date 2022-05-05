import React from 'react';
import Route from '../classes/Route';
import { Layout } from '../components/Layout';

export default function PageNotFound({ route }: { route: Route }) {
	return <Layout title="Not Found" path={route.path}>
		<h1>Not Found</h1>
	</Layout>;
};