// --- KONFIGURASI NOMOR WHATSAPP ---
// Nomor tujuan chat sudah diatur ke 13658700681.
const nomerWA = "13658700681"; 

function buyScript(tipe) {
    // Membuat pesan otomatis berdasarkan produk yang diklik
    const pesan = `Halo Liviaa SHOP, saya tertarik membeli *Akun Premium ${tipe}*. \n\nApakah stok masih tersedia?`;
    
    // Membuat URL WhatsApp
    const url = `https://wa.me/${nomerWA}?text=${encodeURIComponent(pesan)}`;
    
    // Membuka Link WhatsApp secara otomatis di tab baru
    window.open(url, '_blank');
}
