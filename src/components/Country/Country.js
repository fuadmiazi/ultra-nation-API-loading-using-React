import React from 'react';

const Country = (props) => {
    const {name, population, region, flags} = props.country;
    //console.log(props);
    return (
        <div>
            <h4>This is {name.common}</h4>
            <img src={flags.png} width="200px" height="100px" alt="" />
            <p>Population: {population} </p>
            <p><small>Region: {region}</small></p>
            
        </div>
    );
};

export default Country;