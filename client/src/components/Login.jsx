import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignUp from "./SignUp";
import { useNavigation } from "@react-navigation/native";


const Login = () => {
  function SvgTop() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={430}
        height={270}
        fill="none"
      >
        <G filter="url(#a)">
          <Path
            fill="#EA849D"
            d="M430 .388H0v248.306s66.5-19.865 101.5-21.52c35-1.656 66.5 11.968 113.5 21.52 47 9.551 74.5 13.242 109 13.242s106-13.242 106-13.242V.388Z"
          />
        </G>
        <Path
          fill="url(#b)"
          d="M.5 0h430v247.939s-23-22.753-91.5-22.753-118 21.316-126 22.753c-8 1.437-61 13.612-110.5 13.612S.5 247.939.5 247.939V0Z"
        />
        <Defs>
          <LinearGradient
            id="b"
            x1={215}
            x2={215}
            y1={0.388}
            y2={245.848}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FD6D64" />
            <Stop offset={0.307} stopColor="#F75C3A" />
            <Stop offset={1} stopColor="#E22A6D" />
          </LinearGradient>
        </Defs>
      </Svg>
    );
  }
const navigation= useNavigation()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (text) => {
    setEmail(text);
  };

  const handleChangePassword = (text) => {
    setPassword(text);
  };

  const onPress = () => {
    console.log("login");
    if (!email || !password) {
      alert("Please Complete the Fields");
    } else {
      const data = {
        email,
        password,
      };

      axios
        .post("http://localhost:3000/login", data)
        .then(async (response) => {
          console.log("Respuesta del backend:", response.data);
          await AsyncStorage.setItem("authToken", response.data.token);

        
        })
        .catch((error) => {
          console.error("Error al enviar la solicitud:", error);
        });
    }

  };

  const onPressSignUp = () => {
    // Navegar a la pantalla de SignUp cuando se presiona "Don't have an account?"
    navigation.navigate(SignUp);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <SvgTop style={styles.containerSvg} /> 
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subTitle}>Sign In to your Account</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleChangeEmail}
          placeholder="email@example.com"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={handleChangePassword}
          placeholder="password"
        />

        <TouchableOpacity style={styles.button}>
          <Text onPress={onPress} style={styles.textButton}>
            Sign In
          </Text>
        </TouchableOpacity>

        


        <TouchableOpacity style={styles.button}>
          <Text onPress={onPressSignUp} style={styles.textButton}>
            Don't have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerSvg: {
    justifyContent: "flex-start",
    alignItems: "center",
  },

  title: {
    fontSize: 80,
    color: "#34434D",
    fontWeight: "bold",
  },

  subTitle: {
    fontSize: 25,
    color: "gray",
  },

  textInput: {
    paddingStart: "30",
    padding: 10,
    width: "80%",
    height: "50",
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  textButton: {
    fontSize: 20,
    color: "gray",
    marginTop: 20,
    textDecorationLine: "underline",
  },
  button: {
    width: "100%",
    height: 50,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Login;
