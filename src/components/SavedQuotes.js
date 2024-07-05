// src/components/SavedQuotes.js
import React from 'react';

const SavedQuotes = ({ savedQuotes }) => (
  <div className="saved-quotes">
    <h2>Saved Quotes</h2>
    <ul>
      {savedQuotes.map((quote, index) => (
        <li key={index}>{quote}</li>
      ))}
    </ul>
  </div>
);

export default SavedQuotes;
