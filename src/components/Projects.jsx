import '../stylesheets/Projects.css';
import { ProjectItem } from './ProjectItem';
import fresh from '../resources/fresh-e-commerce.png';
import journal from '../resources/journal-project.png';
import heroes from '../resources/heroes-project.png';
import calendar from '../resources/calendar-project.png';

export const Projects = () => {
    return (
        <div className="projects-container" id='projects'>
            <div className="divider"></div>
            <h2 className="projects-title">Mis Proyectos</h2>

            <div className="projects-flex-container">
                <ProjectItem title='Fresh - E-commerce' description='E-commerce completo, funcional y full responsive creado con React.Js, Strapi, Node.js y MongoDB' img={ fresh } url='https://fresh-e-commerce.netlify.app/' />
                <ProjectItem title='Calendario con MERN' description='Aplicación de calendario creada con React, node.js, express y mongoDB' img={ calendar } url='https://my-mern-calendar-back-end.herokuapp.com/' />
                <ProjectItem title='Journal App' description='Aplicación de notas diarias con login en React.js' img={ journal } url='https://myjournalapp-uziel.netlify.app/' />
                <ProjectItem title='Buscador de Heroes' description='Un sitio para buscar entre 20 héroes de Marvel y DC ' img={ heroes } url='https://heroes-single-page-app.netlify.app/' />
            </div>

    </div>
  )
}
