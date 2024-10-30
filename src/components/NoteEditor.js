import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownEditor from 'react-markdown-editor-lite';
import Markdown from 'markdown-to-jsx';
import 'react-markdown-editor-lite/lib/index.css';
import styled from 'styled-components';
import { db } from '../firebase';
import { doc, setDoc, addDoc, getDoc, collection } from 'firebase/firestore';
import './NoteEditor.css'; // Import the CSS file

const EditorContainer = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
  color: #ffffff;
`;

const NoteEditor = ({ isEditable }) => {
  const { id } = useParams(); // Get note ID from URL parameters
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [viewOnly, setViewOnly] = useState(!isEditable); // Initial view-only state based on editability

  useEffect(() => {
    const fetchNote = async () => {
      if (id) {
        const noteRef = doc(db, 'notes', id);
        const noteSnap = await getDoc(noteRef);
        if (noteSnap.exists()) {
          const noteData = noteSnap.data();
          setTitle(noteData.title);
          setContent(noteData.content);
        } else {
          console.error('Note not found'); // Log to console
          alert('Note not found');
        }
      } else {
        // Initialize for a new note
        setTitle(''); // Reset title for new note
        setContent(''); // Reset content for new note
      }
    };
    fetchNote();
  }, [id]);

  const handleEditorChange = ({ text }) => {
    setContent(text);
  };

  const handleSave = async () => {
    const notesCollectionRef = collection(db, 'notes');
    
    if (id) {
      const noteRef = doc(db, 'notes', id);
      await setDoc(noteRef, { title, content });
    } else {
      await addDoc(notesCollectionRef, { title, content });
    }
    alert('Note saved!');
  };

  return (
    <EditorContainer>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        disabled={!isEditable}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <button onClick={() => setViewOnly(!viewOnly)}>
        {viewOnly ? 'Edit' : 'Preview'}
      </button>
      {viewOnly ? (
        <div className="PreviewContainer">
          <button className="close-preview" onClick={() => setViewOnly(false)}>
          <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
</svg>
          </button>
          <h1>{title}</h1>
          <div className="markdown-content">
            <Markdown>{content}</Markdown>
          </div>
        </div>
      ) : (
        isEditable && (
          <MarkdownEditor
            value={content}
            style={{ height: '400px', backgroundColor: '#1e1e1e', color: '#ffffff' }}
            onChange={handleEditorChange}
          />
        )
      )}
      {isEditable && !viewOnly && (
        <button onClick={handleSave}>Save Note</button>
      )}
    </EditorContainer>
  );
  
};

export default NoteEditor;
