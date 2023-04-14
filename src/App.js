import React from "react";
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from "./Navbar";
import Home from "./pages/Home";
import TopNews from "./pages/TopNews";
import ShowTopNews from "./pages/ShowTopNews";
import News from "./news/News";
import ShowNews from "./news/ShowNews";
import Cricket from "./Cricket/Cricket";
import ShowCricket from "./Cricket/ShowCricket";
import Fotball from "./Fotball/Fotball";
import Showfotball from "./Fotball/Showfotball";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/topnews" element={<TopNews />}></Route>
          <Route path="/topnews/:title" element={<ShowTopNews />}></Route>
          <Route path="/news" element={<News/>}></Route>
          <Route path="/news/:head" element={<ShowNews/>}></Route>
          <Route path="/cricket" element={<Cricket/>}></Route>
          <Route path="/cricket/:title" element={<ShowCricket/>}></Route>
          <Route path="/fotball" element={<Fotball/>}></Route>
          <Route path="/fotball/:title" element={<Showfotball/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <div className="container">
        <Home/>
         </div> */}
    </div>
  );
}

export default App;
