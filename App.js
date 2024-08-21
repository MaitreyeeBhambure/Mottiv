
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';


const API_ENDPOINT="https://newsapi.org/v2/everything?q=bitcoin&apiKey=26cfc65a22ba4e3ab6fdbb816e2cad37";

export default function App() {

  const [isLoading,setIsLoading]=useState(false);
  const [data,setData]=useState([]);
  const [error,setError]=useState(null);
  const [searchQuery,setSearchQuery]=useState("");


  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOINT);
  }, [])


  const fetchData = async(url) => {
    try
    {
      const response = await fetch(url);
      const json= await response.json();
      setData(json);

      console.log(json)
      setIsLoading(false);
    }
    catch(error)
    {
      setError(error)
      setIsLoading(false);
    }
}

  const handleSearch=(query)=>{
    setSearchQuery(query);
  }

   if(isLoading)
   {
    return(
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
      <ActivityIndicator size={"large"}></ActivityIndicator>
      </View>
    );
   }

   if(error)
    {
     return(
       <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
      <Text>Error in fetching data...</Text>
       </View>
     );
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


{/* <View style={styles.container}>
     
      {

        data.length?
      data.map((item)=>
        <View>
           <Text style={{fontSize:10}}>item.author</Text>
      </View>
      ):null
      }
    </View> */}

     <FlatList
     data={data}
     keyExtractor={(item)=>item.articles.authors}
     renderItem={(item)=>
     (
     <View>
      <Text style={{fontSize:20}}>item.articles.author</Text>
   </View>
 )
     }
     />
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
