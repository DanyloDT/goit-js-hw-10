import { fetchBreeds, fetchCatByBreed } from "./cat-api.js"


const selectBreedEl = document.querySelector('.breed-select')
const loaderEl = document.querySelector('.loader')
const errorEl = document.querySelector('.error')
const catInfoEl = document.querySelector('.cat-info')



fetchBreeds().then(data => {console.log(data)})


const onSearch = () =>{}

selectBreedEl.addEventListener('change', onSearch)