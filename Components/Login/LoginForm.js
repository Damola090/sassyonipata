import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from '../ui/Button';
import FormInput from '../ui/FormInput';

import { useDispatch, useSelector } from 'react-redux';

import { login, clearErrors } from '../../Redux/actions/userActions';


function LoginForm() {

    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    const [inputs, setInputs] = useState({
        email : {
            value : '',
            isValid : true
        },
        password : {
            value : '',
            isValid : true
        }
    });

    function inputChangeHandler(InputIdentifier, enteredValue) {
        setInputs((curInputs) => {
           return {
                ...curInputs,
                [InputIdentifier] : {value : enteredValue, isValid: true}
           } 
        })
    }


    async function submitHandler() {
        const creadentials = {
            email : inputs.email.value,
            password : inputs.password.value
        }


        // if (email === "" || password === "") {

        // }

        const emailIsValid = creadentials.email.length > 0
        const passwordIsValid = creadentials.password.length > 0

        if (!emailIsValid || !passwordIsValid ) {

            Alert.alert('Login Error', 'please insert your Email & password', )

        }
      
        dispatch(login(email.toString(), password.toString()))
        console.log(email, password)

        console.log('action has been dispatched')
        
    }
    

    return (
        <View style={styles.FormContainer}>
            <View style={styles.headContainer}>
                <Text style={styles.headContainerText}>Log into your Account</Text>
            </View>
            <View style={styles.FormContent}>
                <FormInput value={inputs.email.value} updateValue={inputChangeHandler.bind(this, 'email')}>Email</FormInput>
                <FormInput value={inputs.password.value} updateValue={inputChangeHandler.bind(this, 'password')}>Password</FormInput>

                <View style={styles.Buttons}>
                    <Button whenPressed={submitHandler} style={styles.SignupBackground} mode='flat'>SIGN IN</Button>
                    <Text style={styles.middleText}>OR</Text>
                    <Button style={styles.FacebookBackground} mode='flat'>SIGN IN WITH FACEBOOK</Button>
                </View>
            </View>
        </View>
    )
}

export default LoginForm;

const styles = StyleSheet.create({
    FormContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%'

    },
    headContainer: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'flex-start'

    },
    headContainerText: {
        fontSize: 40,
        fontWeight: '700',
        color: 'white',
        width: 300,
        marginHorizontal: 25


    },
    FormContent: {
        flex: 2.5,
        padding: 20

    },
    Buttons: {
        marginTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'red',

    },
    SignupBackground: {
        backgroundColor: 'black',

    },
    middleText: {
        marginVertical: 20

    },
    FacebookBackground: {
        backgroundColor: 'blue'
    }

})