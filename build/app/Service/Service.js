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

  async createData(pokemon) {
    const response = await fetch(this.urlAPI, {
      method: "POST",
      body: JSON.stringify(pokemon),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newPokemon = response.json();
    return newPokemon;
  }
}

export default Service;



/*
async createData(pokemon) {
    const response = await fetch(this.urlAPI, {
      method: "POST",
      body: JSON.stringify(pokemon),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newPokemon = response.json();
    return newPokemon;
  }
  */