function run(hash1, hash2) {
	var list = document.getElementById("lastThreeList");
	list.insertAdjacentHTML('afterbegin','<li>' + hash1 + ',' + hash2 + '</li>')
	localStorage.setItem('hashtags', {h1:hash1, h2:hash2})
		
}

function storage() {
	var topTenList = document.getElementById("topTenList");
	for (var i = 0; i < 10; i++)
	{
		topTenList.insertAdjacentHTML('afterbegin', '<li>' + localStorage.getItem('hashtags') + '</li>')
	}
}