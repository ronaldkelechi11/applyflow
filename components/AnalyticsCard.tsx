import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

interface AnalyticsCardProps {
    backgroundColor: string
}

const AnalyticsCard = ({ backgroundColor }: AnalyticsCardProps) => {
    return (
        <View style={[stylesheet.analyticsCard, { backgroundColor: backgroundColor }]}>
            <Ionicons name="paper-plane" size={32} color={"white"} />
            <Text style={{ fontSize: 24, color: "white" }}>12</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Applied</Text>
            <Text style={{ fontSize: 10, color: "white" }}>New this month</Text>
        </View>
    )
}

const stylesheet = StyleSheet.create({
    analyticsCard: {
        height: 150,
        width: 150,
        borderRadius: 12,
        flexDirection: "column",
        padding: 10,
        color: "white"
    }
})
export default AnalyticsCard;
