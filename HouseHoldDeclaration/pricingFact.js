var _ = require('lodash');

module.exports = function (data) {

    let { prospect, group, date, dxbLogo, branch } = data;

    let header = [];

    //To be fixed, populate dxb account number here, empty string for now
    let accountNumber = '                 ';

    header.push(
      [{ }, { image : dxbLogo, width : 250, height : 100}]
    )

    let creditRow = [];

    creditRow.push(
        [{text : `Credit to JLG/Br. ${branch}`}, { text : `/DLXB${accountNumber}/2023-2024`}, { text : `Date: ${date}`}]
    )

    let pricingFactTable = [];

    pricingFactTable.push(

        [{ text: 'Parameter', }, { text : 'Details'}, { text : 'Unit'}],
        [{ text: 'Loan amount (amount disbursed to the borrower)', }, { text : ''}, { text : 'Rs.40000'}],
        [{ text: 'Total interest to be paid by borrower', }, { text : ''}, { text : 'Rs.11720'}],
        [{ text: 'Loan Interest rate', }, { text : '26'}, { text : 'Percentage'}],
        [{ text: 'Loan schedule starting date', }, { text : ''}, { text : ''}],
        [{ text: 'Loan tenure', }, { text : '24'}, { text : 'Months'}],
        [{ text: 'Effective annualized interest rate (computed on net disbursed amount using IRR approach and reducing balance method)', }, { text : ''}, { text : 'Percentage'}],
        [{ text: 'Repayment frequency by the borrower' }, { text : 'Monthly'}, { text : ''}],
        [{ text: 'Amount of Instalment to be repaid'}, { text : ''}, { text : 'Rs.2155'}],
        [{ text: 'Number of instalments of repayment'}, { text : '24'}, { text : 'Months'}],
        [{ text: 'Other up-front charges (break-up of each component to be given below) (inRupees)' , bold : true}, { text : ''}, { text : ''}],
        [{ text: 'Processing fees', }, { text : ''}, { text : 'Rs.400'}],
        [{ text: 'Insurance charges-Double coverage*'}, { text : ''}, { text : 'Rs.1471.86'}],
        [{ text: 'Insurance charges-Single coverage*'}, { text : ''}, { text : ''}],
        [{ text: 'Applicable Tax (GST 18%)'}, { text : ''}, { text : 'Rs.72'}],
        [{ text: 'Broken period interest'}, { text : ''}, { text : 'Rs.'}],
        [{ text: 'Net disbursed amount (In case double Insurance offered)'}, { text : ''}, { text : 'Rs.38056.14'}],
        [{ text: 'Net disbursed amount (In case single Insurance offered)'}, { text : ''}, { text : ''}],
        
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
        { text : 'Note: Broken period interest varies daywise and hence cannot give exact calculation', alignment : 'center', style : 'paragraph'}
    ]
}