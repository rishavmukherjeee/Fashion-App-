import React, { useMemo } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusContainer = ({ propBackgroundColor }) => {
  const statusBarStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View style={[styles.statusBar, statusBarStyle]}>
      <Image
        style={styles.statusiphone12Mini}
        resizeMode="cover"
        source={require("../assets/statusiphone-12-mini.png")}
      />
      <View style={[styles.record, styles.recordPosition]} />
      <Text style={styles.time}>9:41</Text>
      <Image
        style={[styles.cameraIndicatorIcon, styles.recordPosition]}
        resizeMode="cover"
        source={require("../assets/camera-indicator.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recordPosition: {
    display: "none",
    position: "absolute",
  },
  statusiphone12Mini: {
    top: 21,
    right: 11,
    width: 68,
    height: 13,
    position: "absolute",
  },
  record: {
    top: 13,
    left: 18,
    borderRadius: Border.br_980xl,
    backgroundColor: Color.red,
  },
  time: {
    top: 19,
    left: 29,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    textTransform: "lowercase",
    fontFamily: FontFamily.smallCopyRegular,
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  cameraIndicatorIcon: {
    top: 7,
    left: 308,
    width: 6,
    height: 6,
  },
  statusBar: {
    top: 0,
    left: 0,
    backgroundColor: Color.neutrals8,
    width: 375,
    height: 50,
    position: "absolute",
  },
});

export default StatusContainer;
