import React from 'react';

export default ({width, height, bgColor}) => (
    <div className={'bar-wrapper'}>
        <div className={'bar'}
             id={'bar'}
             style={{width: width, backgroundColor: bgColor, height: height}}>
        </div>
    </div>
);