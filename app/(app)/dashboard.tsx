import AnalyticsCard from '@/components/AnalyticsCard'
import ApplicationlistItem, { JobStatus } from '@/components/ApplicationlistItem'
import { myTheme } from '@/components/theme'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Dashboard() {

    const applicationsList = [
        {
            company: "Google",
            role: "Senior Fullstack Developer",
            status: JobStatus.APPLIED,
            appliedDate: "2-01-2026"
        },
        {
            company: "Figma",
            role: "Backend Developer",
            status: JobStatus.OFFER,
            appliedDate: "2-01-2026"
        },
        {
            company: "WEMA Bank",
            role: "Senior Fullstack Developer",
            status: JobStatus.APPLIED,
            appliedDate: "2-01-2026"
        },
        {
            company: "Netflix",
            role: "DevOps",
            status: JobStatus.INTERVIEW,
            appliedDate: "1-12-2025"
        },
        {
            company: "Facebook",
            role: "Backend Engineer",
            status: JobStatus.REJECTED,
            appliedDate: "1-12-2025"
        },
        {
            company: "EFCC",
            role: "Cyber Security",
            status: JobStatus.INTERVIEW,
            appliedDate: "1-12-2025"
        }
    ]

    const interviewList = applicationsList.filter((item) => {
        return (item.status === JobStatus.INTERVIEW)
    })
    const offersList = applicationsList.filter((item) => {
        return (item.status === JobStatus.OFFER)
    })
    const rejectedList = applicationsList.filter((item) => {
        return (item.status === JobStatus.REJECTED)
    })



    const analyticsCardList = [
        {
            backgroundColor: myTheme.colors.primary,
            iconName: "paper-plane",
            count: applicationsList.length,
            tagline: JobStatus.APPLIED,
            subtext: "New this month"
        },
        {
            backgroundColor: "purple",
            iconName: "video-camera",
            count: interviewList.length,
            tagline: JobStatus.INTERVIEW,
            subtext: "Scheduled this week"
        },
        {
            backgroundColor: "green",
            iconName: "envelope",
            count: offersList.length,
            tagline: JobStatus.OFFER,
            subtext: "Pending Offers"
        },
        {
            backgroundColor: "red",
            iconName: "inbox",
            count: rejectedList.length,
            tagline: JobStatus.REJECTED,
            subtext: "Pending Offers"
        },
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
                        <Ionicons name='search' size={20}
                            style={{ position: "absolute", top: 15, left: 15, color: "gray" }} />
                        <TextInput
                            style={stylesheet.searchbarTextinput} placeholder='Search Roles or company' />
                        <Ionicons name="options" size={20}
                            style={{ position: "absolute", top: 15, right: 15, color: "gray" }} />
                    </View>
                </View>


                <ScrollView style={{ height: "auto" }}>
                    {/* Analytics Overview */}
                    <View style={{ padding: 10 }}>
                        <Text style={[stylesheet.analyticsHeader, { marginBottom: 20 }]}>Overview</Text>

                        {/* Analytics Card */}
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={stylesheet.analyticsView}>
                            {
                                analyticsCardList.map((card) => {
                                    return (
                                        <AnalyticsCard key={analyticsCardList.indexOf(card)} backgroundColor={card.backgroundColor} iconName={card.iconName} count={card.count} tagline={card.tagline} subtext={card.subtext} />
                                    )
                                })
                            }
                        </ScrollView>
                    </View>


                    {/* Recent Applications */}
                    <View style={{ padding: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={stylesheet.analyticsHeader}>Recent Applications</Text>
                            <Text style={{ fontWeight: "thin", fontSize: 12, color: myTheme.colors.gray }}>See all</Text>
                        </View>

                        {/* Recent Application List */}
                        <View style={{ paddingTop: 10 }}>
                            {
                                applicationsList.map((item) => {
                                    return (
                                        <ApplicationlistItem key={applicationsList.indexOf(item)} company={item.company} role={item.role} status={item.status} appliedDate={item.appliedDate} />
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>

                {/* FAB */}
                {/* <View style={{ width: 70, height: 70, backgroundColor: myTheme.colors.primary, borderRadius: "100%", position: "fixed", bottom: 10, right: 10 }}>
                    <Ionicons name="add" size={60} color={"white"} />
                </View> */}

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
        marginBottom: 0
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
        fontSize: 18,
    },
    analyticsView: {
        width: "auto"
    }
})  