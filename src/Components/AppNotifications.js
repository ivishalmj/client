/* eslint-disable semi */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NotificationSystem from 'react-notification-system';

export default () => {
  const [notificationsInUse, setNotificationsInUse] = useState([]);

  const notificationSystem = React.useRef();
  //   const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.appNotifications.notifications
  );
  useEffect(() => {
    if (notificationSystem.current) {
      notifications.forEach((notification) => {
        if (!notificationsInUse.includes(notification.id)) {
          notificationSystem.current.addNotification({
            message: notification.message,
            level: notification.status,
          });
          setNotificationsInUse(notificationsInUse.concat([notification.id]));
        }
      });
    }
  }, [notificationSystem, notifications, notificationsInUse]);

  return (
    <div>
      <NotificationSystem ref={notificationSystem} />
    </div>
  );
};
