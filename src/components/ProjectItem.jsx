

export const ProjectItem = ({ title, description, img, url,  }) => {
    return (
        <div className="project-item-container">
            <a href={ url } target="_blank" >
                <img src={ img } alt={ title } />
                <h4>{ title }</h4>
                <p>{ description }</p>
                <div className="background-hover"></div>
            </a>
            
        </div>
    )
}
