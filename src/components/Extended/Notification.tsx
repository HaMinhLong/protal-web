import { NotificationManager } from "react-notifications";

const createNotification = (
  type: "info" | "success" | "warning" | "error",
  message: string
) => {
  if (type === "success")
    return NotificationManager.success(message, "Success message", 3000);
  else if (type === "info")
    return NotificationManager.info(message, "Info message", 3000);
  else if (type === "warning")
    NotificationManager.warning(message, "Warning message", 3000);
  else if (type === "error")
    NotificationManager.error(message, "Error message", 3000);
};

export default createNotification;
