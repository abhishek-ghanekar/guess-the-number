import { View,Text,Pressable ,StyleSheet} from "react-native";
function PrimaryButton({children,onPress}) {
   function pressHandler() {
      onPress();
      console.log("pressed");
   }
   return (
      
   <View style={({pressed})=> pressed ? [styles.buttonInnerContainer,styles.pressed] :styles.buttonOuterContainer}>
      <Pressable onPress={pressHandler} android_ripple={{color: '#6402331'}} style={styles.buttonInnerContainer}>
    <Text style={styles.buttonText}>
     {children}
    </Text> 
    </Pressable>
   </View>
   
   )
   
}
export default PrimaryButton;
const styles = StyleSheet.create({
   buttonOuterContainer : {
      borderRadius : 28,
      margin:4,
      overflow: 'hidden'
   },
    buttonInnerContainer : {
      backgroundColor: "#72063c",
      borderRadius : 28,
      paddingVertical:8,
      paddingHorizontal:16,
      elevation:2,
      margin: 4,
    },
    buttonText : {
      color : "white",
      textAlign:"center"
    },
    pressed : {
      opacity:0.75
    }
});