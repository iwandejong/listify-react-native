import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Pressable, Modal, TextInput, TouchableOpacity, Keyboard, ScrollView, SafeAreaView } from 'react-native';
import List from './components/list';
import ListInactive from './components/listInactive';
import NewItem from './components/newItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

{/*const [list, setList] = useState();
    const HandleAddList = () => {
      console.log(list);
    
      HandleAddList();

      value = {list}
                onChangeText={text => setList(text)}
    }*/}

export default function App() {
  const [list, setlist] = useState();
  const [date, setdate] = useState();
  const [folder, setfolder] = useState();
  const [listItems, setlistItems] = useState([]); 
  const HandleAddList = () => {
    console.log(list,date,folder);
    Keyboard.dismiss();
    setlistItems([...listItems, list ])
    setlist(null);
    setdate(null);
    setfolder(null);
  }

  const completeList = (index) => {
    let listCopy = [...listItems];
    listCopy.splice(index, 1);
    setlistItems(listCopy)
  }

  // initial state
  const [isVisible, setVisible] = useState(false);

  // hide show modal
  //const displayModal = (show) => {
    //this.setState({isVisible: show})
  //}
    
  return (
      
    <SafeAreaView style={styles.container}>
      <Modal
            animationType = {"slide"}
            transparent={false}
            visible={isVisible}>
              <View  style={styles.ModalContext}>
                <View  style={styles.ModalNavigation}>
              <Text style={[styles.closeText, styles.navText]}
                        onPress={() => {
                          setVisible(!isVisible);
                        }}
                        > Cancel </Text>
              <Text style = {[styles.navHeader, styles.navText] }>
                  New Reminder</Text>
                  
                  <Text style={[styles.doneText, styles.navText]}
                        onPress={() => {
                          HandleAddList();
                          setVisible(!isVisible);
                          }
                        }> Done </Text>
              </View>
              <TextInput
                style={styles.inputText}
                placeholder='"Organise my desk"'
                value = {list}
                onChangeText={text => setlist(text)}
                autoFocus
              />
              <TextInput
                style={styles.inputText}
                placeholder='"Date"'
                value = {date}
                onChangeText={text => setdate(text)}
                autoFocus
              />
              <TextInput
                style={styles.inputText}
                placeholder='"Folder"'
                value = {folder}
                onChangeText={text => setfolder(text)}
                autoFocus
              />
              </View>
          </Modal>
      <View style={styles.tasksWrapper}>
        <View style={styles.TextNav}>
          <Text style={styles.sectionTitle}>Today</Text>
          <Text style={[styles.sectionTitle, styles.disabledTitle]}>All</Text>
          <Text style={[styles.sectionTitle, styles.disabledTitle]}>Calendar</Text>
        </View>
        <ScrollView style={styles.listNav}>
          {/*
            listItems.map((list, index) => {
              return (
                <TouchableOpacity key={index} onpress={() => completeList()}>
                  <List text={list}/>
                </TouchableOpacity>
              )
            })
          */}
          {
            listItems.map((list, folder, date, index) => {
              return (
                <TouchableOpacity key={index} key={folder} key={date} onPress={() => completeList(index)}>
                  <List folder={folder} text={list} time={date} /> 
                </TouchableOpacity>
              )
            })
          }
          {/* <List folder={'Shopping'} text={'iTunes Voucher'} time={'In one hour'}/>
          <List folder={'Shopping'} text={'Pay Electricity Bill'} time={'In one hour'}/> */}
        </ScrollView>
        {/* <View style={styles.Later}>
          <Text style={styles.LaterText}>Later Today</Text>
          <ListInactive style={styles.LaterItem} folder={'Shopping'} text={'iTunes Voucher'} time={'In one hour'}/>
          <ListInactive style={styles.LaterItem} folder={'Shopping'} text={'Pay Electricity Bill'} time={'In one hour'}/>

        </View> */}
      </View>
      <Pressable
              onPress={() => {
                setVisible(!isVisible);
              }}
              style={styles.NewItems}
              >
        <NewItem/>
      </Pressable>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Lato',
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 0,
    marginBottom: 50
  },
  listNav: {
    paddingHorizontal: 20,
    marginVertical: 10
  },
  TextNav: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 8,
  },
  disabledTitle: {
    opacity: 0.3,
  },
  LaterText: {
    marginHorizontal: 10,
    marginTop: 15,
  },
  LaterItem: {
    opacity: 0.3,
  },
  NewItems: {
    marginBottom: 0,
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
  },

  ModalContext: {
    paddingTop: 50,
  },
  ModalNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    
  },
  navText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  doneText: {
    color: '#00f',
  },
  closeText: {
    color: '#00f',
  },

  inputText: { 
    padding: 8,
    marginHorizontal: 20,
    marginVertical: 20,
    fontSize: 16,
    borderBottomColor: '#00f'
  }
});