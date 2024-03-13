import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { getDatabase, ref, push, set, child, get } from 'firebase/database';
import { db } from './index';

function Review(props) {
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        console.log(db);
        const reviewsRef = ref(db, `companies/${props.company}/reviews`);
        const reviewsSnapshot = await get(child(reviewsRef));
        if (reviewsSnapshot.exists()) {
          const reviewsData = reviewsSnapshot.val();
          const reviewsArray = Object.keys(reviewsData).map(key => ({
            id: key,
            ...reviewsData[key]
          }));
          setReviews(reviewsArray);
        }
      } catch (error) {
        console.error('Error fetching reviews: ', error);
      }
    };
    
    fetchReviews();
  }, []);
  

  const handleChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const reviewsRef = ref(db, `companies/${props.company}/reviews`);
      const newReviewRef = push(reviewsRef);
      await set(newReviewRef, {
        text: reviewText,
      });
      setReviewText('');
    } catch (error) {
      console.error('Error adding review: ', error);
    }
  };

  return (
    <div className="review-form">
      <form onSubmit={handleSubmit}>
        <textarea className="review-text" placeholder="Write your review here..." value={reviewText} onChange={handleChange} />
        <button type="submit" className="submit-button">Submit</button>
      </form>

      <div className="reviews-list">
        {reviews.map(review => (
          <div key={review.id} className="review-item">
            <p>{review.text}</p>
          </div>
        ))}
        {console.log(reviews)}
      </div>
    </div>
  );
}

export { Review };