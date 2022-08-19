
export const TechnologiesItem = ({ img, name }) => {
  return (
    <div className="technology-item-container">
        <div className="technology-item-img-container">
            <img src={ img } alt={ name } className='technology-item-img' />
        </div>
        <div className="technology-item-name">
            { name }
        </div>
    </div>
  )
}
