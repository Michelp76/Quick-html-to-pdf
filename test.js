const { generationPDF } = require("./index");

const body = {
  companyName: "In Extenso",
  adressBat: "Bat B1",
  adressRes: "4 A Allée du Chêne Blanc",
  adressCP: "91160 LONGJUMEAU",
  siretNaf: "SIRET : 151122573 00029 NAF : 9002Z",
  rubriques: [
    {
      cdRub: "105000",
      libRub: "Forfait Jours",
      nombre: "",
      taux: "",
      gain: "6.099,76",
      retenue: "",
      montant: "",
    },
    {
      cdRub: " 552210",
      libRub: "SS Maladie Mat Inv Décès",
      nombre: "6.099,76",
      taux: "",
      gain: "",
      retenue: "",
      montant: "792,96",
    },
  ],
};

generationPDF(body);
