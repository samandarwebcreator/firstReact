import React from 'react'
import './Strategies.scss';
import zeroImage from "../../../assets/images/stratgyzeroImg.jpg";
import firstImage from "../../../assets/images/stratgyfirstImg.jpg";
import secondImage from "../../../assets/images/stratgysecondImg.jpg";

const Strategies = () => {
    const productsArray = [
        {
            id: 1,
            date: "By Wahid Ari | 03 March 2019",
            title: "Increasing Prosperity With Positive Thinking",
            image: zeroImage
        },
        {
            id: 2,
            date: "By Wahid Ari | 03 March 2019",
            title: "Motivation Is The First Step To Success",
            image: firstImage
        },
        {
            id: 3,
            date: `By Wahid Ari | 03 March 2019`,
            title: "Success Steps For Your Personal Or Business",
            image: secondImage
        }
    ];

    return (
        <section className='strategies'>
            <div className="container">
                <div className="strategies__main-box">
                    <h2 className='strategies__title'>
                        Contents Strategies
                    </h2>
                    <p className='strategies__desc'>
                        We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                    </p>
                    {/* Move the ul outside of the map function */}
                    <ul className='strategies__list'>
                        {productsArray.map(item => (
                            <li key={item.id} className="strategies__product">
                                <img className='strategies__image' src={item.image} alt="work buildings" />
                                <p className='strategies__product-desc'>{item.date}</p>
                                <h3 className='strategies__product-title'>{item.title}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Strategies;
