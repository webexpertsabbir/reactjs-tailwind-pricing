import React from 'react';

const Link = ({route}) => {
    return (
        <div className='ml-2 text-lg'>
            <li><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;