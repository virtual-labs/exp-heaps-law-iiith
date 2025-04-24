// Function to initialize corpus options (default language is English)
function initializeCorpusOptions() {
  const corpusOptDiv = document.getElementById("corpus_opt");

  // Populate corpus options for English (default language)
  corpusOptDiv.innerHTML = `
        <select id="corp_size" name="corp_size" onchange="selectCorpusSize();">
            <option value="-1" selected>---Select Corpus---</option>
            <option value="1*100000">Corpus 1 (100000 tokens)</option>
            <option value="1*500000">Corpus 2 (500000 tokens)</option>
            <option value="1*1000000">Corpus 3 (1000000 tokens)</option>
        </select>
        <div id="simulation_result_container" style="margin-top: 20px;"></div>
    `;
}

// Function to handle corpus size selection
function selectCorpusSize() {
  const tokens = document.getElementById("corp_size");
  const selectedIndex = tokens.selectedIndex;
  const tokenId = tokens.options[selectedIndex].value;

  if (tokenId === "-1") {
    alert("Select the number of tokens");
    return;
  }

  const [langId, tokenCount] = tokenId.split("*");
  console.log(`Language ID: ${langId}, Token Count: ${tokenCount}`);

  // Display simulation results dynamically
  displaySimulationResults(tokenCount);
}

// Function to display simulation results
function displaySimulationResults(tokenCount) {
  const resultContainer = document.getElementById(
    "simulation_result_container"
  );

  // Dynamically display the simulation result (e.g., an image or graph)
  resultContainer.innerHTML = `
        <div id="simulation_result">
            <p>Displaying simulation for Token Count: ${tokenCount}</p>
            <img src="images/English/${tokenCount}.jpg" alt="Simulation Result for Token Count ${tokenCount}" style="max-width: 100%; height: auto;" />
        </div>
    `;
}

// Initialize the page on load
document.addEventListener("DOMContentLoaded", initializeCorpusOptions);
