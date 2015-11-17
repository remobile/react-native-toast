# React Native Toast (remobile)
A android like toast for react-native support for ios and android

## Installation
```sh
npm install react-native-toast --save
```

### Installation (iOS)
* Drag RCTToast.xcodeproj to your project on Xcode.
* Click on your main project file (the one that represents the .xcodeproj) select Build Phases and drag libRCTToast.a from the Products folder inside the RCTToast.xcodeproj.
* Look for Header Search Paths and make sure it contains both $(SRCROOT)/../react-native/React as recursive.

### Installation (Android)
```gradle
...
include ':react-native-toast'
project(':react-native-toast').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-toast/android')
```

* In `android/app/build.gradle`

```gradle
...
dependencies {
    ...
    compile project(':react-native-toast')
}
```

* register module (in MainActivity.java)

```java
import com.remobile.toast.*;  // <--- import

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {
  ......
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    mReactRootView = new ReactRootView(this);

    mReactInstanceManager = ReactInstanceManager.builder()
      .setApplication(getApplication())
      .setBundleAssetName("index.android.bundle")
      .setJSMainModuleName("index.android")
      .addPackage(new MainReactPackage())
      .addPackage(new RCTToastPackage())              // <------ add here
      .setUseDeveloperSupport(BuildConfig.DEBUG)
      .setInitialLifecycleState(LifecycleState.RESUMED)
      .build();

    mReactRootView.startReactApplication(mReactInstanceManager, "ExampleRN", null);

    setContentView(mReactRootView);
  }

  ......
}
```

### Screencasts
![ios](https://github.com/remobile/react-native-toast/blob/master/screencasts/ios.gif)

## Usage

### Example
```js
var React = require('react-native');
var {
    StyleSheet,
    View,
    Image
} = React;

var Toast = require('react-native-toast');
var Button = require('react-native-simple-button');

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
