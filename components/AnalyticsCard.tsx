import { FontAwesome } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

interface AnalyticsCardProps {
    backgroundColor: string,
    iconName: any,
    count: number,
    tagline: string,
    subtext: string
}

const AnalyticsCard = ({ backgroundColor, iconName, count, tagline, subtext }: AnalyticsCardProps) => {
    return (
        <View style={[stylesheet.analyticsCard, { backgroundColor: backgroundColor }]}>
            <FontAwesome name={iconName} size={32} color={"white"} />
            <Text style={{ fontSize: 24, color: "white" }}>{count}
            </Text>
            <Text style={{ fontSize: 14, color: "white" }}>{tagline}
            </Text>
            <Text style={{ fontSize: 10, color: "white" }}>{subtext}
            </Text>
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
        color: "white",
        marginRight: 10,
        justifyContent: "space-evenly"
    }
})
export default AnalyticsCard;
