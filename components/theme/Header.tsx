import { useUserContext } from "@/contexts/user";
import { TouchableOpacity, View } from "react-native";
import { Paragraph, Title } from "../ui/styles/global";

import Feather from "@expo/vector-icons/Feather";
import { IHeader } from "@/types/header";

import { useAuthContext } from "@/contexts/auth";
import { IUser } from "@/types/user";

export const Header = ({ page }: IHeader) => {
  const { user, setUser } = useUserContext();
  const { logout } = useAuthContext();

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          margin: "auto",
        }}
      >
        <Paragraph>Olá, {user.name}!</Paragraph>
        <TouchableOpacity
          onPress={async () => {
            setUser({} as IUser);
            logout();
          }}
        >
          <Feather name="log-out" size={30} />
        </TouchableOpacity>
      </View>
      <Title>{page}</Title>
    </View>
  );
};
