import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";

import {Feather} from "@expo/vector-icons";

const SearchBar = ({onSearch}) => {
    const [searchItem, setSearchItem] = useState("");

    function triggerSearch() {
        onSearch(searchItem);
        setSearchItem("");
    }

    return (
    <View style={styles.background}>
        <Feather 
        name="search" 
        style={styles.iconStyle}/>
        <TextInput
        autoCorrect={false}
        value={searchItem}
        onChangeText={(newSearch) => setSearchItem(newSearch)} 
        onSubmitEditing={triggerSearch}
        placeholder="Search" 
        style={styles.inputStyle}/>
    </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#98ded9",
        height: 50,
        borderRadius: 5,
        flexDirection: "row",
        // elevation: 5,
        // shadowColor: '#282846',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.8,
        // shadowRadius: 5,  
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        color: "#282846"
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: "center",
        paddingHorizontal: 5,
        color: "#282846"
    }
});

export default SearchBar;

//#F0EEEE