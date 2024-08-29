const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");
const Handlebars = require("handlebars");

const compileTemplateToHtml = async (templateName, data) => {
  try {
    const templateFilePath = path.join("templates", `${templateName}.hbs`);
    const fileData = fs.readFileSync(templateFilePath, "utf8");
    return Handlebars.compile(fileData)(data);
  } catch (error) {
    throw error;
  }
};
const generateHtmlToPdf = async (htmlContent, isDebug = false) => {
  try {
    const browser = await puppeteer.launch({
      headless: isDebug ? false : true,
      ignoreDefaultArgs: ["--disable-extensions"],
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--hide-scrollbars",
        "--disable-gpu",
        "--mute-audio",
        "--disable-dev-shm-usage",
      ],
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    const pdf = await page.pdf({
      landscape: false,
      format: "A4",
      headerTemplate: "<div/>",
      // Compte les pages (ex. pages 2/3)
      // https://github.com/puppeteer/puppeteer/issues/5345
      displayHeaderFooter: true,      
      footerTemplate:
        '<div style="text-align: right;width: 297mm;font-size: 8px;"><span style="margin-right: 1cm"><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
    });
    if (!isDebug) browser.close();
    return pdf;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  compileTemplateToHtml,
  generateHtmlToPdf,
};
