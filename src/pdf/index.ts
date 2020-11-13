import { Router } from 'express';
import createPdf from './createPdf';
import createPdfValidation from './validation';

const routes = Router();

routes.post('/certificado', createPdfValidation, async (request, response) => {
  try {
    const { template, data } = request.body;
    const pdf = await createPdf({
      htmlUrl: template,
      data,
    });

    response.contentType('application/pdf');

    return response.send(pdf);
  } catch (err) {
    console.error(err);
    return response.status(500).json();
  }
});

export default routes;