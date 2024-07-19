const Resource = ({name, link, description, image}) => {
    return (
        <div className="resource">
            <div className="img-wrapper">
                <img src={image} alt={name} />
                <div className="img-background"></div>
            </div>
            <div className="description">
                <h3>{name}</h3>
                <a href={link}>{link}</a>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Resource