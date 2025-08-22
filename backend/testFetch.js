// Mude a importação para a nova função que acessa a API de esportes
import { getLastMatches, getTodaysMatches } from "./services/fetchGames.js";
import "dotenv/config";

async function test() {
  try {
    // Agora chamamos a nova função, mais confiável
    const jogos = await getTodaysMatches();

    // O console.log continua igual, pois a nova função já retorna o JSON no formato certo
    console.log(`Partidas encontradas(${jogos.length}):`);
    console.log(JSON.stringify(jogos, null, 2));
  } catch (error) {
    console.error("Erro ao buscar partidas:", error);
  }
}

test();
