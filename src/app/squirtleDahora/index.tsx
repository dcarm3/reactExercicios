import Head from 'next/head';
import Header from '../../components/Header/Header';
import CardSection from '../../components/CardSection/CardSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Página do Pokémon Squirtle</title>
        <meta name="description" content="A project showcasing Squirtle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header titulo="Squirtle" />

      <nav aria-label="Navegação principal">
        <ul>
          <li><a href="#info-squirtle">Informações sobre Squirtle</a></li>
          <li><a href="#caracteristicas">Características</a></li>
          <li><a href="#curiosidades">Curiosidades</a></li>
          <li><a href="#artigo-squirtle">Artigo sobre Squirtle</a></li>
          <li><a href="#recursos">Recursos Adicionais</a></li>
          <li><a href="#evolucao">Evolução</a></li>
        </ul>
      </nav>

      <main>
        <CardSection titulo="Informações sobre Squirtle">
          <div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
              alt="Squirtle 1"
            />
            <img
              src="https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png"
              alt="Squirtle 2"
            />
          </div>
          <p>
            Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.
          </p>
        </CardSection>

        <CardSection titulo="Características">
          <p>
            Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.
          </p>
        </CardSection>

        <CardSection titulo="Curiosidades">
          <ul>
            <li>Squirtle é um dos Pokémon mais populares e adoráveis.</li>
            <li>
              Seu nome deriva das palavras squirrel (esquilo) e turtle (tartaruga).
            </li>
            <li>
              Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.
            </li>
          </ul>
        </CardSection>

        <CardSection titulo="Squirtle: O Amigo Aquático">
          <p>
            Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo.
            Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.
          </p>
          <p>
            Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente,
            para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.
          </p>
          <p>
            Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle
            como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.
          </p>
        </CardSection>

        <CardSection titulo="Recursos Adicionais">
          <ul>
            <li>
              <a href="https://www.pokemon.com/br/pokedex/squirtle" target="_blank">Pokédex - Squirtle</a>
            </li>
            <li>
              <a href="https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)" target="_blank">Bulbapedia - Squirtle</a>
            </li>
          </ul>
        </CardSection>

        <CardSection titulo="Evoluções">
          <ul>
            <li>
              <a href="./pages/pokemon/index.html?name=squirtle">
                <figure>
                  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="Squirtle" />
                  <figcaption>1. Squirtle</figcaption>
                </figure>
              </a>
            </li>
            <li>
              <a href="./pages/pokemon/index.html?name=wartortle">
                <figure>
                  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png" alt="Wartortle" />
                  <figcaption>2. Wartortle</figcaption>
                </figure>
              </a>
            </li>
            <li>
              <a href="./pages/pokemon/index.html?name=blastoise">
                <figure>
                  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png" alt="Blastoise" />
                  <figcaption>3. Blastoise</figcaption>
                </figure>
              </a>
            </li>
          </ul>
        </CardSection>
      </main>

      <footer aria-label="Rodapé">
        <p aria-label="Copyright">
          &copy; 2024 Página do Pokémon Squirtle. Todos os direitos reservados.
        </p>
        <p><a href="#header">Voltar para o topo</a></p>
        <p><a href="mailto:contato@squirtlepage.com">Contato via e-mail</a></p>
        <p><a href="tel:+5555555555">Telefone: (55) 5555-5555</a></p>
      </footer>
    </div>
  );
}
