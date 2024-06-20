import { useState } from 'react';
import { View } from 'react-native';
import styles from './AppStyle';
import Footer from './src/components/footer/footer';
import Header from './src/components/header';
import games, { IGames } from './src/data/games';
import GameList from './src/pages/GameList';


export default function App() {
  const [filteredGames, setFilteredGames] = useState<IGames[]>(games);

  const applyFilter = (filterText: string) => {
   

    if(filterText === ''){
      setFilteredGames(games);
    }

    else {
      const lowercasedFilter = filterText.toLowerCase();
      const filtered = games.filter(game =>      
      game.name.toLowerCase().includes(lowercasedFilter)
      
    );    
    setFilteredGames(filtered);
      }
  };
  return (
    <View style={styles.container}>      
      <Header applyFilter={applyFilter}/>      
      <GameList games={filteredGames}/>
      <Footer />
    </View>
  );
}