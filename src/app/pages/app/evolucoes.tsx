import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardSection from "@/app/components/CardSection/CardSection";

export default function Evolucoes() {
    const router = useRouter();
    const { evolucao } = router.query;
    const [pokemonData, setPokemonData] = useState<any>(null);

    useEffect(() => {
        async function fetchPokemonData() {
            try {
                if (!evolucao) return;

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolucao}`);
                if (!response.ok) {
                    throw new Error("Não foi possível carregar os dados do Pokémon.");
                }
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error("Erro ao buscar dados do Pokémon:", error);
            }
        }

        fetchPokemonData();
    }, [evolucao]);

    return (
        <div>
            {pokemonData && evolucao && (
                <CardSection title={evolucao.toString().toUpperCase()}>
                    <img src={pokemonData.sprites.front_default} alt={evolucao.toString()} />
                </CardSection>
            )}
        </div>
    );
}
