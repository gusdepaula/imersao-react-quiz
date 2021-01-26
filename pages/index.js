import React from "react";
import styled from "styled-components";
import Head from "next/head";

import db from "./db.json";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - GusDePaula</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="AluraQuiz - GusDePaula" />
        <meta
          name="description"
          content="Projeto construido durante a Imersão React edição NextJS da Alura!"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://imersao-react-quiz.gusdepaula.vercel.app/"
        />
        <meta property="og:title" content="AluraQuiz - GusDePaula" />
        <meta
          property="og:description"
          content="Projeto construido durante a Imersão React edição NextJS da Alura!"
        />
        <meta
          property="og:image"
          content="blob:https://vercel.com/067a36bf-48e8-46b4-9bd2-11c847abfe51"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="AluraQuiz - GusDePaula" />
        <meta
          property="twitter:description"
          content="Projeto construido durante a Imersão React edição NextJS da Alura!"
        />
        <meta
          property="twitter:image"
          content="blob:https://vercel.com/067a36bf-48e8-46b4-9bd2-11c847abfe51"
        ></meta>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Teste</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem lorem lorem</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Teste</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem lorem lorem</p>
          </Widget.Content>
        </Widget>
        <Footer></Footer>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gusdepaula"></GitHubCorner>
    </QuizBackground>
  );
}
