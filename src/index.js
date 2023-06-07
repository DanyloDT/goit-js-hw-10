import { fetchBreeds, fetchCatByBreed } from "./cat-api.js"

import Notiflix from 'notiflix';


const selectBreedEl = document.querySelector('.breed-select')
const loaderEl = document.querySelector('.loader')
const errorEl = document.querySelector('.error')
const catInfoEl = document.querySelector('.cat-info')



fetchBreeds()
    .then(data => {
        setTimeout(() => {
            loaderEl.classList.add('is-hidden');
            

            const catInfo = data.map(breed => {
                return `<option value="${breed.id}">${breed.name}</option>`;
            }).join()
            return selectBreedEl.innerHTML = catInfo 
        }, 500)

        
       
    }).catch(err => {
        loaderEl.classList.add('is-hidden');
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
        
  

const onSearch = (event) => {
    const selectEl = event.target.value

    console.log(selectEl);
    fetchCatByBreed(selectEl)
        .then(breed => { 
            loaderEl.classList.remove('is-hidden');
            catInfoEl.innerHTML = '';

            setTimeout(() => {
                loaderEl.classList.add('is-hidden');
                return catInfoEl.innerHTML = `<img class="cat-img" src="${breed[0].url}" alt="${breed[0].breeds[0].name}" />
                        <div class="cat-description">
                            <h2 class="cat-name">${breed[0].breeds[0].name}</h2>
                            <p class="">${breed[0].breeds[0].description}</p>
                            <p>
                            <span class="cat-temperament">Temperament:</span>
                            ${breed[0].breeds[0].temperament}
                            </p>
                        </div>`;
                

            }, 500)
            
        }).catch(err => {
            loaderEl.classList.remove('is-hidden');
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
        })
              
        
}

selectBreedEl.addEventListener('change', onSearch)