import toast from "react-hot-toast";
import { SUCCESS } from "../constants";

export const notify = (message, type = SUCCESS) => {
  type === SUCCESS ? toast.success(message) : toast.error(message);
};
