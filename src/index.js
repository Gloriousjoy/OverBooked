import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from './context';
import './index.css';
// import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/Booklist";
import BookDetails from "./components/BookDetails/BookDetails";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          {/* <Route path="/header" element={<Header />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);


