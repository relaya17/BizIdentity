import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
export declare const validatePassword: (password: string) => string[];
export declare const registerSchema: Joi.ObjectSchema<any>;
export declare const validatePasswordMiddleware: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const validateRegister: ((req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined)[];
export declare const validateLogin: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validate.d.ts.map