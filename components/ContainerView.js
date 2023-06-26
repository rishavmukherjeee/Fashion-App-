import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerView = ({ productId, propMarginLeft }) => {
  const columnStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={[styles.column, columnStyle]}>
      <View style={styles.buyParent}>
        <View style={[styles.buy, styles.buyPosition]}>
          <View style={[styles.viewWrapper, styles.wrapperBorder]}>
            <Text style={styles.view}>View</Text>
          </View>
        </View>
        <Image style={styles.addIcon} resizeMode="cover" source={productId} />
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
  );
};

const styles = StyleSheet.create({
  buyPosition: {
    bottom: "11.32%",
    position: "absolute",
    alignItems: "center",
  },
  wrapperBorder: {
    borderColor: "#1e2121",
    borderStyle: "solid",
  },
  nykaaTypo: {
    lineHeight: 12,
    fontSize: FontSize.xSmallCopyBold_size,
    left: "6.25%",
    textAlign: "left",
    position: "absolute",
  },
  view: {
    fontSize: FontSize.smallCopyRegular_size,
    lineHeight: 17,
    textAlign: "left",
    color: Color.bodyBlack,
    fontFamily: FontFamily.smallCopyRegular,
    textTransform: "lowercase",
  },
  viewWrapper: {
    borderRadius: Border.br_266xl,
    width: 57,
    height: 32,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_6xs,
    alignItems: "flex-end",
    borderWidth: 1,
  },
  buy: {
    height: "30.19%",
    width: "23.75%",
    top: "58.49%",
    right: "71.25%",
    left: "5%",
    justifyContent: "center",
  },
  addIcon: {
    height: "32.71%",
    width: "13.97%",
    top: "57.58%",
    right: "54.25%",
    bottom: "9.71%",
    left: "31.78%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
    color: Color.black,
    lineHeight: 12,
    fontSize: FontSize.xSmallCopyBold_size,
    left: "6.25%",
    fontFamily: FontFamily.smallCopyRegular,
    textTransform: "lowercase",
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
    alignItems: "center",
    backgroundColor: Color.white,
    borderColor: "#1e2121",
    paddingHorizontal: 0,
  },
  buyParent: {
    borderRadius: Border.br_xs,
    borderColor: "#000",
    width: 240,
    height: 106,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  column: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
  },
});

export default ContainerView;
