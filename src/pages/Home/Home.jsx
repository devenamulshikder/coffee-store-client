import React from 'react';
import Hero from '../../components/hero/Hero';
import Quality from '../../components/qualities/Quality';
import Coffees from '../../components/coffees/Coffees';

const Home = () => {
    return (
        <div className=''>
            <Hero/>
            <Quality/>
            <Coffees/>
        </div>
    );
};

export default Home;