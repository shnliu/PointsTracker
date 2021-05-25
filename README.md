# PointsTracker

This is a react native project.
Tracks points between 2 people for some friendly competition or trivial grudge.

Development OS: MacOS
Target OS: Android


# To run

1. Open Android Studio (Emulator)
2. Open AVD manager (Purple icon)
3. Run Device of choice (Click green play button)
    - Make sure that device appears
4. Open Webstorm (or IDE of choice)
5. Open terminal: Cd into project folder: PointsTracker
6. In folder PointsTracker: $ react-native run-android
    - Make sure that build is successful
    
To refresh device upon changes:
   - Double press "r" keyboard
   - Note: double r refresh does not work on modal screen
    

# Set Up

React Navigation: https://facebook.github.io/react-native/docs/navigation

With fix: 
- https://github.com/kmagiera/react-native-gesture-handler/issues/494
- react-native link react-native-gesture-handler

With fix:
- https://github.com/kmagiera/react-native-gesture-handler/issues/761
- In folder: ./android/gradle.properties
  "android.useAndroidX=true
  android.enableJetifier=true"
  
Rebuild and update yarn as needed.

# Main Libraries
- react-native-pie-chart
- react-navigation
- react-native-simple-radio-button
- react-native-vector-icons/MaterialIcons

![IMG_1913](https://user-images.githubusercontent.com/43304600/119574335-6f837000-bd6a-11eb-837b-db4f71e035f5.PNG)

