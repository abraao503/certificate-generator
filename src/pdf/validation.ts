import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

async function createPdfValidation(request: Request, response: Response, next: NextFunction) {
  const createPdfSchema = Joi.object({
    template: Joi.string().uri().required(),
    data: Joi.object().required(),
  });

  try{
    await createPdfSchema.validateAsync(request.body);
  }catch(err){
    return response.status(400).json({ error: 'Validation fails'});
  }

  next();
};

export default createPdfValidation;