import React from "react";
import LoginForm from "../login-form/login-form";
import NavBar from "../navbar/navbar";
import MenuComponent from "../../menu-component/menu-rename";
import TitleBackground from "../title-background/title-background";
import BackgroundCard from "../background-card/background-card";

import backgroundImg from '../../assets/home-background.png'
import img100000 from '../../assets/100000t.png'
import joinUsImg from '../../assets/join-us.png'
import giftImg from'../../assets/gifts.png'


export const HomePage = () => {

    return (
        <div>
            <TitleBackground
                img={backgroundImg}
                title={'Delivery from nearby restaurants and stores only'}
                p={'People are ordering a lot now, which is why you can only order from nearby venues (for now). It might also take longer to deliver, and support could be slower to respond. Please know that we’re pushing hard to get back up to speed fast – thanks for understanding! 💙'}
                height={500}
                isDarkOverlay={false}
                textColor={'black'}
            />
            <div className="container mt-5">
                <div className="container  d-flex  justify-content-around   ">
                    <div className=" col-5">
                        <BackgroundCard img={img100000} title={'Win 1 000 000!'} p={'Click here to more'} height={300} />
                    </div>

                    <div className=" col-5 ">
                        <BackgroundCard img={giftImg} title={'Gift Ideas'} p={'Selection of gifts for every bugdet'} height={300} />
                    </div>

                </div>


                <TitleBackground
                    className="mt-5  mb-5 "
                    img={joinUsImg}
                    height={200} />


                <MenuComponent height={200} className='mt-5 mb-5'  query=''/>
                <MenuComponent height={400} className='mt-5 mb-5'  query='burger'/>
            </div>
        </div>
    )
} 