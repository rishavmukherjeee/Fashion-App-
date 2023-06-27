import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={[styles.groupParent, styles.buttonsFlexBox]}>
      <Image
        style={styles.frameChild}
        resizeMode="cover"
        source={require("../assets/group-29076.png")}
      />
      <View style={[styles.buttons, styles.buttonsFlexBox]}>
        <View style={styles.masterButtons}>
          <Text style={styles.rateThisProduct}>Rate this product</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameChild: {
    width: 257,
    height: 37,
  },
  rateThisProduct: {
    top: -20,
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    textTransform: "lowercase",
    fontWeight: "600",
    fontFamily: FontFamily.smallCopySemiBold,
    color: Color.bodyWhite,
    textAlign: "center",
  },
  masterButtons: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.bodyBlack,
    height: 59,
    paddingHorizontal: Padding.p_43xl,
    paddingVertical: Padding.p_lg,
    justifyContent: "flex-end",
    width: 289,
  },
  buttons: {
    marginTop: 20,
    width: 289,
  },
  groupParent: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_300,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.24)",
    borderWidth: 1,
    width: 343,
    height: 197,
    paddingLeft: 27,
    paddingTop: 30,
    paddingRight: 27,
    paddingBottom: 36,
  },
});

export default FrameComponent;
