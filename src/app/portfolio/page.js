import React from 'react'
import Title from '../components/Title'
import ProjectCard from './ProjectCard'

export default function page() {
  return (
    <div className='container-fluid'>
      <Title {...{title: 'Things I\'ve built'}}/>
      <p>I've done multiple projects over the years. Here are a couple of them. </p>
      <p>You can find my web portfolio on my CodePen Profile. Link down on the social Section</p>
      <div class="row row-cols-1 row-cols-md-3 g-2">
        <ProjectCard {...{
                        title: 'projecTitle',
                        picture: './../portfolioPictures/project.jpg',
                        desc: 'project description',
                        tools: 'Tools used to built project',
                        repo: 'https://getbootstrap.com/docs/5.3/utilities/vertical-align/',
                        liveSite: 'https://getbootstrap.com/docs/5.3/utilities/vertical-align/',
                      }}>                  
        </ProjectCard>
        <ProjectCard {...{
                        title: 'projecTitle',
                        picture: './../portfolioPictures/project.jpg',
                        desc: 'project description',
                        tools: 'Tools used to built project',
                        repo: 'https://getbootstrap.com/docs/5.3/utilities/vertical-align/',
                        liveSite: 'https://getbootstrap.com/docs/5.3/utilities/vertical-align/',
                      }}>                  
        </ProjectCard>
        <ProjectCard {...{
                        title: 'projecTitle',
                        picture: './../portfolioPictures/project.jpg',
                        desc: 'project description',
                        tools: 'Tools used to built project',
                        repo: 'https://getbootstrap.com/docs/5.3/utilities/vertical-align/',
                        liveSite: 'https://getbootstrap.com/docs/5.3/utilities/vertical-align/',
                      }}>                  
        </ProjectCard>
        <ProjectCard {...{
                        title: 'projecTitle',
                        picture: './../portfolioPictures/project.jpg',
                        desc: 'project description',
                        tools: 'Tools used to built project',
                        repo: 'https://getbootstrap.com/docs/5.3/utilities/vertical-align/',
                        liveSite: 'https://getbootstrap.com/docs/5.3/utilities/vertical-align/',
                      }}>                  
        </ProjectCard>
      </div>
    </div>
  )
}
