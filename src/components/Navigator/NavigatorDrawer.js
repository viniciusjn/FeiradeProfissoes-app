import { createDrawerNavigator } from "@react-navigation/drawer";
import DisciplinaView from "../../view/Geral/DisciplinaView";
import SuporteView from "../../view/Geral/SuporteView";
import { getContext } from "../AuthContext/AuthContext";
import { Feather, AntDesign } from '@expo/vector-icons';
import { FlatList, Image, ScrollView, Text, View } from 'react-native-reanimated';


const Drawer = createDrawerNavigator();

const NavigatorDrawer = () => {

    const { isAdm, isDoador, isReceptor } = getContext()

    return (
        <Drawer.Navigator screenOptions={{ title: '' }}>
            {/* Admin */}
            {(isAdm()) &&
                <>
                    <Drawer.Screen name="Listar Alunos" component={SuporteView}
                        options={
                            {
                                drawerLabel: 'Listar alunos',
                                drawerIcon: (size) => <Feather name="users" size={20} color="black" />
                            }
                        }
                    />
                    <Drawer.Screen name="Cadastro de Alunos" component={SuporteView}
                        options={
                            {
                                drawerLabel: 'Cadastro de alunos',
                                drawerIcon: (size) => <Feather name="user-plus" size={20} color="black" />
                            }
                        }
                    />
                </>
            }


            {/* <Drawer.Screen name="Disciplinas" component={DisciplinaView}/> */}
            <Drawer.Screen name="Disciplinas" component={DisciplinaView}
                options={
                    {
                        drawerLabel: 'Disciplinas',
                        drawerIcon: (size) => <Feather name="book" size={20} color="black" />
                    }
                }
            />
            {/* <Drawer.Screen name="Alterar dados" component={SuporteView} />
            <Drawer.Screen name="Listar doadores" component={SuporteView} />
            <Drawer.Screen name="Listar receptores" component={SuporteView} /> */}
        </Drawer.Navigator>
    )
}

export default NavigatorDrawer