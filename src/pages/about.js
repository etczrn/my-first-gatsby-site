import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function AboutPage() {
  return (
    <Layout>
      <h1>About This Site</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
}
