import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flex: 1,
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight
  },
  textMessageLogout: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 21,
    textAlign: 'center',
    marginTop: 20
  },
  groupButtons: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 5
  },
  buttonNo: {
    flex: 1,
    borderColor: theme.colors.secondary30,
    borderWidth: 1
  },
  buttonYes: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    color: theme.colors.heading,
    fontSize: 17
  },
  textPlay: {
    color: theme.colors.primary,
  }
});
