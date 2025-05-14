import React from 'react';
import Hero from '../../components/hero/Hero';
import Quality from '../../components/qualities/Quality';
import Coffees from '../../components/coffees/Coffees';
import FollowUs from '../../components/followUs/FollowUs';

const Home = () => {
    return (
        <div className=''>
            <Hero/>
            <Quality/>
            <Coffees/>
            <FollowUs/>
        </div>
    );
};

export default Home;