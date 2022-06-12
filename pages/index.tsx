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
         {/* <meta name="description" content="Watch TV shows and movies online. Stream TV episodes of South Park, Empire, SNL, Modern Family and popular movies on your favorite devices. Start your free trial now. Cancel anytime." /> */}
         <meta data-rh="true" name="google" content="notranslate" />
         <meta data-rh="true" name="keywords" content="Businesses card, virtual business card, online business card" />
         <meta data-rh="true" name="keywords" content="Augmented Reality business card,AR businesses card,VR businesses card,Virtual Reality Business card,Extended reality business card" />
         <meta data-rh="true" name="robots" content="index, follow"/>
         <meta name="Linkedin:site" content="@beyin-tech" />
         <meta name="instagram:site" content="@beyin.me" />
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
