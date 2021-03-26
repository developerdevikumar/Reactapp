import React from 'react';
import BannerImageContainer from '../../components/BannerImageContainer';
import BannerTextContainer from '../../components/BannerTextContainer';
import AboutList from './components/AboutList';
import VisonList from './components/VisonList';



function Home() {
    return (
        <>
            <BannerImageContainer imageClass="tm-main-bg"/>
            <main>
                <BannerTextContainer backgroundColor="red-background-with-white" text="Welcome to New Vision"/>
                <VisonList />
                <AboutList />
            </main>
        </>
    )
}

export default Home;
