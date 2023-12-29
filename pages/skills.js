import Layout from "./components/layout";
import styles from "../styles/Skills.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Skills() {
  return (
    <div>
      <Link href="#capabilities">
        <div className={styles.scrollButton}>&#10597;</div>
      </Link>
      <Layout customStyles={styles.layout}>
        <h1 className={utilStyles.title}>Skills & Capabilities, Challenges</h1>
      </Layout>
      <div id="capabilities" className={styles.section}>
        <Layout>
          <h3>Skills & Capabilities</h3>
          <h5 className={styles.description}>
            These are some of the skills and abilities in which I excel as a
            programmer. In this profession the most important thing is to
            continue learning and improving, that is why I seek to stay updated
            with the latest technologies and trends in the world of programming.
            I hope to have the opportunity to showcase my experience and work on
            challenging projects in the future.
          </h5>
          <ul className={styles.list}>
            <li>
              <div>Leadership Management</div>
              <p>
                As a leader and manager, I'm capable of motivating and guiding a
                team members towards achieving common objectives. <br></br>I
                seek to communicate effectively, creating a positive environment
                and encouraging collaboration. I use a logical and analytical
                approach to evaluate all options before reaching a conclusion.{" "}
                <br></br>
                When faced with conflicts, I believe that the best solution is
                to face them, allowing the team to continue growing.
              </p>
            </li>
            <li>Client communication</li>
            <li>Scrum Master</li>
            <li>Product Manager Tools</li>
            <li>Strong Team Communication</li>
            <li>Design Thinking Process</li>
            <li>UX Tools</li>
            <li>Team Builder</li>
            <li>Design Patterns</li>
            <li>Product Delivery</li>
          </ul>
        </Layout>
      </div>
      {/* <div id="challenges" className={styles.section}>
        <Layout>
          <h3>Challenges</h3>
          <h5>Lorem ipsum</h5>
          <ul>
            <li>Leadership Management</li>
            <li>Client communication</li>
            <li>Scrum Master</li>
            <li>Product Manager Tools</li>
            <li>Strong Team Communication</li>
            <li>Design Thinking Process</li>
            <li>UX Tools</li>
            <li>Team Builder</li>
            <li>Design Patterns</li>
            <li>Product Delivery</li>
          </ul>
        </Layout>
      </div> */}
    </div>
  );
}
