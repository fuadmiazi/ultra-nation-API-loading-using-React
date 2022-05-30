import React from 'react';

const Country = (props) => {
    const {name, population, region, flags} = props.country;
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'};
    const handleAddCountry = props.handleAddCountry;

    return (
        <div style={countryStyle}>
            <h4>This is {name.common}</h4>
            <img src={flags.png} width="200px" height="100px" alt="" />
            <p>Population: {population} </p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country </button>
        </div>
    );
};

export default Country;