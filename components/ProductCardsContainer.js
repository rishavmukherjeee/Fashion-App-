import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  ImageSourcePropType,TouchableOpacity
} from "react-native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProductCardsContainer = ({
  matchScoreText,
  matchScoreDescription,
  propHeight,
  propMarginLeft,
  onRectanglePressablePress,
}) => {
  const masterButtonsStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  const averageMatchStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);
  
  const [isAddPressed, setIsAddPressed] = React.useState([false, false]);

  const handleAddPress = (index) => {
    const updatedAddPressed = [...isAddPressed];
    updatedAddPressed[index] = !updatedAddPressed[index];
    setIsAddPressed(updatedAddPressed);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.productCards}>
      <Pressable
        style={styles.productCardsChild}
        onPress={onRectanglePressablePress}
      />
      <View style={styles.nykaaParent}>
        <Text style={[styles.nykaa, styles.nykaaText]}>NYKAA</Text>
        <Text
          style={[styles.nyxProfessionalMakeup, styles.nykaaText]}
        >{`NYX Professional Makeup `}</Text>
      </View>
      <View style={styles.productCardsItem} />
      <View style={styles.productCardsInner} />
      <View style={styles.lineView} />
      <View
        style={[styles.masterButtons, styles.viewFlexBox, masterButtonsStyle]}
      >
        <Image
          style={styles.u260411}
          resizeMode="cover"
          source={matchScoreText}
        />
        <Text
          style={[styles.averageMatch, styles.nykaaText, averageMatchStyle]}
        >
          {matchScoreDescription}
        </Text>
      </View>

      
      <View style={styles.viewWrapper}>
      <TouchableOpacity onPress={()=> navigation.navigate("Details")}>
        <Text style={[styles.view, styles.viewFlexBox]}>View</Text>
        </TouchableOpacity>
      </View>
     
      <Image
        style={[styles.addIcon, styles.addIconPosition]}
        resizeMode="cover"
        source={require("../assets/add.png")}
      />
       <Pressable
            style={styles.addPosition}
            onPress={() => handleAddPress(1)}
          >
      <Image
        style={[styles.addIcon1, styles.addIconPosition]}
        resizeMode="cover"
        source={isAddPressed[1] ? require("../assets/add4.png") : require("../assets/add1.png")}
      />
      <Image
        style={styles.product51Icon}
        resizeMode="cover"
        source={require("../assets/product5-1.png")}
      /></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  nykaaText: {
    textAlign: "left",
    textTransform: "lowercase",
  },
  viewFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  addIconPosition: {
    top: 298,
    position: "absolute",
  },
  productCardsChild: {
    backgroundColor: Color.neutralN10,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    height: 330,
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
  u260411: {
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  averageMatch: {
    fontSize: FontSize.xSmallCopyBold_size,
    lineHeight: 12,
    color: Color.neutrals8,
    marginLeft: 2,
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
    height: 25,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    borderColor: "#444",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  view: {
    fontSize: 13,
    lineHeight: 17,
    fontFamily: FontFamily.smallCopyRegular,
    textAlign: "center",
    display: "flex",
    width: 41,
    height: 18,
    color: Color.darkslategray_100,
    justifyContent: "center",
    textTransform: "lowercase",
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
    borderColor: "#444",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  addIcon: {
    left: 112,
    width: 32,
    height: 32,
  },
  addIcon1: {
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
    width: 154,
  },
});

export default ProductCardsContainer;
