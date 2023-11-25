import { View, Text, StyleSheet } from "react-native"
import { DataTable } from 'react-native-paper';
import { getContext } from "../../components/AuthContext/AuthContext";
import NavigatorDrawer from "../../components/Navigator/NavigatorDrawer";

const DashboardView = ({ navigation }) => {

    const vUser = getContext().user

    return (
        <NavigatorDrawer/>
    )
}

const Styles = StyleSheet.create({
    text: {
        fontSize: 25,
        alignItems: "center",
    },
    header: {
        justifyContent: "sapce-between",
    }
})

export default DashboardView