import React, { useState } from 'react';
import { View } from 'react-native';
import { InputText } from '../../components/InputText/InputText';
import { MainButton } from '../../components/MainButton/MainButton';
import { TextLink } from '../../components/TextLink/TextLink';
import { PageTitle } from '../../components/PageTitle/PageTittle';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/login';
import { styles } from './LoginStyles.js';
import { Toast } from '../../components/Toast/Toast';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.signup.users);
  const user = useSelector((state) => state.user.user);

  const onPress = () => {
    dispatch(login({ email, password, users }));
  };

  return (
    <View style={styles.container}>
      <PageTitle title="Login" />
      <InputText text="E-mail" placeholder="Ex: john@doe.com" value={email} setValue={setEmail} />
      <InputText text="Password" placeholder="Minimum 8 characters" value={password} setValue={setPassword} />
      <MainButton text="Login" onPress={onPress} />
      <TextLink commom="Don't have an account?" link="Sign Up Here" navigateTo="SignUp" />
      {
      user?.message
       &&
       <Toast msg={user?.message}/>
       }
    </View>
  );
};
