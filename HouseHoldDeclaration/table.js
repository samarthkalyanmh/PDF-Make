module.exports = function (data) {
  let familyMemberRows = [];

  familyMemberRows.push([
    { text: "Family Members" },
    { text: "Occupation1" },
    { text: "Employement Type" },
    { text: "Frequency of Income(D/W/M)" },
    { text: "Income Per Month" },
    { text: "Occupatio" },
    { text: "Employement Type" },
    { text: "Frequency of Income" },
    { text: "Income per month" },
    { text: "Total" },
  ]);

  let microfinanceLoanTable = [];

  microfinanceLoanTable.push(
    [
      { text: "THE FEDERAL BANK LTD", alignment: "center", colSpan: 10 },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ],
    [
      {
        text: "Microfinance Loan - House Hold Income Assessment Sheet for JLG Members",
        alignment: "center",
        colSpan: 10,
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ],
    [
      { text: "BC Name", colSpan: 1 },
      { text: "", colSpan: 1 },
      { text: "BC Branch" },
      { text: "", colSpan: 1 },
      { text: "Date" },
      { text: "", colSpan: 1 },
      { text: "Center" },
      { text: "", colSpan: 1 },
      { text: "Group" },
      { text: "", colSpan: 1 },
    ],
    [{ text: "Customer Name", colSpan: 1 }, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [
      { text: "PART A - INCOME", alignment: "center", colSpan: 10 },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ],
    [
      {
        table: {
          widths: [
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
          ],
          body: familyMemberRows,
        },
        style: "nestedTableWithSmallFont",
        colSpan: 10,
      },
    ]
  );

  return [
    {
      table: {
        widths: [
          "10%",
          "10%",
          "10%",
          "10%",
          "10%",
          "10%",
          "10%",
          "10%",
          "10%",
          "10%",
        ],
        body: microfinanceLoanTable,
      },
      style: "tableLeftAlignedWithSmallFont",
      bold: true,
      pageBreak: "after",
    },
  ];
};
