import { createStackNavigator } from "@react-navigation/stack";

import { Home, Login, Model } from "@/app/screens";

import { useAuthContext } from "@/contexts/auth";

const Stack = createStackNavigator();

export default function StackRoutes() {
  const { isAuthenticated } = useAuthContext();

  return (
    <>
      {!isAuthenticated && (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
      {isAuthenticated && (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Model"
            component={Model}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </>
  );
}
