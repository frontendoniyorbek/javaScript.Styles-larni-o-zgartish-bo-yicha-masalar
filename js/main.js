// ES6 dan foydalanib modal oyna funksiyasini yaratish
document.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('myModal');
	const btn = document.getElementById('openModalBtn');
	const span = document.querySelector('.close');

	// Tugmani bosilganda modal oynani ochish
	btn.addEventListener('click', () => {
		modal.style.display = 'block';
	});

	// Yopish tugmasini bosilganda modal oynani yopish
	span.addEventListener('click', () => {
		modal.style.display = 'none';
	});

	// Oynadan tashqarini bosilganda modal oynani yopish
	window.addEventListener('click', event => {
		if (event.target === modal) {
			modal.style.display = 'none';
		}
	});
});
