const api = 'https://kitsu.io/api/edge/trending/anime';

fetch(api)
	.then(response => response.json())
	.then(data => {
			const container = document.getElementById('popular-anime-container');
				data.data.forEach(anime => {
					const title = anime.attributes.canonicalTitle;
					const image = anime.attributes.posterImage.large;
					const status = anime.attributes.status;
					const type = anime.attributes.subType;
					const link = anime.attributes.slug;
					const animeCard = document.createElement('div');
					animeCard.className = 'card';
					if(!type === undefined) {
						animeCard.innerHTML = `
						<img src="${image}" alt="${title}"/>
						<div class="title"><a href="https://kitsu.io/anime/${link}" target="_blank">${title}</a></div>
						<div class="status"><p>${status}</p></div>
						<div class="type"><p>${type}</p></div>`;
					} else {
						animeCard.innerHTML = `
						<img src="${image}" alt="${title}"/>
						<div class="title"><a href="https://kitsu.io/anime/${link}" target="_blank">${title}</a></div>
						<div class="status"><p>${status}</p></div>`;
					}
					container.appendChild(animeCard);
				});
	});