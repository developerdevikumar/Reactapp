import React from 'react';
import BannerImageContainer from '../../components/BannerImageContainer';
import BannerTextContainer from '../../components/BannerTextContainer';
import OurCompanyList from './components/OurCompanyList';
import BackgroundList from './components/BackgroundList';
import TeamList from './components/TeamList';


function Company() {
    return (
        <React.Fragment>
            <BannerImageContainer imageClass="tm-main-bg tm-about-bg"/>
            <main>
                <BannerTextContainer backgroundColor="green-background" text="About Our Company"/>
                <OurCompanyList />
                <BackgroundList />
                <TeamList />
            </main>
        </React.Fragment>

    )
}

export default Company;
