import React from 'react';
import Header from './header';
import ProjectList from '../containers/projects-list';
import Details from '../containers/details';
import Footer from './footer';
import '../assets/css/style.css';

const Wrapper = () => (
  <div id="wrapper">
    <Header />
    <ProjectList />
    <Footer />
    {/* <Details /> */}
  </div>
);

export default Wrapper;
