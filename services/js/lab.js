// --- Data Dummy untuk Alat Laboratorium ---
const instruments = [
    {
        id: 1,
        name: "Mikroskop Elektron SEM",
        code: "LAB-SEM-001",
        image: "https://images.unsplash.com/photo-1633671899998-a3cf4578cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwMjV8MHwxfHNlYXJjaHwxfHxTdWJqZWN0JTIwY29udGV4dCUzQSUyMHNlbSUyMG1pY3Jvc2NvcGV8ZW58MHx8fHwxNzI1ODY5NDYwfDA&ixlib=rb-4.0.3&q=80&w=1080",
        status: "tersedia",
        pic: "Dr. Budi Santoso",
        calibrationDate: "2025-12-01",
        logbook: "2025-09-08: Analisis sampel X oleh Ana. Berjalan lancar.",
        sop: "SOP-SEM-001.pdf"
    },
    {
        id: 2,
        name: "HPLC Agilent",
        code: "LAB-HPLC-002",
        image: "https://images.unsplash.com/photo-1633671922756-35056a735154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwMjV8MHwxfHNlYXJjaHwxfHxIcGxjJTIwbWFjaGluZXxlbnwwfHx8fDE3MjU4Njk0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        status: "digunakan",
        statusDetail: "Oleh Citra (hingga 17:00)",
        pic: "Dr. Anisa Putri",
        calibrationDate: "2025-11-15",
        logbook: "2025-09-09 (09:00): Analisis senyawa Y oleh Citra.",
        sop: "SOP-HPLC-001.pdf"
    },
    {
        id: 3,
        name: "PCR Machine",
        code: "LAB-PCR-003",
        image: "https://images.unsplash.com/photo-1581092921445-98114f0e2068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwMjV8MHwxfHNlYXJjaHwyfHxQQ1IlMjBtYWNoaW5lfGVufDB8fHx8MTcyNTg2OTQ2MXww&ixlib=rb-4.0.3&q=80&w=1080",
        status: "perbaikan",
        statusDetail: "Menunggu Kalibrasi",
        pic: "Dr. Rahmat Hidayat",
        calibrationDate: "2025-09-10",
        logbook: "2025-09-07: Error suhu terdeteksi. Menunggu teknisi.",
        sop: "SOP-PCR-001.pdf"
    }
];

// --- Slideshow Logic ---
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// --- Instrument Grid & Modal Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('instrument-grid');
    const modal = document.getElementById('detail-modal');
    const modalBody = document.getElementById('modal-body');
    const closeButton = document.querySelector('.close-button');

    // Populate instrument grid
    instruments.forEach(instrument => {
        const card = document.createElement('div');
        card.className = 'instrument-card';
        card.dataset.id = instrument.id; // Store id in dataset for easy access

        let statusText = instrument.status.charAt(0).toUpperCase() + instrument.status.slice(1);
        if (instrument.statusDetail) {
            statusText += `: ${instrument.statusDetail}`;
        }
        
        card.innerHTML = `
            <img src="${instrument.image}" alt="${instrument.name}">
            <div class="card-content">
                <h3>${instrument.name}</h3>
                <p>Kode: ${instrument.code}</p>
                <span class="status status-${instrument.status}">${statusText}</span>
            </div>
        `;

        card.addEventListener('click', () => openModal(instrument));
        grid.appendChild(card);
    });

    // Function to open and populate the modal
    function openModal(instrument) {
        modalBody.innerHTML = `
            <h2>${instrument.name}</h2>
            <p><strong>Kode Aset:</strong> ${instrument.code}</p>
            <p><strong>Penanggung Jawab (PIC):</strong> ${instrument.pic}</p>
            <p><strong>Jadwal Kalibrasi Berikutnya:</strong> ${instrument.calibrationDate}</p>
            <hr>
            <h3>Logbook Terakhir</h3>
            <p>${instrument.logbook}</p>
            <h3>Dokumen</h3>
            <p><a href="#" onclick="alert('Membuka dokumen ${instrument.sop}')">${instrument.sop}</a></p>
        `;
        modal.style.display = 'block';
    }

    // Close modal actions
    closeButton.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});