// Import enums and interfaces
import { LoyaltyUser, Permissions } from './enums';
import Review from './interfaces';

// Define variables with correct types
const reviewTotalDisplay = document.querySelector<HTMLDivElement>('#reviews');
const returningUserDisplay = document.querySelector<HTMLDivElement>('#returning-user');
const userNameDisplay = document.querySelector<HTMLDivElement>('#user');

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
  const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? '🌟' : ''; // Adjusted iconDisplay logic
  if (reviewTotalDisplay) {
    reviewTotalDisplay.innerHTML = `${value} review${makeMultiple(value)} | last reviewed by ${reviewer} ${iconDisplay}`;
  }
}

export function populateUser(isReturning: boolean, userName: string) {
  if (returningUserDisplay) {
    returningUserDisplay.innerHTML = isReturning ? 'Welcome back' : '';
  }
  if (userNameDisplay) {
    userNameDisplay.innerHTML = userName;
  }
}

export function showDetails(value: boolean | Permissions, element: HTMLDivElement, price: number) {
  if (value) {
    const priceDisplay = document.createElement('div');
    priceDisplay.innerHTML = `${price}/night`;
    element.appendChild(priceDisplay);
  }
}

export function makeMultiple(value: number): string {
  return value !== 1 ? 's' : '';
}

export function getTopTwoReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}
