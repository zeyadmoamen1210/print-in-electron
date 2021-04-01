<template>
  <div
    class="col-md-12"
    id="pos-invoice"
  >

  <!-- <router-link to="/barcode">barcode</router-link> -->

  <button @click="printPaper">
    print
  </button>
    
  </div>
</template>

<script>

const { remote } = require('electron');
const app = remote.app;

export default {
  created(){
      console.log(app.getPath('userData')+`\\src\\assets\\logo.png`);
  },
  data(){
    return {
      options:{
        preview: true,               // Preview in window or print
   width: '100%',               //  width of content body
   margin: '0 0 0 0',            // margin of content body
   copies: 1,                    // Number of copies to print
   printerName: 'Xprinter XP-230H',        // printerName: string, check with webContent.getPrinters()
   timeOutPerLine: 400,
   pageSize: { height: 301000000, width: 710000000 } 
      },

      options2:{
        preview: true,               // Preview in window or print
   width: '100%',               //  width of content body
   margin: '0 0 0 0',            // margin of content body
   copies: 1,                    // Number of copies to print
   printerName: 'Xprinter XP-233B',        // printerName: string, check with webContent.getPrinters()
   timeOutPerLine: 400,
   pageSize: { height: 301000000, width: 710000000 } 
      },

      printData: [
        {
     type: 'image',                                       
     path: "src/assets/logo.png",     // file path
     position: 'center',                                  // position of image: 'left' | 'center' | 'right'
     width: '60px',                                           // width of image in px; default: auto
     height: '60px',   
     style: `float:left`,                                       // width of image in px; default: 50 or '50px'
   },
   {
     type: 'image',                                       
     path: "src/assets/logo.png",     // file path
     position: 'center',                                  // position of image: 'left' | 'center' | 'right'
     width: '60px',                                           // width of image in px; default: auto
     height: '60px',   
     style: `float:right`,                                       // width of image in px; default: 50 or '50px'
   },
   {
      type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: 'SAMPLE HEADING',
      style: `text-align:center;`,
      css: {"font-weight": "700", "font-size": "18px"}
   },
   {
      type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: 'SAMPLE HEADING',
      style: `text-align:center;`,
      css: {"font-weight": "700", "font-size": "18px"}
   },
       {
       type: 'table',
       // style the table
       style: 'border: 1px solid #ddd;width:100%',
       // list of the columns to be rendered in the table header
       tableHeader: ['اسم المنتج', 'الكمية' , 'السعر' , 'القيمة'],
       // multi dimensional array depicting the rows and columns of the table body
       tableBody: [
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['Cat', 2, 3, 20],
           ['xxxxxxxxxxxxxxxxxxx', 2, 3, 20],
           
       ],
       // list of columns to be rendered in the table footer
       tableFooter: ['  '],
       // custom style for the table header
       tableHeaderStyle: 'background-color: #000; color: white;;width:100%',
       // custom style for the table body
       tableBodyStyle: 'border: 0.5px solid #ddd;width:100%',
       // custom style for the table footer
       tableFooterStyle: 'background-color: #fff;color:#fff',
    },
    {
      type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: 'SAMPLE Footer',
      style: `text-align:center;`,
      css: {"color":"#FFF","font-weight": "700", "font-size": "18px", "position":"fixed", "bottom":"0","left":"0px","width":"100%","background-color":"#333","margin":"0px"}
   },


   {
      type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: 'كيدز استور للملابس',
      style: `font-size:9px`,
  
   },
   {
      type: 'barCode',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      // value: 'SAMPLE Footer',
      value: 'HB4587896',
      height: 7,                     // height of barcode, applicable only to bar and QR codes
      width: 1,                       // width of barcode, applicable only to bar and QR codes
      displayValue: false,             // Display value below barcode
      fontsize: 8,
      // css: {"color":"#FFF","font-weight": "700", "font-size": "18px", "position":"fixed", "bottom":"0","left":"0px","width":"100%","background-color":"#333","margin":"0px"}
   },
   {
      type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: 'بلوزة بناتي محبر',
      style: `margin-left: 29px;font-size:9px;margin-bottom:5px`,
   },






    {
      type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: 'كيدز استور للملابس',
      style: `font-size:9px`,
   },
   {
      type: 'barCode',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      // value: 'SAMPLE Footer',
      value: 'HB4587896',
      height: 7,                     // height of barcode, applicable only to bar and QR codes
      width: 1,                       // width of barcode, applicable only to bar and QR codes
      displayValue: false,             // Display value below barcode
      fontsize: 8,
      // css: {"color":"#FFF","font-weight": "700", "font-size": "18px", "position":"fixed", "bottom":"0","left":"0px","width":"100%","background-color":"#333","margin":"0px"}
   },
   {
      type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: 'بلوزة بناتي محبر',
      style: `margin-bottom:50px;margin-left: 29px;font-size:9px`,
   },
      ]
    }
  },
  methods:{
    printPaper(){
const {PosPrinter} = require('electron').remote.require("electron-pos-printer");
     PosPrinter.print(this.printData, this.options)
      .then((res) => {
        console.log(res)
        PosPrinter.print(this.printData, this.options2).then(res2 => {
          console.log(res2)
        }).catch((error) => {
          console.error(error);
        });
      })
      .catch((error) => {
          console.error(error);
        });

    }
  }
}

