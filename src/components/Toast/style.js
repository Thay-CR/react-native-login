import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    padding:5,
    borderRadius:15,
    borderColor: "gray",
    borderWidth:1,
    alignSelf:'center',
    marginTop:8,
    flexDirection:'row',
    width:'90%',
  },
  text: {
    textAlign:'center',
    width:'100%',
    color: 'red'
  },
  textFailed: {
    textAlign:'center',
    width:'100%',
    color: 'red'
  },
  textSuccess: {
    textAlign:'center',
    width:'100%',
    color:'green',
    fontSize:14
  }

});
