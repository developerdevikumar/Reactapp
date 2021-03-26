import React from 'react';
import BannerImageContainer from '../../components/BannerImageContainer';
import BannerTextContainer from '../../components/BannerTextContainer';
import DigitalServicesList from './components/DigitalServicesList';
import Partners from './components/Partners';

function Services() {
    return (
        <>
            <BannerImageContainer imageClass="tm-main-bg tm-services-bg"/>
            <main>
                <BannerTextContainer backgroundColor="pink-background" text="About Our Company"/>
                <DigitalServicesList />
                <Partners />
            </main>
        </>
    )
}

export default Services;
