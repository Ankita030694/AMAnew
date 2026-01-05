
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

// Define the attorney type
export type Attorney = {
    id: string;
    image: string;
    name: string;
    role: string;
    position: string;
    email: string;
    sort: number;
    socials: {
        [key: string]: string;
    };
};

export const fetchAttorneys = async (): Promise<Attorney[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const users = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                image: data.image || '',
                name: data.name || '',
                role: data.role || '',
                position: data.position || '',
                email: data.email || '',
                sort: data.sort || 0,
                socials: {
                    instagram: "https://www.instagram.com/amalegalsolutions/?hl=en",
                    linkedin: "https://in.linkedin.com/company/ama-legal-solutions"
                }
            };
        });

        // Define role priority for sorting
        const rolePriority: Record<string, number> = {
            'lawyer': 1,
            'tech': 2,
            'business_development': 3
        };

        // Sort all users by role priority first, then by sort field within each role
        const sortedUsers = users.sort((a, b) => {
            const aPriority = rolePriority[a.role] || 999;
            const bPriority = rolePriority[b.role] || 999;

            if (aPriority !== bPriority) {
                return aPriority - bPriority;
            }

            return a.sort - b.sort;
        });

        return sortedUsers;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};
