// DOM elements
const persona1Select = document.getElementById('persona1');
const persona2Select = document.getElementById('persona2');
const calculateBtn = document.getElementById('calculateBtn');
const resultContent = document.getElementById('resultContent');
const searchInput = document.getElementById('searchInput');
const arcanaFilter = document.getElementById('arcanaFilter');
const personaGrid = document.getElementById('personaGrid');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    populatePersonaSelects();
    populateArcanaFilter();
    displayPersonas();
    setupEventListeners();
    console.log(`Loaded ${PERSONAS.length} personas`);
});

// Populate persona dropdowns
function populatePersonaSelects() {
    // Clear existing options except the first one
    persona1Select.innerHTML = '<option value="">Select First Persona</option>';
    persona2Select.innerHTML = '<option value="">Select Second Persona</option>';
    
    const sortedPersonas = PERSONAS.sort((a, b) => a.name.localeCompare(b.name));
    
    sortedPersonas.forEach(persona => {
        const displayText = `${persona.name} (${persona.arcana} - Lv.${persona.level})`;
        
        const option1 = new Option(displayText, persona.id);
        const option2 = new Option(displayText, persona.id);
        
        persona1Select.appendChild(option1);
        persona2Select.appendChild(option2);
    });
}

// Populate arcana filter
function populateArcanaFilter() {
    const arcanas = [...new Set(PERSONAS.map(p => p.arcana))].sort();
    
    arcanas.forEach(arcana => {
        const option = new Option(arcana, arcana);
        arcanaFilter.appendChild(option);
    });
}

// Display personas in grid
function displayPersonas(personasToShow = PERSONAS) {
    personaGrid.innerHTML = '';
    
    if (personasToShow.length === 0) {
        personaGrid.innerHTML = '<p>No personas found matching your criteria.</p>';
        return;
    }
    
    personasToShow.forEach(persona => {
        const card = document.createElement('div');
        card.className = 'persona-card';
        card.innerHTML = `
            <div class="persona-name">${persona.name}</div>
            <div class="persona-arcana">${persona.arcana}</div>
            <div class="persona-level">Level ${persona.level}</div>
            <div class="persona-skills">${persona.skills.slice(0, 3).join(', ')}${persona.skills.length > 3 ? '...' : ''}</div>
        `;
        
        // Add click event to select persona
        card.addEventListener('click', () => {
            if (!persona1Select.value) {
                persona1Select.value = persona.id;
            } else if (!persona2Select.value && persona1Select.value !== persona.id) {
                persona2Select.value = persona.id;
            }
        });
        
        personaGrid.appendChild(card);
    });
}

// Setup event listeners
function setupEventListeners() {
    calculateBtn.addEventListener('click', calculateFusion);
    searchInput.addEventListener('input', filterPersonas);
    arcanaFilter.addEventListener('change', filterPersonas);
    
    // Auto-calculate when both personas are selected
    persona1Select.addEventListener('change', autoCalculate);
    persona2Select.addEventListener('change', autoCalculate);
}

// Auto-calculate when both personas are selected
function autoCalculate() {
    if (persona1Select.value && persona2Select.value) {
        calculateFusion();
    }
}

// Calculate fusion result
function calculateFusion() {
    const persona1Id = persona1Select.value;
    const persona2Id = persona2Select.value;
    
    if (!persona1Id || !persona2Id) {
        resultContent.innerHTML = '<p style="color: #666;">Please select both personas to see fusion result</p>';
        return;
    }
    
    if (persona1Id === persona2Id) {
        resultContent.innerHTML = '<p style="color: red;">❌ Please select different personas</p>';
        return;
    }
    
    const persona1 = PERSONAS.find(p => p.id === persona1Id);
    const persona2 = PERSONAS.find(p => p.id === persona2Id);
    
    if (!persona1 || !persona2) {
        resultContent.innerHTML = '<p style="color: red;">❌ Persona not found</p>';
        return;
    }
    
    // Check for special fusions first
    const specialResult = checkSpecialFusion(persona1, persona2);
    if (specialResult) {
        displayResult(specialResult, true);
        return;
    }
    
    // Normal fusion logic
    const result = performNormalFusion(persona1, persona2);
    
    if (result) {
        displayResult(result, false);
    } else {
        resultContent.innerHTML = `
            <div class="fusion-error">
                <h4>❌ No Fusion Result</h4>
                <p><strong>${persona1.name}</strong> (${persona1.arcana}) + <strong>${persona2.name}</strong> (${persona2.arcana})</p>
                <p>These personas cannot be fused together using standard fusion rules.</p>
                <small>Try different combinations or check our fusion guide!</small>
            </div>
        `;
    }
}

