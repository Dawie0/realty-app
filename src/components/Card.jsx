/* eslint react/prop-types: 0 */
import './card.css'

const Card = ( { property } ) => {
    return (
        <div className="col-xs-12 col-sm-4 col-md-3 m-2 card glass-morph">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 d-flex justify-content-center">
                    <img className='prop-image' src={property.photo} />
                </div>
                <div className=" col-12 text-center d-flex justify-content-center align-items-center">
                    <h3>{property.short_price} {property.prop_type}</h3>
                </div>
                <div className="col-12 text-center">
                    <span>{property.beds} Bed - {property.baths_full} Bath</span>
                </div>
                <div className="col-12 text-center">
                    <span>{property.address}</span>
                </div>
                <div className="col-12  d-flex justify-content-center align-items-center">
                    <a href={property.rdc_web_url} target="_blank" rel='noreferrer'>
                        details
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Card