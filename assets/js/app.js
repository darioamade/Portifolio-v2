window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
    });



    const logox = document.querySelectorAll('#logox path');

	for(let i = 0; i < logox.length; i++) {
		console.log(`Letter ${i} is ${logox[i].getTotalLength()}`);
		
	}
		