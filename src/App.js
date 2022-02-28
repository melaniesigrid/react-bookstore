import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import CategoriesPage from './components/CategoriesPage';
import BookPage from './components/BookPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/react-bookstore/" element={<BookPage />} />
        <Route path="/Categories/" element={<CategoriesPage />} />
      </Routes>
    </div>
  );
}

export default App;
