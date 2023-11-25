import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeView from '../../view/HomeView/HomeView';
import LoginView from '../../view/LoginView/LoginView';
import CadastroView from '../../view/CadastroView/CadastroView';
import DashboardView from '../../view/DashboardView/DashboardView';
import ResetPasswordView from '../../view/ResetPasswordView/ResetPasswordView';

const stack = createStackNavigator();

const Navigator = () => {

    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="HomeView">

                <stack.Screen name="HomeView" component={HomeView}/>
                <stack.Screen name="LoginView" component={LoginView}/>
                <stack.Screen name="CadastroView" component={CadastroView}/>
                <stack.Screen name="DashboardView" options={{headerShown: false}} component={DashboardView}/>
                <stack.Screen name="ResetPasswordView" component={ResetPasswordView}/>

            </stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator