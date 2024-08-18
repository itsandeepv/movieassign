import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoFavourite, removeFav } from '../redux/actions/addToFavActions'

function MovieCard({details}) {
    const dispatch = useDispatch()
    const {data} = useSelector((state)=>state.favouriteData)
    const checkAddedToFav = data.find((item)=>item?.id == details.id)
    // console.log(data , "<<<<<<<<<Adf" ,checkAddedToFav ,details);
    
    return (
        <div className='movie_card'>
            <span className='play_icon'>
                <svg viewBox="0 0 512 512" width="80" height="80" >
                    <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" /></svg>
            </span>
            <span className='lang_title'>Rating : {details?.rating||""}</span>
            <img src={details?.big_image ||'/assets/images/post_2.jpg'}  style={{objectFit:"none"}}/>
            <span className='movie_title'>
                {details?.title ||""}({details?.year||""})
            </span>
            <div className='description_box'>
                <p className='m-0 title'>{details?.title ||""}({details?.year||""})</p>
                <p>
                {details?.description ||""}
                </p>
                <div>
                    {/* <p className='m-0 p-0'><span>Country:</span> India</p> */}
                    <p className='m-0 p-0'><span>Genre: </span>
                    {
                        details?.genre?.map((item)=>item+",")
                    }
                    </p>
                </div>
                <div className='m-0 py-2'>
                    <button className='fav_btn' onClick={()=>{
                        if(!checkAddedToFav){
                            dispatch(addtoFavourite(details))
                        }else{
                            dispatch(removeFav(details))
                        }
                    }}> 
                    {
                        checkAddedToFav ? "Remove to Favourite" :
                        <>
                        <i class="fa-sharp fa-solid fa-heart"></i> Add to Favourite
                        </>
                    }
                    </button>
                </div>

            </div>
        </div>
    )
}

export default MovieCard