
const ul = document.querySelector('ul');
const button = document.querySelector('button');

const getDataJokes = async () => {
    const res = await axios.get('https://icanhazdadjoke.com', {
        headers: {'Accept' : 'application/json'}
    });
    // console.log(res.data.joke);
    showJokes(res.data.joke);
};

getDataJokes();

function showJokes(joke) {
  // ul.innerHTML = '';
  // const { joke } = dadjoke;
    
    const li = document.createElement('li');
    li.classList.add('joke');
    li.innerText = joke;
    ul.appendChild(li);
  
}


button.addEventListener('click', (e) => {
  e.preventDefault;
  getDataJokes();
})
