import { projects } from '../data/projects.data.js'
import { skills } from '../data/skills.data.js'

console.log('projects =>>> ', projects)

const skillsList = document.querySelector('#js-skills')
const projectsList = document.querySelector('#js-projects')

// Skills

skills.skills.forEach((skill) => {
  const skillElm = document.createElement('li');
  skillElm.innerText = skill;
  skillsList.appendChild(skillElm)
})


// Projects
let _projects = '';
projects.projects.forEach((project) => {
  const projectElm = `
    <article class="Project">
      <div class="Project__image">
        <img src="./src/images/content/projects/${project.project_image_url}" alt="${project.project_name}">
      </div>
      <div class="Project__info">
        <div>
          <strong>${project.project_name}</strong>
        </div>
        <div>
          <span>${project.team_name}</span>
        </div>
      </div>
    </article>
  `;
  _projects += projectElm;
  projectsList.innerHTML = _projects
})