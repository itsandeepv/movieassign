import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import MovieCard from '../components/MovieCard'
import HomeSlider from '../components/HomeSlider'
import { rapidapihost, rapidapikey, rapidapiurl } from '../utils/commen';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux'
import { removefilter } from '../redux/actions/searchAction';

function Home() {
    const filtersValue = useSelector((state) => state.filtersData)
    const dispatch = useDispatch()
    const [data, setData] = useState(JSON.parse(localStorage.getItem("movieData")) || [])
    const [loading, setloading] = useState(true)
    const { pathname } = useLocation()
    let bannerData = data?.filter((ie) => ie?.rank <= 5)
    const fetchMovieData = async () => {
        // setloading(false)
        const options = {
            method: 'GET',
            url: rapidapiurl,
            headers: {
                'x-rapidapi-host': rapidapihost,
                'x-rapidapi-key': rapidapikey
            }
        };
        axios.request(options)
            .then(response => {
                console.log(response.data, JSON.stringify(response));
                setloading(false)
                localStorage.setItem("movieData", JSON.stringify(response.data))
                setData(response.data)
            })
            .catch(error => {
                setloading(false)
                console.error(error);
            });
    }
    let filterData =  data?.filter((item) => {
        if (filtersValue?.fitlersValue?.filterby == "genre") {
            return item?.genre?.includes(filtersValue?.fitlersValue.value)
        }
        if (filtersValue?.fitlersValue?.filterby == "year") {
            return item?.year == filtersValue?.fitlersValue.value
        }

    }) 
    let movieData = filtersValue?.fitlersValue?.genre || filtersValue?.fitlersValue?.filterby ? filterData : pathname == "/all-movies" ? data : data?.slice(0, 8)

    // console.log(movieData  ,filtersValue?.fitlersValue,"<<<<<<<<");
    useEffect(() => {
        // fetchMovieData()
    }, [])
    return (
        <Layout>
            {
                // loading ?
                //     !<Loader /> :
                <>
                    {/* {
                        pathname == "/all-movies" || filtersValue.searchValue ? "" :
                            <div className='container'>
                                <div>
                                    <HomeSlider data={bannerData} />
                                </div>
                            </div>
                    } */}
                    <div className='container'>
                        <div className='d-flex justify-content-between align-items-center p-2 my-2'>
                            <div className='gap-3'>
                                <h4 className='category_heading'>
                                    {
                                        filtersValue.searchValue ? `Results For search : ${filtersValue.searchValue} ` :
                                            filtersValue?.fitlersValue?.filterby ? `Results For search : ${filtersValue?.fitlersValue?.filterby} ` :
                                                "Top 100 Movies"
                                    }

                                </h4>
                                <button className='btn btn-primary ml-3' style={{marginLeft:"8px"}} onClick={() => {
                                    dispatch(removefilter({}))
                                }}>
                                    Clear Filter
                                </button>

                            </div>
                            {
                                pathname == "/all-movies" || filtersValue.searchValue ? "" :
                                    <a href='/all-movies' className='d-flex align-items-center gap-2'>View All <i class="fa-solid fa-arrow-right"></i> </a>
                            }
                        </div>
                        <div>
                            <ul className='row grid-view-filter m-0 p-0'>
                                {
                                    movieData?.filter((item) => {
                                        if (filtersValue.searchValue) {
                                            return item.title?.toLowerCase().includes(filtersValue.searchValue.toLowerCase())
                                        } else {
                                            return item
                                        }
                                    }).map((mt, index) => {
                                        return (
                                            <li key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 p-2 align-items-center aos-init aos-animate" data-aos="fade-up">
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

export default Home