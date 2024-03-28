
import { userlistdata } from "../Constants/UserListApiConstant";

let initialValues = {
  userlistapi: [],
};

export const UserReducer = (value = initialValues, action) => {
  switch (action?.type) {
    case userlistdata.REQUEST:
      return { userlistapi: action?.payload };
    case userlistdata.SUCCESS:
      return { userlistapi: action?.payload };
    case userlistdata.ERROR:
      return { userlistapi: action?.payload };
    default:
      return value;
  }
};
