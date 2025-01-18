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

import { IAuth } from "@/types/auth";
import { Auth } from "@/services/api/auth";

import { ContainerEye, ContentLogin, ContentLogo, Eye } from "./style";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { DetailsScreenProps } from "@/types/routes";
import { useUserContext } from "@/contexts/user";
import { IUser } from "@/types/user";
import { useAuthContext } from "@/contexts/auth";

const Login: React.FC<DetailsScreenProps> = ({ navigation }) => {
  const [openEye, setOpenEye] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { auth } = Auth();
  const { setUser } = useUserContext();
  const { login } = useAuthContext();

  const { control, handleSubmit } = useForm<IAuth>({
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const onsubmit = async (values: IAuth) => {
    setIsLoading(true);

    const data: IAuth = {
      user: values.user,
      password: values.password,
    };

    const res = await auth(data);

    if (!res?.error && res?.user) {
      setUser(res.user);
      login(res.user.token);
    }

    if (res?.error) {
      alert(res?.message);
    }

    setIsLoading(false);
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
          name="user"
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
};

export default Login;
