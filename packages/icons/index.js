import React from "react";

import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

class Icon extends React.Component {
  setIcon(iconType) {
    if (iconType === undefined) {
      iconType = "MaterialCommunityIcons";
    }
    switch (iconType) {
      case "AntDesign":
        this.Icon = AntDesign;
        break;
      case "Entypo":
        this.Icon = Entypo;
        break;
      case "EvilIcons":
        this.Icon = EvilIcons;
        break;
      case "Feather":
        this.Icon = Feather;
        break;
      case "FontAwesome":
        this.Icon = FontAwesome;
        break;
      case "FontAwesome5":
        this.Icon = FontAwesome5;
        break;
      case "Foundation":
        this.Icon = Foundation;
        break;
      case "Ionicons":
        this.Icon = Ionicons;
        break;
      case "MaterialCommunityIcons":
        this.Icon = MaterialCommunityIcons;
        break;
      case "MaterialIcons":
        this.Icon = MaterialIcons;
        break;
      case "Octicons":
        this.Icon = Octicons;
        break;
      case "SimpleLineIcons":
        this.Icon = SimpleLineIcons;
        break;
      case "Zocial":
        this.Icon = Zocial;
        break;
      default:
        this.Icon = Ionicons;
    }
  }

  componentWillMount() {
    this.setIcon(this.props.type);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.type && this.props.type != nextProps.type) {
      this.setIcon(nextProps.type);
    }
  }

  render() {
    return <this.Icon ref={(c) => (this._root = c)} {...this.props} />;
  }
}
export default Icon;
