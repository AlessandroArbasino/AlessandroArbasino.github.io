import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Projects from './screens/Projects';

import UnityProjects from './screens/UnityProject';
import UnrealEngineProjects from './screens/UnrealEngineProject';
import PureProgrammingLanguageProjects from './screens/PureProgrammingLanguageProjects';

import { NativeWindStyleSheet } from "nativewind";
import PonganGamePage from './screens/GamesPages/Pongan';
import ConventioLutheriGamePage from './screens/GamesPages/ConventioLutheri';
import LetItSlideGamePage from './screens/GamesPages/LetItSlide';
import EclipseExodusGamePage from './screens/GamesPages/EclipseExodus';
import LostPlanetMazeGamePage from './screens/GamesPages/LostPlanetMaze';
import FlappyBirdLikeGamePage from './screens/GamesPages/FlappyBirdLike';
import RenderingRevengeGamePage from './screens/GamesPages/RenderingRevenge';
import MyLastNeuronGamePage from './screens/GamesPages/MyLastNeuron';
import CppTextAdventureGamePage from './screens/GamesPages/CppTextAdventure';

const Stack=createNativeStackNavigator();

export default function App() {

   NativeWindStyleSheet.setOutput({
		default: "native",
	});
  return (
     <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="Projects" component={Projects} />
           <Stack.Screen name="UnityProjects" component={UnityProjects} />
           <Stack.Screen name="UnralEngineProjects" component={UnrealEngineProjects} />
           <Stack.Screen name="PureProgrammingLanguageProjects" component={PureProgrammingLanguageProjects} />

           <Stack.Screen name="PonganGamePage" component={PonganGamePage} />
           <Stack.Screen name="ConventioLutheriGamePage" component={ConventioLutheriGamePage} />
           <Stack.Screen name="LetItSlideGamePage" component={LetItSlideGamePage} />
           <Stack.Screen name="EclipseExodusGamePage" component={EclipseExodusGamePage} />
           <Stack.Screen name="LostPlanetMazeGamePage" component={LostPlanetMazeGamePage} />
           <Stack.Screen name="FlappyBirdLikeGamePage" component={FlappyBirdLikeGamePage} />
           <Stack.Screen name="RenderingRevengeGamePage" component={RenderingRevengeGamePage} />
           <Stack.Screen name="MyLastNeuronGamePage" component={MyLastNeuronGamePage} />
           <Stack.Screen name="CppTextAdventureGamePage" component={CppTextAdventureGamePage} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

