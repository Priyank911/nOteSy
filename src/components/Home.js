// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notesCollectionRef = collection(db, 'notes');
    const unsubscribe = onSnapshot(notesCollectionRef, (snapshot) => {
      const notesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNotes(notesData);
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  return (
    <div className="home-container">
      <h2>Your Notes</h2>
      <div className="card-grid">
        {notes.map((note) => (
          <Link to={`/note/${note.id}`} key={note.id} className="card-link">
            <div className="card">
              <h3 className="card-title">{note.title}</h3>
              <p className="card-description">{note.content.substring(0, 180)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
