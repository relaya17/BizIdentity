import { IUserDocument } from '../models/User';
export declare const createUser: (userData: Partial<IUserDocument>) => Promise<IUserDocument>;
export declare const findUserByEmail: (email: string) => Promise<IUserDocument | null>;
export declare const findUserById: (id: string) => Promise<IUserDocument | null>;
export declare const getAllUsers: () => Promise<IUserDocument[]>;
export declare const updateUserById: (id: string, updates: Partial<IUserDocument>) => Promise<IUserDocument | null>;
export declare const deleteUserById: (id: string) => Promise<IUserDocument | null>;
export declare const promoteUserToAdmin: (id: string) => Promise<IUserDocument | null>;
export declare const verifyUserEmail: (email: string, token: string) => Promise<IUserDocument | null>;
export declare const updateUserPassword: (id: string, newPassword: string) => Promise<IUserDocument | null>;
//# sourceMappingURL=userService.d.ts.map