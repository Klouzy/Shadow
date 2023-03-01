
fetch('https://kitsu.io/api/edge/anime?page[limit]=20&sort=-averageRating')
	.then(response => response.json())
	.then(data => {
			const container = document.getElementById('popular-anime-container');
				data.data.forEach(anime => {
					const title = anime.attributes.canonicalTitle;
					const image = anime.attributes.posterImage.medium;
					const animeCard = document.createElement('div');
					animeCard.className = 'card';
					animeCard.innerHTML = `
						<img src="${image}" alt="${title}"/>
						<div class="title">
            <a>${title}</a>
            </div>
					`;
					container.appendChild(animeCard);
				});
	});