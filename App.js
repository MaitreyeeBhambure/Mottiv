import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [searchQuery,setSearchQuery]=useState("");

  const handleSearch=(query)=>{
    setSearchQuery(query);
  }



  return (
    <SafeAreaView style={{flex:1,marginHorizontal:20,marginTop:50}}>
     <TextInput 
     placeholder="Search" 
     clearButtonMode="always"
     style={styles.searchbox}
     autoCapitalize="none"
     value={searchQuery}
     onChangeText={(query)=>handleSearch(query)}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbox: {paddingHorizontal:20,paddingVertical:10,borderColor:"#ccc",borderWidth:1,borderRadius:8},
});
