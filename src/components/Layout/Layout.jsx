import React, { Fragment } from 'react';
import Routers from '../../routers/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
    return <Fragment>
        <Header />
            <div>
                <Routers />
            </div>
        <Footer />
    </Fragment>
};

export default Layout;