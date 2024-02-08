import { View, Text, Button } from "react-native";
import { launchCameraAsync } from "expo-image-picker";

const ImagePicker = () => {
  const handleTakeImage = () => {
    launchCameraAsync();
  };

  return (
    <View>
      <View>
        <Button title="Take Image" onPress={handleTakeImage} />
      </View>
    </View>
  );
};

export default ImagePicker;
