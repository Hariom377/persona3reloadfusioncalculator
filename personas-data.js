// Basic persona database - will be expanded later
const PERSONAS = [
    {
        name: "Orpheus",
        arcana: "Fool",
        level: 1,
        skills: ["Agi", "Bash"],
        id: "orpheus"
    },
    {
        name: "Jack Frost",
        arcana: "Magician",
        level: 8,
        skills: ["Bufu", "Ice Break"],
        id: "jack-frost"
    },
    {
        name: "Pixie",
        arcana: "Magician",
        level: 2,
        skills: ["Zio", "Dia"],
        id: "pixie"
    },
    {
        name: "Apsaras",
        arcana: "Priestess",
        level: 3,
        skills: ["Ice Break", "Bufu"],
        id: "apsaras"
    }
    // More personas will be added from the data sources you provided
];

// Basic fusion chart - simplified version
const FUSION_CHART = {
    "Fool": {
        "Magician": "Priestess",
        "Priestess": "Empress"
    },
    "Magician": {
        "Fool": "Priestess",
        "Priestess": "Emperor"
    }
    // Complete fusion chart will be implemented later
};

// Export data for use in script.js
window.PERSONAS = PERSONAS;
window.FUSION_CHART = FUSION_CHART;
