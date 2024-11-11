import {Tabs} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FEFAE0', /* Main Off White Color */
        headerStyle: {
          backgroundColor: '798645', /* Main Light Forest Green Color */
        },
        headerShadowVisible: false,
        headerTintColor: 'F2EED7', /* Secondary Off White Color */
        tabBarStyle: {
          backgroundColor: '798645',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{ 
          title: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{ 
          title: 'Journal',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'journal-sharp' : 'journal-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'chatbox-sharp' : 'chatbox-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'person-sharp' : 'person-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}