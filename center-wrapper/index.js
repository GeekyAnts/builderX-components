import React from "react";
import { View } from "react-native";

export default class CenterWrapper extends React.Component {
  render() {
    let horizontally, vertically;

    horizontally =
      this.props.vertically && !this.props.horizontally ? false : true;
    vertically =
      this.props.horizontally && !this.props.vertically ? false : true;

    return (
      <View
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "absolute",
          alignItems: horizontally ? "center" : undefined,
          justifyContent: vertically ? "center" : undefined
        }}
        pointerEvents="box-none"
      >
        {this.props.children}
      </View>
    );
  }
}
