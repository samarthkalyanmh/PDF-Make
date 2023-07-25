var _ = require("lodash");

module.exports = function (data) {
  let { prospect, group, date } = data;

  let familyMemberRows = [];
  let liabilitiesRows = [];
  let recurringExpenseRows = [];
  let nonRecurringExpenseRows = [];
  let recurringExpenses = 0;
  let nonRecurringExpenses = 0;
  let emis = 0;

  familyMemberRows.push([
    { text: "Family Members" },
    { text: "Relations" },
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

  if (prospect.familyInfo.length > 0) {
    prospect.familyInfo.forEach((familyMember) => {
      let otherIncomeDetails = _.hasIn(familyMember, "otherIncomeDetails")
        ? familyMember.otherIncomeDetails
        : {};
      familyMemberRows.push([
        {
          text: _.hasIn(familyMember, "fullName") ? familyMember.fullName : "",
        },
        {
          text: _.hasIn(familyMember, "relWithProspect")
            ? familyMember.relWithProspect
            : "",
        },
        { text: "Primary" },
        {
          text: _.hasIn(familyMember, "employmentType")
            ? familyMember.employmentType
            : "",
        },
        {
          text: _.hasIn(familyMember, "frequencyOfIncome")
            ? familyMember.frequencyOfIncome
            : "",
        },
        { text: "Secondary" },
        { text: "" },
        { text: "" },
        {
          text: _.hasIn(otherIncomeDetails, "frequencyOfIncome")
            ? otherIncomeDetails.frequencyOfIncome
            : "",
        },
        { text: "" },
        { text: "" },
      ]);
    });
  } else {
    familyMemberRows.push([
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
    ]);
  }

  liabilitiesRows.push(
    [{ text: "Loan Obligations", colSpan: 5 }, {}, {}, {}, {}],
    [
      { text: "Loan Type" },
      { text: "Loan Amount" },
      { text: "EMI" },
      { text: "Remaining Tenure", colSpan: 2 },
      {},
    ]
  );

  if (prospect.liabilities.length > 0) {
    prospect.liabilities.forEach((liability) => {
      emis += _.hasIn(liability, "emi") ? liability.emi : 0;
      liabilitiesRows.push([
        { text: _.hasIn(liability, "loanType") ? liability.loanType : "" },
        { text: _.hasIn(liability, "loanAmount") ? liability.loanAmount : "" },
        { text: _.hasIn(liability, "emi") ? liability.emi : "" },
        {
          text: _.hasIn(liability, "tenure") ? liability.tenure : "",
          colSpan: 2,
        },
        {},
      ]);
    });
  } else {
    liabilitiesRows.push([
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
    ]);
  }

  liabilitiesRows.push(
    [
      { text: "Others" },
      { text: "" },
      { text: "" },
      { text: "", colSpan: 2 },
      {},
    ],
    [
      { text: "Total" },
      { text: "" },
      { text: "" },
      { text: "", colSpan: 2 },
      {},
    ]
  );

  recurringExpenseRows.push(
    [{ text: "Expenses Regular", colSpan: 3 }, {}, {}],
    [{ text: "Expense Type" }, { text: "Amount Per Month", colSpan: 2 }, {}]
  );

  if (prospect.recurringExpenses.length > 0) {
    prospect.recurringExpenses.forEach((recurringExpense) => {
      recurringExpenses += _.hasIn(recurringExpense, "amount")
        ? recurringExpense.amount
        : 0;
      recurringExpenseRows.push([
        {
          text: _.hasIn(recurringExpense, "type") ? recurringExpense.type : "",
        },
        {
          text: _.hasIn(recurringExpense, "amount")
            ? recurringExpense.amount
            : "",
          colSpan: 2,
        },
        {},
      ]);
    });
  } else {
    recurringExpenseRows.push([{ text: "" }, { text: "" }, { text: "" }]);
  }

  recurringExpenseRows.push(
    [{ text: "Others" }, { text: "", colSpan: 2 }, {}],
    [{ text: "Total" }, { text: "", colSpan: 2 }, {}]
  );

  nonRecurringExpenseRows.push(
    [{ text: "Expenses Regular", colSpan: 3 }, {}, {}],
    [{ text: "Expense Type" }, { text: "Amount per Month", colSpan: 2 }, {}]
  );

  if (prospect.nonRecurringExpenses.length > 0) {
    prospect.nonRecurringExpenses.forEach((nonRecurringExpense) => {
      nonRecurringExpenses += _.hasIn(nonRecurringExpense, "amount")
        ? nonRecurringExpense.amount
        : 0;
      nonRecurringExpenseRows.push([
        {
          text: _.hasIn(nonRecurringExpense, "type")
            ? nonRecurringExpense.type
            : "",
        },
        {
          text: _.hasIn(nonRecurringExpense, "amount")
            ? nonRecurringExpense.amount
            : "",
          colSpan: 2,
        },
        {},
      ]);
    });
  } else {
    nonRecurringExpenseRows.push([{ text: "" }, { text: "" }, { text: "" }]);
  }

  let totalObligations = emis + nonRecurringExpenses + recurringExpenses;

  nonRecurringExpenseRows.push(
    [{ text: "Others" }, { text: "", colSpan: 2 }, {}],
    [{ text: "Total" }, { text: "", colSpan: 2 }, {}]
  );

  let partBExpenses = [];

  partBExpenses.push([
    {
      table: {
        widths: ["20%", "30%", "20%", "*", "*"],
        heights: ["*", 70],
        body: liabilitiesRows,
      },
      style: "nestedTableWithSmallFont",
      layout: {
        hLineColor: function (i, node) {
          return i === 0 ? "white" : "black";
        },
        vLineColor: function (i, node) {
          return i === 0 || i === node.table.widths.length ? "white" : "black";
        },
      },
    },
    {
      table: {
        widths: ["33%", "33%", "*"],
        heights: ["*", 70],
        body: recurringExpenseRows,
      },
      style: "nestedTableWithSmallFont",
      layout: {
        hLineColor: function (i, node) {
          return i === 0 ? "white" : "black";
        },
        vLineColor: function (i, node) {
          return i === 0 || i === node.table.widths.length ? "white" : "black";
        },
      },
    },
    {
      table: {
        widths: ["33%", "33%", "*"],
        heights: ["*", 70],
        body: nonRecurringExpenseRows,
      },
      style: "nestedTableWithSmallFont",
      layout: {
        hLineColor: function (i, node) {
          return i === 0 ? "white" : "black";
        },
        vLineColor: function (i, node) {
          return i === 0 || i === node.table.widths.length ? "white" : "black";
        },
      },
    },
  ]);

  let totalHouseHoldIncome = prospect.totalHouseHoldIncome
    ? prospect.totalHouseHoldIncome
    : 0;

  let microfinanceLoanTable = [];

  microfinanceLoanTable.push(
    [
      { text: "THE FEDERAL BANK LTD", alignment: "center", colSpan: 11 },
      {},
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
        colSpan: 11,
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
      {},
    ],
    // [
    //   { text: "BC Name" },
    //   { text: "", colSpan: 3 },
    //   {},
    //   {},
    //   { text: "BC Branch" },
    //   { text: "", colSpan: 2 },
    //   //date, center, group
    //   {},
    //   { text: "Center" },
    //   { text: "", colSpan: 3 },
    //   {},
    //   {},
    // ],
    [
      {text: 'BC Name', colSpan: 2},
      {},
      {text: '', colSpan: 1},
      {text: 'BC Branch'},
      {text: '', colSpan: 1},
      {text: 'Date'},
      {text: '', colSpan: 1},
      {text: 'Center'},
      {text: '', colSpan: 1},
      {text: 'Group'},
      {text: '', colSpan: 1},
    ],
    [
      { text: "Customer Name", colSpan: 2 },
      {},
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
      { text: "PART A - INCOME", alignment: "center", colSpan: 11 },
      {},
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
            "9%",
            "9%",
            "9%",
            "9%",
            "9%",
            "9%",
            "9%",
            "9%",
            "9%",
            "9%",
            "9%",
          ],
          body: familyMemberRows,
        },
        style: "nestedTableWithSmallFont",
        colSpan: 11,
      },
    ],
    [
      { text: "Total House Hold Income", colSpan: 6 },
      {},
      {},
      {},
      {},
      {},
      { text: totalHouseHoldIncome, colSpan: 5 },
      {},
      {},
      {},
      {},
    ],
    [
      { text: "PART B - Expenses", alignment: "center", colSpan: 11 },
      {},
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
          widths: ["33%", "33%", "*"],
          body: partBExpenses,
        },
        style: "nestedTableWithSmallFont",
        colSpan: 11,
        layout: {
          paddingLeft: function (i, node) {
            return 0;
          },
          paddingRight: function (i, node) {
            return 0;
          },
          paddingTop: function (i, node) {
            return 0;
          },
          paddingBottom: function (i, node) {
            return 0;
          },
        },
      },
    ],
    [
      { text: "Eligibility Assessment", alignment: "center", colSpan: 11 },
      {},
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
      { text: "EMI of the Proposed loan", colSpan: 3 },
      {},
      {},
      { text: "EMI of the Proposed loan", colSpan: 3 },
      {},
      {},
      { text: "Rs.2155" },
      { text: "Total Monthly obligations", colSpan: 3 },
      {},
      {},
      { text: `Rs.${totalObligations}` },
    ],
    [
      { text: "Debt Burden Ratio", colSpan: 2 },
      {},
      { text: "(B)/(A)*100", colSpan: 2 },
      {},
      {},
      {},
      {},
      { text: "Signature of the Member", colSpan: 2 },
      {},
      { text: "", colSpan: 2 },
      {},
    ],
    [
      { text: "*Member is Eligible, if DBR is less than 50%", colSpan: 5 },
      {},
      {},
      {},
      {},
      {},
      {},
      { text: "Signature of Field Officer", colSpan: 2 },
      {},
      { text: "", colSpan: 2 },
      {},
    ]
  );

  return [
    {
      table: {
        widths: [
          "9%",
          "9%",
          "9%",
          "9%",
          "9%",
          "9%",
          "9%",
          "9%",
          "9%",
          "9%",
          "9%",
        ],
        body: microfinanceLoanTable,
      },
      style: "tableLeftAlignedWithSmallFont",
      bold: true,
      pageBreak: "after",
    },
  ];
};
