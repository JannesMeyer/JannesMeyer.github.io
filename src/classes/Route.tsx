import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default class Route {

	constructor(public path: string, public view: React.ComponentType<any>) {}

	renderStaticMarkup() {
		return '<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(<this.view route={this} />);
	}

}