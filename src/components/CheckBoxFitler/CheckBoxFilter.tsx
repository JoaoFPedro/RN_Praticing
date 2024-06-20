

import { Checkbox } from "expo-checkbox";
import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from './styles';
interface CheckBoxButtonProps {
    platforms: string[];
  }

  const CheckBoxButton = ({ platforms }: CheckBoxButtonProps) => {
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  
    const handleSelection = (platform: string) => {
      setSelectedPlatforms(prevSelectedPlatforms => {
        if (prevSelectedPlatforms.includes(platform)) {
          // Remove a plataforma se já estiver selecionada
          return prevSelectedPlatforms.filter(item => item !== platform);
        } else {
          // Adiciona a plataforma se não estiver selecionada
          return [...prevSelectedPlatforms, platform];
        }
      });
    }
  
    return (
      <View>
        {platforms.map((platform, index) => (
          <View key={index} style={styles.container}>
            <Checkbox
              value={selectedPlatforms.includes(platform)}
              onValueChange={() => handleSelection(platform)}
            />
            <Text style={styles.headerText}>{platform}</Text>
          </View>
        ))}
      </View>
    );
  }

export default CheckBoxButton