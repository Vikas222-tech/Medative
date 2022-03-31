import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export const COLORS = {
    primary: "#000000",
    dots: '#000000',
    // #0A2339
    secondDots: '#FFFFFF',
    black: "#171717",
    white: "#FFFFFF",
    background: "#E5E5E5",
    
}
export const SIZES = {
    base: 10,
    width,
    height
}
const theme = { COLORS, SIZES };
export default theme;