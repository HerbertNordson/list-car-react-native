import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: any;
  Home: any;
  Model: { id: string };
};

export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Model" | "Login" | "Home"
>;
