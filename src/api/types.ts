// api/Review.ts
export interface User {
    id: string;
    name: string;
    profileUrl: string | null;
    profilePic: string;
}

export interface ReviewProps {
    id: string;
    text: string;
    user: User;
    date: string;
    url: string;
    isRecommended: boolean;
    likesCount: number;
    commentsCount: number;
    facebookId: string;
    pageName: string;
    pageAdLibrary: {
        is_business_page_active: boolean;
        id: string;
    };
}
