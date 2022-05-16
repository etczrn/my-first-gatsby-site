import * as React from 'react';
import { Link } from 'gatsby';
import Layout from './layout';

export default function PostLayout({ children, pageContext }) {
  const { title, description, author } = pageContext.frontmatter;

  return (
    <Layout title={title} description={description}>
      {children}
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      <Link to="/">&larr; back</Link>
    </Layout>
  );
}
