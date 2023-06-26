import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const BuyContainer = () => {
  return (
    <View style={[styles.column, styles.buyFlexBox]}>
      <View style={styles.products}>
        <View style={styles.buyParent}>
          <View style={[styles.buy, styles.buyPosition]}>
            <View style={[styles.buyWrapper, styles.wrapperBorder]}>
              <Text style={styles.buy1}>buy</Text>
            </View>
          </View>
          <Image
            style={[styles.addIcon, styles.buyPosition]}
            resizeMode="cover"
            source={require("../assets/add6.png")}
          />
          <Text style={[styles.nykaa, styles.nykaaTypo]}>NYKAA</Text>
          <Text
            style={[styles.bathBody, styles.nykaaTypo]}
          >{`Bath & Body Works Pineapple Coconut...`}</Text>
          <View style={[styles.product51Wrapper, styles.wrapperBorder]}>
            <Image
              style={styles.product51Icon}
              resizeMode="cover"
              source={require("../assets/product5-11.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buyPosition: {
    bottom: "11.32%",
    position: "absolute",
  },
  wrapperBorder: {
    borderColor: "#1e2121",
    borderStyle: "solid",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  nykaaTypo: {
    lineHeight: 12,
    fontSize: FontSize.xSmallCopyBold_size,
    left: "6.25%",
    textAlign: "left",
    position: "absolute",
  },
  buy1: {
    fontSize: FontSize.smallCopyRegular_size,
    lineHeight: 17,
    textAlign: "left",
    color: Color.bodyBlack,
    fontFamily: FontFamily.smallCopyRegular,
  },
  buyWrapper: {
    borderRadius: Border.br_266xl,
    width: 57,
    height: 32,
    paddingVertical: Padding.p_6xs,
    borderWidth: 1,
  },
  buy: {
    width: "23.75%",
    right: "71.25%",
    left: "5%",
    top: "58.49%",
    height: "30.19%",
    bottom: "11.32%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    width: "13.33%",
    right: "54.58%",
    left: "32.08%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: "58.49%",
    height: "30.19%",
    bottom: "11.32%",
    position: "absolute",
  },
  nykaa: {
    top: "11.32%",
    fontWeight: "700",
    fontFamily: FontFamily.xSmallCopyBold,
    color: Color.bodyBlack,
    lineHeight: 12,
    fontSize: FontSize.xSmallCopyBold_size,
    left: "6.25%",
  },
  bathBody: {
    width: "50%",
    top: "28.3%",
    textTransform: "lowercase",
    color: Color.black,
    lineHeight: 12,
    fontSize: FontSize.xSmallCopyBold_size,
    left: "6.25%",
    fontFamily: FontFamily.smallCopyRegular,
  },
  product51Icon: {
    width: 55,
    height: 55,
  },
  product51Wrapper: {
    height: "67.92%",
    width: "24.64%",
    top: "20.75%",
    right: "7.44%",
    left: "67.92%",
    borderRadius: Border.br_3xs,
    borderWidth: 0.5,
    paddingVertical: 6,
    justifyContent: "flex-end",
    bottom: "11.32%",
    position: "absolute",
    borderColor: "#1e2121",
    backgroundColor: Color.white,
  },
  buyParent: {
    borderRadius: Border.br_xs,
    borderColor: "#e7e7e7",
    width: 240,
    height: 106,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  products: {
    flexDirection: "row",
    alignItems: "center",
  },
  column: {
    paddingVertical: Padding.p_5xs,
    marginLeft: 16,
    paddingHorizontal: 0,
    justifyContent: "center",
  },
});

export default BuyContainer;
