import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
export declare const validateRequest: (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validateRequest.d.ts.map