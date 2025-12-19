import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View
} from 'react-native';
import { myTheme } from './theme';

interface InputFieldProps extends TextInputProps {
    value: string;
    label: string;
    onChange?: (text: string) => void;
    placeholder?: string;
    isPassword?: boolean;
}

export default function InputField({
    value,
    label,
    onChange,
    placeholder = 'Enter x',
    isPassword = false,
    ...props
}: InputFieldProps) {
    const [secure, setSecure] = useState(isPassword);

    return (
        <View style={{ marginBottom: 16 }}>
            <Text style={stylesheet.label}>{label}</Text>

            <View style={stylesheet.inputWrapper}>
                <TextInput
                    style={stylesheet.input}
                    placeholder={placeholder}
                    placeholderTextColor={myTheme.colors.gray}
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={secure}
                    {...props}
                />

                {isPassword && (
                    <TouchableOpacity
                        onPress={() => setSecure(prev => !prev)}
                        style={stylesheet.eyeIcon}
                    >
                        <Ionicons
                            name={secure ? 'eye-off' : 'eye'}
                            size={20}
                            color={myTheme.colors.gray}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const stylesheet = StyleSheet.create({
    label: {
        fontWeight: '800',
        marginBottom: 5,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 24,
        height: 50,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        color: 'black',
    },
    eyeIcon: {
        paddingHorizontal: 6,
    },
});
