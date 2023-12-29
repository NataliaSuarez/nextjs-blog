import Layout from "./components/layout";
import styles from "../styles/AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <video className={styles.video} autoPlay muted loop playsInline>
        <source src="/videos/desktop.mp4" />
      </video>
      <Layout customStyles={styles.layout}>
        <h1 className={styles.title}>About Me</h1>
        <h3>
          Software Developer with 5 years of experience in the IT world. I've
          dedicated my career to researching and programming in different
          technologies. My experience in different projects has allowed me to
          form agile teams with a leadership role.
        </h3>
        <div className={styles.buttonContainer}>
          <a
            href="/natsuarez-resume.pdf"
            download="Natalia Suarez RESUME.pdf"
            className={styles.button}
          >
            Download RESUME
          </a>
        </div>
        <div className={styles.separator}></div>
        <h5>Contact</h5>
        <ul className={styles.list}>
          <li>
            <a href="mailto:suarez.nataliam@gmail.com">
              suarez.nataliam@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/natalia-suarez-dev/">
              Perfil LinkedIn
            </a>
          </li>
          {/* <li>nat developer</li> */}
        </ul>
      </Layout>
    </div>
  );
}
