import { View, Text, StyleSheet, Image } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import { useState } from "react";
import { getMapPreview } from "../../util/location";
import { useNavigation } from "@react-navigation/native";

const LocationPicker = () => {
  const [pickedLocation, setPickedLocation] = useState();
  const navigation = useNavigation();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const handleVerifyPermission = async () => {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app."
      );
      return false;
    }

    return true;
  };

  const handleGetLocation = async () => {
    const hasPermission = await handleVerifyPermission();

    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };
  const handlePickonMap = () => {
    navigation.navigate("Map");
  };

  let locationPreview = <Text>No location picked uet.</Text>;

  if (pickedLocation) {
    console.log(getMapPreview(pickedLocation.lat, pickedLocation.lng));
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
        }}
      />
    );
  }
  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={handleGetLocation}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={handlePickonMap}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
    overflow: "hidden",
  },
});
