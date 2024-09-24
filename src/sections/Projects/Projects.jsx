import styles from './ProjectsStyles.module.css';
import skysnap from '../../assets/skysnap.webp';
import fitnation from '../../assets/fitnationlogo.png'
import splitbite from '../../assets/splitbite.webp';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={splitbite}
          link="https://splitbite-rust.vercel.app/"
          h3="SplitBite"
          p="Bill Splitter"
        />
        <ProjectCard
          src={skysnap}
          link="https://skysnap-nu.vercel.app/"
          h3="Sky Snap"
          p="Weather Secure"
        />
        <ProjectCard
          src={fitnation}
          link="https://fit-nation-alpha.vercel.app/"
          h3="FitNation"
          p="Coming Soon"
        />
      </div>
    </section>
  );
}

export default Projects;
