import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-lime-400 m-3 rounded p-4'>
            <div>
                <p><span className='text-6xl font-bold'>{option.price}</span>/mon<span></span></p>
                <p className='text-3xl mt-2'>{option.name}</p>
                {
                   features.map((feature, idx) => <Feature
                    key={idx}
                   feature={feature}
                   ></Feature>) 
                }
                <button className='bg-white p-3 rounded font-bold mt-3'>Buy Now</button>
            </div>
            
        </div>
    );
};

export default PriceOption;