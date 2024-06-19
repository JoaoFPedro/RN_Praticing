import { Text, TextInput, View } from "react-native";
import styles from "./styles";
import useFilter from "./useFilter";

interface HeaderProps {
  onFilterChange: (text: string) => void;
}

function Header({ onFilterChange }: HeaderProps) {
  const { filter, handleFilter } = useFilter({ onFilterChange });
  // const [filter, setFilter] = useState<string>('');

  // const handleFilter = (text: string) => {
  //     setFilter(text);
  //     onFilterChange(text);
  // };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Top Games</Text>
      <TextInput
        style={styles.input}
        placeholder="Filtre por nome"
        value={filter}
        onChangeText={handleFilter}
      />
    </View>
  );
}

export default Header;
