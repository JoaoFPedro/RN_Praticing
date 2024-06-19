import { useState } from "react";

interface UseFilterProps {
  onFilterChange: (text: string) => void;
}

const useFilter = ({ onFilterChange }: UseFilterProps) => {
  const [filter, setFilter] = useState<string>("");

  const handleFilter = (text: string) => {
    setFilter(text);
    onFilterChange(text);
  };

  return { filter, handleFilter };
};

export default useFilter;
