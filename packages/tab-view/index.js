import React from "react";
import { Text, View } from "react-native";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import uuid from "uuid/v4";

class TabView extends React.Component {
  state = {
    index: 0,
    routes: []
  };

  _updateNavState = nextProps => {
    // console.log("_updateNavState");
    let props = this.props;
    if (nextProps) {
      props = nextProps;
    }
    const routes = props.children.map(child => {
      return {
        key: uuid(),
        title: child.props.title
      };
    });

    // console.log(routes, "wdwdwd", props.children);

    this.setState({
      routes: [...routes] // continue here, cannot update state in componentWillUpdate
    });
  };

  componentDidMount() {
    this._updateNavState();
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("componentWillUpdate", nextProps, nextState, this.props);
  //   if (nextProps.children.length !== this.props.children.length) {
  //     this._updateNavState(nextProps);
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   "componentDidUpdate",
    //   prevProps,
    //   prevState,
    //   this.props,
    //   this.state
    // );
    if (
      this.state.routes.length !== this.props.children.length ||
      prevProps !== this.props
    ) {
      // console.log("i am here");
      this._updateNavState(this.props);
    }
  }

  _handleIndexChange = index => {
    if (typeof this.props.onIndexChange === "function") {
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

    if (this.state.routes.length === 0) {
      return null;
    }

    this.props.children.forEach((child, index) => {
      // console.log(this.state.routes, index, child, "testetsttest");
      if (this.state.routes[index]) {
        sceneMap[this.state.routes[index].key] = () => child;
      }
    });

    // console.log(sceneMap, navigationState, "sceneMap, navigationState");

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
