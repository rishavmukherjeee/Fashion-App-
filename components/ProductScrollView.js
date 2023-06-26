import * as React from "react";
import { Text, StyleSheet, ScrollView, View, Image } from "react-native";
import { Border, FontFamily, Color, Padding } from "../GlobalStyles";

const ProductScrollView = () => {
  return (
    <View style={styles.ardimgProductBig}>
      <View style={styles.bottomCard}>
        <Text style={styles.sayGoodbyeTo}>Say goodbye to guesswork</Text>
        <Text style={[styles.wantEvenMore, styles.discoverLayout]}>
          Want even more Smudgtastic matches? Tap the button below to discover!
        </Text>
        <ScrollView
          style={[styles.buttons, styles.buttonsPosition]}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.buttonsScrollViewContent}
        >
          <View style={styles.masterButtons}>
            <Text style={[styles.discover, styles.discoverLayout]}>
              Discover
            </Text>
          </View>
        </ScrollView>
        <Image
          style={[styles.u2728Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/u2728.png")}
        />
      </View>
      <View style={styles.infoActionImgSlider}>
        <View style={[styles.imgSliderMaster, styles.product12Layout]}>
          <View style={styles.product12Layout}>
            <Image
              style={[styles.image196Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/image-196.png")}
            />
          </View>
        </View>
        <View style={styles.imgLayout}>
          <View style={styles.product12Layout}>
            <Image
              style={[styles.image196Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/image-198.png")}
            />
          </View>
        </View>
        <View style={styles.imgLayout}>
          <View style={styles.product12Layout}>
            <Image
              style={[styles.image196Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/image-191.png")}
            />
          </View>
        </View>
        <View style={styles.imgLayout}>
          <View style={styles.product12Layout}>
            <Image
              style={[styles.image196Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/image-190.png")}
            />
          </View>
        </View>
        <View style={styles.imgLayout}>
          <View style={styles.product12Layout}>
            <Image
              style={[styles.image196Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/image-192.png")}
            />
          </View>
        </View>
        <View style={styles.imgLayout}>
          <View style={styles.product12Layout}>
            <Image
              style={[styles.image196Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/image-4.png")}
            />
          </View>
        </View>
        <View style={[styles.imgSliderMaster6, styles.imgLayout]}>
          <View style={styles.product12Layout}>
            <Image
              style={[styles.image196Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/image-197.png")}
            />
          </View>
        </View>
        <View style={[styles.imgSliderMaster6, styles.imgLayout]}>
          <View style={styles.product12Layout}>
            <Image
              style={[styles.image196Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/image-193.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  discoverLayout: {
    lineHeight: 17,
    textTransform: "lowercase",
  },
  buttonsPosition: {
    left: 21,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  product12Layout: {
    height: 40,
    width: 40,
  },
  imgLayout: {
    marginLeft: 16,
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.11)",
    borderRadius: Border.br_xl,
    overflow: "hidden",
    flexDirection: "row",
    borderStyle: "solid",
  },
  sayGoodbyeTo: {
    top: 21,
    left: 24,
    fontSize: 21,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.heading4Medium,
    color: Color.bodyBlack,
    width: 205,
    textAlign: "left",
    textTransform: "lowercase",
    position: "absolute",
  },
  wantEvenMore: {
    top: 88,
    fontSize: 13,
    fontFamily: FontFamily.smallCopyRegular,
    color: Color.black,
    width: 179,
    left: 21,
    position: "absolute",
    textAlign: "left",
  },
  discover: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: FontFamily.smallCopySemiBold,
    color: Color.bodyWhite,
    textAlign: "center",
    flex: 1,
  },
  masterButtons: {
    borderRadius: 32,
    backgroundColor: Color.bodyBlack,
    paddingHorizontal: 26,
    paddingVertical: 13,
    flexDirection: "row",
    width: 142,
  },
  buttons: {
    top: 182,
    maxWidth: 142,
    flex: 1,
    width: 142,
  },
  u2728Icon: {
    height: "45.4%",
    width: "34.02%",
    top: "39.92%",
    right: "4.99%",
    bottom: "14.67%",
    left: "61%",
  },
  bottomCard: {
    borderRadius: 11,
    backgroundColor: Color.neutrals8,
    borderColor: "#000",
    borderWidth: 1.1,
    width: 341,
    height: 255,
    borderStyle: "solid",
  },
  image196Icon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  imgSliderMaster: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.11)",
    borderRadius: Border.br_xl,
    width: 40,
    overflow: "hidden",
    flexDirection: "row",
    borderStyle: "solid",
  },
  imgSliderMaster6: {
    display: "none",
  },
  infoActionImgSlider: {
    width: 361,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    marginTop: 8,
    display: "none",
    flexDirection: "row",
  },
  ardimgProductBig: {
    width: 375,
    padding: Padding.p_base,
  },
});

export default ProductScrollView;