</script>

<style>
/* @font-face {
    font-family: 'Scheherazade-Regular';
    src: url('https://fatura-cdn.fra1.cdn.digitaloceanspaces.com/fonts/Scheherazade-Regular.eot?#iefix') format('embedded-opentype'), url('https://fatura-cdn.fra1.cdn.digitaloceanspaces.com/fonts/Scheherazade-Regular.woff') format('woff'), url('https://fatura-cdn.fra1.cdn.digitaloceanspaces.com/fonts/Scheherazade-Regular.ttf') format('truetype'), url('https://fatura-cdn.fra1.cdn.digitaloceanspaces.com/fonts/Scheherazade-Regular.svg#Scheherazade-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
} */

html,
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 1.42857;
  -webkit-print-color-adjust: exact;
  color: black;
  font-weight: bold;
  /* height: 99%; */
  /* overflow: hidden; */
  direction: rtl;
}

.content {
  padding-left: 10px;
  padding-right: 20px;
}

.content-inner {
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: self-start;
  flex-direction: row;
  width: 100%;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.invoice-thead {
  color: white !important;
}

table {
  width: 100%;
}

.text-center {
  text-align: center;
}
table {
  border-collapse: collapse;
}

table,
td,
th {
  border: 1px solid black;
}

/* .table-bordered {
    border: 1px solid #dee2e6;
} */

.invoice-table td,
.invoice-table th {
  border: 1px solid black !important;
}

.table {
  width: 100%;
  margin-bottom: 10px;
  color: black;
}

td {
  padding: 5px;
}

.table td,
.table th {
  vertical-align: top;
}

/* .table-bordered td,
.table-bordered th {
    border: 1px solid #dee2e6;
} */

.three {
  width: 33.3%;
}

th {
  background: #facf36;
}

.uls {
  position: relative;
  height: 80px;
}

.uls .ul {
  position: absolute;
  padding-right: 0;
}

.uls .ul:last-of-type {
  right: 270px;
}

.ul {
  list-style: none;
}

.ul li {
  padding-bottom: 5px;
}

.strack {
  margin-bottom: 20px;
}

.strack tbody tr:nth-child(even) {
  background: #ddd;
}

@media print {
  footer {
    page-break-after: always;
  }
}

table.report-container {
  page-break-after: always;
}

thead.report-header {
  display: table-header-group;
}

.report-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

tfoot.report-footer {
  display: table-footer-group;
  /* position: fixed;
  bottom: 30px;
  width: 100%;
  height: 2.5rem; */
}

.table td,
.table th {
  padding: 5px !important;
}

@media print {
  table,
  table tr td,
  table tr th {
    page-break-inside: avoid;
  }
}
</style>