import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

function HomeSlider({data}) {
      
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="banner-section">
                <div className="single-item">
                    <Slider {...settings}>
                        {
                            data?.map((data, index) => {
                                return <div className="banner-slide" data-aos="fade-up" key={index}  >
                                    <div className='background'
                                        style={{
                                            backgroundImage: `url(./assets/images/banner.png)`
                                        }}>
                                            <img src={data?.big_image ||'./assets/images/banner.png'} />
                                        <div className="container">

                                            <div className="handle_bannner row justify-content-end">
                                                <div className="banner-text">
                                                    <h1><span>{data?.title1}</span> {data?.title2}</h1>
                                                    <p>{data?.description}</p>
                                                    <div className="button d-flex">
                                                        <a href="#" className="btn btn-secondary">Download Now</a>
                                                        {/* <a href="#" className="btn btn-primary">I am a Supplier</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default HomeSlider
