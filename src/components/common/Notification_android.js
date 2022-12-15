import PushNotification, { Importance } from 'react-native-push-notification';

const showNotification = (title, message, date) => {
  PushNotification.configure({
    // (required) Called when a remote or local notification is opened or received
    onNotification: function (notification) {},
    popInitialNotification: true,
    requestPermissions: true,
  });
  PushNotification.createChannel(
    {
      channelId: 'channel-id',
      channelName: 'My channel',
      channelDescription: 'A channel to categorise your notifications',
      playSound: false,
      soundName: 'default',
      importance: Importance.HIGH,
      vibrate: true,
    },
    created => console.log(`createChannel returned '${created}'`),
  );

  PushNotification.localNotification({
    channelId: 'channel-id', // this we get from above func()
    title: title,
    message: message,
    autoCancel: true,
    subText: 'Notification',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    ignoreInForeground: false,
    importance: 'high',
    invokeApp: true,
    allowWhileIdle: true,
    priority: 'high',
    visibility: 'public',
    date: date,
  });
};
export { showNotification };
