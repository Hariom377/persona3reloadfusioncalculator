// Complete Persona 3 Reload Database
const PERSONAS = [
    // Fool Arcana
    { name: "Orpheus", arcana: "Fool", level: 1, skills: ["Agi", "Bash", "Cadenza"], id: "orpheus", baseLevel: 1 },
    { name: "Slime", arcana: "Fool", level: 12, skills: ["Fire Break", "Bufu"], id: "slime", baseLevel: 12 },
    { name: "Legion", arcana: "Fool", level: 22, skills: ["Evil Touch", "Poison Mist"], id: "legion", baseLevel: 22 },
    { name: "Black Frost", arcana: "Fool", level: 38, skills: ["Bufudyne", "Mind Charge"], id: "black-frost", baseLevel: 38 },
    { name: "Ose", arcana: "Fool", level: 42, skills: ["Counterstrike", "Single Shot"], id: "ose", baseLevel: 42 },
    { name: "Decarabia", arcana: "Fool", level: 50, skills: ["Megidola", "Fire Amp"], id: "decarabia", baseLevel: 50 },
    { name: "Loki", arcana: "Fool", level: 64, skills: ["Niflheim", "Trickster"], id: "loki", baseLevel: 64 },
    { name: "Susano-o", arcana: "Fool", level: 76, skills: ["Brave Blade", "High Counter"], id: "susano-o", baseLevel: 76 },
    
    // Magician Arcana
    { name: "Nekomata", arcana: "Magician", level: 5, skills: ["Agi", "Sukukaja"], id: "nekomata", baseLevel: 5 },
    { name: "Jack Frost", arcana: "Magician", level: 8, skills: ["Bufu", "Ice Break"], id: "jack-frost", baseLevel: 8 },
    { name: "Pyro Jack", arcana: "Magician", level: 13, skills: ["Agi", "Maragi"], id: "pyro-jack", baseLevel: 13 },
    { name: "Hua Po", arcana: "Magician", level: 16, skills: ["Maragi", "Media"], id: "hua-po", baseLevel: 16 },
    { name: "Sati", arcana: "Magician", level: 23, skills: ["Agilao", "Dekaja"], id: "sati", baseLevel: 23 },
    { name: "Orobas", arcana: "Magician", level: 26, skills: ["Agidyne", "Sukunda"], id: "orobas", baseLevel: 26 },
    { name: "Rangda", arcana: "Magician", level: 48, skills: ["Mudoon", "Counterstrike"], id: "rangda", baseLevel: 48 },
    { name: "Surt", arcana: "Magician", level: 52, skills: ["Ragnarok", "Fire Amp"], id: "surt", baseLevel: 52 },
    
    // Priestess Arcana
    { name: "Pixie", arcana: "Priestess", level: 2, skills: ["Zio", "Dia"], id: "pixie", baseLevel: 2 },
    { name: "Apsaras", arcana: "Priestess", level: 3, skills: ["Ice Break", "Bufu"], id: "apsaras", baseLevel: 3 },
    { name: "Unicorn", arcana: "Priestess", level: 11, skills: ["Garu", "Diarama"], id: "unicorn", baseLevel: 11 },
    { name: "High Pixie", arcana: "Priestess", level: 15, skills: ["Zionga", "Me Patra"], id: "high-pixie", baseLevel: 15 },
    { name: "Sarasvati", arcana: "Priestess", level: 21, skills: ["Bufula", "Media"], id: "sarasvati", baseLevel: 21 },
    { name: "Ganga", arcana: "Priestess", level: 31, skills: ["Ice Boost", "Mabufu"], id: "ganga", baseLevel: 31 },
    { name: "Parvati", arcana: "Priestess", level: 35, skills: ["Mediarama", "Bufudyne"], id: "parvati", baseLevel: 35 },
    { name: "Kikuri-Hime", arcana: "Priestess", level: 40, skills: ["Samarecarm", "Diarahan"], id: "kikuri-hime", baseLevel: 40 },
    { name: "Scathach", arcana: "Priestess", level: 56, skills: ["Garudyne", "Matarukaja"], id: "scathach", baseLevel: 56 },
    
    // Empress Arcana
    { name: "Leanan Sidhe", arcana: "Empress", level: 6, skills: ["Zionga", "Mazionga"], id: "leanan-sidhe", baseLevel: 6 },
    { name: "Yaksini", arcana: "Empress", level: 14, skills: ["Bufula", "Counter"], id: "yaksini", baseLevel: 14 },
    { name: "Laksmi", arcana: "Empress", level: 19, skills: ["Diarama", "Bufula"], id: "laksmi", baseLevel: 19 },
    { name: "Hariti", arcana: "Empress", level: 25, skills: ["Samarecarm", "Mediarama"], id: "hariti", baseLevel: 25 },
    { name: "Gabriel", arcana: "Empress", level: 45, skills: ["Garudyne", "Samarecarm"], id: "gabriel", baseLevel: 45 },
    { name: "Mother Harlot", arcana: "Empress", level: 63, skills: ["Megidolaon", "Absorb Ice"], id: "mother-harlot", baseLevel: 63 },
    { name: "Alilat", arcana: "Empress", level: 72, skills: ["Megidolaon", "Absorb Fire"], id: "alilat", baseLevel: 72 },
    
    // Emperor Arcana
    { name: "Forneus", arcana: "Emperor", level: 7, skills: ["Tarukaja", "Rakukaja"], id: "forneus", baseLevel: 7 },
    { name: "Oberon", arcana: "Emperor", level: 12, skills: ["Zionga", "Sukukaja"], id: "oberon", baseLevel: 12 },
    { name: "Take-Mikazuchi", arcana: "Emperor", level: 24, skills: ["Ziodyne", "Elec Boost"], id: "take-mikazuchi", baseLevel: 24 },
    { name: "King Frost", arcana: "Emperor", level: 30, skills: ["Bufudyne", "Ice Boost"], id: "king-frost", baseLevel: 30 },
    { name: "Raja Naga", arcana: "Emperor", level: 34, skills: ["Maziodyne", "Elec Amp"], id: "raja-naga", baseLevel: 34 },
    { name: "Kingu", arcana: "Emperor", level: 43, skills: ["Megidola", "Absorb Elec"], id: "kingu", baseLevel: 43 },
    { name: "Barong", arcana: "Emperor", level: 60, skills: ["Megidolaon", "Tetraja"], id: "barong", baseLevel: 60 },
    { name: "Odin", arcana: "Emperor", level: 70, skills: ["Thunder Reign", "Wild Thunder"], id: "odin", baseLevel: 70 },
    
    // Hierophant Arcana
    { name: "Omoikane", arcana: "Hierophant", level: 7, skills: ["Kouha", "Media"], id: "omoikane", baseLevel: 7 },
    { name: "Berith", arcana: "Hierophant", level: 13, skills: ["Cleave", "Tarukaja"], id: "berith", baseLevel: 13 },
    { name: "Shiisaa", arcana: "Hierophant", level: 15, skills: ["Rakukaja", "Counter"], id: "shiisaa", baseLevel: 15 },
    { name: "Flauros", arcana: "Hierophant", level: 25, skills: ["Agilao", "Dekaja"], id: "flauros", baseLevel: 25 },
    { name: "Thoth", arcana: "Hierophant", level: 31, skills: ["Megido", "Mind Charge"], id: "thoth", baseLevel: 31 },
    { name: "Hokuto Seikun", arcana: "Hierophant", level: 38, skills: ["Mediarama", "Tetraja"], id: "hokuto-seikun", baseLevel: 38 },
    { name: "Daisoujou", arcana: "Hierophant", level: 53, skills: ["Samsara", "Meditation"], id: "daisoujou", baseLevel: 53 },
    { name: "Kohryu", arcana: "Hierophant", level: 76, skills: ["Megidolaon", "Absorb Phys"], id: "kohryu", baseLevel: 76 },
    
    // Lovers Arcana
    { name: "Ame-no-Uzume", arcana: "Lovers", level: 9, skills: ["Media", "Magaru"], id: "ame-no-uzume", baseLevel: 9 },
    { name: "Pixie", arcana: "Lovers", level: 2, skills: ["Zio", "Dia"], id: "pixie-lovers", baseLevel: 2 },
    { name: "Narcissus", arcana: "Lovers", level: 17, skills: ["Garula", "Growth"], id: "narcissus", baseLevel: 17 },
    { name: "Queen Mab", arcana: "Lovers", level: 22, skills: ["Magarula", "Matarukaja"], id: "queen-mab", baseLevel: 22 },
    { name: "Saki Mitama", arcana: "Lovers", level: 29, skills: ["Garudyne", "Mediarama"], id: "saki-mitama", baseLevel: 29 },
    { name: "Titania", arcana: "Lovers", level: 36, skills: ["Magarudyne", "Mediarahan"], id: "titania", baseLevel: 36 },
    { name: "Raphael", arcana: "Lovers", level: 61, skills: ["Megidolaon", "Salvation"], id: "raphael", baseLevel: 61 },
    { name: "Cybele", arcana: "Lovers", level: 68, skills: ["Mediarahan", "Absorb Earth"], id: "cybele", baseLevel: 68 },
    
    // Chariot Arcana
    { name: "Eligor", arcana: "Chariot", level: 10, skills: ["Tarukaja", "Bash"], id: "eligor", baseLevel: 10 },
    { name: "Ara Mitama", arcana: "Chariot", level: 18, skills: ["Assault Dive", "Rakukaja"], id: "ara-mitama", baseLevel: 18 },
    { name: "Ares", arcana: "Chariot", level: 26, skills: ["Assault Dive", "High Counter"], id: "ares", baseLevel: 26 },
    { name: "Hanuman", arcana: "Chariot", level: 33, skills: ["Getsu-ei", "Counterstrike"], id: "hanuman", baseLevel: 33 },
    { name: "Narasimha", arcana: "Chariot", level: 39, skills: ["Akasha Arts", "Regenerate"], id: "narasimha", baseLevel: 39 },
    { name: "Kali", arcana: "Chariot", level: 51, skills: ["Deathbound", "Counterstrike"], id: "kali", baseLevel: 51 },
    { name: "Siegfried", arcana: "Chariot", level: 59, skills: ["Akasha Arts", "Apt Pupil"], id: "siegfried", baseLevel: 59 },
    { name: "Chi You", arcana: "Chariot", level: 72, skills: ["Akasha Arts", "High Counter"], id: "chi-you", baseLevel: 72 },
    
    // Justice Arcana
    { name: "Angel", arcana: "Justice", level: 4, skills: ["Kouha", "Dia"], id: "angel", baseLevel: 4 },
    { name: "Archangel", arcana: "Justice", level: 10, skills: ["Hama", "Diarama"], id: "archangel", baseLevel: 10 },
    { name: "Principality", arcana: "Justice", level: 16, skills: ["Mahama", "Diarama"], id: "principality", baseLevel: 16 },
    { name: "Power", arcana: "Justice", level: 25, skills: ["Hamaon", "Mediarama"], id: "power", baseLevel: 25 },
    { name: "Virtue", arcana: "Justice", level: 32, skills: ["Mahamaon", "Tetraja"], id: "virtue", baseLevel: 32 },
    { name: "Dominion", arcana: "Justice", level: 42, skills: ["Samsara", "Dekaja"], id: "dominion", baseLevel: 42 },
    { name: "Throne", arcana: "Justice", level: 51, skills: ["Megidola", "Angelic Grace"], id: "throne", baseLevel: 51 },
    { name: "Melchizedek", arcana: "Justice", level: 58, skills: ["Megidolaon", "God's Hand"], id: "melchizedek", baseLevel: 58 },
    
    // Hermit Arcana
    { name: "Yomotsu Shikome", arcana: "Hermit", level: 9, skills: ["Bash", "Poison Mist"], id: "yomotsu-shikome", baseLevel: 9 },
    { name: "Naga", arcana: "Hermit", level: 17, skills: ["Lightning", "Zionga"], id: "naga", baseLevel: 17 },
    { name: "Lamia", arcana: "Hermit", level: 27, skills: ["Charm", "Dekunda"], id: "lamia", baseLevel: 27 },
    { name: "Mothman", arcana: "Hermit", level: 35, skills: ["Tentarafoo", "Shibaboo"], id: "mothman", baseLevel: 35 },
    { name: "Taraka", arcana: "Hermit", level: 41, skills: ["Megido", "Marakunda"], id: "taraka", baseLevel: 41 },
    { name: "Kurama Tengu", arcana: "Hermit", level: 47, skills: ["Garudyne", "Masukukaja"], id: "kurama-tengu", baseLevel: 47 },
    { name: "Nebiros", arcana: "Hermit", level: 56, skills: ["Mudoon", "Megidola"], id: "nebiros", baseLevel: 56 },
    { name: "Arahabaki", arcana: "Hermit", level: 73, skills: ["Megidolaon", "Null Phys"], id: "arahabaki", baseLevel: 73 },
    
    // Fortune Arcana
    { name: "Fortuna", arcana: "Fortune", level: 17, skills: ["Garu", "Magaru"], id: "fortuna", baseLevel: 17 },
    { name: "Empusa", arcana: "Fortune", level: 20, skills: ["Magaru", "Tentarafoo"], id: "empusa", baseLevel: 20 },
    { name: "Kusi Mitama", arcana: "Fortune", level: 29, skills: ["Bufula", "Dekunda"], id: "kusi-mitama", baseLevel: 29 },
    { name: "Clotho", arcana: "Fortune", level: 36, skills: ["Magarula", "Tetraja"], id: "clotho", baseLevel: 36 },
    { name: "Lachesis", arcana: "Fortune", level: 43, skills: ["Bufudyne", "Tetrakarn"], id: "lachesis", baseLevel: 43 },
    { name: "Atropos", arcana: "Fortune", level: 52, skills: ["Garudyne", "Makarakarn"], id: "atropos", baseLevel: 52 },
    { name: "Norn", arcana: "Fortune", level: 62, skills: ["Megidola", "Morning Star"], id: "norn", baseLevel: 62 },
    { name: "Lakshmi", arcana: "Fortune", level: 69, skills: ["Luster Candy", "Mediarahan"], id: "lakshmi", baseLevel: 69 },
    
    // Strength Arcana
    { name: "Valkyrie", arcana: "Strength", level: 11, skills: ["Counter", "Assault Dive"], id: "valkyrie", baseLevel: 11 },
    { name: "Rakshasa", arcana: "Strength", level: 18, skills: ["Mind Slice", "Tarukaja"], id: "rakshasa", baseLevel: 18 },
    { name: "Titan", arcana: "Strength", level: 27, skills: ["Megaton Raid", "High Counter"], id: "titan", baseLevel: 27 },
    { name: "Jikokuten", arcana: "Strength", level: 33, skills: ["Torrent Shot", "Counterstrike"], id: "jikokuten", baseLevel: 33 },
    { name: "Hanuman", arcana: "Strength", level: 33, skills: ["Getsu-ei", "Counterstrike"], id: "hanuman-strength", baseLevel: 33 },
    { name: "Narasimha", arcana: "Strength", level: 39, skills: ["Akasha Arts", "Regenerate"], id: "narasimha-strength", baseLevel: 39 },
    { name: "Kali", arcana: "Strength", level: 51, skills: ["Deathbound", "Counterstrike"], id: "kali-strength", baseLevel: 51 },
    { name: "Siegfried", arcana: "Strength", level: 59, skills: ["Akasha Arts", "Apt Pupil"], id: "siegfried-strength", baseLevel: 59 },
    
    // Hanged Man Arcana
    { name: "Inugami", arcana: "Hanged Man", level: 8, skills: ["Agi", "Tarukaja"], id: "inugami", baseLevel: 8 },
    { name: "Take-Minakata", arcana: "Hanged Man", level: 21, skills: ["Fatal End", "Counterstrike"], id: "take-minakata", baseLevel: 21 },
    { name: "Orthrus", arcana: "Hanged Man", level: 28, skills: ["Agilao", "Counterstrike"], id: "orthrus", baseLevel: 28 },
    { name: "Vasuki", arcana: "Hanged Man", level: 35, skills: ["Poison Mist", "Garudyne"], id: "vasuki", baseLevel: 35 },
    { name: "Ubelluris", arcana: "Hanged Man", level: 41, skills: ["Megaton Raid", "Endure"], id: "ubelluris", baseLevel: 41 },
    { name: "Hecatoncheires", arcana: "Hanged Man", level: 50, skills: ["Gigantic Fist", "Counterstrike"], id: "hecatoncheires", baseLevel: 50 },
    { name: "Hell Biker", arcana: "Hanged Man", level: 57, skills: ["Mamudoon", "Fire Boost"], id: "hell-biker", baseLevel: 57 },
    { name: "Attis", arcana: "Hanged Man", level: 67, skills: ["Samarecarm", "Absorb Elec"], id: "attis", baseLevel: 67 },
    
    // Death Arcana
    { name: "Ghoul", arcana: "Death", level: 13, skills: ["Bash", "Poison Mist"], id: "ghoul", baseLevel: 13 },
    { name: "Pale Rider", arcana: "Death", level: 21, skills: ["Evil Touch", "Mudoon"], id: "pale-rider", baseLevel: 21 },
    { name: "Loa", arcana: "Death", level: 29, skills: ["Mudo", "Mamudo"], id: "loa", baseLevel: 29 },
    { name: "Samael", arcana: "Death", level: 36, skills: ["Mudoon", "Mamudoon"], id: "samael", baseLevel: 36 },
    { name: "Mot", arcana: "Death", level: 45, skills: ["Megidola", "Mamudoon"], id: "mot", baseLevel: 45 },
    { name: "Alice", arcana: "Death", level: 56, skills: ["Die For Me!", "Megidola"], id: "alice", baseLevel: 56 },
    { name: "Thanatos", arcana: "Death", level: 64, skills: ["Door of Hades", "Maeigaon"], id: "thanatos", baseLevel: 64 },
    { name: "Nyx Avatar", arcana: "Death", level: 92, skills: ["Megidolaon", "Night Queen"], id: "nyx-avatar", baseLevel: 92 },
    
    // Temperance Arcana
    { name: "Nigi Mitama", arcana: "Temperance", level: 15, skills: ["Diarama", "Recarm"], id: "nigi-mitama", baseLevel: 15 },
    { name: "Mithra", arcana: "Temperance", level: 19, skills: ["Mahama", "Diarama"], id: "mithra", baseLevel: 19 },
    { name: "Genbu", arcana: "Temperance", level: 23, skills: ["Mabufu", "Makakaja"], id: "genbu", baseLevel: 23 },
    { name: "Seiryuu", arcana: "Temperance", level: 32, skills: ["Ziodyne", "Marakukaja"], id: "seiryuu", baseLevel: 32 },
    { name: "Okuninushi", arcana: "Temperance", level: 44, skills: ["Ziodyne", "Mediarahan"], id: "okuninushi", baseLevel: 44 },
    { name: "Suzaku", arcana: "Temperance", level: 49, skills: ["Agidyne", "Fire Boost"], id: "suzaku", baseLevel: 49 },
    { name: "Byakko", arcana: "Temperance", level: 55, skills: ["Garudyne", "Masukukaja"], id: "byakko", baseLevel: 55 },
    { name: "Yurlungur", arcana: "Temperance", level: 67, skills: ["Megidolaon", "Victory Cry"], id: "yurlungur", baseLevel: 67 },
    
    // Devil Arcana
    { name: "Lilim", arcana: "Devil", level: 6, skills: ["Charm", "Marin Karin"], id: "lilim", baseLevel: 6 },
    { name: "Mokoi", arcana: "Devil", level: 12, skills: ["Poison Mist", "Pulinpa"], id: "mokoi", baseLevel: 12 },
    { name: "Pazuzu", arcana: "Devil", level: 20, skills: ["Tentarafoo", "Garula"], id: "pazuzu", baseLevel: 20 },
    { name: "Belphegor", arcana: "Devil", level: 37, skills: ["Ice Boost", "Bufudyne"], id: "belphegor", baseLevel: 37 },
    { name: "Succubus", arcana: "Devil", level: 43, skills: ["Marin Karin", "Tentarafoo"], id: "succubus", baseLevel: 43 },
    { name: "Incubus", arcana: "Devil", level: 48, skills: ["Dekunda", "Garudyne"], id: "incubus", baseLevel: 48 },
    { name: "Lilith", arcana: "Devil", level: 61, skills: ["Mamudoon", "Marin Karin"], id: "lilith", baseLevel: 61 },
    { name: "Abaddon", arcana: "Devil", level: 68, skills: ["Megidolaon", "Null Curse"], id: "abaddon", baseLevel: 68 },
    
    // Tower Arcana
    { name: "Eligor", arcana: "Tower", level: 10, skills: ["Tarukaja", "Bash"], id: "eligor-tower", baseLevel: 10 },
    { name: "Cu Chulainn", arcana: "Tower", level: 17, skills: ["Getsu-ei", "Counter"], id: "cu-chulainn", baseLevel: 17 },
    { name: "Hanuman", arcana: "Tower", level: 33, skills: ["Getsu-ei", "Counterstrike"], id: "hanuman-tower", baseLevel: 33 },
    { name: "Narasimha", arcana: "Tower", level: 39, skills: ["Akasha Arts", "Regenerate"], id: "narasimha-tower", baseLevel: 39 },
    { name: "Masakado", arcana: "Tower", level: 73, skills: ["Brave Blade", "Enduring Soul"], id: "masakado", baseLevel: 73 },
    { name: "Mara", arcana: "Tower", level: 78, skills: ["Megidolaon", "Absorb Phys"], id: "mara", baseLevel: 78 },
    
    // Star Arcana
    { name: "Neko Shogun", arcana: "Star", level: 15, skills: ["Bufula", "Sukukaja"], id: "neko-shogun", baseLevel: 15 },
    { name: "Anzu", arcana: "Star", level: 19, skills: ["Garula", "Masukukaja"], id: "anzu", baseLevel: 19 },
    { name: "Kaiwan", arcana: "Star", level: 29, skills: ["Ziodyne", "Marakunda"], id: "kaiwan", baseLevel: 29 },
    { name: "Ganesha", arcana: "Star", level: 34, skills: ["Megido", "Tetrakarn"], id: "ganesha", baseLevel: 34 },
    { name: "Garuda", arcana: "Star", level: 41, skills: ["Garudyne", "Wind Boost"], id: "garuda", baseLevel: 41 },
    { name: "Kartikeya", arcana: "Star", level: 50, skills: ["Brave Blade", "God's Hand"], id: "kartikeya", baseLevel: 50 },
    { name: "Saturnus", arcana: "Star", level: 59, skills: ["Megidolaon", "Makarakarn"], id: "saturnus", baseLevel: 59 },
    { name: "Helel", arcana: "Star", level: 88, skills: ["Morning Star", "Victory Cry"], id: "helel", baseLevel: 88 },
    
    // Moon Arcana
    { name: "Gurr", arcana: "Moon", level: 11, skills: ["Bash", "Tarukaja"], id: "gurr", baseLevel: 11 },
    { name: "Yamatano-orochi", arcana: "Moon", level: 24, skills: ["Poison Mist", "Dekunda"], id: "yamatano-orochi", baseLevel: 24 },
    { name: "Girimehkala", arcana: "Moon", level: 32, skills: ["Mudoon", "Repel Phys"], id: "girimehkala", baseLevel: 32 },
    { name: "Dionysus", arcana: "Moon", level: 40, skills: ["Maragion", "Dekaja"], id: "dionysus", baseLevel: 40 },
    { name: "Chernobog", arcana: "Moon", level: 49, skills: ["Mamudoon", "Megidola"], id: "chernobog", baseLevel: 49 },
    { name: "Seth", arcana: "Moon", level: 58, skills: ["Mudoon", "Megidolaon"], id: "seth", baseLevel: 58 },
    { name: "Baal Zebul", arcana: "Moon", level: 71, skills: ["Megidolaon", "Victory Cry"], id: "baal-zebul", baseLevel: 71 },
    { name: "Sandalphon", arcana: "Moon", level: 82, skills: ["Megidolaon", "Salvation"], id: "sandalphon", baseLevel: 82 },
    
    // Sun Arcana
    { name: "Yatagarasu", arcana: "Sun", level: 18, skills: ["Magaru", "Dekunda"], id: "yatagarasu", baseLevel: 18 },
    { name: "Quetzalcoatl", arcana: "Sun", level: 28, skills: ["Garudyne", "Wind Boost"], id: "quetzalcoatl", baseLevel: 28 },
    { name: "Jatayu", arcana: "Sun", level: 35, skills: ["Garudyne", "Masukukaja"], id: "jatayu", baseLevel: 35 },
    { name: "Horus", arcana: "Sun", level: 47, skills: ["Garudyne", "Magarudyne"], id: "horus", baseLevel: 47 },
    { name: "Suparna", arcana: "Sun", level: 52, skills: ["Garudyne", "Wind Amp"], id: "suparna", baseLevel: 52 },
    { name: "Vishnu", arcana: "Sun", level: 64, skills: ["Megidolaon", "Wind Break"], id: "vishnu", baseLevel: 64 },
    { name: "Asura", arcana: "Sun", level: 76, skills: ["Unbound Fury", "High Counter"], id: "asura", baseLevel: 76 },
    { name: "Lucifer", arcana: "Sun", level: 89, skills: ["Morning Star", "Absorb Curse"], id: "lucifer", baseLevel: 89 }
];

