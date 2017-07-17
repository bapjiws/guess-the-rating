interface IReview {
    firstName: string;
    lastName: string;
    fullName: string;
    location: string;
    reviewTitle: string;
    reviewBody: string;
    starRating: number;
}

interface IRating {
    rating: number
    domRef: HTMLImageElement;
    left: number;
    right: number;
}