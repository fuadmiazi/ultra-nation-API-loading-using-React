import React from 'react';

const Country = (props) => {
console.log(props.name);
    return (
        <div>
            <h4>This is {props.name}</h4>
        </div>
    );
};

export default Country;