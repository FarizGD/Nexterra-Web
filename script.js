document.addEventListener("DOMContentLoaded", function () {
    const joinButton = document.getElementById("joinButton");
    const orderButton = document.getElementById("orderButton");

    // Link Grup WhatsApp
    const groupLink = "https://chat.whatsapp.com/HfvVJeis1sHAyrzqsMtF9d";
    
    // Nomor WhatsApp Louis kontol
    const akbarWhatsApp = "6283138981041";

    joinButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = groupLink;
    });

    orderButton.addEventListener("click", function () {
        // Ambil pilihan rank atau GMC Trial yang dipilih
        const selectedRank = document.querySelector('input[name="rank"]:checked');
        
        if (selectedRank) {
            const rankName = selectedRank.value;
            const message = `Halo Bang Atmin, saya ingin membeli ${rankName} di Server Nexterra Network. Bagaimana cara pembayarannya? Wahai atmin sepuh tiada ampun? (Msg template by FarizGD)`;

            // Format link WhatsApp
            const waLink = `https://wa.me/${akbarWhatsApp}?text=${encodeURIComponent(message)}`;

            // Arahkan ke WhatsApp
            window.location.href = waLink;
        } else {
            alert("Silakan pilih salah satu rank atau GMC Trial terlebih dahulu!");
        }
    });
});
