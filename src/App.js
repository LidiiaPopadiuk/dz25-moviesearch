import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThreeDots } from "react-loader-spinner";
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
      <Suspense
        fallback={
          <ThreeDots
            visible={true}
            height="100"
            width="100"
            color="#facc15"
            radius="10"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "85vh",
            }}
          />
        }
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies" element={<Search />}></Route>
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
