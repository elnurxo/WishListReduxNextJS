import Head from "next/head";
import styles from "../styles/Home.module.css";
import homeImg from "../public/homepage.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>HomePage</h1>
        <div className="home-img-wrapper">
          <Image src={homeImg} alt="home page" width={900} height={500} />
        </div>
      </div>
    </div>
  );
}
