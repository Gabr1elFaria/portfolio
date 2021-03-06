import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { AboutContainer } from "../styles/About.styles";

const About: NextPage = () => {
  return (
    <AboutContainer>
      <Head>
        <title>Portfolio | About</title>
        <meta name="description" content="Links úteis sobre Next.js" />
      </Head>
      <header>
        <Link href={"/"}>&larr; Back to home</Link>
        <h1>About</h1>
      </header>
      <div>
          <a href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
    </AboutContainer>
  );
};

export default About;
