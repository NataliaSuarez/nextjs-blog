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
      </div>
      <div id="challenges" className={styles.section}>
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
      </div>
    </div>
  );
}
