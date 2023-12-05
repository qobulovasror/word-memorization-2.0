import { useColorScheme } from 'react-native';
const Colors = {
  light: {
    background: "#EDF1FCFF",
    background2: "#ffffff",
    text: "#000",
  },
  dark: {
    background: "#1A1C29FF",
    background2: "#212332FF",
    text: "#fff",
  },
}
const useThemeColors = () => {
  const colorScheme = useColorScheme()
  const colors = Colors[colorScheme]
  return colors
}
export default useThemeColors