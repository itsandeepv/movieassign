import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {

    return (
        <>
            <footer >
                <div className="container" >
                   
                    <div className="copyright d-flex justify-content-between">
                        <p>© 2022-23, skMovies, All Rights Reserved.</p>
                        <p>Website By: <Link to="#" >skMovies.in</Link></p>
                    </div>
                </div>
            </footer>
            <span className="scroll-up" onClick={e => window.scrollTo(0, 0)}><i className="fa fa-chevron-up" aria-hidden="true"></i></span>
           

        </>
    )
}

export default Footer
