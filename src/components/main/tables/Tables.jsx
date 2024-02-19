import React from 'react';
import './Tables.scss';

const Tables = () => {
    const productsArray = [
        {
            id: 1,
            price: 0,
            class: "Free",
            operators: 2,
        },
        {
            id: 2,
            price: 5,
            class: "Standard",
            operators: 5,
        },
        {
            id: 3,
            price: 10,
            class: "Premium",
            operators: 10,
        }
    ];

    return (
        <section className='tables'>
            <div className="container">
                <span className='line__span'></span>
                <div className="tables__main-box">
                    <h2 className='tables__title'>
                    Price Table
                    </h2>
                    <p className='tables__desc'>
                    We offer competitive price
                    </p>
                    <ul className='tables__list'>
                        {productsArray.map(item => (
                            <li key={item.id} className="tables__product">
                                <h4 className='tables__product-desc'>{item.class}</h4>
                                <p className='tables__product-text'>Brief price description</p>
                                <div className='tables__price-box'>
                                    <p className='tables__product-price'>
                                        {item.price}
                                    </p>
                                    <div className='tables__price-wrapper'>
                                        <p className='tables__product-dollar'>
                                            $
                                        </p>
                                        <p className='tables__mothly-text'>
                                            Per / month
                                        </p>
                                    </div>
                                </div>
                                <p className='tables__product-text'>{item.operators}+ Opeators</p>
                                <p className='tables__product-text'>Notifications</p>
                                <p className='tables__product-text'>Landing Pages</p>
                                <button>
                                    Order Now
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Tables;
