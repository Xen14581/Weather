import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { useHistory } from 'react-router-native';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    H1,
} from 'native-base';

import { LinearGradient } from 'expo-linear-gradient';

import SunSVG from '../components/SunSVG';
import pageStyles from '../assets/themes/LoginRegisterStyles'

const styles = StyleSheet.create(pageStyles)

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
                colors={['#fB4', '#f70']}
                style={styles.Background}
            />
                <Content
                contentContainerStyle={styles.ContentContainer}>
                    <View style={styles.TitleLogo}>
                        <H1 style={styles.RegisterTitle}>
                            Register
                        </H1>
                        <View style={styles.Logo}>
                            <SunSVG />
                        </View>
                    </View>
                    <View style={styles.FormView}>
                        <Form
                        style={styles.Form}>
                            <Item floatingLabel style={styles.FormItem}>
                                <Label style={styles.ItemLabel}>
                                    Full Name
                                </Label>
                                <Input
                                value={inputs.email}
                                onChangeText={handleInputName}
                                style={styles.InputStyle}
                                />
                            </Item>
                            <Item floatingLabel style={styles.FormItem}>
                                <Label style={styles.ItemLabel}>
                                    Email
                                </Label>
                                <Input
                                value={inputs.email}
                                onChangeText={handleInputEmail}
                                style={styles.InputStyle}
                                />
                            </Item>
                            <Item floatingLabel style={styles.FormItem}>
                                <Label style={styles.ItemLabel}>
                                    Password
                                </Label>
                                <Input
                                secureTextEntry={true}
                                value={inputs.password}
                                onChangeText={handleInputPassword}
                                style={styles.InputStyle}
                                />
                            </Item>
                            <Button rounded style={styles.FormButton}>
                                <Text style={styles.FormButtonText}>
                                    Login
                                </Text>
                            </Button>
                        </Form>
                        <View style={styles.RedirectButtons}>
                            <Button transparent onPress={loginRedirect}>
                                <Text style={styles.RedirectButtonText}>
                                    Register
                                </Text>
                            </Button>
                        </View>
                    </View>
                </Content>
        </Container>
    );
};

export default Register;