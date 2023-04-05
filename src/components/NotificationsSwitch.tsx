import { useContext, useEffect, useRef, useState } from "react";
import { addSubscription, removeSubscription } from "../utils/api";
import { UserContext } from "../contexts/User";

const PUBLIC_VAPID_KEY = "BN-oiiqi7GJuFyKFw7Zryfr0aY_1_TRmxqjREHSTiwoqJZG1FWA8hiHXH0SwNXOov_Etnfyh3oB8s6ktMp6uHmI";

export default function NotificationsSwitch() {

  const [ checked, setChecked ] = useState(Notification.permission === "granted" ? true : false)
  const [ err, setErr ] = useState('');

  const {user} = useContext(UserContext);

  //Decides whether a subscription should be sent to the BE or not
  const sendSubscriptionRef = useRef(false)

  useEffect(() => {
    setErr("");

    if (sendSubscriptionRef.current) {
      navigator.serviceWorker.ready
        .then(registration => {
          let permission: Promise<NotificationPermission> | NotificationPermission;

          if (checked) {
            if (Notification.permission === "granted") {
              permission = "granted"
            } else {
              permission = Notification.requestPermission();
            }
          } else {
            permission = "denied"
          }

          return Promise.all([permission, registration.pushManager.getSubscription(), registration])
        })
        .then(([permission, subscription, registration]) => {
          if (permission === "granted") {
            if (!subscription) {
              return registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: PUBLIC_VAPID_KEY
              })
              .then((subscription) => {
                //Note: settings is unavailable when logged out
                return addSubscription(user!, subscription)
              })
            }
            else {
              return addSubscription(user!, subscription);
            }
          } else {
            if (subscription) {
              return removeSubscription(subscription)
            }
          }
        })
        .catch((err) => {
          sendSubscriptionRef.current = false;
          setChecked(!checked);
          setErr("something went wrong, please try again later")
        })
    } else {
      sendSubscriptionRef.current = true;
    }

  }, [checked])

  return (
    <>
      <div className="toggle-option">
        <p className="label-text">Notifications</p>
        <p>{err}</p>
        <label className="toggle-label" htmlFor="notifications-switch">
          <input
            id="notifications-switch"
            type="checkbox"
            checked={checked}
            onClick={() => setChecked(!checked)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </>
  );
}
