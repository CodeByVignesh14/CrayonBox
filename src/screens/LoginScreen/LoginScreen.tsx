import React, { useState } from 'react';
import { View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform ,
  ScrollView,
} from 'react-native';
import { LoginScreenProps, LoginForm, LoginScreenState } from './Login.types';
import CrayonLogo from '../../assets/logos/CrayonBoxLogo.svg';
import CrayonBoyLogin from '../../assets/images/CrayonGroup.svg';
import CrayonButton from '../../components/Buttons/CrayonButton';
import CrayonInput from '../../components/Inputs/CrayonInput';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [form, setForm] = useState<LoginForm>({ username: '', password: '' });
  const [state, setState] = useState<LoginScreenState>({ isLoading: false });

  const handleLogin = () => {
    setState({ ...state, isLoading: true });
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#626EE6'} translucent={true}/>
      <ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
      {/* Wrap with TouchableWithoutFeedback to dismiss the keyboard */}
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={styles.headerContainer}>
            <View style={styles.logoContainer}>
              <CrayonLogo height={40} width={40} />
              <Text style={styles.logoTitle}>Crayon Box</Text>
            </View>
            <CrayonBoyLogin height={180} />
          </View>

          <View style={styles.backgroundOverlay}>
            <View style={styles.whiteBackground} />
            <View style={styles.blueBackground} />
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.title}>Sign In</Text>
            <View style={styles.inputContainer}>
              <CrayonInput
                label="User Name/Students Admission No"
                labelStyle={styles.inputLabel}
                value={form.username}
                onChangeText={(text) => setForm({ ...form, username: text })}
                placeholder="Enter User Name/Students Admission No"
              />
              <CrayonInput
                label="Password"
                labelStyle={styles.inputLabel}
                value={form.password}
                secureTextEntry
                onChangeText={(text) => setForm({ ...form, password: text })}
                placeholder="Enter Password"
              />
              <View style={styles.moreOptions}>
                <View style={styles.rememberMeContainer}>
                  <BouncyCheckbox
                    size={20}
                    fillColor={'#6A8EF3'}
                    unFillColor="#FFFFFF"
                    text="Remember Me"
                    iconStyle={styles.checkboxIcon}
                    innerIconStyle={styles.checkboxInnerIcon}
                    textStyle={styles.checkboxText}
                    onPress={() => console.log('Remember Me toggled')}
                  />
                </View>
                <Text style={styles.forgetPassword}>Forget Password?</Text>
              </View>
              <CrayonButton
                variant="primary"
                style={styles.button}
                textStyle={styles.buttonText}
                title="Sign In"
                onPress={handleLogin}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      {/* </TouchableWithoutFeedback> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer:{
    flex:1,
    backgroundColor:'white',
    paddingBottom:0,
  },
  headerContainer: {
    paddingTop: 10,
    justifyContent: 'space-between',
    backgroundColor: '#626EE6',
    height: 260,
    borderBottomStartRadius: 70,
  },
  logoContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  logoTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 20,
    color: 'white',
  },
  backgroundOverlay: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 100,
    width: '100%',
    zIndex: -10,
    top: -40,
  },
  whiteBackground: {
    backgroundColor: 'white',
    height: 100,
    width: '50%',
    top: -90,
  },
  blueBackground: {
    backgroundColor: '#626EE6',
    height: 100,
    width: '50%',
  },
  formContainer: {
    paddingTop: 30,
    backgroundColor: '#ffffff',
    borderTopEndRadius: 70,
    top: -100,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginHorizontal: 1,
    height: 500,
  },
  inputLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 45,
    marginTop: 10,
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  moreOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: '64%',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxIcon: {
    borderColor: '#808080',
    borderRadius: 4,
  },
  checkboxInnerIcon: {
    borderWidth: 2,
    borderRadius: 4,
  },
  checkboxText: {
    textDecorationLine: 'none',
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#708090',
  },
  forgetPassword: {
    fontFamily: 'Poppins',
    color: '#708090',
    fontSize: 16,
  },
});

export default LoginScreen;
