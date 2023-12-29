import Layout from "../components/layout";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/Projects.module.css";
import Link from "next/link";
import { experience } from "../../data/experience";

export default function MyProjects() {
  return (
    <div>
      <Link href="#all">
        <div className={styles.scrollButton}>&#10597;</div>
      </Link>
      <Layout customStyles={styles.layout}>
        <h1 className={utilStyles.title}>My Projects</h1>
      </Layout>
      <div id="all" className={styles.section}>
        <Layout>
          <h5>Projects I've worked on</h5>
          <div className={styles.grid}>
            {experience.map((e) => (
              <div id={e.id} className={styles.card}>
                <div className={styles.project}>{e.project} <div className={styles.date}>{e.date}</div></div>
                <div className={styles.position}>
                  {e.position} | {e.company}
                </div>
                <p className={styles.about}>{e.data}</p>
                <div className={styles.techs}>
                  {e.tech.map((t) => (
                    <div className={styles.label}>{t}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Layout>
      </div>
    </div>
  );
}
