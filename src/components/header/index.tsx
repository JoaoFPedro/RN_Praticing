import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import games from "../../data/games";
import CheckBoxButton from "../CheckBoxFitler/CheckBoxFilter";
import styles from "./styles";

interface HeaderProps {
  applyFilter: (text: string) => void
 
}

function Header({ applyFilter }: HeaderProps) {
  const [inputFilter, setInputFilter]  = useState('');
 
  /*

  */

  // const [filter, setFilter] = useState<string>('');

  // const handleFilter = (text: string) => {
  //     setFilter(text);
  //     onFilterChange(text);
  // };

  const handleApplyFilter =  () => {
    applyFilter(inputFilter)
  }
  const getUniquePlataform =() => {
    // const uniquePlataform: string[] = []

    // for(const item of games){
    //   uniquePlataform.push(item.platform)
    // }
    // return uniquePlataform;
    const platforms = games.map(game => game.platform);
    // Cria um conjunto para remover duplicatas e converte de volta para array
    return [...new Set(platforms)];
  }

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Top Games</Text>
      <TextInput
        style={styles.input}
        placeholder="Filtre por nome"
        value={inputFilter}
        onChangeText={(value) => setInputFilter(value) }
        
      />
      <Button title="Filter" onPress={handleApplyFilter}/>
      <CheckBoxButton platforms={getUniquePlataform()}  />
      
    </View>
    
  );
}

export default Header;
