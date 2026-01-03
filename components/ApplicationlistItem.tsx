import React from 'react'
import { Text, View } from 'react-native'
import { myTheme } from './theme'


export enum JobStatus {
    APPLIED = 'Applied',
    INTERVIEW = 'Interview',
    OFFER = 'Offer',
    REJECTED = 'Rejected',
}

interface ApplicationListProps {
    company: string,
    role: string,
    status: JobStatus,
    appliedDate: string
}

export default function ApplicationlistItem({ company, role, status, appliedDate }: ApplicationListProps) {
    return (
        <View style={{ backgroundColor: "white", borderRadius: 12, flexDirection: "row", justifyContent: "space-between", padding: 10, marginBottom: 10 }}>
            <View style={{
                borderRadius: 100, height: 70, width: 70,
                alignSelf: "center", alignItems: "center", justifyContent: "center"
            }}>
                <Text style={{ fontSize: 35, color: 'red' }}>{company.charAt(0)}</Text>
            </View>

            <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: "space-between" }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>{role}</Text>
                <Text style={{ marginBottom: 20 }}>{company} • <Text
                    style={{ color: "green", borderRadius: 10, padding: 2 }}>{status}</Text></Text>

                <Text style={{ fontSize: 12, color: myTheme.colors.gray }}>Applied {appliedDate}</Text>
            </View>

            {/* <View style={{ backgroundColor: "green", alignItems: "center", justifyContent: "center", padding: 5, borderRadius: 16, height: 30 }}>
                <Text style={{ color: "white", fontSize: 12 }}>{status}</Text>
            </View> */}
        </View >
    )
}