import React, { useState, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

function Review(props) {
  const [reviewText, setReviewText] = useState('');

  const handleChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setReviewText('');
  };

  return (
    <div className="review-form">
      <form onSubmit={handleSubmit}>
        <textarea className="review-text" placeholder="Write your review here..." value={reviewText} onChange={handleChange} />
        <button type="submit" className="submit-button">Submit Review</button>
      </form>
    </div>
  );
}

export { Review };
