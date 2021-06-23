import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18
  }, 
  status: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bulletStatus: {
    width: 9,
    height: 9,
    borderRadius: 4,
    marginRight: 8
  },
  nameStatus: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  }
});
