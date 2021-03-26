import React from 'react';
import BannerImageContainer from '../../components/BannerImageContainer';
import BannerTextContainer from '../../components/BannerTextContainer';
import Information from './components/Information';
function Services() {
    return (
        <React.Fragment>
            <BannerImageContainer imageClass="tm-main-bg tm-contact-bg"/>
            <main>
                <BannerTextContainer backgroundColor="pink-background" text="About Our Company"/>
                <Information />
            </main>
        </React.Fragment>
    )
}

export default Services;
