import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout/Layout";
import { Home, Movies, Series } from "./pages/index";
import { route } from "./models/route.mode";

function App() {
  return (
    <div>
      <Layout>
      <Routes>
        <Route path={route.root.path} element={<Home />} />
        <Route path={route.movies.path} element={<Movies />} />
        <Route path={route.series.path} element={<Series />} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
