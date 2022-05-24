import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Container from "@material-ui/core/Container";
import Layout from "../components/Layout";
import Navbar from "../components/navbar/index"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Beyin</title>
        <meta name="description" content="Beyin Digital Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main>
      <Navbar />
      <Container>
     <Layout />
     </Container>
    </main>

    </div>
  )
}
