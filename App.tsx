import { useState } from 'react';
import { View } from 'react-native';
import styles from './AppStyle';
import Footer from './src/components/footer/footer';
import Header from './src/components/header';
import games, { IGames } from './src/data/games';
import GameList from './src/pages/GameList';


export default function App() {
  const [filteredGames, setFilteredGames] = useState<IGames[]>(games);

  const handleFilterChange = (filterText: string) => {
    const lowercasedFilter = filterText.toLowerCase();

    if(lowercasedFilter === ''){
      setFilteredGames(games);
    }

    else {
    const filtered = games.filter(game =>
      game.name.toLowerCase().split(' ').some(part =>
        part.localeCompare(lowercasedFilter, undefined, { sensitivity: 'base' }) === 0
      )
    );
    
    setFilteredGames(filtered);
      }
  };

  return (
    <View style={styles.container}>      
      <Header onFilterChange={handleFilterChange}/>      
      <GameList games={filteredGames}/>
      <Footer />
    </View>
  );
}