import {useState} from "react";
import { StyleSheet , ImageBackground,SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen"

// end of all imports

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [gameIsOver,setGameIsOver] = useState(true);

  // end of state management


  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen num={userNumber}/ >;
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }
  
  return (
    <LinearGradient style={styles.rootScreen}  colors={['#4e0329', '#ddb']}>
      <ImageBackground source={require('./assets/background.jpg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}   
        </SafeAreaView>
      
      </ImageBackground>
     
    </LinearGradient>
    
  );
}
//by default views take space that they require
const styles = StyleSheet.create({
  rootScreen : {
    flex:1
  },
  backgroundImage : {
    opacity : 0.25
  }
});
