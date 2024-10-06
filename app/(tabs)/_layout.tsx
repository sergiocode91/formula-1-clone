import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Latest",
          headerTitle: () => (
            <Image
              source={require("@/assets/images/f1_logo.png")}
              style={{ width: 90, resizeMode: "contain" }}
            />
          ),
          headerRight: () => null,
          headerStyle: {
            backgroundColor: "#e10500",
          },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
