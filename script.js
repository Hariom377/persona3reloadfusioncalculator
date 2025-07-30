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
});

// Populate persona dropdowns
function populatePersonaSelects() {
    const sortedPersonas = PERSONAS.sort((a, b) => a.name.localeCompare(b.name));
    
    sortedPersonas.forEach(persona => {
        const option1 = new Option(`${persona.name} (${persona.arcana}, Lv.${persona.level})`, persona.id);
        const option2 = new Option(`${persona.name} (${persona.arcana}, Lv.${persona.level})`, persona.id);
        
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
    
    personasToShow.forEach(persona => {
        const card = document.createElement('div');
        card.className = 'persona-card';
        card.innerHTML = `
            <div class="persona-name">${persona.name}</div>
            <div class="persona-arcana">${persona.arcana}</div>
            <div class="persona-level">Level ${persona.level}</div>
        `;
        personaGrid.appendChild(card);
    });
}

// Setup event listeners
function setupEventListeners() {
    calculateBtn.addEventListener('click', calculateFusion);
    searchInput.addEventListener('input', filterPersonas);
    arcanaFilter.addEventListener('change', filterPersonas);
}

// Calculate fusion result
function calculateFusion() {
    const persona1Id = persona1Select.value;
    const persona2Id = persona2Select.value;
    
    if (!persona1Id || !persona2Id) {
        resultContent.innerHTML = '<p style="color: red;">Please select both personas</p>';
        return;
    }
    
    if (persona1Id === persona2Id) {
        resultContent.innerHTML = '<p style="color: red;">Please select different personas</p>';
        return;
    }
    
    const persona1 = PERSONAS.find(p => p.id === persona1Id);
    const persona2 = PERSONAS.find(p => p.id === persona2Id);
    
    // Simple fusion logic - will be enhanced later
    const result = performFusion(persona1, persona2);
    
    if (result) {
        resultContent.innerHTML = `
            <div class="fusion-success">
                <h4>${result.name}</h4>
                <p><strong>Arcana:</strong> ${result.arcana}</p>
                <p><strong>Level:</strong> ${result.level}</p>
                <p><strong>Skills:</strong> ${result.skills.join(', ')}</p>
            </div>
        `;
    } else {
        resultContent.innerHTML = '<p style="color: orange;">No fusion result found for this combination</p>';
    }
}

// Basic fusion logic
function performFusion(persona1, persona2) {
    // Basic implementation - will use complete fusion chart later
    if (FUSION_CHART[persona1.arcana] && FUSION_CHART[persona1.arcana][persona2.arcana]) {
        const resultArcana = FUSION_CHART[persona1.arcana][persona2.arcana];
        const resultPersonas = PERSONAS.filter(p => p.arcana === resultArcana);
        
        if (resultPersonas.length > 0) {
            // Return first matching persona for now
            return resultPersonas[0];
        }
    }
    
    return null;
}

// Filter personas based on search and arcana
function filterPersonas() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedArcana = arcanaFilter.value;
    
    let filteredPersonas = PERSONAS.filter(persona => {
        const matchesSearch = persona.name.toLowerCase().includes(searchTerm);
        const matchesArcana = !selectedArcana || persona.arcana === selectedArcana;
        
        return matchesSearch && matchesArcana;
    });
    
    displayPersonas(filteredPersonas);
}
