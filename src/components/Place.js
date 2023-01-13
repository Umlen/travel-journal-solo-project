function Place(props) {
    return (
        <section className="place">
            <img src={props.place.imageUrl} className="place-img" alt={props.place.title} />
            <div className="place-info-wrapper">
                <div>
                    <p>{props.place.location}</p>
                    <a href={props.place.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.place.title}</h1>
                <p>{props.place.startDate} - {props.place.endDate}</p>
                <p>{props.place.description}</p>
            </div>
        </section>
    )
}

export default Place;