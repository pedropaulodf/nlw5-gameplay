import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '76%',
    height: 1,
    backgroundColor: theme.colors.secondary40,
    // marginVertical: 14,
    marginTop: -1,
    marginBottom: 30,
    alignSelf: 'flex-end',
  },
});
