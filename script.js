// Base de données : J'en mets 10 pour l'exemple, tu peux copier/coller pour atteindre 50.
const fruitsData = [
    { id: 1, nom: "Citron", cat: "immunite", img: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400", desc: "Riche en vitamine C, il détoxifie le corps et booste les défenses." },
    { id: 2, nom: "Banane", cat: "energie", img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400", desc: "Source de potassium, idéal pour les sportifs et contre la fatigue." },
    { id: 3, nom: "Pomme", cat: "digestion", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400", desc: "Riche en fibres (pectine), elle régule le transit intestinal." },
    { id: 4, nom: "Avocat", cat: "coeur", img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400", desc: "Contient des graisses saines protégeant le système cardiovasculaire." },
    { id: 5, nom: "Myrtille", cat: "peau", img: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400", desc: "Puissant antioxydant, elle lutte contre le vieillissement cellulaire." },
    { id: 6, nom: "Orange", cat: "immunite", img: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400", desc: "Le classique pour la vitamine C et l'énergie matinale." },
    { id: 7, nom: "Papaye", cat: "digestion", img: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=400", desc: "Contient de la papaïne, une enzyme qui facilite la digestion." },
    { id: 8, nom: "Ananas", cat: "digestion", img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400", desc: "Aide à brûler les graisses et facilite l'assimilation des protéines." },
    { id: 9, nom: "Kiwi", cat: "immunite", img: "https://images.unsplash.com/photo-1585059895524-72359e061381?w=400", desc: "Plus de vitamine C que l'orange ! Parfait pour la vitalité." },
    { id: 10, nom: "Grenade", cat: "coeur", img: "https://images.unsplash.com/photo-1541344999736-83eca872f241?w=400", desc: "Améliore la circulation sanguine et protège les artères." },
    // Ajoute ici tes autres fruits en suivant le même modèle...
];

const fruitsContainer = document.getElementById('fruitsContainer');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('fruitModal');

// 1. Fonction pour afficher les cartes
function displayFruits(list) {
    fruitsContainer.innerHTML = list.map(fruit => `
        <div class="fruit-card" onclick="openModal(${fruit.id})">
            <img src="${fruit.img}" alt="${fruit.nom}">
            <div class="info">
                <h3>${fruit.nom}</h3>
                <p>Cliquez pour les bienfaits</p>
            </div>
        </div>
    `).join('');
}

// 2. Filtrage (Recherche + Boutons)
function filterFruits() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeBtn = document.querySelector('.filter-btn.active');
    const category = activeBtn.getAttribute('data-filter');

    const filtered = fruitsData.filter(fruit => {
        const matchesSearch = fruit.nom.toLowerCase().includes(searchTerm);
        const matchesCat = (category === 'tous' || fruit.cat === category);
        return matchesSearch && matchesCat;
    });

    displayFruits(filtered);
}

// 3. Gestion des clics boutons filtres
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterFruits();
    });
});

// 4. Gestion de la recherche
searchInput.addEventListener('input', filterFruits);

// 5. Modale
function openModal(id) {
    const fruit = fruitsData.find(f => f.id === id);
    document.getElementById('modalBody').innerHTML = `
        <h2 style="color:var(--primary)">${fruit.nom}</h2>
        <img src="${fruit.img}" style="width:100%; height:250px; object-fit:cover; border-radius:10px; margin:15px 0;">
        <p style="font-size:1.1rem;">${fruit.desc}</p>
        <div style="margin-top:20px; background:var(--light); padding:15px; border-radius:10px;">
            <strong>Conseil santé :</strong> Consommez ce fruit de préférence frais et de saison pour profiter de tous ses nutriments.
        </div>
    `;
    modal.style.display = "block";
}

document.querySelector('.close-modal').onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

// Initialisation
displayFruits(fruitsData);