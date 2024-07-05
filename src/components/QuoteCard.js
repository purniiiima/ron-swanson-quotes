// src/components/QuoteCard.js
import React from 'react';

const QuoteCard = ({ quote, onSave }) => (
  <div className="quote-card">
    <p>{quote}</p>
    <button onClick={() => onSave(quote)}>Save to List</button>
  </div>
);

export default QuoteCard;
