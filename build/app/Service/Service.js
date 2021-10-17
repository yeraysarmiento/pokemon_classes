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
    try {
      const response = await fetch(this.urlAPI, {
        method: "POST",
        body: JSON.stringify(pokemon),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const response = await response.json();
        document.write("Pokemon cargado en API");
        return response;
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.log(`Error al realizar la petición AJAX: ${err.message}`);
    }
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
