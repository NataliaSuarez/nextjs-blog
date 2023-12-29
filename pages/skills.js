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
            <li>
              <div>Client communication</div>
              <p>
                When interacting with clients, I find it important to listen
                carefully to their needs and concerns, as this is the key to
                fully understanding their requirements and expectations.{" "}
                <br></br>When faced with concerns, I have the ability to quickly
                analyze and resolve problems. <br></br>I am patient and
                courteous at all times, demonstrating my willingness to help and
                adapt.
              </p>
            </li>
            <li>
              <div>Scrum Master</div>
              <p>
                I actively contribute to sprint planning, progress tracking and
                continuous improvement. <br></br>I understand the value of
                collaboration, transparency and adaptability, and work closely
                with team members to ensure these principles are met. <br></br>I
                ensure the team is focused on key tasks and objectives, removing
                obstacles and encouraging effective communication.
              </p>
            </li>
            <li>
              <div>Product Manager Tools</div>
              <p>
                I seek to transform customer needs and desires into features and
                functionalities of a successful product. <br></br>I am able to
                coordinate and prioritize team activities to achieve established
                objectives.
              </p>
            </li>
            <li>
              <div>Strong Team Communication</div>
              <p>
                I have the ability to clearly convey the vision and goals of the
                project, as well as listen and understand the needs and concerns
                of your team. <br></br>I think the key is collaboration and
                constructive feedback.
              </p>
            </li>
            <li>
              <div>UI/UX</div>
              <p>
                I have the ability to improve the design of interfaces, aiming
                to make them more intuitive and attractive for the user
                experience. <br></br>I work closely with the design team as I
                consider their vision to be one of the most valuable for the
                product.
              </p>
            </li>
            <li>
              <div>Team Builder</div>
              <p>
                I have the ability to identify and recruit talent, as well as
                build a collaborative and positive work environment. <br></br>I believe
                that through feedback meetings, pair programming, celebrating
                milestones and moments of recreation, you can create a solid and
                effective team.
              </p>
            </li>
            <li>
              <div>Multiple Techs</div>
              <p>
                As a developer, I've experience in several programming
                languages, such as Python, Java, PHP, JavaScript, among others. <br></br>
                My in-depth knowledge of these languages allows me to quickly
                adapt to different development environments and address a wide
                range of technical challenges.
              </p>
            </li>
            <li>
              <div>Debugging</div>
              <p>
                I've strong skills in problem solving and debugging code
                efficiently. <br></br>I can identify and solve problems quickly, allowing
                me to maintain an efficient workflow.<br></br><br></br>
              </p>
            </li>
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
