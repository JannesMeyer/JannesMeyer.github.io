import React from "react";
import { Layout } from '../components/Layout';

const head = <link rel="stylesheet" href="/stylesheets/cv.css" />;

export default function PageCV() {
    return <Layout title="CV" head={head}>
        <article>
            <h1>Jannes Meyer</h1>
            <div className="links">
                <a href="https://jannesmeyer.com/"><img src="/images/logo.png" height="14" />Website</a>
                <a href="https://stackoverflow.com/users/619746/jannes?tab=profile"><img src="/images/logos/stack-overflow.svg" height="20" />Stack Overflow</a>
                <a href="https://github.com/JannesMeyer"><img src="/images/logos/github.svg" height="16" />GitHub</a>
            </div>
            <h2>Personal Summary</h2>
            <p>As a highly-skilled software developer I find passion in programming, solving complex problems, creating logical and innovative solutions. I would like to work with a team of like-minded developers in a challenging environenment where we can thrive together.</p>
            <p>I am thorough and precise in everything I do, and have a keen interest in technology, mobile applications and user experience. I have a long experience as a web developer, and am capable of all aspects of responsive web development and have worked on many software development projects using JavaScript/TypeScript.</p>
            <p>Right now I am looking for a suitable position as a specialized JavaScript/TypeScript developer with a company where outstanding performance is recognized and where I can work on a complex project.</p>
            <h2>Technical Profile</h2>
            <h3>Technology</h3>
            <ul>
                <li>Awareness of the web development industry and new technologies</li>
                <li>Developing multi-user applications within a (SOA) service orientated architecture</li>
                <li>Writing up technical manuals and user instructions</li>
                <li>Knowledge of international web standards and protocols</li>
            </ul>
        </article>
    </Layout>;
}