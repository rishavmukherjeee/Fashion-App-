import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const DiscoverMatchesContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.discoverMatches, styles.navigationFlexBox]}>
      <View style={[styles.navigation, styles.navigationFlexBox]}>
        <Pressable
          style={[styles.sizemediumIconoff, styles.sizemediumBorder]}
          onPress={() => navigation.navigate("DashboardMakeup")}
        >
          <View style={[styles.productTitle, styles.navigationFlexBox]}>
            <Image
              style={styles.u1f48418Icon}
              resizeMode="cover"
              source={require("../assets/u1f484181.png")}
            />
            <Text style={styles.makeup}>Makeup</Text>
          </View>
        </Pressable>
        <View style={[styles.sizemediumIconoff1, styles.sizemediumBorder]}>
          <View style={[styles.productTitle, styles.navigationFlexBox]}>
            <Image
              style={styles.u1f48418Icon}
              resizeMode="cover"
              source={require("../assets/u1f9f431.png")}
            />
            <Text style={styles.makeup}>Skincare</Text>
          </View>
        </View>
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
    backgroundColor: Color.neutrals8,
  },
  sizemediumIconoff1: {
    backgroundColor: Color.palegoldenrod,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    marginLeft: 10,
  },
  navigation: {
    justifyContent: "center",
    overflow: "hidden",
  },
  discoverMatches: {
    padding: Padding.p_base,
  },
});

export default DiscoverMatchesContainer;
