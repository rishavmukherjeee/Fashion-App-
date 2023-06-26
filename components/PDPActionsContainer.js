import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const PDPActionsContainer = () => {
  return (
    <View style={styles.pdpActions}>
      <View style={styles.button}>
        <View style={styles.titleAndPrice}>
          <View style={styles.buttonParent}>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>View brand</Text>
            </View>
            <View style={[styles.button2, styles.buttonFlexBox]}>
              <Text style={[styles.label1, styles.labelTypo]}>Add to Kit</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    borderRadius: Border.br_71xl,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  labelTypo: {
    textAlign: "center",
    fontFamily: FontFamily.xSmallCopyBold,
    fontWeight: "700",
    textTransform: "lowercase",
    lineHeight: 16,
    fontSize: FontSize.size_base,
  },
  label: {
    color: Color.neutrals2,
  },
  button1: {
    backgroundColor: Color.neutrals8,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  label1: {
    color: Color.neutrals8,
  },
  button2: {
    backgroundColor: Color.greyscale900,
    marginLeft: 8,
  },
  buttonParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  titleAndPrice: {
    overflow: "hidden",
    padding: Padding.p_5xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 375,
  },
  pdpActions: {
    paddingRight: Padding.p_base,
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
    width: 375,
  },
});

export default PDPActionsContainer;
