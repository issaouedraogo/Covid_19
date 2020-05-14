import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    home_image:{
      flex: 1,
      width: '100%',
      height: "100%"
    },
    home_text: {
        fontSize: 30,
        textAlign: "center"
    },
    header:{
      width:'100%', 
      height:'100%',
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center', 
    }, 
    headerText:{
      fontSize:20,
      fontWeight: 'bold',
      color:'#333', 
      letterSpacing:1,
    },
    card_form:{
      borderRadius: 6, 
      elevation:3, 
      backgroundColor:'#fff', 
      shadowOffset:{width:1, height:1},
      shadowColor:'#333',
      shadowOpacity: 0.3,
      shadowRadius:2,
      marginHorizontal:10,
      marginVertical: 10,
      justifyContent:'center' 
    },
    cardContent_header:{
      flex:5,
      marginHorizontal: 18, 
      marginVertical:18,
      fontSize:15,
      alignItems:'center'
    },
    cardContent_val:{
      flex:1,
      flexDirection:'row',
      marginHorizontal: 18, 
      marginVertical:5,
      fontSize:15,
      alignItems:'center'
    }
      
  });
  export default styles