import React from 'react'
import Link from 'next/link'

//import test from '../../public/Analytics team_Flatline.svg'


const InfoMid = () => {
    return (
        <div className="info-start-cont">
            <div className="info-start">
                <div></div>
                <div className="descrip">
                <h2 className="heading-infoStart">We pull data to get you the best time/rate to see them!</h2>
                <p className="saying-infoStart">We gather airplane fares, gas prices, and other useful data that suits what you need.</p>
                <Link href="./components/LiveDemo" passHref>
                <button type="button" className="btn btn-danger btn-lg">See Demo Account</button>
                </Link>
                </div>
                <img src="/Analytics team_Flatline.svg"></img>
            </div>
        </div>
    )
}

export default InfoMid
