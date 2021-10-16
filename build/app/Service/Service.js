class Service {
  urlAPI;

  constructor(urlAPI) {
    this.urlAPI = urlAPI;
  }

  async getData(urlAPI) {
    const response = await fetch(urlAPI);
    const pokemonData = await response.json();
    return pokemonData;
  }
}

export default Service;
