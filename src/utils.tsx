import { JSX } from "react";

export function renderStars(rating: number): JSX.Element {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <>
      {Array(fullStars)
        .fill(null)
        .map((_, i) => (
          <i key={`full-${i}`} className="bi bi-star-fill"></i>
        ))}
      {halfStar > 0 && <i key="half-1" className="bi bi-star-half"></i>}
      {Array(emptyStars)
        .fill(null)
        .map((_, i) => (
          <i key={`empty-${i}`} className="bi bi-star"></i>
        ))}
    </>
  );
}
