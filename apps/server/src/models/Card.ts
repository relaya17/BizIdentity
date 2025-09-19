import { Document, Schema, model } from 'mongoose';
import { UserRole } from '@shared/types/userTypes.js';

export interface ICard {
    _id: string;
    title: string;
    subtitle?: string;
    description: string;
    phone: string;
    email: string;
    website?: string;
    address: {
        street: string;
        city: string;
        zipCode: string;
        country: string;
    };
    businessHours?: {
        [key: string]: {
            open: string;
            close: string;
            isOpen: boolean;
        };
    };
    category: string;
    tags: string[];
    images: string[];
    logo?: string;
    owner: string; // User ID
    ownerRole: UserRole;
    isActive: boolean;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    views: number;
    likes: number;
    isFavorite?: boolean;
}

export interface ICardDocument extends ICard, Document {
    _id: string;
}

const CardSchema = new Schema<ICardDocument>({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    subtitle: {
        type: String,
        trim: true,
        maxlength: 200
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    website: {
        type: String,
        trim: true
    },
    address: {
        street: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        zipCode: {
            type: String,
            required: true,
            trim: true
        },
        country: {
            type: String,
            required: true,
            trim: true
        }
    },
    businessHours: {
        type: Map,
        of: {
            open: String,
            close: String,
            isOpen: Boolean
        }
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    tags: [{
        type: String,
        trim: true
    }],
    images: [{
        type: String
    }],
    logo: {
        type: String
    },
    owner: {
        type: String,
        required: true,
        ref: 'User'
    },
    ownerRole: {
        type: String,
        enum: ['user', 'business', 'admin'],
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// אינדקסים לשיפור ביצועים
CardSchema.index({ owner: 1 });
CardSchema.index({ category: 1 });
CardSchema.index({ isActive: 1 });
CardSchema.index({ createdAt: -1 });

export const Card = model<ICardDocument>('Card', CardSchema);
export default Card;
