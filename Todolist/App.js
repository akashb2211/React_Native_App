import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from "./component/Task";


export default function App() {
  const [task, setTask] = useState();
  const [taskitom, setTaskitom] = useState([]);
  const handeladdtask = () => {
    Keyboard.dismiss();
    console.log(task)
    setTaskitom([...taskitom, task])
    setTask(null)
  }

  const completetask = (index) => {
    let itemcopy = [...taskitom]
    itemcopy.splice(index, 1);
    setTaskitom(itemcopy);
  }


  return (
    <View style={styles.container}>

      <View style={styles.title}>
        <Text style={styles.name}>TO Do List App</Text>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 70, paddingTop: 20 }}> Todays Task</Text>
      </View>
      <View style={styles.item}>
        {
          taskitom.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completetask(index)}>
                <Task key={index} text={item} />
              </TouchableOpacity>
            )

          })
        }
        {/* {<Task text={'task 1'} /> */}
        {/* <Task text={'task 2'} /> */}

      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : 'height'}
        style={styles.writetaskwrapper}  >
        <TextInput style={styles.input} placeholder={' Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handeladdtask()}>
          <View style={styles.addwrapper}>
            <Text style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: "bold",
    backgroundColor: "lightgray",
    paddingTop: 50,
    fontSize: 20,
    marginTop: 30,
    fontSize: 50,
  },
  title: {
    padding: 20,
    paddingHorizontal: 20,
    alignContent: 'center',
    backgroundColor: "lightred",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'red',
    alignContent: 'center',
    backgroundColor: 'skyblue'
  },

  writetaskwrapper: {
    position: "absolute",
    bottom: 60,
    width: 100,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#ffff',
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 1,
    width: 250,
    marginLeft: 10
  },

  addtext: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },


  addwrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#ffff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 30

  }


});
