import { ProjectItem } from './ProjectItem';
import fresh from '../resources/fresh-e-commerce.jpg';
import journal from '../resources/journal-project.png';
import movies from '../resources/movies-project.png';
import calendar from '../resources/calendar-project.png';
import '../stylesheets/Projects.css';

export const Projects = () => {
    return (
        <div className="projects-container" id='projects'>
            <div className="divider" />
            <h2 className="projects-title">Mis Proyectos</h2>

            <div className="projects-flex-container">
                <ProjectItem title='Fresh - E-commerce' description='E-commerce completo, funcional y full responsive creado con React.Js, Strapi, Node.js y MongoDB' img={ fresh } url='https://fresh-e-commerce.netlify.app/' />
                <ProjectItem title='Movies App' description='Un app web de películas y series con React y Sass, que implementa la API de TMDB' img={ movies } url='https://moviesapp-uzielpatron.netlify.app/' />
                <ProjectItem title='Calendario con MERN' description='Aplicación de calendario creada con React, node.js, express y mongoDB' img={ calendar } url='https://my-mern-calendar-back-end.herokuapp.com/' />
                <ProjectItem title='Journal App' description='Aplicación de notas diarias con login en React.js' img={ journal } url='https://myjournalapp-uziel.netlify.app/' />
            </div>
    </div>
    )
}
