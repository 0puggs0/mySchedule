import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useMemo, useRef, useState } from "react";

const useProfessors = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  async function getProfessors() {
    const response = await fetch("https://oh.sssh.it/getProfessors", {
      headers: {
        token:
          "hHc7JIv3EMPd27w2mES5DuZ1jIU3AR1EC6fW0901AqXhuxp0cMu16THKGJuh2yBW",
      },
    });
    const json = await response.json();
    setFilteredData(json.professors);
  }
  const filtered = useMemo(() => {
    if (Array.isArray(filteredData)) {
      const newData = filteredData.filter(
        (item: { name: string; id: string }) => {
          if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
          }
        },
      );
      return newData;
    } else {
      return [];
    }
  }, [searchText, filteredData]);
  const handleOpenPress = () => {
    getProfessors();
    bottomSheetRef.current?.present();
  };
  const handleClose = () => {
    bottomSheetRef.current?.dismiss();
  };
  return {
    handleOpenPress,
    handleClose,
    filtered,
    bottomSheetRef,
    searchText,
    setSearchText,
  };
};
export default useProfessors;
