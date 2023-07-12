import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MainButton } from '../../components/MainButton/MainButton';
import { TextLink } from '../../components/TextLink/TextLink';
import { InputText } from '../../components/InputText/InputText';
import { Ionicons } from '@expo/vector-icons';
import { PageTitle } from '../../components/PageTitle/PageTittle';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../redux/reducers/register';
import { styles } from './styles'
import Terms from '../../components/Terms/Terms';
import { Toast } from '../../components/Toast/Toast';

export const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toast, setToast] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  const onPress = () => {
    if (name && lastName && email && password) {
      if (password.length > 7) {
        if(agreeTerms){
          dispatch(signup({ name, lastName, email, password }));
          setToast('success')
        }else{
          setToast('You need to agree with terms and conditions before continuing')
        }
      } else {
        setToast('The password needs at least 8 characters')
      }
    } else {
      setToast('All data need to be provided')
    }
  };

  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.signup.users);
  console.log('esse é o valor', user, users);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <PageTitle title="Create your account" />
      <InputText text="First Name" placeholder="Ex: John" value={name} setValue={setName} />
      <InputText text="Last Name" placeholder="Ex: Doe" value={lastName} setValue={setLastName} />
      <InputText text="E-mail" placeholder="Ex: john@doe.com" value={email} setValue={setEmail} />
      <InputText text="Password" placeholder="Minimum 8 characters" value={password} setValue={setPassword} />
      <Terms setAgreeTerms={setAgreeTerms} agreeTerms={agreeTerms} />
      <MainButton text="Create Account" onPress={onPress} />
      {toast && <Toast msg={toast} status={toast} />}
      <TextLink commom="Already have an account?" link="Sign In Here" navigateTo="Login" />
    </View>
  );
};
