var _ = require('lodash');

module.exports = function (data) {

    let { prospect, group, date, dxbLogo, branch } = data;

    let header = [];

    //To be fixed, populate dxb account number here, empty string for now
    let accountNumber = 'XXXXXXXX';

    header.push(
      [{ }, { image : dxbLogo, width : 250, height : 100}]
    )

    let creditRow = [];

    creditRow.push(                                         
        [{text : `Credit to JLG/Br.    ${branch}`}, { text : `/FED${accountNumber}/2020-2021`}, { text : `Date: ${date}`}]
    )

    let pricingFactTable = [];

    pricingFactTable.push(

        [{ text: 'Parameter', }, { text : 'Details'}, { text : 'Unit'}],
        [{ text: 'Loan amount (amount disbursed to the borrower)', }, { text : ''}, { text : 'Rs.'}],
        [{ text: 'Total interest to be paid by borrower', }, { text : ''}, { text : 'Rs.'}],
        [{ text: 'Loan Interest rate', }, { text : ''}, { text : 'Percentage'}],
        [{ text: 'Loan schedule starting date', }, { text : ''}, { text : ''}],
        [{ text: 'Loan tenure', }, { text : ''}, { text : 'Months'}],
        [{ text: 'Effective annualized interest rate (computed on net disbursed amount using IRR approach and reducing balance method)', }, { text : ''}, { text : 'Percentage'}],
        [{ text: 'Repayment frequency by the borrower' }, { text : 'Monthly'}, { text : ''}],
        [{ text: 'Amount of Instalment to be repaid'}, { text : ''}, { text : 'Rs.'}],
        [{ text: 'Number of instalments of repayment'}, { text : ''}, { text : 'Months'}],
        [{ text: 'Other up-front charges (break-up of each component to be given below) (inRupees)' , bold : true, italics: true,}, { text : ''}, { text : ''}],
        [{ text: 'Processing fees', }, { text : ''}, { text : 'Rs.'}],
        [{ text: 'Insurance charges-Double coverage*'}, { text : ''}, { text : 'Rs.'}],
        [{ text: 'Insurance charges-Single coverage*'}, { text : ''}, { text : 'Rs.'}],
        [{ text: 'Applicable Tax (GST 18%)'}, { text : ''}, { text : 'Rs.'}],
        [{ text: 'Broken period interest'}, { text : ''}, { text : 'Rs.'}],
        [{ text: 'Net disbursed amount (In case double Insurance offered)'}, { text : ''}, { text : 'Rs.'}],
        [{ text: 'Net disbursed amount (In case single Insurance offered)'}, { text : ''}, { text : 'Rs.'}],
        
    )


    return [
        {
            table: {
              widths: ['50%', '50%'],
              heights : 50,
              body : header,
            }, style : 'dxbLogoHeader',
            layout : 'noBorders'
        },
        { text : 'Regd. Office: Thrissur, Kerala', style : 'heading', alignment : 'left'},
        {
            table: {
              widths: ['33%', '33%' , '*'],
              heights : 50,
              body : creditRow,
            }, style : 'table',
            layout : 'noBorders'
        },
        { text : 'PRICING FACT SHEET', style : 'heading'},
        {
            table: {
                widths: ['*', '10%', '20%'],
                body: pricingFactTable
            }, style: 'tableLeftAligned',
            bold: true
        },
    ]
}