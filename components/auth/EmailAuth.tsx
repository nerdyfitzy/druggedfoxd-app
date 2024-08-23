import { View, Text } from 'react-native';
import React, { useRef, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Form, Button, Spinner, Input, Label, YStack } from 'tamagui';

type FormInput = {
  email: string;
  password: string;
};

const EmailAuth = () => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      borderRadius="$4"
      borderColor="$color6"
      borderWidth={1}
      padding="$4"
      backgroundColor="$color1"
      gap="$4">
      <YStack>
        <Label fontSize="$4">Email</Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input placeholder="kayleefitzy@gmail.com" width="$19" />}
        />
      </YStack>
      <YStack>
        <Label fontSize="$4">Password</Label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Input {...field} width="$19" />}
        />
      </YStack>
      <Form.Trigger asChild>
        <Button disabled={loading}>{!loading ? 'Log in' : <Spinner size="small" />}</Button>
      </Form.Trigger>
    </Form>
  );
};

export default EmailAuth;
