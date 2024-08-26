import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { Form, Button, Spinner, Input, Label, YStack } from 'tamagui';
import { useFormStore, useShowPWStore } from '~/state/formStore';
import { Eye, EyeOff } from 'lucide-react-native';

type FormInput = {
  email: string;
  password: string;
};

interface EmailAuthProps {
  logIn?: boolean;
  signUp?: boolean;
  loading: boolean;
  submit: (email: string, password: string) => void;
}

interface ErrorState {
  field: 'email' | 'pw' | 'confirmPW';
  message: string;
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 35,
    right: 10,
  },
});

const EmailAuth = ({ signUp = false, loading, submit }: EmailAuthProps) => {
  const { email, password, setEmail, setPassword, confirmPW, setConfirmPW } = useFormStore(
    (state) => ({
      email: state.email,
      password: state.password,
      confirmPW: state.confirmPW,
      setEmail: state.setEmail,
      setPassword: state.setPassword,
      setConfirmPW: state.setConfirmPW,
    })
  );
  const { showPW, setShowPW } = useShowPWStore();
  const [error, setError] = useState<ErrorState | null>(null);
  return (
    <Form
      onSubmit={() => {
        if (signUp && confirmPW !== password)
          setError({ field: 'confirmPW', message: 'Passwords must match' });
        if (!error) {
          submit(email, password);
        }
      }}
      borderRadius="$4"
      borderColor="$color6"
      borderWidth={1}
      padding="$4"
      backgroundColor="$color1"
      gap="$4">
      <YStack>
        <Label fontSize="$4">Email</Label>
        <Input
          onChangeText={(v) => setEmail(v)}
          value={email}
          placeholder="kayleefitzy@gmail.com"
          width="$19"
          inputMode="email"
        />
      </YStack>
      <YStack>
        <Label fontSize="$4">Password</Label>
        <Input
          placeholder="Enter Password"
          secureTextEntry={!showPW}
          textContentType="password"
          width="$19"
          onChangeText={(v) => setPassword(v)}
          value={password}
        />
        {!showPW ? (
          <Eye style={styles.icon} onPress={() => setShowPW(!showPW)} />
        ) : (
          <EyeOff style={styles.icon} onPress={() => setShowPW(!showPW)} />
        )}
      </YStack>

      {signUp && (
        <YStack>
          <Label fontSize="$4">Confirm Password</Label>
          <Input
            placeholder="Enter Password"
            secureTextEntry={!showPW}
            textContentType="password"
            width="$19"
            onChangeText={(v) => setConfirmPW(v)}
            value={confirmPW}
          />
        </YStack>
      )}
      {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
      <Form.Trigger asChild>
        <Button disabled={loading}>
          {!loading ? `${signUp ? 'Sign up' : 'Log in'}` : <Spinner size="small" />}
        </Button>
      </Form.Trigger>
    </Form>
  );
};

export default EmailAuth;
