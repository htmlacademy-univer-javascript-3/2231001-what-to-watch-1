import { RatingCategory } from '../types/film.type';

export function getRatingCategoryByRating(rating: number): RatingCategory {
  if (rating < 3) {
    return RatingCategory.BAD;
  } else if (rating < 5) {
    return RatingCategory.NORMAL;
  } else if (rating < 8) {
    return RatingCategory.GOOD;
  } else if (rating < 10) {
    return RatingCategory.VERY_GOOD;
  }
  return RatingCategory.AWESOME;
}
