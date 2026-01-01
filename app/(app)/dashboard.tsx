import AnalyticsCard from '@/components/AnalyticsCard'
import { myTheme } from '@/components/theme'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Dashboard() {

    const analyticsList = [
        {
            iconName:"",
            number:0,
            
        }
    ]
    return (
        <SafeAreaView style={stylesheet.layout}>
            {/* Header */}
            <View style={stylesheet.header}>
                <Text style={stylesheet.headerText}>My Applications</Text>
                <Ionicons name="person" size={24} style={stylesheet.headerIcon} />
            </View>

            <View style={stylesheet.container}>


                {/* Searchbar */}
                <View style={stylesheet.searchbarContainer}>
                    <View style={stylesheet.searchbar}>
                        <Ionicons name='search' size={20} style={{ position: "absolute", top: 15, left: 15, color: "gray" }} />
                        <TextInput style={stylesheet.searchbarTextinput} placeholder='Search Roles or company' />
                        <Ionicons name="options" size={20} style={{ position: "absolute", top: 15, right: 15, color: "gray" }} />
                    </View>
                </View>


                {/* Analytics Overview */}
                <View style={{ padding: 10 }}>
                    <Text style={stylesheet.analyticsHeader}>Overview</Text>


                    {/* Analytics Card */}
                    <ScrollView
                        horizontal={true}
                        style={stylesheet.analyticsView}>
                        <AnalyticsCard backgroundColor={myTheme.colors.primary} />
                        <AnalyticsCard backgroundColor={"purple"} />
                        <AnalyticsCard backgroundColor={"green"} />
                    </ScrollView>
                </View>

            </View>






        </SafeAreaView>
    )
}



const stylesheet = StyleSheet.create({
    layout: {
        height: "100%",
        backgroundColor: "white"
    },
    container: {
        backgroundColor: "rgb(246,247,241)",
        flex: 1
    },
    header: {
        height: 80,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    headerIcon: {
        borderRadius: "100%",
        backgroundColor: "orange",
        padding: 10
    },
    searchbarContainer: {
        height: 90,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10
    },
    searchbar: {
        borderRadius: 28,
        backgroundColor: "white",
        borderColor: myTheme.colors.primary,
        borderWidth: 2,
        height: "80%",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
    },
    searchbarTextinput: {
        fontSize: 18
    },
    analyticsHeader: {
        fontWeight: "bold",
        marginBottom: 20
    },
    analyticsView: {
        flexDirection: "column",
        width: "100%",
        gap: 10,
    }
})  