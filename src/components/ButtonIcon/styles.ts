import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.color.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.color.line,
  }, 
  icon: {
    width: 24,
    height: 18,
  },
  title: {
    flex: 1,
    color: theme.color.heading,
    fontSize: 17,
    textAlign: 'center',
  }
});
