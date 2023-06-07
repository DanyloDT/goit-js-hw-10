const API_KEY = 'live_gOTDwdjvxP7iquHFXvgVV6KpCVrBQPzwe6STkhMCrWOkcYYiXlcaDKBmWzWptqwy';
const BASE_URL = 'https://api.thecatapi.com/v1/images/search'

export const fetchBreeds = () => {
    return fetch(`https://api.thecatapi.com/v1/breeds`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    
    })
    // .then(data => {console.log(data);})
           
    .catch(err => { console.log(err); })
}



export const fetchCatByBreed = (breedId) => {
    const searchParams = new URLSearchParams({
    breed_ids: breedId,
    api_key: API_KEY,
  });

    return fetch(`${BASE_URL}?${searchParams}`)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    
         })
        // .then(data => { console.log(data); })
        .catch(err => { console.log(err); })


}




    