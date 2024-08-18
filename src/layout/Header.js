import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addfilter, searchAction } from "../redux/actions/searchAction";

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.favouriteData)
    const [show, setshow] = useState(false);
    const [showtoggle, setshowtoggle] = useState(false);
    const [showsub, setshowsub] = useState(false);
    const [searchValue, setsearchValue] = useState("");
    const [filtervalue, setfiltervalue] = useState("");
    const outsideClick = () => {
        setshow(false);
        setshowtoggle(false);
    };

    const handleSearch = () => {
        // navigate("/search?query="+searchValue)
        dispatch(searchAction(searchValue))
    }

    return (
        <>
            <div className="header">
                <div className="container">
                    <div
                        className="outsideClick"
                        onClick={() => outsideClick()}
                        style={
                            show == false && showtoggle == false ? { display: "none" } : {}
                        }
                    ></div>
                    <div className="rowcus justify-content-between align-items-center">
                        <div className="left d-flex align-items-center">
                            <div className="logo">
                                <Link to="/">
                                    Movies
                                </Link>
                            </div>
                            <div
                                className="nav"
                                style={showtoggle == true ? { display: "block" } : {}}
                            >
                                <ul className="m-0">
                                    <li
                                        className="dropdown2 dropdown">
                                        <Link to="#">
                                            Genre{" "}
                                            <span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </span>
                                        </Link>
                                        <ul
                                            className="dropdown-menu m-0"
                                            style={showsub == true ? { display: "block" } : {}}
                                        >
                                            {
                                                ["Crime", "Action", 'Adventure', 'Drama'].map((item, index) => {
                                                    return (
                                                        <li key={index} onClick={() => {
                                                            navigate("/")
                                                            dispatch(addfilter({
                                                                filterby:"genre",
                                                                value:item
                                                            }))  }}>
                                                            <Link>{item}</Link>
                                                        </li>

                                                    )
                                                })
                                            }
                                        </ul>
                                        <span
                                            class={
                                                showsub == true
                                                    ? "drop-button  active  "
                                                    : "drop-button"
                                            }
                                            onClick={() => setshowsub(!showsub)}
                                        ></span>
                                    </li>
                                    {/* <li
                                        className="dropdown2 dropdown">
                                        <Link to="#">
                                            Genre{" "}
                                            <span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </span>
                                        </Link>
                                        <ul
                                            className="dropdown-menu m-0"
                                            style={showsub == true ? { display: "block" } : {}}
                                        >

                                            <li>
                                                <Link to="/our-videos">Bollywood(2024)</Link>
                                            </li>
                                            <li>
                                                <Link to="/our-videos">Bollywood(2023)</Link>
                                            </li>
                                            <li>
                                                <Link to="/our-videos">Bollywood(2022)</Link>
                                            </li>
                                        </ul>
                                        <span
                                            class={
                                                showsub == true
                                                    ? "drop-button  active  "
                                                    : "drop-button"
                                            }
                                            onClick={() => setshowsub(!showsub)}
                                        ></span>
                                    </li> */}
                                    <li
                                        className="dropdown2 dropdown">
                                        <Link to="#">
                                            Hollywood{" "}
                                            <span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </span>
                                        </Link>
                                        <ul
                                            className="dropdown-menu m-0"
                                            style={showsub == true ? { display: "block" } : {}}
                                        >
                                            {
                                                ["2024", "2023", "2022"].map((item, index) => {
                                                    return (
                                                        <li key={index} onClick={()=>{
                                                            navigate("/")
                                                            dispatch(addfilter({
                                                                filterby:"year",
                                                                value:item
                                                            }))
                                                        }}>
                                                            <Link >Hollywood({item})</Link>
                                                        </li>
                                                    )
                                                })
                                            }

                                          
                                        </ul>
                                        <span
                                            class={
                                                showsub == true
                                                    ? "drop-button  active  "
                                                    : "drop-button"
                                            }
                                            onClick={() => setshowsub(!showsub)}
                                        ></span>
                                    </li>


                                </ul>
                            </div>
                        </div>

                        <div className="right d-flex">
                            <div className=" search_dev align-items-center gap-2">
                                <input type="text" value={searchValue} onKeyPress={(e) => {
                                    if (e.key == "Enter") { handleSearch() }
                                }} onChange={(e) => {
                                    dispatch(searchAction(e.target.value))
                                    setsearchValue(e.target.value)
                                }} className="form-control" placeholder="search movie" />
                                <button onClick={() => handleSearch()} className="btn btn-primary">
                                    Search
                                </button>
                            </div>
                            <span className="fav_icon" onClick={()=>{
                                navigate("/favourites")
                            }}>
                                <i class="fa-sharp fa-solid fa-heart"></i>
                                <span className="count">{data.length || 0}</span>
                            </span>
                            <div
                                id="toggle"
                                className={showtoggle == true ? "on" : ""}
                                onClick={() => setshowtoggle(!showtoggle)}
                            >
                                <div className="one"></div>
                                <div className="two"></div>
                                <div className="three"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Header;
