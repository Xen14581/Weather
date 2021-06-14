import React from "react"

import { Dimensions } from "react-native"

const window = Dimensions.get('window')

export default pageStyles = {
    Background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: window.height,
    },

    ContentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // backgroundColor: 'black'
    },

    TitleLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // backgroundColor: 'black',
        flexDirection: 'row'
    },

    LoginTitle: {
        left: 30,
        fontSize: 50,
        // backgroundColor: 'grey',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 40,
        color: 'white',
        fontWeight: 'bold',
        width: window.width,
    },

    RegisterTitle: {
        fontSize: 50,
        // backgroundColor: 'grey',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 40,
        color: 'white',
        fontWeight: 'bold',
        width: window.width,
    },

    Logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: 'grey',
    },

    FormView: {
        // backgroundColor: 'black',
        margin: 15,
        padding: 20,
        width: window.width,
        flex: 1,
        position: 'relative',
    },

    Form: {
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // backgroundColor: 'green'
    },

    FormItem: {
        padding: 2
    },

    ItemLabel: {
        color: 'white',
        fontSize: 19
    },

    InputStyle: {
        color: 'white'
    },

    FormButton: {
        alignSelf: 'center',
        margin: 30,
        backgroundColor: '#fa3'
    },

    FormButtonText: {
        paddingLeft: 60,
        paddingRight: 60,
        color: 'white'
    },

    RedirectButtons: {
        flex: 1,
        flexGrow: 0.2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // backgroundColor: 'blue',
        padding: 10
    },

    RedirectButtonText: {
        fontSize: 20,
        color: 'white'
    }
}