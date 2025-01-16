import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Controller, useForm } from "react-hook-form";

import Feather from "@expo/vector-icons/Feather";

import { ContainerView } from "@/components/theme/ContainerView";
import {
  ButtonSubmit,
  Input,
  LabelButton,
  Paragraph,
  Title,
} from "@/components/ui/styles/global";

import { ContainerEye, ContentLogin, ContentLogo, Eye } from "./style";

type ILogin = {
  email: string;
  password: string;
};

export default function Login() {
  const [openEye, setOpenEye] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { control, handleSubmit } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onsubmit = async (values: ILogin) => {
    setIsLoading(true);
    console.log(values);
    setInterval(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <ContainerView>
      <ContentLogin>
        <ContentLogo>
          <Title>Cartalog</Title>
          <Paragraph>Welcome to your favorite vehicle catalog</Paragraph>
        </ContentLogo>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              autoCapitalize="none"
              placeholder="E-mail"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <ContainerEye>
              <Input
                autoCapitalize="none"
                secureTextEntry={openEye}
                placeholder="Password"
                value={field.value}
                onChangeText={field.onChange}
              />
              <Eye onPress={() => setOpenEye(!openEye)}>
                <Feather name={!openEye ? "eye-off" : "eye"} size={30} />
              </Eye>
            </ContainerEye>
          )}
        />
        <ButtonSubmit onPress={handleSubmit(onsubmit)}>
          {isLoading && <ActivityIndicator color={"#FFF"} />}
          {!isLoading && <LabelButton>Login</LabelButton>}
        </ButtonSubmit>
      </ContentLogin>
    </ContainerView>
  );
}
