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
    { id: 11, nom: "Mangue", cat: "peau", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400", desc: "Riche en vitamine A, elle donne un teint éclatant." },
    { id: 12, nom: "Fraise", cat: "peau", img: "https://images.unsplash.com/photo-1464960350473-974ead4a0ecb?w=400", desc: "Antioxydante, elle aide à garder une belle peau." },
    { id: 13, nom: "Pastèque", cat: "energie", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400", desc: "Hydratation maximale et aide à la récupération." },
    { id: 14, nom: "Raisin", cat: "coeur", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400", desc: "Le resvératrol protège le système cardiaque." },
    { id: 15, nom: "Figue", cat: "digestion", img: "https://images.unsplash.com/photo-1601370693613-259368962638?w=400", desc: "Excellente source de minéraux et de fibres." },
    { id: 16, nom: "Framboise", cat: "immunite", img: "https://images.unsplash.com/photo-1534067783941-51c9c23ecfd3?w=400", desc: "Riche en fer et vitamine C." },
    { id: 17, nom: "Poire", cat: "digestion", img: "https://images.unsplash.com/photo-1514756331096-242f390ef2a5?w=400", desc: "Douce pour l'estomac et très hydratante." },
    { id: 18, nom: "Abricot", cat: "peau", img: "https://images.unsplash.com/photo-1501746764358-a1934bc6d45b?w=400", desc: "Riche en bêta-carotène pour la peau." },
    { id: 19, nom: "Melon", cat: "energie", img: "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=400", desc: "Rafraîchissant, apporte de l'énergie douce." },
    { id: 20, nom: "Noix de Coco", cat: "coeur", img: "https://images.unsplash.com/photo-1584802350764-8034a8184812?w=400", desc: "Ses graisses sont une source d'énergie directe." },
    { id: 21, nom: "Cerise", cat: "energie", img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400", desc: "Aide à réguler le sommeil naturellement." },
    { id: 22, nom: "Pamplemousse", cat: "immunite", img: "https://images.unsplash.com/photo-1550506389-e90213f8b839?w=400", desc: "Stimule le foie et aide à brûler les graisses." },
    { id: 23, nom: "Mûre", cat: "peau", img: "https://images.unsplash.com/photo-1433385419326-385f9c2bbeff?w=400", desc: "Riche en vitamine E protectrice." },
    { id: 24, nom: "Goyave", cat: "immunite", img: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=400", desc: "Contient énormément de vitamine C." },
    { id: 25, nom: "Datte", cat: "energie", img: "https://images.unsplash.com/photo-1594754751421-4ba27c449176?w=400", desc: "Concentré d'énergie pour les muscles." },
    { id: 26, nom: "Litchi", cat: "immunite", img: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400", desc: "Renforce les os et le système immunitaire." },
    { id: 27, nom: "Pêche", cat: "digestion", img: "https://images.unsplash.com/photo-1539315415783-da47551d2580?w=400", desc: "Légère et aide à éliminer les toxines." },
    { id: 28, nom: "Cassis", cat: "coeur", img: "https://images.unsplash.com/photo-1599819177626-b50f9dd21c9b?w=400", desc: "Favorise une bonne circulation sanguine." },
    { id: 29, nom: "Prune", cat: "digestion", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400", desc: "L'allié parfait pour un bon transit." },
    { id: 30, nom: "Fruit de la Passion", cat: "energie", img: "https://images.unsplash.com/photo-1501746764358-a1934bc6d45b?w=400", desc: "Apaise tout en apportant des vitamines." },
    { id: 31, nom: "Groseille", cat: "immunite", img: "https://images.unsplash.com/photo-1589131649122-26210f637e17?w=400", desc: "Purifie le sang et stimule l'appétit." },
    { id: 32, nom: "Nectarine", cat: "peau", img: "https://images.unsplash.com/photo-1591882253637-463f03031024?w=400", desc: "Hydrate les tissus de la peau." },
    { id: 33, nom: "Kaki", cat: "energie", img: "https://images.unsplash.com/photo-1603509278065-985f5434d289?w=400", desc: "Excellent boost pour l'hiver." },
    { id: 34, nom: "Physalis", cat: "immunite", img: "https://images.unsplash.com/photo-1560155016-bd4879ae8f21?w=400", desc: "Propriétés anti-inflammatoires." },
    { id: 35, nom: "Kumquat", cat: "digestion", img: "https://images.unsplash.com/photo-1588729571343-984488826725?w=400", desc: "Riche en huiles essentielles digestives." },
    { id: 36, nom: "Pitaya", cat: "peau", img: "https://images.unsplash.com/photo-1527325241571-c818fa55bb7c?w=400", desc: "Nourrit la peau et régule le sucre." },
    { id: 37, nom: "Pomélo", cat: "coeur", img: "https://images.unsplash.com/photo-1596434446654-20a7b4f5950e?w=400", desc: "Réduit la tension artérielle." },
    { id: 38, nom: "Cramberry", cat: "immunite", img: "https://images.unsplash.com/photo-1588764839352-094119d80d4f?w=400", desc: "L'allié contre les infections." },
    { id: 39, nom: "Mandarine", cat: "immunite", img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400", desc: "Apaise le système nerveux." },
    { id: 40, nom: "Coing", cat: "digestion", img: "https://images.unsplash.com/photo-1534431835329-87c10b64f331?w=400", desc: "Protège les parois de l'estomac." }
];

let itemsToShow = 8;
let currentFilteredList = [...fruitsData];

const fruitsContainer = document.getElementById('fruitsContainer');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const showLessBtn = document.getElementById('showLessBtn');
const modal = document.getElementById('fruitModal');

function displayFruits() {
    const listToDisplay = currentFilteredList.slice(0, itemsToShow);
    fruitsContainer.innerHTML = listToDisplay.map(fruit => `
        <div class="fruit-card" onclick="openModal(${fruit.id})">
            <img src="${fruit.img}" alt="${fruit.nom}">
            <div class="info">
                <h3>${fruit.nom}</h3>
                <p>Voir les bienfaits</p>
            </div>
        </div>
    `).join('');

    // Gestion boutons plus/moins
    loadMoreBtn.style.display = (itemsToShow >= currentFilteredList.length) ? 'none' : 'inline-block';
    showLessBtn.style.display = (itemsToShow > 8) ? 'inline-block' : 'none';
}

loadMoreBtn.addEventListener('click', () => {
    itemsToShow += 8;
    displayFruits();
});

showLessBtn.addEventListener('click', () => {
    itemsToShow = 8;
    displayFruits();
    document.getElementById('fruits-grid').scrollIntoView({ behavior: 'smooth' });
});

function filterFruits() {
    const term = searchInput.value.toLowerCase();
    const cat = document.querySelector('.filter-btn.active').dataset.filter;

    currentFilteredList = fruitsData.filter(f => {
        return f.nom.toLowerCase().includes(term) && (cat === 'tous' || f.cat === cat);
    });

    itemsToShow = 8;
    displayFruits();
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterFruits();
    });
});

searchInput.addEventListener('input', filterFruits);

function openModal(id) {
    const f = fruitsData.find(fruit => fruit.id === id);
    document.getElementById('modalBody').innerHTML = `
        <h2 style="color:var(--primary)">${f.nom}</h2>
        <img src="${f.img}" style="width:100%; height:200px; object-fit:cover; border-radius:10px; margin:15px 0;">
        <p>${f.desc}</p>
    `;
    modal.style.display = "block";
}

document.querySelector('.close-modal').onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

displayFruits();