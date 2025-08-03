import { StyleSheet, Text,View } from 'react-native';

export default function Home() {
    return (
        <>
            <View style={styles.hero}>
                <Text style={styles.heroH1}>ヒーローエリア</Text>
                <Text style={styles.heroP}>ヒーロエリアのキャッチコピー。</Text>
            </View>
            <View style={styles.services}>
                <View style={styles.service}>
                    <Text style={styles.serviceH2}>サービスA</Text>
                    <Text style={styles.serviceP}>サービスAの説明。</Text>
                </View>
                <View style={styles.service}>
                    <Text style={styles.serviceH2}>サービスB</Text>
                    <Text style={styles.serviceP}>サービスBの説明。</Text>
                </View>
                <View style={styles.service}>
                    <Text style={styles.serviceH2}>サービスC</Text>
                    <Text style={styles.serviceP}>サービスCの説明。</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    hero: {
        backgroundColor: "#aaa",
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    heroH1: {
        color: "#fff",
        fontSize: 20
    },
    heroP: {
        color: "#fff"
    },
    services: {
        alignItems: "center"
    },
    service: {
        backgroundColor: "#aaa",
        marginTop: 30,
        height: 100,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
    },
    serviceH2: {
        color: "#fff"
    },
    serviceP: {
        color: "#fff"
    }
});