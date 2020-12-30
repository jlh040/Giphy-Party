const ourForm = document.getElementById('form');
const searchField = document.querySelector('#search-input');
const removeBtn = document.querySelector('#removeBtn');
const gifCol = document.querySelector('#gif-col');

async function makeRequest(term) {
    const api_key = 'HImj2wppcynlFjhtYb9XacIEiNhhouas';
    const params = {api_key, q: `${term}`}
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params});
    const src = res.data.data[Math.floor(Math.random() * 50)].images.fixed_height.url;
    return src;
}

function createGif(source) {
    const gif = document.createElement('img');
    gif.src = source;
    gif.classList.add('img-fluid', 'my-4', 'mx-2');
    return gif;
}

async function appendGif() {
    const src = await makeRequest(searchField.value);
    gifCol.append(createGif(src));

}

ourForm.addEventListener('submit', function(ev) {
    ev.preventDefault();
    appendGif();
    searchField.value = '';
})

removeBtn.addEventListener('click', function() {
    gifCol.innerHTML = '';
})