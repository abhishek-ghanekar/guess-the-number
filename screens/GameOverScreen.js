import {Text,StyleSheet} from "react-native";
function GameOverScreen({num}) {
    return (
        <Text style={styles.finalScore}>Game Over, The Computer Guess Was {num}!</Text>
    )
}
export default  GameOverScreen;
const styles = StyleSheet.create({
   finalScore : {
    padding:36,
    fontSize:24,
    marginTop:48

   }
})
