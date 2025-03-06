import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
// import App from "./app";
import Book from "./Book.jsx";
import App from "./App.jsx";
import Book2 from "./Book2.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/book" element={<Book />} />
            <Route path="/book2" element={<Book2 />} />
        </Routes>
    </BrowserRouter>
);