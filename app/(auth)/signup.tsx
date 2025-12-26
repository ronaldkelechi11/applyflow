import InputField from '@/components/InputField'
import { myTheme } from '@/components/theme'
import Ionicons from '@expo/vector-icons/Ionicons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'



export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignup = async () => {
        try {
            setLoading(true);
            // TODO: REMOVE THIS LINE AFTER TEST
            // await register(email, password);
            router.replace('/(app)/dashboard');
        } catch (error) {
            alert('Signup failed. Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <SafeAreaView
            style={stylesheet.page}
        >
            <View style={stylesheet.container}>

                {/* Section 1 */}
                <View style={stylesheet.section1}>
                    <View style={stylesheet.circularImage}>
                        <Ionicons name="bag-add" size={50} />
                    </View>
                    <Text style={stylesheet.heading}>Let&apos;s get you started</Text>
                    <Text style={stylesheet.subheading}>Start tracking your career journer</Text>
                </View>


                {/* Section 2 */}
                <View style={stylesheet.section2} >
                    <View>
                        <InputField value={email} label="Email" placeholder="Enter your email here" onChange={setEmail} keyboardType="email-address" />
                        <InputField value={password} label="Password" placeholder="Enter your Password" onChange={setPassword} isPassword />
                    </View>

                    <Text onPress={() => { alert("You dey forget Password ke?") }} style={stylesheet.forgotPassword}>Forgot Password?</Text>

                    <TouchableOpacity style={stylesheet.button} onPress={handleSignup} disabled={loading}>
                        <Text style={stylesheet.buttonText}>{loading ? 'Loading...' : 'Sign Up'}</Text>
                    </TouchableOpacity>


                    <View style={stylesheet.richText}>
                        <Text style={{ color: myTheme.colors.gray }}>Already have an account?</Text>
                        <Text style={{ color: myTheme.colors.primary }}
                            onPress={() => { router.replace("/(auth)/login") }}>Log In</Text>
                    </View>
                </View>


            </View>
        </SafeAreaView >
    )
}

const stylesheet = StyleSheet.create({
    page: {
        height: "100%",
        justifyContent: "center",
    },

    // Section 1
    section1: {
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flexDirection: "column",
        justifyContent: "center",
        padding: 10
    },
    circularImage: {
        width: 90,
        height: 90,
        borderRadius: 100,
        backgroundColor: myTheme.colors.primary,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    heading: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 8
    },
    subheading: {
        fontSize: 16,
        textAlign: "center",
        color: myTheme.colors.gray
    },

    // Section 2
    section2: {
        flexDirection: "column",
        padding: 10,
        marginTop: 50
    },
    forgotPassword: {
        textAlign: "right",
        color: myTheme.colors.primary
    },
    button: {
        backgroundColor: myTheme.colors.primary,
        padding: 10,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        borderRadius: 24
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold"
    },
    richText: {
        flexDirection: "row",
        gap: 3,
        alignSelf: "center"
    }
})