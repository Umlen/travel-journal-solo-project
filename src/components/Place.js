import locationIcon from '../images/location-icon.png';

function Place(props) {
    return (
        <section className="place">
            <img src={props.place.imageUrl} className="place-img" alt={props.place.title} />
            <div className="place-info-wrapper">
                <div className="place-location-wrapper">
                    <img src={locationIcon} alt="" />
                    <p className="place-location-country">{props.place.location}</p>
                    <a href={props.place.googleMapsUrl} className="place-location-map-link">View on Google Maps</a>
                </div>
                <h1 className="place-title">{props.place.title}</h1>
                <p className="place-dates">{props.place.startDate} - {props.place.endDate}</p>
                <p className="place-description">{props.place.description}</p>
            </div>
        </section>
    )
}

export default Place;