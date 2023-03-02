const api = 'https://kitsu.io/api/edge/anime?page[limit]=20&sort=-createdAt';
const recomApi = 'https://kitsu.io/api/edge/anime?page[limit]=12&sort=ratingRank';
const moviesApi = 'https://kitsu.io/api/edge/anime?page[limit]=12&filter[subtype]=movie&sort=popularityRank';

    fetch(api)
	    .then(response => response.json())
	    .then(data => {
			const container = document.getElementById('latest-anime-container');
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

		fetch(moviesApi)
	    .then(response => response.json())
	    .then(data => {
			const container = document.getElementById('popular-movies-container');
				data.data.forEach(anime => {
					const title = anime.attributes.canonicalTitle;
					const image = anime.attributes.posterImage.large;
					const status = anime.attributes.status;
					const type = anime.attributes.subType;
					const link = anime.attributes.slug;
					const animeCard = document.createElement('div');
					animeCard.className = 'movies';
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

		fetch(recomApi)
	    .then(response => response.json())
	    .then(data => {
			const container = document.getElementById('recommended-container');
				data.data.forEach(anime => {
					const title = anime.attributes.canonicalTitle;
					const image = anime.attributes.posterImage.large;
					const status = anime.attributes.status;
					const type = anime.attributes.subType;
					const link = anime.attributes.slug;
					const animeCard = document.createElement('div');
					animeCard.className = 'recom';
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