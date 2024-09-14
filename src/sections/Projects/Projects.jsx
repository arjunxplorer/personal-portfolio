import styles from './ProjectsStyles.module.css';
import skysnap from '../../assets/skysnap.webp';
import splitbite from '../../assets/splitbite.webp';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={splitbite}
          link="https://github.com/arjunxplorer/splitbite"
          h3="SplitBite"
          p="Bill Splitter"
        />
        <ProjectCard
          src={skysnap}
          link="https://github.com/arjunxplorer/WeatherApp-API-Authentication-"
          h3="Sky Snap"
          p="Weather Secure"
        />
      </div>
    </section>
  );
}

export default Projects;
