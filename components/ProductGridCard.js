import * as React from "react";
import { StyleSheet, View } from "react-native";
import ContainerView from "./ContainerView";
import BuyContainer from "./BuyContainer";
import { Padding } from "../GlobalStyles";

const ProductGridCard = () => {
  return (
    <View style={styles.ardimgProductGrid}>
      <ContainerView productId={require("../assets/add4.png")} />
      <ContainerView
        productId={require("../assets/add5.png")}
        propMarginLeft={16}
      />
      <BuyContainer />
      <BuyContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  ardimgProductGrid: {
    width: 372,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 8,
  },
});

export default ProductGridCard;
