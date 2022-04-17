import Head from "next/head";

import Code from "../components/Code";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Docs() {
  return (
    <div className="bg-background">
      <Head>
        <title>annalang - A toy programming language based on an inside joke</title>
        <meta property="og:title" content="annalang - A toy programming language based on an inside joke" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content="https://annalang.js.org" key="url" />
        <meta property="og:description" content="annalang is dynamically typed toy programming language, based on an inside joke, written in Typescript. Created by Aniket Singh and Rishabh Tripathi." key="description" />
        <meta name="description" content="annalang is dynamically typed toy programming language, based on an inside joke, written in Typescript. Created by Aniket Singh and Rishabh Tripathi." />
        <meta property="og:site_name" content="annalang Documentation" key="siteName" />
      </Head>
      <Header />
      <Code />
      <Documentation />
      <Footer />
    </div>
  );
}

