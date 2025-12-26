import { myTheme } from '@/components/theme'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Dashboard() {
    return (
        <SafeAreaView style={stylesheet.layout}>
            {/* Header */}
            <View style={stylesheet.header}>
                <Text>My Applications</Text>
                <Ionicons name="person" size={24} />
            </View>
        </SafeAreaView>
    )
}

const stylesheet = StyleSheet.create({
    layout: {
        height: "100%",
        backgroundColor: myTheme.colors.primary
    },
    header: {
        flex: 1,
        height: 50
    }
})  