import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';

export default function Contact() {

    const { control, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const _onSubmit = async (data) => {
        // alert(`title:${data.title}, email:${data.email}, message:${data.message}`);

        // const url = "https://script.google.com/macros/s/deploy_id/exec";
        const url = process.env.EXPO_PUBLIC_GAS_API_URL;

        try {

            setIsSubmitting(true);

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    title: data.title,
                    email: data.email,
                    message: data.message
                }).toString()
            });

            const text = await response.text();

            alert(text);

        } catch (error) {
            alert(error);
        } finally {
            reset();
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <View style={styles.hero}>
                <Text style={styles.heroH1}>お問合せフォーム</Text>
                <Text style={styles.heroP}>お気軽にお問合せ下さい。</Text>
            </View>

            <View style={styles.contactForm}>
                <Text style={styles.textLabel}>お問合せタイトル</Text>
                <Controller
                    name='title'
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <TextInput
                            style={styles.textInput}
                            placeholder='お問合せタイトル'
                            autoCapitalize='none'
                            numberOfLines={1}
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                        />
                    )}
                    rules={{
                        required: "お問合せタイトルは必須です。",
                    }}
                />
                {errors.title && <Text style={styles.errorMessage}>{errors.title.message}</Text>}


                <Text style={styles.textLabel}>Email</Text>
                <Controller
                    name='email'
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <TextInput
                            style={styles.textInput}
                            placeholder='Email'
                            autoCapitalize='none'
                            numberOfLines={1}
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                        />
                    )}
                    rules={{
                        required: "Emailは必須です。",
                        pattern: {
                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                            message: "Emailを正しい形式で入力してください。"
                        }
                    }}
                />
                {errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}

                <Text style={styles.textLabel}>お問合せ内容</Text>
                <Controller
                    name='message'
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <TextInput
                            style={styles.textArea}
                            placeholder='お問合せ内容'
                            autoCapitalize='none'
                            multiline={true}
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                        />
                    )}
                    rules={{
                        required: "お問合せ内容は必須です。",
                        maxLength: {
                            value: 10,
                            message: "10文字以下で入力して下さい。"
                        }
                    }}
                />
                {errors.message && <Text style={styles.errorMessage}>{errors.message.message}</Text>}

                <TouchableOpacity style={[styles.buttonBody,isSubmitting && styles.buttonBodyDisabled]} onPress={handleSubmit(_onSubmit)} disabled={isSubmitting}>
                    <Text style={styles.buttonText}>送信</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    hero: {
        backgroundColor: "#aaa",
        height: 120,
        alignItems: "center",
        justifyContent: "center",
    },
    heroH1: {
        color: "#fff",
        fontSize: 20,
    },
    heroP: {
        color: "#fff",
    },
    contactForm: {
        paddingHorizontal: 30,
        marginTop: 20
    },
    textLabel: {
        marginTop: 20
    },
    textInput: {
        backgroundColor: "#ddd",
        height: 40,
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    textArea: {
        backgroundColor: "#ddd",
        height: 100,
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 10,
        // textAlignVertical:"top"aa
    },
    errorMessage: {
        color: "#f00",
        fontSize: 12
    },
    buttonBody: {
        backgroundColor: "#333",
        marginTop: 20,
        height: 40,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "#fff"
    },
    buttonBodyDisabled:{
        backgroundColor:"#ccc"
    }
});