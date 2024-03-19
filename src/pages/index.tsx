import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { ResetPointsButton } from '../components/ResetPointsButton';

import styles from '../styles/pages/Home.module.css';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  return (

    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.CompletedChallenges}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | Move It</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
              <ResetPointsButton />
            </div>
            <div>
              <ChallengeBox />
            </div>

          </section>
        </CountdownProvider>
      </div >
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

//Essa função precisar ter esse nome e ter async

//Tudo que eu fizer de chamada dentro do componente não vai estar disponível na tela pros motores de busca, porque ele não aguarda essa chamada ser finalizada pq ela roda somente no browse, o next não faz ela até ter construído a interface;
// se eu faço o acesso ao serviço externo por esse modo acima ele executa no servidor node e não no browse.

//quando eu uso essa função acima eu consigo dizer quais dados serão repassado do meu Next.js para o front-end

//back-end (Ruby)
//Next.js (Node.js) // aqui eu consigo fazer qualquer coisa que se faz num back-end tradicional, apesar de não ser totalmente recomendado
//Front-end (React)




