import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ScreenDetail from "./src/view/Detail";
import ScreenHome from "./src/view/Home";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={ScreenHome}
        />
        <Stack.Screen name="Detail" component={ScreenDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
