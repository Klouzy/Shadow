const popularApi = `https://kitsu.io/api/edge/anime?page[limit]=18&filter[status]=current&sort=-averageRating`;
const otherApi = 'https://kitsu.io/api/edge/anime?page[limit]=18&filter[status]=current&sort=-popularityRank'

	fetch(popularApi)
	.then(response => response.json())
	.then(data => {
			const container = document.getElementById('airing-popular-anime-container');
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

	fetch(otherApi)
	.then(response => response.json())
	.then(data => {
			const container = document.getElementById('airing-other-anime-container');
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