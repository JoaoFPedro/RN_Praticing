import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from "./styles";


interface HeaderProps {
  applyFilter: (text: string) => void
}

function Header({ applyFilter }: HeaderProps) {
  const [inputFilter, setInputFilter]  = useState('');
  // const [filter, setFilter] = useState<string>('');

  // const handleFilter = (text: string) => {
  //     setFilter(text);
  //     onFilterChange(text);
  // };

  const handleApplyFilter =  () => {
    applyFilter(inputFilter)
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
    </View>
    
  );
}

export default Header;
