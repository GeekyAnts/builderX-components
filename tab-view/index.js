import React from "react";
import { Text, View } from "react-native";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: "#ff4081" }]} />
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: "#673ab7" }]} />
);
class TabView extends React.Component {
  state = {
    index: 0,
    routes: []
  };

  componentDidMount() {
    const routes = this.props.children.map(child => {
      return {
        key: child.props.title,
        title: child.props.title
      };
    });

    this.setState({
      routes
    });
  }

  _handleIndexChange = index => {
    if (typeof this.props.onIndexChange === "function") {
      console.log("here");
      this.props.onIndexChange(index);
    } else {
      this.setState({ index });
    }
  };

  render() {
    const sceneMap = {};
    const navigationState = { ...this.state };

    if (typeof this.props.activeTabIndex === "number") {
      navigationState.index = this.props.activeTabIndex;
    }

    // console.log(this.props, this.state);

    this.props.children.forEach(child => {
      sceneMap[child.props.title] = () => child;
    });

    if (this.state.routes.length === 0) {
      return null;
    }

    console.log(sceneMap, navigationState, "sceneMap, navigationState");

    return (
      <TabViewAnimated
        style={this.props.style}
        navigationState={navigationState}
        renderScene={SceneMap(sceneMap)}
        onIndexChange={this._handleIndexChange}
        renderHeader={(props: any) => (
          <TabBar
            {...props}
            style={this.props.tabBarStyle}
            tabStyle={this.props.tabStyle}
            indicatorStyle={this.props.tabIndicatorStyle}
            labelStyle={this.props.tabLabelStyle}
          />
        )}
      />
    );
  }
}

class TabContent extends React.Component {
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export { TabView, TabContent };
