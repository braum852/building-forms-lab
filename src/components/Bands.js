import React from "react";

const Bands = props => {
    const bands = props.bands.map((band, index) => {
        return <li key={index}>{band.name}</li>
        })

    return (
        <div>
            {bands}
        </div>
    )
}

export default Bands;

//1) renders each li with the correct name