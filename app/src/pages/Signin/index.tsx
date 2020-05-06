import React from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  ForgotPassword,
  ForgodPasswordText,
  CreateAccountbutton,
  CreateAccountbuttonText,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
            <Button
              onPress={() => {
                console.log('foi ');
              }}
            >
              Entrar
            </Button>

            <ForgotPassword onPress={() => {}}>
              <ForgodPasswordText>Esqueci minha senha</ForgodPasswordText>
            </ForgotPassword>
          </Container>

          <CreateAccountbutton onPress={() => navigation.navigate('SignUp')}>
            <Icon name="log-in" size={20} color="#ff9000" />
            <CreateAccountbuttonText>Criar uma conta</CreateAccountbuttonText>
          </CreateAccountbutton>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
export default SignIn;
