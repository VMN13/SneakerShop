import React from 'react';
import ReactDOM from 'react-dom/client';
import NoPage from './components/nopage/NoPage.jsx';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

