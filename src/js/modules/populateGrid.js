function populateGrid() {
	const grid = document.getElementById('grid');
	const fetchUrl = 'https://randomuser.me/api?results=10';

	fetch(fetchUrl)
		.then(response => response.json())
		.then(data => createCards(data.results));

	function createCards(arr) {
		let content = '';

		arr.forEach(user => {
			content += `
						<div class="content__card">
							<picture class="content__img-box">
								<source media="(max-width: 768px)" srcset="${user.picture.thumbnail}">
								<source media="(max-width: 1200px)" srcset="${user.picture.medium}">
								<img src="${user.picture.large}" alt="${user.name.first}" class="content__img-big">
							</picture>
							<div class="content__details">
								<span class="content__row">First Name: ${user.name.first}</span>
								<span class="content__row">Last Name: ${user.name.last}</span>
								<span class="content__row">Position: Manager</span>
								<span class="content__row">Tasks: 83%</span> 
								<span class="content__row">Date started: 01.10.2021</span><br>
								<input type="file" id="file" class="content__upload"> 
							</div>
						</div>
						`
		})

		grid.insertAdjacentHTML('beforeend', content);
	}
}

export default populateGrid;