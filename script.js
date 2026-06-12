function selectCategory(category) {
    if (category === 'organik') {
        // Mengarahkan ke halaman organik.html
        window.location.href = 'organik.html';
    } else if (category === 'anorganik') {
        // Sediakan juga untuk anorganik jika nanti kamu membuat filenya
        window.location.href = 'anorganik.html'; 
    }
}