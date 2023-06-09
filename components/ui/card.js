import { View ,StyleSheet} from "react-native";
function Card({children}) {
return (
    <View style={styles.card}>{children}</View>
) 
}
export default Card;
const styles = StyleSheet.create({
    card : {
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
        
       }
})
