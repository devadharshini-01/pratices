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