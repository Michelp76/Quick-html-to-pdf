const { compileTemplateToHtml, generateHtmlToPdf } = require("./helper");
const { writeFile } = require("node:fs");

(async () => {
  try {
    // Exemples variables d'entrée (inutilisées pour l'instant)
    // TODO: utiliser un objet contenant toutes les variables d'entrée
    // en tant que, par exemple, propriétés
    const name = "";
    certificateFor = "";
    organization = "";

    // Compile le template "bulletin.hbs" -> html
    // TODO: Le template "bulletin.hbs" doit être rendu dynamique
    // avec incorporation des variables en entrée
    const html = await compileTemplateToHtml("bulletin", {
      name,
      certificateFor,
      organization,
    });

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
})();
