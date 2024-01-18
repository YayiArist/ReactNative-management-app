import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,  ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';





const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('Male');
  const [howDidYouHear, setHowDidYouHear] = useState([]);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
const data=[
    {
        key:'Mumbai', value:'Mumbai',
        key:'Pune', value:'Pune',
        key:'Ahmedabad', value:'Ahmedabad',


    }
]

  const saveData = () => {
    console.log('Data to save:', { name, email, phone, gender, howDidYouHear, city, state });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create your Account</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender:</Text>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Group onValueChange={value => setGender(value)} value={gender}>
            <View style={styles.radioButton}>
              <Text>Male</Text>
              <RadioButton value="Male" />
            </View>
            <View style={styles.radioButton}>
              <Text>Female</Text>
              <RadioButton value="Female" />
            </View>
            <View style={styles.radioButton}>
              <Text>Others</Text>
              <RadioButton value="Others" />
            </View>
          </RadioButton.Group>
        </View>
      </View>

      <Text style={styles.label}>How did you hear about this?</Text>
      <View>
      <RadioButton.Group onValueChange={value => setHowDidYouHear(value)} value={howDidYouHear}>
        <Text>LinkedIn</Text>
        <RadioButton
          value="LinkedIn"
          /* status={howDidYouHear.includes('LinkedIn') ? 'checked' : 'unchecked'} */
          /* onPress={() => setHowDidYouHear(prev => toggleCheckbox(prev, 'LinkedIn'))} */
        />

        <Text>Friends</Text>
        <RadioButton
          value="Friends"
         /*  status={howDidYouHear.includes('Friends') ? 'checked' : 'unchecked'}
          onPress={() => setHowDidYouHear(prev => toggleCheckbox(prev, 'Friends'))} */
        />

        <Text>Job Portal</Text>
        <RadioButton
          value="Job Portal"
         /*  status={howDidYouHear.includes('Job Portal') ? 'checked' : 'unchecked'}
          onPress={() => setHowDidYouHear(prev => toggleCheckbox(prev, 'Job Portal'))} */
        />

        <Text>Others</Text>
        <RadioButton
          value="Others"
         /*  status={howDidYouHear.includes('Others') ? 'checked' : 'unchecked'}
          onPress={() => setHowDidYouHear(prev => toggleCheckbox(prev, 'Others'))} */
        />
        </RadioButton.Group>
      </View>

      
    

      <TouchableOpacity style={styles.button} onPress={saveData}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   marginTop:20,
    marginBottom:20,
    paddingHorizontal: 20,
    backgroundColor: "#f1f1f1",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    width: "90%",
    backgroundColor: "#fff",
  },
  radioButtonContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign:'center'
  },
});

export default SignUp;