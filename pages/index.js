import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";

import db from "./db.json";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import QuizContainer from "../src/components/QuizContainer";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import ButtonLogo from "../src/components/ButtonLogo";

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState("");

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
        <ButtonLogo as="a" href="/" title="AluraQuiz - GusDePaula">
          <QuizLogo />
        </ButtonLogo>
        <Widget>
          <Widget.Header>
            <h1>AluraQuiz - GusDePaula</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Teste os seus conhecimentos sobre CSS e vamos ver quantos layouts
              você vai deixar de quebrar
            </p>
            <form
              onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log("Fazendo uma submissão por meio do react");
              }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) =>
                  setName(infosDoEvento.target.value)
                }
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer></Footer>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gusdepaula"></GitHubCorner>
    </QuizBackground>
  );
}
