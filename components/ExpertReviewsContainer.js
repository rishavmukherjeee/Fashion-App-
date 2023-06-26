import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ExpertReviewsContainer = ({
  coordinates,
  coordinatesText,
  propMarginLeft,
}) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={[styles.rectangleParent, frameView1Style]}>
      <Image
        style={styles.frameLayout}
        resizeMode="cover"
        source={coordinates}
      />
      <LinearGradient
        style={[styles.frameItem, styles.frameLayout]}
        locations={[0, 1]}
        colors={["rgba(1, 1, 1, 0)", "rgba(1, 1, 1, 0.51)"]}
        useAngle={true}
        angle={180}
      />
      <Text style={[styles.aliquamDignissimA, styles.sFlexBox]}>
        Aliquam dignissim a tellus eu egestas.
      </Text>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={coordinatesText}
        />
        <Text style={[styles.s, styles.sFlexBox]}>30s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    position: "absolute",
    height: 257,
    width: 151,
  },
  sFlexBox: {
    textAlign: "left",
    color: Color.white,
  },
  frameItem: {
    backgroundColor: "transparent",
  },
  aliquamDignissimA: {
    top: 216,
    left: 14,
    fontSize: FontSize.size_2xs,
    lineHeight: 13,
    fontFamily: FontFamily.suisseIntlRegular,
    width: 117,
    height: 25,
    position: "absolute",
  },
  vectorIcon: {
    width: 11,
    height: 11,
  },
  s: {
    fontSize: FontSize.smallCopyRegular_size,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: FontFamily.xSmallCopyBold,
    width: 22,
    marginLeft: 4,
    height: 13,
  },
  vectorParent: {
    top: 15,
    left: 16,
    width: 38,
    flexDirection: "row",
    alignItems: "center",
    height: 13,
    position: "absolute",
  },
  rectangleParent: {
    height: 257,
    width: 151,
  },
});

export default ExpertReviewsContainer;
