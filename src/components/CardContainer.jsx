/* eslint react/prop-types: 0 */
import Card from "./Card"

const CardContainer = ({ properties }) => {
    const handleCardPopulate = () => {
        return (
            properties.map((property, index) => {
                return (
                    <Card 
                        key={index}
                        property={property}
                    />
                )
            })
        )
        
    }

    return (
        <div className="row m-3 justify-content-center">
            {handleCardPopulate()}
        </div>
    )

}

export default CardContainer