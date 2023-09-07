import React from 'react';
import { Footer, Header } from '../components/Layout';
import Banner from '../components/Banner/Banner';
import Content from '../components/Content/Content';

const HomePage = () => {
    return (
        <div className='container'>
            <Header />
            <Banner />
            <Content />
            <Footer />
        </div>
    );
};

export default HomePage;
