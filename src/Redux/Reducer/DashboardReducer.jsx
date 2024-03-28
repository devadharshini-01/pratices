import { DistributorList, constantapidata } from "../Constants/DashboardConstant";


let initialValues = {
  constantgetapi: [],
  GetDistributorList: [],
};

export const DashboardReducer = (value = initialValues, action) => {
  switch (action?.type) {
    case constantapidata.REQUEST:
      return { constantgetapi: action?.payload };
    case constantapidata.SUCCESS:
      return { constantgetapi: action?.payload };
    case constantapidata.ERROR:
      return { constantgetapi: action?.payload };
    default:
      return value
  }
};
export const DistributorListReducer = (value = initialValues, action) => {
  switch (action?.type) {
    case DistributorList.REQUEST:
      return { GetDistributorList: action?.payload };
    case DistributorList.SUCCESS:
      return { GetDistributorList: action?.payload };
    case DistributorList.ERROR:
      return { GetDistributorList: action?.payload };
    default:
      return value
  }
};