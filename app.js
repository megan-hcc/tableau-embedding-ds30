let viz;

// 1. Create variable to store vizContainer
const vizContainer = document.getElementById("vizContainer");

// 2. Create variable to store the dashboard options
const options = {
    device: "desktop",
    height: "800px",
    width: "1100px"
};

// 3. Create variable to store the URL
const URL = "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia";

// 4. Define function to load the dashboard
function initViz() {
viz = new tableau.Viz(vizContainer, URL, options);
}

// 5. Execute function to load the dashboard
document.addEventListener("DOMContentLoaded",initViz);

// 6. Create a variable to store the Export PDF button
const exportPdfButton = document.getElementById("exportPDF");

// 7. Add event listener for when the button is clicked
exportPdfButton.addEventListener("click", exportPdfFunction);

// 8. Define a function to trigger on button click
function exportPdfFunction(){
    viz.showExportPDFDialog();
};


// 9. Do the same as 6/7/8 for Export Powerpoint Button
const exportPowerPointButton = document.getElementById("exportPPT");

exportPowerPointButton.addEventListener("click", exportPowerPointFunction);

function exportPowerPointFunction(){
    viz.showExportPowerPointDialog();
};

// 10. Set up filter interactions
function getRangeValues() {

    const minValue = document.getElementById("minValue").value;
    const maxValue = document.getElementById("maxValue").value;
    console.log(minValue, maxValue);
    const workbook = viz.getWorkbook();
    const activeSheet = workbook.getActiveSheet();
    const sheets = activeSheet.getWorksheets();
    //inspect the sheets you need to filter
    console.log(sheets);
    const sheetToFilter = sheets[0];
    // do the actual filtering
    sheetToFilter
        .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
        .then(alert("viz filtered"));
  }

// 11. Trigger function on filter button click
const filterButton = document.getElementById("filterButton");

filterButton.addEventListener("click", getRangeValues);