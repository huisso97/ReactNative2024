import { useCallback, useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  const handleChangeTitle = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  const handleTakeImage = (imageUri) => {
    setSelectedImage(imageUri);
  };
  const handlePickLocation = useCallback((location) => {
    setPickedLocation(location);
  }, []);
  const handleSavePlace = () => {
    console.log(enteredTitle);
    console.log(selectedImage);
    console.log(pickedLocation);
  };
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeTitle}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={handleTakeImage} />
      <LocationPicker onPickLocation={handlePickLocation} />
      <Button onPress={handleSavePlace}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
