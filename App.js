import { StatusBar } from 'expo-status-bar';
import React from 'react';
import WebView from 'react-native-webview';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    setUrl('https://deepleads-d5bbxlljb-gbmira.vercel.app/');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: url }} style={{ flex: 1 }} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});