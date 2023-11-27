import { createDrawerNavigator } from "@react-navigation/drawer";
import SuporteView from "../../view/Geral/SuporteView";
import { getContext } from "../AuthContext/AuthContext";
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DireitoView from "../../view/Geral/DireitoView";
import EducacaoFisicaView from "../../view/Geral/EducacaoFisicaView";
import SistemasInformacaoView from "../../view/Geral/SistemasInformacaoView";
import PsicologiaView from "../../view/Geral/PsicologiaView";
import MedicinaView from "../../view/Geral/MedicinaView";


const Drawer = createDrawerNavigator();

const NavigatorDrawer = () => {

    const { isAdm } = getContext()

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


            <Drawer.Screen name="Direto" component={DireitoView}
                options={
                    {
                        drawerLabel: 'Direito',
                        drawerIcon: (size) => <FontAwesome5 name="book" size={20} color="black" />
                    }
                }
            />
            <Drawer.Screen name="EducacaoFisica" component={EducacaoFisicaView}
                options={
                    {
                        drawerLabel: 'Educação Física',
                        drawerIcon: (size) => <FontAwesome5 name="book" size={20} color="black" />
                    }
                }
            />
            <Drawer.Screen name="SistemasDeInformacao" component={SistemasInformacaoView}
                options={
                    {
                        drawerLabel: 'Sistemas de Informação',
                        drawerIcon: (size) => <FontAwesome5 name="book" size={20} color="black" />
                    }
                }
            />
                        <Drawer.Screen name="Psicologia" component={PsicologiaView}
                options={
                    {
                        drawerLabel: 'Psicologia',
                        drawerIcon: (size) => <FontAwesome5 name="book" size={20} color="black" />
                    }
                }
            />
                                    <Drawer.Screen name="Medicina" component={MedicinaView}
                options={
                    {
                        drawerLabel: 'Medicina',
                        drawerIcon: (size) => <FontAwesome5  name="book" size={20} color="black" />
                    }
                }
            />
        </Drawer.Navigator>
    )
}

export default NavigatorDrawer