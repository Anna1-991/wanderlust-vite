// api/Review.ts
import reviewData from './facebookReviews.json'; // Adjust the path to your JSON file
import { ReviewProps } from './types';

export const fetchReviews = async (): Promise<ReviewProps[]> => {
    // Simulate an API call
    return new Promise((resolve) => {
        setTimeout(() => resolve(reviewData), 1000);
    });
    
};
console.log(reviewData);
export type { ReviewProps };

