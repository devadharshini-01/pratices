export const createAction = (val) => ({
  REQUEST: `${val}_REQUEST`,
  SUCCESS: `${val}_SUCCESS`,
  ERROR: `${val}_ERROR`,
  RESET: `${val}_RESET`,
});

export const RetailerHeaderName=[
  { name: "displayId", 
  displayName: "RetailerId" 
 
},
  {
    name: "companyName",
    displayName: "RetailerName",
  },
  { name: "address", displayName: "Location" },
  {
    name: "joinedDate",

    displayName: "joinedDate",
  },
  {
    name: "numberOfStoreLocations",

    displayName: "No of Locations",
  },
  {
    name: "monthlySalesSort",
    displayName: "No of Orders",
  },

]

export const DistributorHeaderName=[
  {
    name: "displayId",
    displayName: "DistributorId",
    sort: true,
  },
  {
    name: "companyName",
    displayName: "DistributorName",
    sort: true,
  },
  {
    name: "address",
    displayName: "Location",
    sort: false,
  },
  {
    name: "ENVB",
    displayName: "ERP/INV System",
  },
  {
    name: "noOfMappedRetailers",
    displayName: "Linked Retailers",
  },
  {
    name: "monthlyOrders",
    displayName: "Monthly Orders",
  },
  {
    name: "monthlySales",
    displayName: "monthlySales",
  },
]
// export const sidebarData = [
//   { name: "Distributor", path: "/Distributor" },
//   { name: "Retailer", path: "/Retailer" },
// ];



export const AdminData = [
  { name: "Dashboard", path: "/Dashboard" },
  { name: "Distributor", path: "/Distributor" },
  { name: "Exchange", path: "/Exchange" },
  { name: "Retailer", path: "/Retailer" },
  { name: "Reports", path: "/Retailer" },

]

export const DistributorData=[
  { name: "Dashboard", path: "/Dashboard" },
  { name: "Exchange", path: "/Exchange" },
  { name: "Retailer", path: "/Retailer" },
  { name: "Orders", path: "/ddOrder" },
  { name: "Platform Fees", path: "/ssfee" },
  { name: "Reports", path: "/Distributor/reports" }
]

export const RetailerData=[
  { name: "Dashboard", path: "/Retailer" },
  { name: "Orders", path: "/Retailer" },
  { name: "Distributors", path: "/Retailer" },
  { name: "Platform Fees", path: "/Retailer" },
  { name: "Reports", path: "/Retailer" }
]

