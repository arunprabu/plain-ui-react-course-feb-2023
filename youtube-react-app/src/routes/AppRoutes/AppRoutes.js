import { Route, Routes } from 'react-router-dom';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage';
import HocDemoPage from '../../pages/HocDemoPage/HocDemoPage';
import HomePage from '../../pages/HomePage/HomePage';
import HooksDemoPage from '../../pages/HooksDemoPage/HooksDemoPage';
import ShopPage from '../../pages/ShopPage/ShopPage';
import VideoPage from '../../pages/VideoPage/VideoPage';
import UnitTestingDemoPage from '../../pages/UnitTestingDemoPage/UnitTestingDemoPage';

const AppRoutes = () => {
  return (
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
  );
};

export default AppRoutes;
