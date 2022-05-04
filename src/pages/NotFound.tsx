import React from 'react';
import Master from '../components/Master';
import Route from '../classes/Route';

export default function PageNotFound({ route }: { route: Route }) {
	return <Master title="Not Found" path={route.path}>
		<h1>Not Found</h1>
	</Master>;
};