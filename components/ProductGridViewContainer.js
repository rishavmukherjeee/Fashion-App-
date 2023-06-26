import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductCardsContainer from "./ProductCardsContainer";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ProductGridViewContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.ardimgProductGrid, styles.masterButtonsFlexBox]}>
      <View>
        <View style={styles.productCards}>
          <View style={styles.rectangleViewShadowBox} />
          <View style={styles.nykaaParent}>
            <Text style={[styles.nykaa, styles.nykaaText]}>NYKAA</Text>
            <Text
              style={[styles.nyxProfessionalMakeup, styles.nykaaText]}
            >{`NYX Professional Makeup `}</Text>
          </View>
          <View style={styles.productCardsItem} />
          <Pressable
            style={styles.productCardsInner}
            onPress={() => navigation.navigate("ProductDetailPage")}
          />
          <View style={styles.lineView} />
          <View style={[styles.masterButtons, styles.viewWrapperBorder]}>
            <Image
              style={styles.u26a122}
              resizeMode="cover"
              source={require("../assets/u26a1-2-21.png")}
            />
            <Text style={[styles.superMatch, styles.nykaaText]}>
              Super match
            </Text>
          </View>
          <View style={[styles.viewWrapper, styles.viewWrapperBorder]}>
            <Text style={styles.view}>View</Text>
          </View>
          <Image
            style={[styles.addIcon, styles.addPosition]}
            resizeMode="cover"
            source={require("../assets/add.png")}
          />
          <Pressable
            style={[styles.add, styles.addPosition]}
            onPress={() => navigation.navigate("DashboardSelection")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/add1.png")}
            />
          </Pressable>
          <Image
            style={styles.product51Icon}
            resizeMode="cover"
            source={require("../assets/product5-1.png")}
          />
        </View>
        <ProductCardsContainer
          matchScoreText={require("../assets/u2604-1-1.png")}
          matchScoreDescription="Average match"
          onRectanglePressablePress={() =>
            navigation.navigate("ProductDetailPage")
          }
        />
      </View>
      <View style={styles.column1}>
        <View style={styles.productCards}>
          <View style={styles.rectangleViewShadowBox} />
          <View style={styles.nykaaParent}>
            <Text style={[styles.nykaa, styles.nykaaText]}>NYKAA</Text>
            <Text
              style={[styles.nyxProfessionalMakeup, styles.nykaaText]}
            >{`NYX Professional Makeup `}</Text>
          </View>
          <View style={styles.productCardsItem} />
          <Pressable
            style={styles.productCardsInner}
            onPress={() => navigation.navigate("ProductDetailPage")}
          />
          <View style={styles.lineView} />
          <View style={[styles.masterButtons, styles.viewWrapperBorder]}>
            <Image
              style={styles.u26a122}
              resizeMode="cover"
              source={require("../assets/u2b50-2-1.png")}
            />
            <Text style={[styles.superMatch, styles.nykaaText]}>
              Good match
            </Text>
          </View>
          <View style={[styles.viewWrapper, styles.viewWrapperBorder]}>
            <Text style={styles.view}>View</Text>
          </View>
          <Image
            style={[styles.addIcon, styles.addPosition]}
            resizeMode="cover"
            source={require("../assets/add.png")}
          />
          <Image
            style={[styles.add, styles.addPosition]}
            resizeMode="cover"
            source={require("../assets/add1.png")}
          />
          <Image
            style={styles.product51Icon}
            resizeMode="cover"
            source={require("../assets/product5-1.png")}
          />
        </View>
        <ProductCardsContainer
          matchScoreText={require("../assets/u1f4a5-1.png")}
          matchScoreDescription="Poor match"
          propHeight="unset"
          propMarginLeft={4}
          onRectanglePressablePress={() =>
            navigation.navigate("ProductDetailPage")
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  masterButtonsFlexBox: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  nykaaText: {
    textAlign: "left",
    textTransform: "lowercase",
  },
  viewWrapperBorder: {
    borderColor: "#444",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  addPosition: {
    top: 298,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    height: 330,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.07)",
    backgroundColor: Color.neutralN10,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 12,
    position: "absolute",
    width: 154,
  },
  nykaa: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.xSmallCopyBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.smallCopyRegular_size,
  },
  nyxProfessionalMakeup: {
    fontWeight: "500",
    fontFamily: FontFamily.heading4Medium,
    color: Color.neutralN300,
    height: 23,
    marginTop: 7,
    lineHeight: 14,
    fontSize: FontSize.smallCopyRegular_size,
    width: 124,
  },
  nykaaParent: {
    top: 203,
    left: 10,
    height: 44,
    width: 124,
    position: "absolute",
  },
  productCardsItem: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.whitesmoke_200,
    height: 178,
    left: 0,
    top: 12,
    position: "absolute",
    width: 154,
  },
  productCardsInner: {
    borderWidth: 1,
    borderColor: "#1e2121",
    borderStyle: "solid",
    height: 330,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 12,
    position: "absolute",
    width: 154,
  },
  lineView: {
    top: 190,
    borderTopWidth: 1,
    width: 155,
    height: 1,
    borderColor: "#1e2121",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  u26a122: {
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  superMatch: {
    fontSize: FontSize.xSmallCopyBold_size,
    lineHeight: 12,
    color: Color.neutrals8,
    marginLeft: 4,
    fontFamily: FontFamily.xSmallCopyBold,
    fontWeight: "700",
    textAlign: "left",
  },
  masterButtons: {
    top: 0,
    left: 26,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.gray_200,
    width: 101,
    paddingVertical: Padding.p_7xs,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  view: {
    fontSize: 13,
    lineHeight: 17,
    fontFamily: FontFamily.smallCopyRegular,
    textAlign: "center",
    display: "flex",
    width: 41,
    height: 18,
    alignItems: "center",
    color: Color.darkslategray_100,
    textTransform: "lowercase",
    justifyContent: "center",
  },
  viewWrapper: {
    height: "8.7%",
    width: "38.96%",
    top: "80.98%",
    right: "54.55%",
    bottom: "10.33%",
    left: "6.49%",
    borderRadius: 299,
    paddingHorizontal: 0,
    paddingVertical: 7,
    alignItems: "center",
  },
  addIcon: {
    left: 112,
    width: 32,
    height: 32,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  add: {
    left: 74,
    width: 34,
    height: 35,
  },
  product51Icon: {
    top: 41,
    left: 11,
    width: 131,
    height: 131,
    position: "absolute",
  },
  productCards: {
    height: 368,
    overflow: "hidden",
    width: 154,
  },
  column1: {
    marginLeft: 16,
  },
  ardimgProductGrid: {
    width: 375,
    paddingTop: Padding.p_base,
  },
});

export default ProductGridViewContainer;
