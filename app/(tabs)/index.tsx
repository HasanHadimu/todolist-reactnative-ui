import { StyleSheet, Text, View, Platform, KeyboardAvoidingView, TextInput } from "react-native";
import Task from '../../components/Task'
import { TouchableOpacity } from "react-native-gesture-handler";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today Tasks</Text>
        <View style={styles.items}>
          {/* this is where the task will go! */}
        <Task  text={'Laravel'}/>
        <Task  text={'Flutter'}/>
        <Task  text={'ReactJS'}/>
        <Task  text={'React Native'}/>
        <Task  text={'NextJs'}/>
        </View>
      </View>

      {/* write a tasks */}
      <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
        <TextInput style={styles.input} placeholder={'write a task'} />

        <TouchableOpacity >
          <View style={styles.addWrapper} >
            <Text style={styles.addText} >+</Text>
          </View>
        </TouchableOpacity>

        </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },

  tasksWrapper: {
  paddingTop: 80,
  paddingHorizontal: 20,
},
sectionTitle: {
fontSize: 24,
fontWeight: 'bold',
},
items: {
  marginTop: 30,
},
writeTaskWrapper: {
  marginTop: 570,
  position: 'absolute',
  buttom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#fff',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width: 250,
  
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#fff',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth: 1,
},
addText: {},
});
