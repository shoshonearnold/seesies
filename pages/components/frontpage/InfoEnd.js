import Link from 'next/link'
import React from 'react'
//import test from '../../public/Piggy Bank_Flatline.svg'


const InfoEnd = () => {
    return (
        <div className="info-start-cont">
            <div className="info-start">
                <div></div>
                <img src="/Piggy Bank_Flatline.svg"></img>
                <div className="descrip">
                <h2 className="heading-infoStart">When you both save, we chip in!</h2>
                <p className="saying-infoStart">Earn points you can redeem for actual cash when both parties add money.</p>
                <Link href="./components/SignUp" passHref>
                <button type="button" className="btn btn-success btn-lg">Sign Up!</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default InfoEnd
