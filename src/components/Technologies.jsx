import { TechnologiesItem } from './TechnologiesItem';
import react from '../resources/react.png';
import html from '../resources/html.png';
import css from '../resources/css.png';
import javascript from '../resources/javascript2.png';
import illustrator from '../resources/illustrator.png';
import photoshop from '../resources/photoshop.png';
import reactNative from '../resources/react-native.png';
import node from '../resources/node.png';
import git from '../resources/git.png';
import typescript from '../resources/typescript.png';
import '../stylesheets/Technologies.css';

export const Technologies = () => {
    return (
        <div className="technologies-container" id='technologies'>
            <div className="divider"></div>
            <h2 className="technologies-title">Tecnologías</h2>
            <p className="technologies-p">Les dejo algunas de las tecnologías o herramientas con las que he tenido la oportunidad de desarrollar</p>

            <h3 className="technologies-subtitle">Lenguajes y frameworks</h3>
            <div className="technologies-items-container">
                <TechnologiesItem img={ html } name='Html' />
                <TechnologiesItem img={ css } name='Css' />
                <TechnologiesItem img={ javascript } name='JavaScript' />
                <TechnologiesItem img={ typescript } name='TypeScript' />
                <TechnologiesItem img={ react } name='React' />
                <TechnologiesItem img={ reactNative } name='React Native' />
            </div>

            <h3 className="technologies-subtitle">Otros conocimientos</h3>
            <div className="technologies-items-container">
                <TechnologiesItem img={ illustrator } name='Illustrator' />
                <TechnologiesItem img={ photoshop } name='Photoshop' />
                <TechnologiesItem img={ git } name='Git' />
                <TechnologiesItem img={ node } name='Node.js' />
            </div>
        </div>
    )
}
