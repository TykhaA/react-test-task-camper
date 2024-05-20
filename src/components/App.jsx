import Home from 'pages/Home';
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Catalog = lazy(() => import('pages/Catalog'));
const FavoritesPage = lazy(() => import('pages/Favorites'));
const MainLayoute = lazy(() => import('layoutes/MainLayoute'));
const CamperDetails = lazy(() => import('./CamperDetails'));
const Features = lazy(() => import('./Features'));
const Reviews = lazy(() => import('./Reviews'));

const App = () => {
  return (
    <>
      <Suspense fallback={'loading'}>
        <Routes>
          <Route path="/" element={<MainLayoute />}>
            <Route index element={<Home />}></Route>
            <Route path="catalog" element={<Catalog />}>
              <Route path=":id" element={<CamperDetails />}>
                <Route path="features" element={<Features />}></Route>
                <Route path="reviews" element={<Reviews />}></Route>
              </Route>
            </Route>
            <Route path="favorites" element={<FavoritesPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
