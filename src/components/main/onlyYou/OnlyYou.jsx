import React from 'react'
import './OnlyYou.scss';


const OnlyYou = () => {
    
    const productsArray = [
        {
            id: 1,
            title: "First click tests",
            desc: "While most people enjoy casino gambling,",
            image: `<svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z" fill="#fff"></path> </g></svg>`,
        }, {
            id: 2,
            title: "Design surveys",
            desc: "Sports betting, lottery and bingo playing for the fun",
            image: `<svg fill="#fff" width="14px" height="14px" viewBox="0 0 52 52" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.23,3H40.77A3.29,3.29,0,0,1,44,6.33V9.67A3.29,3.29,0,0,1,40.77,13H5.23A3.29,3.29,0,0,1,2,9.67V6.33A3.29,3.29,0,0,1,5.23,3ZM5.15,18h19.7A3.26,3.26,0,0,1,28,21.33v3.34A3.26,3.26,0,0,1,24.85,28H5.15A3.26,3.26,0,0,1,2,24.67V21.33A3.26,3.26,0,0,1,5.15,18ZM39,28A11,11,0,1,1,28,39,11,11,0,0,1,39,28Zm7,7.92a.84.84,0,0,0,0-1l-1.12-1a.77.77,0,0,0-1.12,0l-6,6.72-2.72-2.72a.77.77,0,0,0-1.12,0l-1.12,1a.68.68,0,0,0,0,1l3.84,3.76a1.58,1.58,0,0,0,1.12.48,1.45,1.45,0,0,0,1.12-.48ZM5.2,33H23.76a16.14,16.14,0,0,0-1,5,17.11,17.11,0,0,0,.48,5H5.2A3.28,3.28,0,0,1,2,39.67V36.33H2A3.28,3.28,0,0,1,5.2,33Z"></path> </g></svg>`

        },
        {
            id: 3,
            title: "Preference tests",
            desc: "The Myspace page defines the individual.",
            image: `<svg width="14px" height="14px" viewBox="0 -1 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>heart-like</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-102.000000, -882.000000)" fill="#fff"> <path d="M126,882 C122.667,882 119.982,883.842 117.969,886.235 C116.013,883.76 113.333,882 110,882 C105.306,882 102,886.036 102,890.438 C102,892.799 102.967,894.499 104.026,896.097 L116.459,911.003 C117.854,912.312 118.118,912.312 119.513,911.003 L131.974,896.097 C133.22,894.499 134,892.799 134,890.438 C134,886.036 130.694,882 126,882" id="heart-like" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`
        }, {
            id: 4,
            title: "Five second tests",
            desc: "Personal choices and the overall personality of the person. ",
            image: `<svg fill="#fff" height="14px" width="14px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M422.957,478.609h-16.696v-89.044c0-58.16-33.276-108.601-81.734-133.565c48.954-25.22,81.734-75.864,81.734-133.565 V33.391h16.696c9.217,0,16.696-7.473,16.696-16.696C439.652,7.473,432.174,0,422.957,0C355.995,0,156.678,0,89.044,0 c-9.217,0-16.696,7.473-16.696,16.696c0,9.223,7.479,16.696,16.696,16.696h16.696v89.044c0,57.692,32.771,108.341,81.734,133.565 c-48.459,24.964-81.734,75.405-81.734,133.565v89.044H89.044c-9.217,0-16.696,7.473-16.696,16.696 c0,9.223,7.479,16.696,16.696,16.696c111.521,0,222.498,0,333.913,0c9.217,0,16.696-7.473,16.696-16.696 C439.652,486.082,432.174,478.609,422.957,478.609z M139.641,132.511c-0.817-9.509-0.511-5.456-0.511-99.12H372.87 c0,93.664,0.306,89.611-0.511,99.12H139.641z M372.87,459.661c-92.104-76.755-88.747-75.372-100.174-79.41v-18.512 c0-9.223-7.479-16.696-16.696-16.696s-16.696,7.473-16.696,16.696v18.511c-11.307,3.996-7.768,2.403-100.174,79.41v-70.095 c0-58.759,43.63-107.391,100.174-115.536v20.927c0,9.223,7.479,16.696,16.696,16.696s16.696-7.473,16.696-16.696v-20.927 c56.544,8.145,100.174,56.777,100.174,115.536V459.661z"></path> </g> </g> </g></svg>`
        }
    ]

  return (
    <section className='onlyYou'>
    <div className="onlyYou__background">
        <div className="container">
            <div className="onlyYou__main-box">
                <h2 className='onlyYou__title'>
                    Product was Built Specifically for You
                </h2>
                {/* Move the ul outside of the map function */}
                <ul className='onlyYou__list'>
                    {productsArray.map(item => (
                        <li key={item.id} className="onlyYou__product">
                            <div className='onlyYou__product-image' dangerouslySetInnerHTML={{ __html: item.image }} />
                            <h3 className='onlyYou__product-title'>{item.title}</h3>
                            <p className='onlyYou__product-desc'>{item.desc}</p>
                        </li>
                    ))}
                </ul>

                <button className='onlyYou__button'>
                    Sign up now 
                </button>
            </div>
        </div>
    </div>
</section>

  )
}

export default OnlyYou


