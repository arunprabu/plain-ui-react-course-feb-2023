import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/HomePage/HomePage'; // not lazy loaded
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage'; // not lazy loaded

// the following components are lazy loaded
const ContactUsPage = React.lazy(() => import('../../pages/ContactUsPage/ContactUsPage'));
const HocDemoPage = React.lazy(() => import('../../pages/HocDemoPage/HocDemoPage'));
const VideoPage = React.lazy(() => import('../../pages/VideoPage/VideoPage'));
const UnitTestingDemoPage = React.lazy(() => import('../../pages/UnitTestingDemoPage/UnitTestingDemoPage'));
const HooksDemoPage = React.lazy(() => import('../../pages/HooksDemoPage/HooksDemoPage'));
const ShopPage = React.lazy(() => import('../../pages/ShopPage/ShopPage'));

// re-organize the routes for lazy loading with suspense UI
const AppRoutes = () => {
  return (
    <Suspense fallback={<div className='spinner-border text-primary'></div>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/video' element={<VideoPage />} />
        <Route path='/hoc-demo' element={<HocDemoPage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/hooks-demo' element={<HooksDemoPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/unit-testing-demo' element={<UnitTestingDemoPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
