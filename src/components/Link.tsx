import React from 'react';

interface P {
	path: string;
	href: string;
}

/**
 * Link component
 */
export default class Link extends React.Component<P> {
	render() {
		let p = this.props;
		let currentPath = p.path.replace('index\.html$', '');
		let isActive = p.href === currentPath || p.href !== '/' && currentPath.startsWith(p.href);
		return <a href={p.href} className={isActive ? 'active' : undefined}>{p.children}</a>;
	}
}