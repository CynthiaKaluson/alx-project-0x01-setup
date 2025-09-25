// For PostCard component (from step 2)
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// For UserCard component (step 3 - NEW)
export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

// For PostModal (from step 4)
export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
}

export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
}

// For UserModal (step 5 - keep these for later)
export interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export interface UserModalProps {
    onClose: () => void;
    onSubmit: (user: UserData) => void;
}