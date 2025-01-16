import { createStackNavigator } from "@react-navigation/stack";

import { Home, Login, Skus } from "@/app/screens";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Skus" component={Skus} />
    </Stack.Navigator>
  );
}
