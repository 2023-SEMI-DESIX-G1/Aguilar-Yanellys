((Utilities) => {
  const Application = {
    elements: {
      pokemonForm: document.getElementById("pokemon-form"),
      searchTypeSelect: document.getElementById("search-type-select"),
      searchInput: document.getElementById("search-input"),
      outputContainer: document.getElementById("output-container"),
      clearButton: document.getElementById("clear-button"),
    },
    settings: {
      getPokemonSpeciesEndpoint: "pokemon-species",
      getPokemonEvolutionChainEndpoint: "evolution_chain",
    },
    utils: {
      ...Utilities,
      fetchPokemonData: async ({ query, searchType }) => {
        try {
          const pokemonDataResponse = await Application.utils.getPokemonData({
            query,
            searchType,
          });

          const pokemonSpeciesResponse = await Application.utils.getPokemonData(
            {
              query,
              searchType: Application.settings.getPokemonSpeciesEndpoint,
            }
          );

          const pokemonSpeciesChain = await Application.utils.fetchData({
            url: pokemonSpeciesResponse.evolution_chain.url,
            searchType: Application.settings.getPokemonEvolutionChainEndpoint,
          });

          const evolutionData = Application.utils.getEvolutionData(
            pokemonSpeciesChain.chain
          );

          const generalDataTemplate =
            Application.templates.generateGeneralDataTemplate(
              pokemonDataResponse
            );

          const extraDataTemplate =
            Application.templates.generateExtraDataTemplate(
              pokemonDataResponse,
              evolutionData
            );

          return generalDataTemplate.concat("", extraDataTemplate);
        } catch (error) {
          return Application.templates.generateErrorTemplate(error);
        }
      },
      fetchPokemonAbility: async ({ query, searchType }) => {
        try {
          const abilityDataResponse = await Application.utils.getPokemonData({
            query,
            searchType,
          });

          return Application.templates.generateAbilityTemplate(
            abilityDataResponse
          );
        } catch (error) {
          return Application.templates.generateErrorTemplate(error);
        }
      },
      getEvolutionData: (chain) => {
        const evolutionChain = [];

        function fetchEvolutionData(chain) {
          evolutionChain.push({
            name: Application.utils.capitalize(chain.species.name),
            isBaby: chain.is_baby,
          });

          for (let x = 0; x < chain.evolves_to.length; x++) {
            fetchEvolutionData(chain.evolves_to[x]);
          }
        }

        fetchEvolutionData(chain);
        return evolutionChain;
      },
    },
    templates: {
      generateGeneralDataTemplate: ({ id, name, weight, height, sprites }) => {
        return `
              <section class="card center">
                <div class="card-content">
                  <section class="card-title">
                    <br>
                    <h3>${Application.utils.capitalize(name)} (${id})</h3>
                  </section>
                  <section class="card-input">
                    <section class="card-input-child">
                      <section class="content-sprites">
                        <h4>Sprites</h4>
                        <img class="card-sprite" src="${
                          sprites.front_default
                        }" alt="">
                        <img class="card-sprite" src="${
                          sprites.back_default
                        }" alt="">
                      </section>
                    </section>
                    <section class="card-input-child flex-end">
                      <section class="flex-left2">
                        <h4>Weight / Height</h4>
                        <p>${weight} / ${height}</p>
                      </section>
                    </section>
                  </section>
              `;
      },
      generateExtraDataTemplate: ({ abilities }, evolutionData) => {
        const evolutionList =
          evolutionData.length > 1
            ? evolutionData.map(
                ({ name, isBaby }) =>
                  `<li>${name} ${
                    isBaby ? `<img src="assets/svg/baby.svg" alt="">` : ""
                  }</li>`
              )
            : ["<li>No evolutions</li>"];

        const abilityList = abilities.map(
          ({ ability, isHidden }) =>
            `<li class="lis">${Application.utils.capitalize(ability.name)} ${
              isHidden ? `<img src="assets/svg/hidden.svg" alt="">` : ""
            }</li>`
        );

        return `
          <section class="card-input">
            <section class="card-input-child">
              <section class="flex-start">
                <h4>Evolution Chain</h4>
                <ul>
                  ${evolutionList.join("")}
                </ul>
              </section>
            </section>
            <section class="card-input-child flex-end">
              <section class="flex-left2">
                <h4>Abilities</h4>
                <ul>
                  ${abilityList.join("")}
                </ul>
              </section>
            </section>
          </section>
          <br>
        </div>
      </section>
      `;
      },
      generateAbilityTemplate: ({ name, pokemon }) => {
        const pokemonList = pokemon.map(
          ({ pokemon, isHidden }) =>
            `<li>${Application.utils.capitalize(pokemon.name)} ${
              isHidden ? `<img src="assets/svg/hidden.svg" alt="">` : ""
            }</li>`
        );

        return `
          <section class="card center">
            <div class="card-content">
              <section class="flex-start">
                <h2>${Application.utils.capitalize(name)}</h2>
                <h4>Who can learn it?</h4>
                <ul>
                  ${pokemonList.join("")}
                </ul>
                <br><br>
              </section>
            </div>
          </section>
        `;
      },
      generateErrorTemplate: (error) => {
        return `
          <section class="card center">
            <div class="card-content">
              <h3>${error}</h3>
            </div>
          </section>
        `;
      },
    },
    initialize: () => {
      Application.elements.pokemonForm.addEventListener(
        "submit",
        Application.handlers.handlePokemonFormSubmit
      );

      Application.elements.clearButton.addEventListener(
        "click",
        Application.handlers.handleClearButtonClick
      );
    },
    handlers: {
      handlePokemonFormSubmit: async (event) => {
        event.preventDefault();
        let template = "";

        const query = Application.elements.searchInput.value
          .trim()
          .toLowerCase();
        const searchType = Application.elements.searchTypeSelect.value;

        if (query.length === 0 || searchType === "") {
          template =
            Application.templates.generateErrorTemplate("Incomplete Form");
          Application.elements.outputContainer.innerHTML = template;
          return;
        }

        const searchTypes = {
          pokemon: Application.utils.fetchPokemonData,
          ability: Application.utils.fetchPokemonAbility,
        };

        template = searchTypes[searchType]
          ? await searchTypes[searchType]({ query, searchType })
          : Application.templates.generateErrorTemplate;

        Application.elements.outputContainer.innerHTML = template;
        Application.elements.clearButton.style.visibility = "visible";
      },
      handleClearButtonClick: () => {
        Application.elements.pokemonForm.reset();
        Application.elements.outputContainer.innerHTML = "";
        Application.elements.clearButton.style.visibility = "hidden";
      },
    },
  };
  Application.initialize();
})(document.Utilities);
