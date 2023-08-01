import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Primary from './components/primary/Primary';
import Second from './components/second/Second';
import Third from './components/third/Third';
import Quarter from './components/quarter/Quarter';
import Fifth from './components/fifth/Fifth';
import Sixth from './components/sixth/Sixth';
import Eigth from './components/eighth/Eighth';
import Tenth from './components/tenth/Tenth';
import Eleven from './components/eleven/Eleven';
import Twelve from './components/twelve/Twelve';
import Thirteen from './components/thirteen/Thirteen';
import Fifteen from './components/fifteen/Fifteen';
import Seventeen from './components/seventeen/Seventeen';
import Eighteen from './components/eighteen/Eighteen';
import Nineteen from './components/nineteen/Nineteen';
import Twenty from './components/twenty/Twenty';
import Twentyone from './components/twentyone/Twentyone';
import Twentytwo from './components/twentytwo/Twentytwo';
import Twentythree from './components/twentythree/Twentythree';
import Twentyfour from './components/twentyfour/Twentyfour';
import Twentyfive from './components/twentyfive/Twentyfive';
import Twentysix from './components/twentysix/Twentysix';
import Twentyeight from './components/twentyeight/Twentyeight';
import Twentynine from './components/twentynine/Twentynine';
import Thirty from './components/thirty/Thirty';
import Thirtythree from './components/thirtythree/Thirtythree';
import Nine from './components/nine/Nine';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Primary} options={{ headerShown: false }} />
        <Stack.Screen name="Segundo" component={Second} options={{ headerShown: false }}/>
        <Stack.Screen name="Tercero" component={Third} options={{ headerShown: false }}/>
        <Stack.Screen name="Cuarta" component={Quarter} options={{ headerShown: false }}/>
        <Stack.Screen name="Quinta" component={Fifth} options={{ headerShown: false }}/>
        <Stack.Screen name="Sexta" component={Sixth} options={{ headerShown: false }}/>
        <Stack.Screen name="Octava" component={Eigth} options={{ headerShown: false }}/>
        <Stack.Screen name="Novena" component={Nine} options={{ headerShown: false }}/>
        <Stack.Screen name="Decima" component={Tenth} options={{ headerShown: false }}/>
        <Stack.Screen name="Once" component={Eleven} options={{ headerShown: false }}/>
        <Stack.Screen name="Doce" component={Twelve} options={{ headerShown: false }}/>
        <Stack.Screen name="Trece" component={Thirteen} options={{ headerShown: false }}/>
        <Stack.Screen name="Quince" component={Fifteen} options={{ headerShown: false }}/>
        <Stack.Screen name="Diecisiete" component={Seventeen} options={{ headerShown: false }}/>
        <Stack.Screen name="Dieciocho" component={Eighteen} options={{ headerShown: false }}/>
        <Stack.Screen name="Diecinueve" component={Nineteen} options={{ headerShown: false }}/>
        <Stack.Screen name="Veinte" component={Twenty} options={{ headerShown: false }}/>
        <Stack.Screen name="Veinte uno" component={Twentyone} options={{ headerShown: false }}/>
        <Stack.Screen name="Veinte dos" component={Twentytwo} options={{ headerShown: false }}/>
        <Stack.Screen name="Veinte tres" component={Twentythree} options={{ headerShown: false }}/>
        <Stack.Screen name="Veinte cuatro" component={Twentyfour} options={{ headerShown: false }}/>
        <Stack.Screen name="Veinte cinco" component={Twentyfive} options={{ headerShown: false }}/>
        <Stack.Screen name="Veinte seis" component={Twentysix} options={{ headerShown: false }}/>
        <Stack.Screen name="Veinte ocho" component={Twentyeight} options={{ headerShown: false }}/>
        <Stack.Screen name="Veinte nueve" component={Twentynine} options={{ headerShown: false }}/>
        <Stack.Screen name="Treinta" component={Thirty} options={{ headerShown: false }}/>
        <Stack.Screen name="Treinta tres" component={Thirtythree} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
