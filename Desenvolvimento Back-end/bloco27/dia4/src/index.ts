type Notification = {
    type: string;
    send: (message: string) => void;
}

const consoleNotification: Notification =  {
    type: 'Console',
    send: (message) => {
    console.log('Console', message);
    
    }
}

const emailNotification: Notification = {
    type: 'Email',
    send: (message) => {
        console.log('Email', message);
        
    }
}

const phoneNotification: Notification = {
    type: "Phone",
    send: function(message) {
      console.log('Phone: ', message);
    }
  };

  const notifications: Notification[] = [
      consoleNotification, emailNotification, phoneNotification
  ]

export function progressNotification(
    message: string,
    type_: string = 'Console',
    notificationsArray: Notification[] = notifications): void {
        notificationsArray.forEach(notification => {
            if (notification.type === type_) {
                notification.send(message);
            }
        })
    }
