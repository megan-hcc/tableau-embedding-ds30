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
    const viz = new tableau.Viz(vizContainer, URL, options);
}

// 5. Execute function to load the dashboard
document.addEventListener("DOMContentLoaded",initViz);