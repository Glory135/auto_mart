import { TopBar } from "./components/TopBar";
import { Home } from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Post } from "./pages/Post";
import { Single } from "./pages/Single";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className='App'>
      <TopBar />
      <div className='body-container'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/post' element={<Post />} />
          <Route path='/singleAd' element={<Single />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
