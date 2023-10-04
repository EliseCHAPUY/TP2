// API à utiliser pour le travail: https://randomuser.me/api/?results=5

// Fonction pour récupérer les données de l'API
async function fetchUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
        return [];
    }
}

// Fonction pour afficher les utilisateurs dans le conteneur HTML
async function displayUsers() {
    const container = document.getElementById('container');
    const users = await fetchUsers();

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        const userImage = document.createElement('img');
        userImage.src = user.picture.large;
        userImage.alt = `${user.name.first} ${user.name.last}`;

        const userName = document.createElement('h2');
        userName.textContent = `${user.name.first} ${user.name.last}`;

        const userEmail = document.createElement('p');
        userEmail.textContent = user.email;

        userCard.appendChild(userImage);
        userCard.appendChild(userName);
        userCard.appendChild(userEmail);

        container.appendChild(userCard);
    });
}

// Fonction pour afficher les utilisateurs lors du chargement de la page
window.addEventListener('load', displayUsers);
