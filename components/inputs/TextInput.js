import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function TextForm({isSecret, placeholder, label, value, setValue}) {
  return (
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder={placeholder} secureTextEntry={isSecret} value={value} onChangeText={setValue}></TextInput>
        <Text style={styles.inputLabel}>{label}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: { 
    width: '100%',
    marginVertical: 20,
  },
  inputLabel: {
    position: 'absolute',
    zIndex: 5,
    left: 20,
    top: -5,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    fontSize: 20,
    color: 'black',
  },  
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 30,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'black',
    marginVertical: 10,
  }
});