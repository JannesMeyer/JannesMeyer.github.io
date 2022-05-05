import React from 'react';
import Link from './Link';

interface P {
	title: string;
	path?: string;
	head?: React.ReactElement;
	children: React.ReactNode;
}

export function Layout(p: P) {
	return <html>
		<head>
			<title>{p.title}</title>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
			<link rel="icon" href="/images/favicon.png" />
			<link rel="stylesheet" href="/stylesheets/main.css?v=5" />
			<link rel="alternate" href="/blog/feed.xml" type="application/atom+xml" />
			{p.head}
		</head>
		<body>

			{p.path != null && <header>
				<nav className="Container">
					<a href="/" className="Logo" aria-hidden="true" tabIndex={-1}><img src="/images/logo.png" /></a>
					<ol>
						<li><Link href="/" path={p.path}>Portfolio</Link></li>
						<li><Link href="/blog/" path={p.path}>Blog</Link></li>
						<li><Link href="/contact" path={p.path}>Contact</Link></li>
						<li><Link href="https://github.com/JannesMeyer" path={p.path}>GitHub</Link></li>
					</ol>
				</nav>
			</header>}

			<main className="Container">
				{p.children}
			</main>

		</body>
	</html>;
}