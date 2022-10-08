import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {

    const pricingOption = [
        {id: 1, name: 'Free', price: 0, features: [
            'Awesome Feature',
            'Extra Feature',
            'Hudai Feature'
        ]
    },
        {id: 2, name: 'Medium', price: 1200, features: [
            'Awesome Feature',
            'Extra Feature',
            'Hudai Feature'
        ]
    },
        {id: 3, name: 'Premium', price: 4000, features: [
            'Awesome Feature',
            'Extra Feature',
            'Hudai Feature'
        ]
    }
    ]

    return (
        <div>
            <h2 className='text-5xl p-5 bg-lime-300 '>Pricng</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingOption.map(option => <PriceOption
                    key={option.id}
                    option={option}
                    ></PriceOption>) 
                }
            </div>
        </div>
    );
};

export default Pricing;