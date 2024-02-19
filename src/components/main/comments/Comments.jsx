import React from 'react';
import './Comments.scss';
import stars from "../../../assets/icons/stars.svg";
import firstComment from "../../../assets/icons/commentsFirst.svg";
import secondComment from "../../../assets/icons/commentsSecond.svg";
import thirdComment from "../../../assets/icons/commentsThird.svg";

const Comments = () => {
    const productsArray = [
        {
            id: 1,
            name: "Wahid Ari",
            occupation: "Designer",
            desc: "Product helps you see how many more days you need to work to reach your financial goal.",
            rating: stars,
            img: firstComment,
        },
        {
            id: 2,
            name: "Wahid Ari",
            occupation: "Designer",
            desc: "Product helps you see how many more days you need to work to reach your financial goal.",
            rating: stars,
            img: secondComment,
        },
        {
            id: 3,
            name: "Wahid Ari",
            occupation: "Designer",
            desc: "Product helps you see how many more days you need to work to reach your financial goal.",
            rating: stars,
            img: thirdComment,
        }
    ];

    return (
        <section className='comments'>
            <div className="container">
                <div className="comments__main-box">
                    <h2 className='comments__title'>
                    What Clients Say
                    </h2>
                    <p className='comments__desc'>
                    Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics 
                    </p>
                    <ul className='comments__list'>
                        {productsArray.map(item => (
                            <li key={item.id} className="comments__product">
                                    <img className='comments__stars' src={item.rating} alt="rating stars" />
                                <p className='comments__desc'>
                                    {item.desc}
                                </p>
                                <div className='comments__profile-box'>
                                    <span>
                                        <img src={item.img} alt="profile photo" />
                                    </span>
                                    <div className='comments__profile-wrapper'>
                                        <h4>
                                            {item.name}
                                        </h4>
                                        <p>
                                            {item.occupation}
                                        </p>
                                    </div>
                                </div>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Comments;