// Complete Arcana Fusion Chart for Persona 3 Reload
const FUSION_CHART = {
    "Fool": {
        "Magician": "Death", "Priestess": "Moon", "Empress": "Hanged Man", "Emperor": "Sun",
        "Hierophant": "Devil", "Lovers": "Star", "Chariot": "Hermit", "Justice": "Temperance",
        "Hermit": "Chariot", "Fortune": "Tower", "Strength": "Moon", "Hanged Man": "Empress",
        "Death": "Magician", "Temperance": "Justice", "Devil": "Hierophant", "Tower": "Fortune",
        "Star": "Lovers", "Moon": "Priestess", "Sun": "Emperor"
    },
    "Magician": {
        "Fool": "Death", "Priestess": "Temperance", "Empress": "Justice", "Emperor": "Hanged Man",
        "Hierophant": "Death", "Lovers": "Devil", "Chariot": "Priestess", "Justice": "Empress",
        "Hermit": "Fortune", "Fortune": "Hermit", "Strength": "Fool", "Hanged Man": "Emperor",
        "Death": "Hierophant", "Temperance": "Priestess", "Devil": "Lovers", "Tower": "Chariot",
        "Star": "Moon", "Moon": "Star", "Sun": "Hierophant"
    },
    "Priestess": {
        "Fool": "Moon", "Magician": "Temperance", "Empress": "Emperor", "Emperor": "Empress",
        "Hierophant": "Magician", "Lovers": "Fortune", "Chariot": "Magician", "Justice": "Death",
        "Hermit": "Devil", "Fortune": "Lovers", "Strength": "Devil", "Hanged Man": "Death",
        "Death": "Justice", "Temperance": "Magician", "Devil": "Hermit", "Tower": "Hanged Man",
        "Star": "Hierophant", "Moon": "Fool", "Sun": "Chariot"
    },
    "Empress": {
        "Fool": "Hanged Man", "Magician": "Justice", "Priestess": "Emperor", "Emperor": "Priestess",
        "Hierophant": "Lovers", "Lovers": "Hierophant", "Chariot": "Star", "Justice": "Magician",
        "Hermit": "Hanged Man", "Fortune": "Death", "Strength": "Justice", "Hanged Man": "Hermit",
        "Death": "Fortune", "Temperance": "Tower", "Devil": "Moon", "Tower": "Temperance",
        "Star": "Chariot", "Moon": "Devil", "Sun": "Tower"
    },
    "Emperor": {
        "Fool": "Sun", "Magician": "Hanged Man", "Priestess": "Empress", "Empress": "Priestess",
        "Hierophant": "Fortune", "Lovers": "Hermit", "Chariot": "Justice", "Justice": "Chariot",
        "Hermit": "Lovers", "Fortune": "Hierophant", "Strength": "Tower", "Hanged Man": "Magician",
        "Death": "Star", "Temperance": "Devil", "Devil": "Temperance", "Tower": "Strength",
        "Star": "Death", "Moon": "Hanged Man", "Sun": "Fool"
    },
    "Hierophant": {
        "Fool": "Devil", "Magician": "Death", "Priestess": "Magician", "Empress": "Lovers",
        "Emperor": "Fortune", "Lovers": "Empress", "Chariot": "Temperance", "Justice": "Star",
        "Hermit": "Tower", "Fortune": "Emperor", "Strength": "Hanged Man", "Hanged Man": "Strength",
        "Death": "Magician", "Temperance": "Chariot", "Devil": "Fool", "Tower": "Hermit",
        "Star": "Justice", "Moon": "Sun", "Sun": "Moon"
    },
    "Lovers": {
        "Fool": "Star", "Magician": "Devil", "Priestess": "Fortune", "Empress": "Hierophant",
        "Emperor": "Hermit", "Hierophant": "Empress", "Chariot": "Death", "Justice": "Strength",
        "Hermit": "Emperor", "Fortune": "Priestess", "Strength": "Justice", "Hanged Man": "Tower",
        "Death": "Chariot", "Temperance": "Moon", "Devil": "Magician", "Tower": "Hanged Man",
        "Star": "Fool", "Moon": "Temperance", "Sun": "Devil"
    },
    "Chariot": {
        "Fool": "Hermit", "Magician": "Priestess", "Priestess": "Magician", "Empress": "Star",
        "Emperor": "Justice", "Hierophant": "Temperance", "Lovers": "Death", "Justice": "Emperor",
        "Hermit": "Fool", "Fortune": "Tower", "Strength": "Moon", "Hanged Man": "Sun",
        "Death": "Lovers", "Temperance": "Hierophant", "Devil": "Fortune", "Tower": "Fortune",
        "Star": "Empress", "Moon": "Strength", "Sun": "Hanged Man"
    },
    "Justice": {
        "Fool": "Temperance", "Magician": "Empress", "Priestess": "Death", "Empress": "Magician",
        "Emperor": "Chariot", "Hierophant": "Star", "Lovers": "Strength", "Chariot": "Emperor",
        "Hermit": "Sun", "Fortune": "Devil", "Strength": "Lovers", "Hanged Man": "Fortune",
        "Death": "Priestess", "Temperance": "Fool", "Devil": "Fortune", "Tower": "Moon",
        "Star": "Hierophant", "Moon": "Tower", "Sun": "Hermit"
    },
    "Hermit": {
        "Fool": "Chariot", "Magician": "Fortune", "Priestess": "Devil", "Empress": "Hanged Man",
        "Emperor": "Lovers", "Hierophant": "Tower", "Lovers": "Emperor", "Chariot": "Fool",
        "Justice": "Sun", "Fortune": "Magician", "Strength": "Death", "Hanged Man": "Empress",
        "Death": "Strength", "Temperance": "Star", "Devil": "Priestess", "Tower": "Hierophant",
        "Star": "Temperance", "Moon": "Devil", "Sun": "Justice"
    },
    "Fortune": {
        "Fool": "Tower", "Magician": "Hermit", "Priestess": "Lovers", "Empress": "Death",
        "Emperor": "Hierophant", "Hierophant": "Emperor", "Lovers": "Priestess", "Chariot": "Tower",
        "Justice": "Devil", "Hermit": "Magician", "Strength": "Star", "Hanged Man": "Justice",
        "Death": "Empress", "Temperance": "Sun", "Devil": "Justice", "Tower": "Fool",
        "Star": "Strength", "Moon": "Chariot", "Sun": "Temperance"
    },
    "Strength": {
        "Fool": "Moon", "Magician": "Fool", "Priestess": "Devil", "Empress": "Justice",
        "Emperor": "Tower", "Hierophant": "Hanged Man", "Lovers": "Justice", "Chariot": "Moon",
        "Justice": "Lovers", "Hermit": "Death", "Fortune": "Star", "Hanged Man": "Hierophant",
        "Death": "Hermit", "Temperance": "Chariot", "Devil": "Priestess", "Tower": "Emperor",
        "Star": "Fortune", "Moon": "Chariot", "Sun": "Tower"
    },
    "Hanged Man": {
        "Fool": "Empress", "Magician": "Emperor", "Priestess": "Death", "Empress": "Hermit",
        "Emperor": "Magician", "Hierophant": "Strength", "Lovers": "Tower", "Chariot": "Sun",
        "Justice": "Fortune", "Hermit": "Empress", "Fortune": "Justice", "Strength": "Hierophant",
        "Death": "Priestess", "Temperance": "Devil", "Devil": "Temperance", "Tower": "Lovers",
        "Star": "Sun", "Moon": "Emperor", "Sun": "Star"
    },
    "Death": {
        "Fool": "Magician", "Magician": "Hierophant", "Priestess": "Justice", "Empress": "Fortune",
        "Emperor": "Star", "Hierophant": "Magician", "Lovers": "Chariot", "Chariot": "Lovers",
        "Justice": "Priestess", "Hermit": "Strength", "Fortune": "Empress", "Strength": "Hermit",
        "Hanged Man": "Priestess", "Temperance": "Moon", "Devil": "Sun", "Tower": "Devil",
        "Star": "Emperor", "Moon": "Temperance", "Sun": "Devil"
    },
    "Temperance": {
        "Fool": "Justice", "Magician": "Priestess", "Priestess": "Magician", "Empress": "Tower",
        "Emperor": "Devil", "Hierophant": "Chariot", "Lovers": "Moon", "Chariot": "Hierophant",
        "Justice": "Fool", "Hermit": "Star", "Fortune": "Sun", "Strength": "Chariot",
        "Hanged Man": "Devil", "Death": "Moon", "Devil": "Emperor", "Tower": "Empress",
        "Star": "Hermit", "Moon": "Lovers", "Sun": "Fortune"
    },
    "Devil": {
        "Fool": "Hierophant", "Magician": "Lovers", "Priestess": "Hermit", "Empress": "Moon",
        "Emperor": "Temperance", "Hierophant": "Fool", "Lovers": "Magician", "Chariot": "Fortune",
        "Justice": "Fortune", "Hermit": "Priestess", "Fortune": "Justice", "Strength": "Priestess",
        "Hanged Man": "Temperance", "Death": "Sun", "Temperance": "Emperor", "Tower": "Death",
        "Star": "Tower", "Moon": "Empress", "Sun": "Death"
    },
    "Tower": {
        "Fool": "Fortune", "Magician": "Chariot", "Priestess": "Hanged Man", "Empress": "Temperance",
        "Emperor": "Strength", "Hierophant": "Hermit", "Lovers": "Hanged Man", "Chariot": "Fortune",
        "Justice": "Moon", "Hermit": "Hierophant", "Fortune": "Fool", "Strength": "Emperor",
        "Hanged Man": "Lovers", "Death": "Devil", "Temperance": "Empress", "Devil": "Death",
        "Star": "Devil", "Moon": "Justice", "Sun": "Strength"
    },
    "Star": {
        "Fool": "Lovers", "Magician": "Moon", "Priestess": "Hierophant", "Empress": "Chariot",
        "Emperor": "Death", "Hierophant": "Justice", "Lovers": "Fool", "Chariot": "Empress",
        "Justice": "Hierophant", "Hermit": "Temperance", "Fortune": "Strength", "Strength": "Fortune",
        "Hanged Man": "Sun", "Death": "Emperor", "Temperance": "Hermit", "Devil": "Tower",
        "Tower": "Devil", "Moon": "Magician", "Sun": "Hanged Man"
    },
    "Moon": {
        "Fool": "Priestess", "Magician": "Star", "Priestess": "Fool", "Empress": "Devil",
        "Emperor": "Hanged Man", "Hierophant": "Sun", "Lovers": "Temperance", "Chariot": "Strength",
        "Justice": "Tower", "Hermit": "Devil", "Fortune": "Chariot", "Strength": "Chariot",
        "Hanged Man": "Emperor", "Death": "Temperance", "Temperance": "Lovers", "Devil": "Hermit",
        "Tower": "Justice", "Star": "Magician", "Sun": "Hierophant"
    },
    "Sun": {
        "Fool": "Emperor", "Magician": "Hierophant", "Priestess": "Chariot", "Empress": "Tower",
        "Emperor": "Fool", "Hierophant": "Moon", "Lovers": "Devil", "Chariot": "Hanged Man",
        "Justice": "Hermit", "Hermit": "Justice", "Fortune": "Temperance", "Strength": "Tower",
        "Hanged Man": "Chariot", "Death": "Devil", "Temperance": "Fortune", "Devil": "Death",
        "Tower": "Strength", "Star": "Hanged Man", "Moon": "Hierophant"
    }
};

// Special fusion recipes that don't follow normal rules
const SPECIAL_FUSIONS = [
    {
        result: "black-frost",
        materials: ["jack-frost", "pyro-jack", "king-frost"],
        type: "triple"
    },
    {
        result: "thanatos",
        materials: ["orpheus", "loa", "samael", "mot", "alice", "nyx-avatar"],
        type: "special"
    },
    {
        result: "lucifer",
        materials: ["helel", "sandalphon", "metatron", "michael", "gabriel", "raphael"],
        type: "special"
    }
];
