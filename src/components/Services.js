import {ScrollView, Text, View, Image, StyleSheet,FlatList,SafeAreaView} from 'react-native';
import React, { Component } from 'react'


const serviceIcons = [
    {
        id: '1',
        src:'/Users/pankajsingh/Assignment/src/assets/userr.png',
        title: 'recharge',
    },
    {
        id: '2',
        src: '/Users/pankajsingh/Assignment/src/assets/userr.png',
        title: 'pay bills',
    },
    {
        id: '3',
        src: '/Users/pankajsingh/Assignment/src/assets/userr.png',
        title: 'thank benefits',
    },
    {
        id: '4',
        src: '/Users/pankajsingh/Assignment/src/assets/userr.png',
        title: 'add existing connection',
    },
    {
        id: '5',
        src: '/Users/pankajsingh/Assignment/src/assets/userr.png',
        title: 'top up data',
    },
    {
        id: '6',
        src: '/Users/pankajsingh/Assignment/src/assets/userr.png',
        title: 'international roaming',
    },
    {
        id: '7',
        src: '/Users/pankajsingh/Assignment/src/assets/userr.png',
        title: 'upgrade to postpaid',
    }
  ]
  
  const shortcutIcons = [
    {
        id: '1',
        src:'/Users/pankajsingh/Assignment/src/assets/router.png',
        title: 'broadband',
    },
    {
        id: '2',
        src: '/Users/pankajsingh/Assignment/src/assets/router.png',
        title: 'prepaid',
    },
    {
        id: '3',
        src: '/Users/pankajsingh/Assignment/src/assets/router.png',
        title: 'postpaid',
    },
    {
        id: '4',
        src: '/Users/pankajsingh/Assignment/src/assets/router.png',
        title: 'airtel black',
    }]
    const servicesIcons2=[
    {
        id: '5',
        src: '/Users/pankajsingh/Assignment/src/assets/router.png',
        title: 'DTH',
    },
    {
        id: '6',
        src: '/Users/pankajsingh/Assignment/src/assets/router.png',
        title: 'port to airtel',
    },
    {
        id: '7',
        src: '/Users/pankajsingh/Assignment/src/assets/router.png',
        title: 'security camera',
    },
    {
      id: '7',
      src: '/Users/pankajsingh/Assignment/src/assets/router.png',
      title: 'entertainment',
  }
  ]

export class Services extends Component {
  render() {
    return (
        // <SafeAreaView>
        <View>
            <View style={styles.mainBox}>
                <View style={styles.component}>
                    <View>
                        <Text style={styles.shortcutTxt}>SHORTCUTS</Text>
                    </View>
                    <FlatList
                        horizontal={false}
                        data={serviceIcons}
                        numColumns={4}
                        keyExtriactor={(index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.flatView}>

                                    {item.src ? (
                                        <View style={styles.iconContainer}>
                                            <Image
                                                source={{ uri: item.src }}
                                                style={styles.icons}
                                            />
                                        </View>
                                    ):null}

                                    {!!item.title ? (
                                        <View style={styles.text}>
                                            <Text
                                                style={styles.textUnder}>
                                                {item.title}
                                            </Text>
                                        </View>
                                    ):null}

                                </View>
                            );
                        }}
                    />
                    
                </View>
            </View>

            <View style={styles.mainBox}>
                <View style={styles.component}>
                    <View>
                        <Text style={styles.shortcutTxt}>BUY NEW SERVICES</Text>
                    </View>
                    <FlatList
                        horizontal={false}
                        data={shortcutIcons}
                        numColumns={4}
                        keyExtriactor={(index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.flatView}>

                                    {item.src ? (
                                        <View style={styles.iconContainer}>
                                            <Image
                                                source={{ uri: item.src }}
                                                style={styles.icons}
                                            />
                                        </View>
                                    ):null}

                                    {!!item.title ? (
                                        <View style={styles.text}>
                                            <Text
                                                style={styles.textUnder}>
                                                {item.title}
                                            </Text>
                                        </View>
                                    ):null}
                                    {/* <Text>
                                    </Text> */}

                                </View>

                            );
                        }}
                    />
                    <View style={styles.middleContainer}>
                    <Text style={styles.middleText}>Free Home-Delivery of SIM</Text>

                    </View>
                    
                    <FlatList
                        horizontal={false}
                        data={servicesIcons2}
                        numColumns={4}
                        keyExtriactor={(index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.flatView}>

                                    {item.src ? (
                                        <View style={styles.iconContainer}>
                                            <Image
                                                source={{ uri: item.src }}
                                                style={styles.icons}
                                            />
                                        </View>
                                    ):null}

                                    {!!item.title ? (
                                        <View style={styles.text}>
                                            <Text
                                                style={styles.textUnder}>
                                                {item.title}
                                            </Text>
                                        </View>
                                    ):null}

                                </View>
                            );
                        }}
                    />
                </View>
            </View>
      
       </View>
  
     
    )
  }
}

export default Services

const styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        alignItems: 'center',
        // paddingHorizontal: 20,
        marginHorizontal:20,
        marginBottom:20,
        // borderBottomWidth:50
        // margin: 5,
    },
    component: {
        backgroundColor: 'white',
        border: 0,
        borderRadius: 20,
        height: '100%',
        marginVertical: 5,
    },
    shortcutTxt: {
        margin: 20,
        fontSize: 11,
        color: 'rgb(150,153,189)',
        fontWeight: 'bold',
    },
    flatView: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    iconContainer: {
        border: 0,
        borderRadius: 50,
        padding: 12,
        backgroundColor: 'rgb(227,229,252)',
    },
    icons: {
        height: 24,
        width: 24,
    },
    text: {
        width: 90,
        paddingTop: 5,
        paddingBottom: 20,
    },
    textUnder: {
        textAlign: 'center',        
        fontSize: 10,
        color: 'rgb(133,136,140)',
    
    },
    middleContainer:{
        alignItems:"center",
        // width:350,

    },
    middleText:{
        // alignSelf:"center",
        // width:350,
        alignItems:"center",
        

        backgroundColor:"red",
        color:"white",
        marginBottom:20
    }
    

})

