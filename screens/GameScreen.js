import {Text, View,StyleSheet,Alert} from "react-native"
import Title from "../components/ui/title";
import { useState,useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton.js"

// end of imports

//function to generate a random number
function generateRandomBetween(min,max,exclude) {
  const rndNum = Math.floor(Math.random() *(max-min)) + min;
  if(rndNum === exclude) {
    return generateRandomBetween(min,max,exclude);
  }else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;


//GameScreen Component
function GameScreen({userNumber,onGameOver}) {
    const initalGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess,setCurrentGuess] = useState(initalGuess);

    useEffect(() => {
      if(currentGuess === userNumber) {
        
        onGameOver();
      }
    },[currentGuess,userNumber,onGameOver]);


    function nextGuessHandler(direction) {
      if((direction === "lower" && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
        Alert.alert("Dont Lie", " You know that this is wrong", [{text : 'sorry',style:'cancel'}]);
         return ;
      }
      if(direction === "lower") {
        maxBoundary = currentGuess;
        
      }else if(direction === "higher") {
        minBoundary = currentGuess+1;
    
      }
      console.log(minBoundary,maxBoundary);
      const newRndNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
      setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title> Opponents Guess</Title>
            <NumberContainer>{currentGuess} </NumberContainer>
            <View>
              <Text>Higher Or Lower</Text>
              <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
              <PrimaryButton onPress={nextGuessHandler.bind(this,'higher')}>+</PrimaryButton>
              
            </View>

            <View><Text>Log Rounds</Text></View>
        </View>
    )
    
}
export default GameScreen;
const styles = StyleSheet.create({
   screen : {
    flex:1,
    padding:48
   }
});