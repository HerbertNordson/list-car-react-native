import { createStackNavigator } from "@react-navigation/stack";

import { Home, Login, Skus } from "@/app/screens";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Skus" component={Skus} />
    </Stack.Navigator>
  );
}
