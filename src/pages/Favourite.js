import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import MovieCard from '../components/MovieCard'
import HomeSlider from '../components/HomeSlider'
import { rapidapihost, rapidapikey, rapidapiurl } from '../utils/commen';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux'

function Favourite() {
    const filtersValue = useSelector((state)=>state.filtersData)
    const favouriteData = useSelector((state)=>state.favouriteData)
    console.log(favouriteData);
    
    const [data, setData] = useState(favouriteData.data)
    const [loading, setloading] = useState(true)
    const { pathname } = useLocation()
   
      

    return (
        <Layout>
            {
                // loading ?
                //     !<Loader /> :
                <>
                    <div className='container'>
                        <div className='d-flex justify-content-between align-items-center p-2 my-2'>
                            <div>
                            <h4 className='category_heading'>
                                Favourite Movies
                            </h4>
                            

                            </div>
                            {
                                pathname == "/all-movies" || filtersValue.searchValue ? "" :
                                    <a href='/all-movies' className='d-flex align-items-center gap-2'>View All <i class="fa-solid fa-arrow-right"></i> </a>
                            }
                        </div>
                        <div>
                            <ul className='row grid-view-filter m-0 p-0'>
                                {
                                    favouriteData.data?.filter((item)=>{
                                        if(filtersValue.searchValue){
                                            return item.title?.toLowerCase().includes(filtersValue.searchValue.toLowerCase())
                                        }else{
                                            return item
                                        }
                                    }).map((mt, index) => {
                                        return (
                                            <li key={index} className="col-lg-3 col-md-2 col-sm-1 p-2 align-items-center aos-init aos-animate" data-aos="fade-up">
                                                <MovieCard details={mt} />
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                        </div>

                    </div>

                </>

            }
        </Layout>
    )
}

export default Favourite