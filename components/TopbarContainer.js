import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const TopbarContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.topbar4}>
      <View
        style={[
          styles.navbarprogressBarThemelig,
          styles.autoLayoutHorizontalFlexBox,
        ]}
      >
        <Pressable
          style={styles.autoLayoutHorizontalFlexBox}
          onPress={() => navigation.navigate("Makeup")}
        >
          <Image
            style={styles.iconlylightOutlinearrowL}
            resizeMode="cover"
            source={require("../assets/iconlylightoutlinearrow--left1.png")}
          />
          <View style={[styles.share, styles.shareFlexBox]}>
            <Image
              style={[styles.arrowBackIosIcon, styles.arrowBackIosIconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-back-ios1.png")}
            />
          </View>
        </Pressable>
        <View style={styles.frame}>
          <View style={styles.rectangle} />
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <View style={[styles.rectangle2, styles.rectanglePosition]} />
          <View style={[styles.rectangle3, styles.rectanglePosition]} />
          <View style={[styles.rectangle4, styles.rectanglePosition]} />
          <View style={[styles.rectangle5, styles.rectanglePosition]} />
          <View style={[styles.rectangle6, styles.rectanglePosition]} />
          <View style={[styles.rectangle7, styles.rectanglePosition]} />
          <View style={[styles.rectangle8, styles.rectanglePosition]} />
          <View style={[styles.rectangle9, styles.rectanglePosition]} />
          <View style={[styles.rectangle10, styles.rectanglePosition]} />
          <View style={[styles.rectangle11, styles.rectanglePosition]} />
          <View style={[styles.rectangle12, styles.rectanglePosition]} />
          <View style={[styles.rectangle13, styles.rectanglePosition]} />
          <View style={[styles.rectangle14, styles.rectanglePosition]} />
          <View style={[styles.rectangle15, styles.rectanglePosition]} />
          <View style={[styles.rectangle16, styles.rectanglePosition]} />
          <View style={[styles.rectangle17, styles.rectanglePosition]} />
          <View style={[styles.rectangle18, styles.rectanglePosition]} />
        </View>
        <Text style={styles.productDetail}>Product Detail</Text>
        <View style={styles.shareFlexBox}>
          <View style={[styles.share1, styles.loveFlexBox]}>
            <Image
              style={styles.arrowBackIosIconLayout}
              resizeMode="cover"
              source={require("../assets/feather-icons--share2.png")}
            />
          </View>
          <View style={[styles.love, styles.loveFlexBox]}>
            <Image
              style={styles.arrowBackIosIconLayout}
              resizeMode="cover"
              source={require("../assets/u1f90d.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  autoLayoutHorizontalFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  shareFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  arrowBackIosIconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  rectanglePosition: {
    backgroundColor: Color.primary500,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    position: "absolute",
    height: 12,
  },
  loveFlexBox: {
    width: 41,
    justifyContent: "center",
    padding: Padding.p_5xs,
    overflow: "hidden",
    backgroundColor: Color.gray_500,
    borderRadius: Border.br_29xl,
    alignItems: "center",
    flexDirection: "row",
  },
  iconlylightOutlinearrowL: {
    width: 28,
    height: 28,
    display: "none",
  },
  arrowBackIosIcon: {
    borderRadius: 42,
  },
  share: {
    marginLeft: 16,
    padding: Padding.p_5xs,
    overflow: "hidden",
    backgroundColor: Color.gray_500,
    borderRadius: Border.br_29xl,
    justifyContent: "center",
  },
  rectangle: {
    backgroundColor: Color.greyscale200,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    position: "absolute",
    height: 12,
    width: 200,
  },
  rectangle1: {
    width: 11,
    display: "none",
  },
  rectangle2: {
    width: 22,
  },
  rectangle3: {
    width: 33,
    display: "none",
  },
  rectangle4: {
    width: 44,
    display: "none",
  },
  rectangle5: {
    width: 56,
    display: "none",
  },
  rectangle6: {
    width: 67,
    display: "none",
  },
  rectangle7: {
    width: 78,
    display: "none",
  },
  rectangle8: {
    width: 89,
    display: "none",
  },
  rectangle9: {
    width: 100,
    display: "none",
  },
  rectangle10: {
    width: 111,
    display: "none",
  },
  rectangle11: {
    width: 122,
    display: "none",
  },
  rectangle12: {
    width: 133,
    display: "none",
  },
  rectangle13: {
    width: 144,
    display: "none",
  },
  rectangle14: {
    width: 156,
    display: "none",
  },
  rectangle15: {
    width: 167,
    display: "none",
  },
  rectangle16: {
    width: 178,
    display: "none",
  },
  rectangle17: {
    width: 189,
    display: "none",
  },
  rectangle18: {
    width: 200,
    backgroundColor: Color.primary500,
    display: "none",
  },
  frame: {
    height: 12,
    width: 200,
    display: "none",
  },
  productDetail: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    textTransform: "lowercase",
    fontWeight: "600",
    fontFamily: FontFamily.smallCopySemiBold,
    color: Color.bodyBlack,
    textAlign: "center",
    display: "none",
  },
  share1: {
    alignSelf: "stretch",
  },
  love: {
    shadowColor: "rgba(15, 15, 15, 0.1)",
    shadowOffset: {
      width: 0,
      height: 64,
    },
    shadowRadius: 64,
    elevation: 64,
    shadowOpacity: 1,
    marginLeft: 8,
  },
  navbarprogressBarThemelig: {
    width: 333,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  topbar4: {
    width: 375,
    paddingHorizontal: Padding.p_base,
    paddingBottom: Padding.p_base,
    marginTop: 8,
    flexDirection: "row",
  },
});

export default TopbarContainer;
