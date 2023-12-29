import styles from "./layout.module.css";
import Head from "next/head";
// import utilStyles from "../styles/utils.module.css";


export default function Layout({ children, customStyles }) {
  return (
    <div className={[styles.container, customStyles].join(" ")}>
      <Head>
        <title>Nat Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Lorem ipsum" />
      </Head>
      <main>{children}</main>
      <footer>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a> */}
      </footer>
    </div>
  );
}