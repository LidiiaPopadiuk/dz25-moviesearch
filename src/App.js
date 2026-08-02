// import { MainPage } from "./components/mainPage/MainPage";
import Header from "./components/header/Header";
// import { Search } from "./components/search/Search";
import { Routes, Route } from "react-router-dom";
// import { NotFound } from "./components/notFound/NotFound";
// import { FilmInfo } from "./components/filmInfo/FilmInfo";
// import { Casts } from "./components/casts/Casts";
// import { Reviews } from "./components/reviews/Reviews";
import { lazy, Suspense } from "react";
import "./App.css";

const MainPage = lazy(() => import("./components/mainPage/MainPage"));

  const Search = lazy(() => import("./components/search/Search"));

  const NotFound = lazy(() => import("./components/notFound/NotFound"));

  const FilmInfo = lazy(() => import("./components/filmInfo/FilmInfo"));

  const Casts = lazy(() => import("./components/casts/Casts"));

  const Reviews = lazy(() => import("./components/reviews/Reviews"));


function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies" element={<Search />}>
            {/* <Route path="film-info/:id" element={<FilmInfo />} /> */}
          </Route>
          <Route path="/movies/:id" element={<FilmInfo />}>
            <Route path="casts" element={<Casts />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
