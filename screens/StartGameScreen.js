import { Text,TextInput,Pressable,View,StyleSheet,Alert} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/title";
import Card from "../components/ui/card";
function StartGameScreen({onPickNumber}) {
  const [enteredNumber,setEnteredNumber] = useState('');
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber('');
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert
      Alert.alert('Invalid Number','Number has to be a number between 1 and 99',[{text : "okay",style : 'destructive', onPress : resetInputHandler }])
      return ;
    }

    onPickNumber(chosenNumber);
    

  }
    return (
      <View style={styles.rootContainer}>
        <Title>Guess My Number?</Title>
        <Card>
          <Text style={styles.instructionText}>Enter a Number</Text>
          <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler}/>
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
                    
              </View>

        </Card>
      </View>
    )
};
export default StartGameScreen;
const styles = StyleSheet.create({
  rootContainer : {
    flex : 1,
    marginTop:100,
    alignItems: 'center'
  },
  instructionText : {
    color:"#ddb52f",
    fontSize : 24
  },
   inputContainer : {
    alignItems:"center",
    marginHorizontal:24,
    borderRadius: 8,
    elevation:4,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.25,
    padding:16,
    marginTop: 36,
    backgroundColor: "#3b021f",
    
   },
   numberInput : {
    
    height:50,
    width:50,
    fontSize:32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign:'center',
    justifyContent: "center"
   },
   buttonsContainer : {
    flexDirection:"row"
   },
   buttonContainer : {
    flex : 1
   }
});