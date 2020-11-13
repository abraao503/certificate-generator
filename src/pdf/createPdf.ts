import axios from 'axios';
import hbs from 'handlebars';
import puppeteer from 'puppeteer';

interface CreatePdfInterface {
  htmlUrl: string,
  data: Object,
}

async function getHtmlTemplate(htmlUrl: string){
  const {data: htmlTemplate} = await axios.get(htmlUrl, { responseType: 'blob' });
  return htmlTemplate;
}

async function compileHtml(htmlUrl: string, data: Object){
  const htmlTemplate = await getHtmlTemplate(htmlUrl);
  const template = hbs.compile(htmlTemplate);
  const html = template(data);

  return html;
}

async function getPage(browser: puppeteer.Browser){
  const page = await browser.newPage();
  return page;
}

async function getPdf(page: puppeteer.Page, html: string){
  await page.goto(`data:text/html;charset=UTF-8,${html}`, {
		waitUntil: 'networkidle0'
	});

  const pdf = await page.pdf({
    landscape: true, 
    printBackground: true,
  });
  
  return pdf;
}

async function createPdf({ htmlUrl, data }: CreatePdfInterface) {
  const html = await compileHtml(htmlUrl, data);

  const puppetterConfig = {
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox',
    ],
    headless: true,
  };
  const browser = await puppeteer.launch(puppetterConfig);
  const page = await getPage(browser);
  
  const pdf = await getPdf(page, html);

  await browser.close();

  return pdf;
}

export default createPdf;