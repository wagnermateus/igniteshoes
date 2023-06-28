import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.sendTags({
    user_name: "Wagner",
    user_email: "wagnermateus7@gmail.com",
  });
}
