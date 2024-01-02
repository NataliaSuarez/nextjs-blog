import styles from "./layout.module.css";
import Head from "next/head";
// import utilStyles from "../styles/utils.module.css";


export default function Layout({ children, customStyles }) {
  return (
    <div className={[styles.container, customStyles].join(" ")}>
      <Head>
        <title>Nat Developer | Portfolio & Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Software Developer with 5 years of experience in the IT world. ``I've dedicated my career to researching and programming in different technologies. My experience in different projects has allowed me to form agile teams with a leadership role.``"
          key="desc"
        />
        <meta property="og:title" content="Nat Developer | Portfolio & Blog" />
        <meta
          property="og:description"
          content="Software Developer with 5 years of experience in the IT world. ``I've dedicated my career to researching and programming in different technologies. My experience in different projects has allowed me to form agile teams with a leadership role.``"
        />
        <meta
          property="og:image"
          content="https://nextjs-blog-xi-black.vercel.app/presentation.png"
        />
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