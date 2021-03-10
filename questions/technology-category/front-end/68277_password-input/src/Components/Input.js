import React from 'react';


export default ({type, value, onChange}) => (
    <div style={{display: "flex", alignItems: 'center'}}>
        <input
            id={'input'}
            type={type}
            value={value}
            onChange={onChange}
        />
    </div>
);