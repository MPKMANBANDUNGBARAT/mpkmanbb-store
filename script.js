const products = [
    {
        id: 1,
        name: "Lanyard Premium MPK",
        price: "15000",
        sold: "45",
        rating: "4.9",
        image: "foto/lanyard.jpg",
        category: "Aksesoris",
        desc: "Lanyard kualitas premium dengan bahan tisu lembut. Cocok untuk kartu pelajar atau id card panitia."
    },
    {
        id: 2,
        name: "Basreng Pedas Daun Jeruk",
        price: "5000",
        sold: "210",
        rating: "5.0",
        image: "foto/basreng.jpg",
        category: "Makanan",
        desc: "Basreng renyah dengan bumbu pedas melimpah dan aroma daun jeruk yang segar. Isi melimpah, dijamin nagih untuk teman belajar!"
    },
    {
        id: 3,
        name: "Brownies Lumer Cup",
        price: "10000",
        sold: "85",
        rating: "4.9",
        image: "foto/brownies.jpg",
        category: "Makanan",
        desc: "Brownies cokelat lumer di dalam cup. Manisnya pas dan bikin mood balik lagi setelah pelajaran matematika!"
    },
    {
        id: 4,
        name: "T-Shirt MPK 2026",
        price: "85000",
        sold: "15",
        rating: "4.8",
        image: "foto/kaos.jpg",
        category: "Atasan",
        desc: "Kaos bahan Cotton Combed 30s. Dingin dipakai dan punya desain eksklusif yang hanya rilis satu kali periode ini."
    }
];

// Fungsi render dan bukaProduk tetap sama seperti sebelumnya
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = "";

    products.forEach(p => {
        grid.innerHTML += `
            <div class="item-card flex flex-col cursor-pointer group" onclick="bukaProduk('${p.name}', '${p.price}', '${p.image}', '${p.desc}', '${p.category}')">
                <div class="relative overflow-hidden">
                    <img src="${p.image}" class="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute top-2 right-2 bg-red-600 text-[8px] font-bold px-2 py-1 rounded shadow-lg">${p.category}</div>
                </div>
                <div class="item-info p-3">
                    <h3 class="text-xs font-normal line-clamp-2 mb-1 text-zinc-300">${p.name}</h3>
                    <p class="price-tag text-sm font-bold text-red-500">Rp${parseInt(p.price).toLocaleString('id-ID')}</p>
                </div>
            </div>
        `;
    });
}

function bukaProduk(nama, harga, gambar, deskripsi, kategori) {
    const params = new URLSearchParams({
        name: nama,
        price: harga,
        img: gambar,
        desc: deskripsi,
        cat: kategori
    });
    window.location.href = `product-detail.html?${params.toString()}`;
}

// Tambahkan kode ini di dalam document.addEventListener('DOMContentLoaded', () => { ... })
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('action') === 'checkout') {
    const item = localStorage.getItem('targetProduct');
    const size = localStorage.getItem('targetSize');
    
    if (item) {
        // Tampilkan form order
        document.getElementById('order-form-container').classList.remove('hidden');
        document.getElementById('item-name').value = item;
        document.getElementById('item-size').value = size || "N/A";
        
        // Scroll ke form
        document.getElementById('order-form-container').scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', renderProducts);