// Check for special fusion recipes
function checkSpecialFusion(persona1, persona2) {
    // This is simplified - in a real implementation, you'd check complex special fusion rules
    for (const special of SPECIAL_FUSIONS) {
        if (special.type === "triple" && special.materials.includes(persona1.id) && special.materials.includes(persona2.id)) {
            const resultPersona = PERSONAS.find(p => p.id === special.result);
            if (resultPersona) {
                return resultPersona;
            }
        }
    }
    return null;
}

// Perform normal arcana-based fusion
function performNormalFusion(persona1, persona2) {
    const arcana1 = persona1.arcana;
    const arcana2 = persona2.arcana;
    
    // Get result arcana from fusion chart
    let resultArcana = null;
    
    if (FUSION_CHART[arcana1] && FUSION_CHART[arcana1][arcana2]) {
        resultArcana = FUSION_CHART[arcana1][arcana2];
    } else if (FUSION_CHART[arcana2] && FUSION_CHART[arcana2][arcana1]) {
        resultArcana = FUSION_CHART[arcana2][arcana1];
    }
    
    if (!resultArcana) {
        return null;
    }
    
    // Find all personas of the result arcana
    const resultPersonas = PERSONAS.filter(p => p.arcana === resultArcana);
    
    if (resultPersonas.length === 0) {
        return null;
    }
    
    // Calculate average level
    const averageLevel = Math.floor((persona1.level + persona2.level) / 2);
    
    // Find the closest level persona in the result arcana
    let bestMatch = resultPersonas[0];
    let smallestDifference = Math.abs(bestMatch.level - averageLevel);
    
    for (const persona of resultPersonas) {
        const difference = Math.abs(persona.level - averageLevel);
        if (difference < smallestDifference) {
            smallestDifference = difference;
            bestMatch = persona;
        }
    }
    
    return bestMatch;
}

// Display fusion result
function displayResult(result, isSpecial) {
    const specialBadge = isSpecial ? '<span class="special-badge">✨ Special Fusion</span>' : '';
    
    resultContent.innerHTML = `
        <div class="fusion-success">
            <h4>✅ Fusion Result ${specialBadge}</h4>
            <div class="result-persona">
                <div class="result-name">${result.name}</div>
                <div class="result-details">
                    <span class="result-arcana">${result.arcana} Arcana</span>
                    <span class="result-level">Level ${result.level}</span>
                </div>
                <div class="result-skills">
                    <strong>Skills:</strong> ${result.skills.join(', ')}
                </div>
            </div>
            <div class="fusion-tip">
                <small>💡 Tip: The resulting persona level may vary based on your current level and other factors in-game.</small>
            </div>
        </div>
    `;
}

// Filter personas based on search and arcana
function filterPersonas() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedArcana = arcanaFilter.value;
    
    let filteredPersonas = PERSONAS.filter(persona => {
        const matchesSearch = searchTerm === '' || 
            persona.name.toLowerCase().includes(searchTerm) ||
            persona.skills.some(skill => skill.toLowerCase().includes(searchTerm));
        
        const matchesArcana = !selectedArcana || persona.arcana === selectedArcana;
        
        return matchesSearch && matchesArcana;
    });
    
    // Sort filtered results
    filteredPersonas.sort((a, b) => {
        if (selectedArcana) {
            return a.level - b.level; // Sort by level within arcana
        }
        return a.name.localeCompare(b.name); // Sort alphabetically
    });
    
    displayPersonas(filteredPersonas);
}

// Utility function to get persona by ID
function getPersonaById(id) {
    return PERSONAS.find(p => p.id === id);
}

// Clear selections
function clearSelections() {
    persona1Select.value = '';
    persona2Select.value = '';
    resultContent.innerHTML = '<div id="resultContent">Select two personas to see the fusion result</div>';
}

// Add clear button functionality if needed
document.addEventListener('DOMContentLoaded', function() {
    // Add a clear button
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear Selections';
    clearBtn.className = 'clear-btn';
    clearBtn.onclick = clearSelections;
    
    const fusionInputs = document.querySelector('.fusion-inputs');
    if (fusionInputs) {
        fusionInputs.appendChild(clearBtn);
    }
});
