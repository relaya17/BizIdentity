import { Document } from 'mongoose';
import { UserRole } from '@shared/types/userTypes.js';
export interface IUserBase {
    name: string;
    email: string;
    passwordHash: string;
    role: UserRole;
    isVerified: boolean;
    imagePath?: string;
    phone?: string;
    verificationToken?: string | null;
    isGoogle?: boolean;
}
export interface IUserDocument extends IUserBase, Document {
    _id: string;
}
export declare const User: import("mongoose").Model<IUserDocument, {}, {}, {}, Document<unknown, {}, IUserDocument, {}> & IUserDocument & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
export default User;
//# sourceMappingURL=User.d.ts.map