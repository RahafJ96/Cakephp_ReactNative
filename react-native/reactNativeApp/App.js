import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Component } from "react/cjs/react.production.min";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      mobile: "",
    };
  }

  SignUpbtn = () => {
    var name = this.state.name;
    var email = this.state.email;
    var password = this.state.constomer_password;
    var mobile = this.state.mobile;

    if (
      name.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      mobile.length == 0
    ) {
      alert("Required Field is Missing");
    } else {
      var InsertAPIurl = "http://10.0.2.2:80/api/insert.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      var Data = {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
      };

      fetch(InsertAPIurl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          alert(response[0].Message);
        })
        .catch((error) => {
          alert(" ERROR " + error);
        });
    }
  };

  render() {
    return (
      <View style={styles.ViewStyle}>
        <Text>Hello World </Text>
        <TextInput
          placeholder="Enter your full name"
          style={styles.txtStyle}
          onChangeText={(constomer_name) => this.setState({ constomer_name })}
        />

        <TextInput
          placeholder="Enter your email"
          style={styles.txtStyle}
          onChangeText={(constomer_email) => this.setState({ constomer_email })}
        />

        <TextInput
          placeholder="Enter new password"
          style={styles.txtStyle}
          onChangeText={(constomer_password) =>
            this.setState({ constomer_password })
          }
        />

        <TextInput
          placeholder="Enter your mobile phone"
          style={styles.txtStyle}
          onChangeText={(constomer_mobile) =>
            this.setState({ constomer_mobile })
          }
        />

        <Button title="Sign up" onPress={this.SignUpbtn} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    padding: 20,
    marginTop: 10,
  },

  txtStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 20,
  },
});
