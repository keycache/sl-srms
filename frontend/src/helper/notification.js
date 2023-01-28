import toast from "react-hot-toast";

export const notify = (message, type = "success") => {
  type === "success" ? toast.success(message) : toast.error(message);
};
