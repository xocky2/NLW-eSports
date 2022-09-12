import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Send 1" />
      <Button title="Send 2" />
      <Button title="Send 3" />
      <StatusBar style="auto" />
    </View>
  );
}


//tipagem do typescript
interface ButtonProps {
  title: string;
}

//criação do componente botão
function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});