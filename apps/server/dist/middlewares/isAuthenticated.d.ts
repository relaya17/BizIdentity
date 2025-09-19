import { Request, Response, NextFunction } from 'express';
import { IUserClient } from '@shared/types/userTypes.js';
declare module 'express' {
    interface Request {
        user?: IUserClient;
    }
}
export declare const isAuthenticated: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
type UserRoleType = "user" | "admin" | "business";
export declare const authorizeRoles: (roles: UserRoleType[]) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
//# sourceMappingURL=isAuthenticated.d.ts.map