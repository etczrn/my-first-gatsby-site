import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        This StaticImage component doesn't show image from online but shows
        image from images folder. It's weird.
      </p>
      {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      /> */}
      <StaticImage src="../images/icon.png" alt="" />
    </Layout>
  );
};

export default IndexPage;
