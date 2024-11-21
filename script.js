const games = [
    { title: "Funny Shooter 2", url: "funny_shooter_2.html" },
    { title: "BitLife", url: "bitlife.html" },
    { title: "Moto X3M", url: "moto_x3m.html" },
    { title: "Cookie Clicker", url: "cookie_clicker.html" },
    { title: "Cluster Rush", url: "cluster_rush.html" },
    { title: "Basketball Stars", url: "basketball_stars.html" },
    { title: "Retro Bowl", url: "retro_bowl.html" },
    { title: "Mr Bullet", url: "mr_bullet.html" },
    { title: "Subway Surfers San Francisco", url: "subway_surfers_san_francisco.html" },
    { title: "There Is No Game", url: "there_is_no_game.html" },
    { title: "Slope", url: "slope.html" },
    { title: "Adventure Capitalist", url: "adventure_capitalist.html" }
];

function loadGames() {
    const container = document.getElementById("gameContainer");
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.onclick = () => window.location.href = game.url;
        card.innerHTML = `<h3>${game.title}</h3>`;
        container.appendChild(card);
    });
}

function filterGames() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = title.includes(searchQuery) ? 'block' : 'none';
    });
}

// Load games when the window loads.
window.onload = loadGames;