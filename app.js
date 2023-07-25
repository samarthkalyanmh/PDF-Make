const express = require("express");
const PDFMake = require("pdfmake");
const generatePDF = require("./HouseHoldDeclaration/HouseHoldDeclaration");
const fonts = require("./fonts");
const dxbLogo = require("./dxbLogo");

const app = express();

app.get("/generate", (req, res) => {
  const data = {
    prospect: {
      fullName: "Samarth",
      familyInfo: [
        {
          fullName: "Jane Doe",
          relWithProspect: "Spouse",
        },

        {
          fullName: "Mary Doe",
          relWithProspect: "Child",
        },
      ],
      liabilities: [],
      recurringExpenses: [],
      nonRecurringExpenses: [],
    },
    group: {
      groupName: "some group",
    },
    date: "01/01/2000",
    dxbLogo: dxbLogo,
    branch: "CHITRADURGA",
  };

  const docDefinition = generatePDF(data);

  let pdfmake = new PDFMake(fonts);

  let pdfDoc = pdfmake.createPdfKitDocument(docDefinition);

  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": 'attachment; filename="generated-pdf.pdf"',
  });

  pdfDoc.pipe(res);
  pdfDoc.end();
});

app.use((req, res) => {
  res.json({message: 'Page does not exist'})
})

app.listen(5000);
