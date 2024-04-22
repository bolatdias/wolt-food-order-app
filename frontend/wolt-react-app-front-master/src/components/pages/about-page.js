import React from "react";
import NavBar from "../navbar/navbar";
import Contacts from "../contacts/contacts";
import TitleBackground from "../title-background/title-background";

import backgroundImg from '../../assets/about-background.jpeg'

export const AboutPage = () => {

    return (
        <div>
            <TitleBackground className="mb-5" isDarkOverlay={true} height={400} title={'About Wolt'} p={'Learn what we are all about'} img={backgroundImg} />
            <div className="container-md d-flex flex-wrap justify-content-around mt-5">
                <div className="col-10 col-sm-9  mb-3 mb-sm-0">
                    <p>
                        Wolt is a Helsinki-based technology company that makes it incredibly easy to discover and get the best restaurants, grocery stores and other local shops delivered to you. To enable this, Wolt develops a wide range of technologies from local logistics to retail software and financial solutions, as well as operates its own grocery stores under the brand Wolt Market.
                    </p>
                    <p>
                        Wolt was founded in 2014 and joined forces with DoorDash in 2022. DoorDash operates in 29 countries today, 25 of which are with the Wolt product and brand.
                    </p>
                </div>

                <div className="col-10 col-sm-2">
                    <Contacts />
                </div>
            </div>

        </div>
    )
}

