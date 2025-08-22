// Importe o node-fetch
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// A chave de API "3" é a recomendada para acesso v2/v3, mas "123" também funciona para v1
const THESPORTSDB_API_KEY = process.env.THESPORTSDB_API_KEY || "3";

/**
 * Busca os últimos jogos de um time no Brasileirão Série A, conforme permitido pela API gratuita TheSportsDB.
 * A API busca os ~15 eventos mais recentes do time em todas as competições, e este código filtra pelos jogos do Brasileirão.
 * @param {string} teamName - O nome do time (ex: "Flamengo").
 * @returns {Promise<Array<Object>>} - Uma promessa que resolve para um array de jogos.
 */
export async function getLastMatches(teamName) {
  try {
    // --- PASSO 1: Buscar o ID do time pelo nome ---
    // Endpoint: searchteams.php
    const searchUrl = `https://www.thesportsdb.com/api/v1/json/${THESPORTSDB_API_KEY}/searchteams.php?t=${teamName}`;
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();

    if (!searchData.teams) {
      throw new Error(`Time "${teamName}" não encontrado.`);
    }

    const teamId = searchData.teams[0].idTeam;
    const officialTeamName = searchData.teams[0].strTeam;

    // --- PASSO 2: Buscar os últimos jogos do time usando seu ID ---
    // Endpoint: eventslast.php (o correto para buscar por ID de time)
    const eventsUrl = `https://www.thesportsdb.com/api/v1/json/${THESPORTSDB_API_KEY}/eventslast.php?id=${teamId}`;
    const eventsRes = await fetch(eventsUrl);
    const eventsData = await eventsRes.json();

    // Este endpoint retorna a chave "results"
    if (!eventsData.results) {
      return [];
    }

    // --- PASSO 3: Filtrar os resultados para o Brasileirão e formatar o JSON ---

    // console.log(eventsData);

    const formattedGames = eventsData.results.map((game) => {
      const [year, month, day] = game.dateEvent.split("-");
      const formattedDate = `${day}/${month}/${year}`;

      return {
        eventId: game.idEvent,
        league: game.strLeague,
        round: game.intRound,
        status: game.strStatus,
        date: formattedDate,
        time: game.strTimeLocal,
        stadium: game.strVenue,

        homeTeam: {
          name: game.strHomeTeam,
          badgeUrl: game.strHomeTeamBadge,
          score: parseInt(game.intHomeScore, 10),
        },

        awayTeam: {
          name: game.strAwayTeam,
          badgeUrl: game.strAwayTeamBadge,
          score: parseInt(game.intAwayScore, 10),
        },
      };
    });

    return formattedGames;
  } catch (error) {
    console.error("Erro ao buscar dados da TheSportsDB:", error);
    return [];
  }
}

// Importe o fetch e a chave da API como você já faz
// const fetch = ...
// const THESPORTSDB_API_KEY = ...

export async function getTodaysMatches(sportName = "Soccer") {
  try {
    // --- PASSO 1: Obter a data de hoje no formato YYYY-MM-DD ---
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Adiciona 1 porque os meses são 0-11
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    // --- PASSO 2: Chamar o endpoint 'eventsday.php' com a data e o esporte ---
    const eventsUrl = `https://www.thesportsdb.com/api/v1/json/${THESPORTSDB_API_KEY}/eventsday.php?d=${formattedDate}&s=${sportName}`;
    const eventsRes = await fetch(eventsUrl);
    const eventsData = await eventsRes.json();
    
    // Este endpoint usa a chave "events"
    if (!eventsData.events) {
      return []; // Não há jogos de futebol agendados para hoje na API
    }

    // --- PASSO 3: Formatar os resultados encontrados ---
    const formattedGames = eventsData.events.map(game => {
      // Alguns jogos podem já ter acontecido no dia, então verificamos se o score existe
      const homeScore = game.intHomeScore ? parseInt(game.intHomeScore, 10) : null;
      const awayScore = game.intAwayScore ? parseInt(game.intAwayScore, 10) : null;

      return {
        eventId: game.idEvent,
        league: game.strLeague,
        round: game.intRound,
        status: game.strStatus,
        date: formattedDate, // Sabemos que é hoje
        time: game.strTimeLocal,
        stadium: game.strVenue,
        homeTeam: {
          name: game.strHomeTeam,
          badgeUrl: game.strHomeTeamBadge,
          score: homeScore 
        },
        awayTeam: {
          name: game.strAwayTeam,
          badgeUrl: game.strAwayTeamBadge,
          score: awayScore
        }
      };
    });
    
    return formattedGames;

  } catch (error) {
    console.error("Erro ao buscar os jogos de hoje:", error);
    return [];
  }
}
