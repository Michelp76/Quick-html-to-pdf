const { compileTemplateToHtml, generateHtmlToPdf } = require("./helper");
const { writeFile } = require("node:fs");

const generationPDF = async (body) => {
  try {

    // Compile le template "bulletin.hbs" -> html
    const html = await compileTemplateToHtml("bulletin", body);

    // Transfo html -> pdf
    const pdf = await generateHtmlToPdf(html);

    // Nom de fichier pdf
    const pdfName = "Bulletin.pdf";

    // Ecriture sur le disque du pdf, à la racine du dossier projet
    writeFile(pdfName, pdf, (err) => {
      if (err) throw err;
      console.log(`The pdf file ${pdfName} has been saved!`);
    });
  } catch (error) {
    throw error;
  }
};

module.exports.generationPDF = generationPDF;