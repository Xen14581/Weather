import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity, 
    ImageBackground,
    Image
} from 'react-native';
import { Link, Redirect, useHistory } from 'react-router-native';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    H3,
    H1,
    H2,
    Footer,
    FooterTab
} from 'native-base';

import { LinearGradient } from 'expo-linear-gradient';

import SunSVG from '../components/SunSVG';

const window = Dimensions.get('window')

const Register = () => {

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    });

    const history = useHistory()

    const handleInputName = (e) => {
        setInputs((state) => {
            return {
                ...state, email: e
            };
        });
    };

    const handleInputEmail = (e) => {
        setInputs((state) => {
            return {
                ...state, email: e
            };
        });
    };

    const handleInputPassword = (e) => {
        setInputs((state) => {
            return {
                ...state, password: e
            };
        });
    };

    const loginRedirect = () => {
        history.push("/");
    }

    return (
        <Container>
            <LinearGradient
                // Background Linear Gradient
                colors={['#fB4', '#f70']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: window.height,
                  }}
            />
                <Content
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    // backgroundColor: 'black'
                }}>
                    <View style={{
                        flex: 1,
                        // backgroundColor: 'yellow',
                        width: window.width,
                        maxHeight: 3*window.height/5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection:"row",
                    }}>
                        <View>
                            <H1 style={{
                                fontSize: 50,
                                // backgroundColor: 'grey',
                                justifyContent: 'center',
                                alignSelf: 'center',
                                padding: 40,
                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                                Register
                            </H1>
                        </View>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            // backgroundColor: 'grey',
                        }}>
                            <SunSVG />
                        </View>
                    </View>
                    <View style={{
                        // backgroundColor: 'white',
                        flex: 1,
                        padding: 20,
                    }}>
                        <View style={{
                            // backgroundColor: 'black',
                            margin: 15,
                            width: window.width,
                            flex: 1,
                            position: 'relative',
                        }}>
                            <Form
                            style={{
                                padding: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                                // backgroundColor: 'green'
                            }}>
                                <Item floatingLabel
                                style={{
                                    padding: 2
                                }}>
                                    <Label
                                    style={{
                                        color: 'white',
                                        fontSize: 19
                                    }}>
                                        Name
                                    </Label>
                                    <Input
                                    value={inputs.name}
                                    onChangeText={handleInputName}
                                    style={{
                                        color: 'white'
                                    }}/>
                                </Item>
                                <Item floatingLabel
                                style={{
                                    padding: 2
                                }}>
                                    <Label
                                    style={{
                                        color: 'white',
                                        fontSize: 19
                                    }}>
                                        Email
                                    </Label>
                                    <Input
                                    value={inputs.email}
                                    onChangeText={handleInputEmail}
                                    style={{
                                        color: 'white'
                                    }}/>
                                </Item>
                                <Item floatingLabel
                                style={{
                                    padding: 2
                                }}>
                                    <Label
                                    style={{
                                        color: 'white',
                                        fontSize: 19
                                    }}>Password</Label>
                                    <Input
                                    secureTextEntry={true}
                                    value={inputs.password}
                                    onChangeText={handleInputPassword}
                                    style={{
                                        color: 'white'
                                    }}/>
                                </Item>
                                <Button rounded
                                style={{
                                    alignSelf: 'center',
                                    margin: 30,
                                    backgroundColor: '#fa3'
                                }} >
                                    <Text
                                    style={{
                                        paddingLeft: 60,
                                        paddingRight: 60,
                                        color: 'white',
                                    }}>
                                        Register
                                    </Text>
                                </Button>
                            </Form>
                            <View
                            style={{
                                flex: 1,
                                flexGrow: 0.2,
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                // backgroundColor: 'blue',
                                padding: 10,
                            }}>
                                <Button transparent onPress={loginRedirect}>
                                    <Text style={{
                                        fontSize: 20,
                                        color: 'white'
                                    }}>
                                        Login
                                    </Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Content>
        </Container>
    );
};

export default Register;