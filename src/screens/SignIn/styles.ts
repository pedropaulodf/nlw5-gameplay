import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.background,
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -70,
    paddingHorizontal: 40,
  },
  title: {
    color: theme.color.heading,
    textAlign: 'center',
    fontSize: 38,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.color.heading,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 30,
  }
})