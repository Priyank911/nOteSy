// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoteEditor from './components/NoteEditor';

const isLocal = window.location.hostname === 'localhost';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Route for editing existing notes */}
        <Route path="/note/:id" element={<NoteEditor isEditable={isLocal} />} />
        {/* Route for adding new notes */}
        <Route path="/note/new" element={<NoteEditor isEditable={isLocal} />} />
      </Routes>
    </Router>
  );
};

export default App;
