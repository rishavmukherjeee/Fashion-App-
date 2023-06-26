import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const SkincareMatchesContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.discoverMatches, styles.navigationFlexBox]}>
      <View style={styles.navigationFlexBox}>
        <View style={[styles.sizemediumIconoff, styles.sizemediumBorder]}>
          <View style={[styles.productTitle, styles.navigationFlexBox]}>
            <Image
              style={styles.u1f48418Icon}
              resizeMode="cover"
              source={require("../assets/u1f484182.png")}
            />
            <Text style={styles.makeup}>Makeup</Text>
          </View>
        </View>
        <Pressable
          style={[styles.sizemediumIconoff1, styles.sizemediumBorder]}
          onPress={() => navigation.navigate("DashboardSkincare")}
        >
          <View style={[styles.productTitle, styles.navigationFlexBox]}>
            <Image
              style={styles.u1f48418Icon}
              resizeMode="cover"
              source={require("../assets/u1f9f431.png")}
            />
            <Text style={styles.makeup}>Skincare</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  sizemediumBorder: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    flexDirection: "row",
  },
  u1f48418Icon: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  makeup: {
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    textTransform: "lowercase",
    fontFamily: FontFamily.smallCopyRegular,
    color: Color.bodyBlack,
    textAlign: "center",
    marginLeft: 7.29,
  },
  productTitle: {
    height: 19,
  },
  sizemediumIconoff: {
    backgroundColor: Color.palegoldenrod,
  },
  sizemediumIconoff1: {
    backgroundColor: Color.neutrals8,
    marginLeft: 10,
  },
  discoverMatches: {
    padding: Padding.p_base,
  },
});

export default SkincareMatchesContainer;
