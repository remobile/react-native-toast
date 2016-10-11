# React Native Toast (remobile)
A android like toast for react-native support for ios and android

## Installation
```sh
npm install @remobile/react-native-toast --save
```

### Installation (iOS)
* Drag RCTToast.xcodeproj to your project on Xcode.
* Click on your main project file (the one that represents the .xcodeproj) select Build Phases and drag libRCTToast.a from the Products folder inside the RCTToast.xcodeproj.
* Look for Header Search Paths and make sure it contains both $(SRCROOT)/../../../react-native/React as recursive.

### Installation (Android)
```gradle
...
include ':react-native-toast'
project(':react-native-toast').projectDir = new File(settingsDir, '../node_modules/@remobile/react-native-toast/android')
```

* In `android/app/build.gradle`

```gradle
...
dependencies {
    ...
    compile project(':react-native-toast')
}
```

* register module (in MainApplication.java)

```java
......
import com.remobile.toast.RCTToastPackage;  // <--- import

......

@Override
protected List<ReactPackage> getPackages() {
   ......
   new RCTToastPackage(),            // <------ add here
   ......
}

```
```

### Screencasts
![ios](https://github.com/remobile/react-native-toast/blob/master/screencasts/ios.gif)

## Usage

### Example
```js
var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    View,
    Image
} = ReactNative;

var Toast = require('react-native-toast');
var Button = require('@remobile/react-native-simple-button');

module.exports = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={Toast.show.bind(null, "this is a message")}>
                    show
                </Button>
                <Button onPress={Toast.showShortTop.bind(null, "this is a message")}>
                    showShortTop
                </Button>
                <Button onPress={Toast.showShortCenter.bind(null, "this is a message")}>
                    showShortCenter
                </Button>
                <Button onPress={Toast.showShortBottom.bind(null, "this is a message")}>
                    showShortBottom
                </Button>
                <Button onPress={Toast.showLongTop.bind(null, "this is a message")}>
                    showLongTop
                </Button>
                <Button onPress={Toast.showLongCenter.bind(null, "this is a message")}>
                    showLongCenter
                </Button>
                <Button onPress={Toast.showLongBottom.bind(null, "this is a message")}>
                    showLongBottom
                </Button>
            </View>
        );
    },
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingVertical:150,
    }
});
```

### HELP
* look https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin


### thanks
* this project come from https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin

### see detail use
* https://github.com/remobile/react-native-template
