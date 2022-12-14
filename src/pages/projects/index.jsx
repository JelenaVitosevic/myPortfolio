import React from 'react'
import styles from './Projects.module.scss'
import Project from '../../components/atoms/project'
import cirillo from '../../components/images/projects/cirillo/cirillo.png'
import { projects } from '../../data/projects'
import Layout from '../../components/layout'

function ProjectsPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.projectsWrapper}>
          {projects.map((item) => {
            return (
              <Project key={item.id} image={cirillo} title={item.title} info={item.info} link={"https://github.com/JelenaVitosevic/cirillo_"}/>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage