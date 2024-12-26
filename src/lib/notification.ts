export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) {
    console.error('Notification API is not supported in this browser.')
  } else if (Notification.permission === 'default') {
    await Notification.requestPermission()
  } else {
    console.warn('User has declined notification!')
  }
}

export const sendNotification = async () => {
  if (Notification.permission === 'denied') {
    return console.warn('User has declined notification!')
  }
  if (Notification.permission !== 'granted') {
    await requestNotificationPermission()
  }

  new Notification('Chào bạn!', {
    body: 'Đây là một thông báo từ Vue.js',
    icon: './logo.png',
  })
}
