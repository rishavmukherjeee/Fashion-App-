import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ProductImageContainer = () => {
  return (
    <View style={styles.ardimgProductBig}>
      <View style={styles.frameParent}>
        <View style={[styles.users3ThisParent, styles.thisParentPosition]}>
          <Text
            style={[styles.users3This, styles.users3ThisTypo]}
          >{`users <3 this `}</Text>
          <Text style={[styles.andWeThink, styles.andWeThinkTypo]}>
            and we think you will too
          </Text>
          <View style={[styles.ellipseParent, styles.frameChild1Layout]}>
            <Image
              style={[styles.ellipseParent, styles.frameChild1Layout]}
              resizeMode="cover"
              source={require("../assets/ellipse-11.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>17</Text>
          </View>
        </View>
        <View
          style={[styles.expertsRecommendThisParent, styles.thisParentPosition]}
        >
          <Text style={[styles.users3This, styles.users3ThisTypo]}>
            experts recommend this
          </Text>
          <Text style={[styles.andWeThink, styles.andWeThinkTypo]}>
            for your face profile
          </Text>
          <View style={[styles.ellipseParent, styles.frameChild1Layout]}>
            <Image
              style={[styles.ellipseParent, styles.frameChild1Layout]}
              resizeMode="cover"
              source={require("../assets/ellipse-11.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>8</Text>
          </View>
        </View>
        <Text
          style={styles.productRecommendationsAre}
        >{`product recommendations are based on your skin profile.  to know more about my process, data privacy and other things read our terms & conditions. to know  why this specific product is a match, tap below. `}</Text>
        <View style={[styles.frameGroup, styles.groupFlexBox]}>
          <View style={styles.moisturisingParent}>
            <Text style={[styles.users3This, styles.users3ThisTypo]}>
              moisturising
            </Text>
            <Text style={[styles.andWeThink, styles.andWeThinkTypo]}>
              bye-bye dryness!
            </Text>
            <Image
              style={[styles.ellipseParent, styles.frameChild1Layout]}
              resizeMode="cover"
              source={require("../assets/ellipse-11.png")}
            />
          </View>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
        </View>
        <View style={[styles.groupParent, styles.groupFlexBox]}>
          <Image
            style={styles.frameChild1Layout}
            resizeMode="cover"
            source={require("../assets/group-29030.png")}
          />
          <View style={styles.waterproofParent}>
            <Text style={styles.users3ThisTypo}>waterproof</Text>
            <Text style={styles.andWeThinkTypo}>
              splash away, makeup stays safe
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thisParentPosition: {
    left: 16,
    height: 40,
    position: "absolute",
  },
  users3ThisTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.smallCopySemiBold,
    fontWeight: "600",
    textTransform: "lowercase",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
  },
  andWeThinkTypo: {
    opacity: 0.6,
    fontFamily: FontFamily.smallCopyRegular,
    lineHeight: 20,
    textAlign: "left",
    color: Color.black,
    textTransform: "lowercase",
    fontSize: FontSize.size_sm,
  },
  frameChild1Layout: {
    width: 40,
    height: 40,
  },
  textTypo: {
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    top: 9,
    color: Color.bodyBlack,
    fontFamily: FontFamily.smallCopySemiBold,
    fontWeight: "600",
    textTransform: "lowercase",
    position: "absolute",
  },
  groupFlexBox: {
    flexDirection: "row",
    height: 40,
    left: 16,
    position: "absolute",
    alignItems: "center",
  },
  users3This: {
    top: 1,
    left: 54,
    position: "absolute",
  },
  andWeThink: {
    top: 18,
    left: 54,
    position: "absolute",
  },
  ellipseParent: {
    top: 0,
    left: 0,
    position: "absolute",
    width: 40,
  },
  text: {
    left: 11,
  },
  users3ThisParent: {
    top: 21,
    width: 213,
    height: 40,
  },
  text1: {
    left: 14,
  },
  expertsRecommendThisParent: {
    top: 77,
    width: 219,
    height: 40,
  },
  productRecommendationsAre: {
    top: 250,
    left: 17,
    fontSize: FontSize.size_2xs,
    lineHeight: 15,
    width: 286,
    opacity: 0.8,
    color: Color.bodyBlack,
    fontFamily: FontFamily.smallCopyRegular,
    textAlign: "left",
    textTransform: "lowercase",
    position: "absolute",
  },
  moisturisingParent: {
    width: 171,
    height: 40,
  },
  groupIcon: {
    width: 22,
    height: 22,
    marginLeft: -22,
  },
  frameGroup: {
    top: 189,
    justifyContent: "flex-end",
    width: 171,
  },
  waterproofParent: {
    width: 209,
    marginLeft: 14,
  },
  groupParent: {
    top: 133,
    width: 263,
  },
  frameParent: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_300,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.24)",
    borderWidth: 1,
    width: 319,
    height: 331,
  },
  ardimgProductBig: {
    width: 375,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    marginTop: 8,
    alignItems: "center",
  },
});

export default ProductImageContainer;
