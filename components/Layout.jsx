import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import Modal from './Modal';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Bizmah Clothing</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
      <Modal />
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout