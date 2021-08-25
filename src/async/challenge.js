const fetchData = require('../utils/fetchData');
const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async (urlApi)=>{
    try {
        const data = await fetchData(urlApi);
        console.log(data.info.count);

        const character = await fetchData(`${urlApi}${data.results[0].id}`);
        console.log(character.name);

        const origin = await fetchData(character.origin.url);
        console.log(origin.dimension);

    } catch (error) {
        console.error(error);
    }
};

anotherFunction(API);
