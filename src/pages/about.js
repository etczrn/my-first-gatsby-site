import * as React from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components/seo';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About This Site"
        description="More information about this site."
      />
      <main>
        <h1>About This Site</h1>
        <Link to="/">Home</Link>
      </main>
    </>
  );
}
