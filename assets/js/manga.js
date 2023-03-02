const api = 'https://kitsu.io/api/edge/manga?page[limit]=20&sort=-averageRating';

fetch(api)
	.then(response => response.json())
	.then(data => {
			const container = document.getElementById('popular-manga-container');
				data.data.forEach(manga => {
					const title = manga.attributes.canonicalTitle;
					const image = manga.attributes.posterImage.large;
					const status = manga.attributes.status;
					const link = manga.attributes.slug;
					const mangaCard = document.createElement('div');
					mangaCard.className = 'card';
					mangaCard.innerHTML = `
						<img src="${image}" alt="${title}"/>
						<div class="title"><a href="https://kitsu.io/manga/${link}" target="_blank">${title}</a></div>
						<div class="status"><p>${status}</p></div>`;
					container.appendChild(mangaCard);
				});
	});