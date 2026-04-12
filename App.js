import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Csscom from "./css_com";
import Page_com from "./page/page_com";
import State from "./page/state";
import Setstate from "./page/setstate";
import FunctionalState from "./page/func_state";
import Props_fun from "./page/props_fun";
import Class_props from "./page/class_props";
// import Compontent from "./page/compontent";
import AlertExample from "./page/alerts";
import Flexdesign from "./page/design";
import Scrollviews from "./page/scrollviews";

export class App extends Component {
  render() {
    // const mystyle=StyleSheet.create({
    //   red:{
    //     color:'red',
    //     fontWeight: "bold"
    //   },
    //   purple:{
    //     color:'purple',
    //     fontWeight:'bold'
    //   }

    // });
    return (
      <View style={{ flex: 1 }}>
        {/* <Page_com/> */}
        {/* <State/> */}
        {/* <Setstate /> */}
        {/* <FunctionalState /> */}
        {/* <Props_fun name="John" age={25} gender="male" /> */}
        {/* <Class_props name="John" age={25} gender="male" /> */}
        {/* <Compontentomponent /> */}

        {/* <Flexdesign /> */}

        <Scrollviews />

        {/* <Csscom/> */}
        {/* <Text style={mystyle.red}> this is red </Text>
       <Text style={mystyle.purple}> this is purple </Text> */}
      </View>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import { Text, View } from "react-native";
// import { AlertExample } from "./App";

// export class ComponentSome extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1, // This tells the view to fill the entire screen
//           flexDirection: "row",
//           backgroundColor: "teal",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text>a</Text>
//         <Text>b</Text>
//         <Text>c</Text>
//       </View>
//     );
//   }
// }

// export default ComponentSome;
