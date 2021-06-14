import Link from 'next/link'
import React from 'react'
//import test from '../../public/flatline.svg'

const InfoStart = () => {
    return (
        <div className="info-start-cont">
            <div className="info-start">
                <div></div>
                <img src="/flatline.svg"></img>
                
                <div className="descrip">
                <h2 className="heading-infoStart">They're a part of you, go see them!</h2>
                <p className="saying-infoStart">Seesies accounts are built to show you the fastest way to see your other half!</p>
                <Link href="./components/LearnMore" passHref>
                <button type="button" className="btn btn-success btn-lg">Learn More</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default InfoStart
