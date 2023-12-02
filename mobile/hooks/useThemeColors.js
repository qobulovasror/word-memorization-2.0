import { useColorScheme } from 'react-native';
const Colors = {
  light: {
    background: "#EDF1FCFF",
    text: "#000",
  },
  dark: {
    background: "#212332FF",
    text: "#fff",
  },
}
const useThemeColors = () => {
  const colorScheme = useColorScheme()
  const colors = Colors[colorScheme]
  return colors
}
export default useThemeColors