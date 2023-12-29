import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "./components/layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.grid}>
        <div className={[styles.card, styles.gridA].join(" ")}>
          <Link href="/about-me">
            <p>
              NATALIA <strong>SUAREZ</strong>
            </p>
            <div className={styles.subtitle}>
              FULLSTACK
              <br />
              DEVELOPER
            </div>
            <p>&rarr;</p>
          </Link>
        </div>

        <div
          className={[styles.card, styles.cardBrown, styles.gridB].join(" ")}
        >
          <Link href="/skills">
            <p>Skills & Capabilities Challenges &rarr;</p>
          </Link>
        </div>

        <div className={[styles.card, styles.gridC].join(" ")}>
          <Link href="/projects">
            <p>Projects &rarr;</p>
          </Link>
        </div>

        <div
          className={[styles.card, styles.cardBlueGray, styles.gridD].join(" ")}
        >
          <p>
            Global
            <br />
            <strong>news</strong> &rarr;
          </p>
          <div className={styles.soon}>SOON!</div>
        </div>

        <div
          className={[styles.card, styles.cardBlueGray, styles.gridE].join(" ")}
        >
          <p>
            KNOWLEDGE <strong>HUB</strong> &rarr;
          </p>
          <div className={styles.soon}>SOON!</div>
        </div>

        <div
          className={[styles.card, styles.cardLightBrown, styles.gridF].join(
            " "
          )}
        >
          {/* <p>
            Human Resources
            <br />
            <strong>System</strong> &rarr;
          </p> */}
        </div>

        <div className={[styles.card, styles.cardBlue, styles.gridG].join(" ")}>
          <p>Learning & Development Community &rarr;</p>
          <div className={styles.soon}>SOON!</div>
        </div>

        <div className={[styles.card, styles.cardImg, styles.gridH].join(" ")}>
          <Link href="/about-me">
            <p>
              About
              <br />
              Me &rarr;
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
