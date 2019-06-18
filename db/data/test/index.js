module.exports = {
  devices: [
    {
      deviceType: 1,
      brand: 1,
      OS: 1,
      inStock: true,
      employee: null,
      ETR: null
    },
    {
      deviceType: 2,
      brand: 2,
      OS: 2,
      inStock: true,
      employee: null,
      ETR: null
    },
    {
      deviceType: 3,
      brand: 3,
      OS: 3,
      inStock: true,
      employee: null,
      ETR: null
    },
    {
      deviceType: 1,
      brand: 2,
      OS: 4,
      inStock: true,
      employee: null,
      ETR: null
    }
  ],
  deviceTypes: [
    {
      name: "laptop",
      url: "https://static.thenounproject.com/png/114-200.png"
    },
    {
      name: "smartphone",
      url:
        "http://icons.iconarchive.com/icons/iconsmind/outline/256/Smartphone-4-icon.png"
    },
    {
      name: "tablet",
      url: "https://png.pngtree.com/svg/20170105/36c165e29c.png"
    }
  ],
  brands: [
    { name: "Apple" },
    { name: "Acer" },
    { name: "Dell" },
    { name: "Samsung" }
  ],
  operatingSystems: [
    { name: "Bionic Beaver", family: "Ubuntu", build: "18.04.2" },
    { name: "iOS", family: "Apple", build: "12.3" },
    { name: "Pie", family: "Android", build: "9.0" },
    { name: "Windows XP", family: "Microsoft", build: "5.1.2600" }
  ],
  departments: [
    { name: "Tech" },
    { name: "Legal" },
    { name: "Human Resources" },
    { name: "Sales" }
  ],
  employees: [
    { forename: "Jim", surname: "Jimson", department: 1 },
    { forename: "Tim", surname: "Timson", department: 2 },
    { forename: "Tom", surname: "Tomson", department: 3 },
    { forename: "Dom", surname: "Domson", department: 4 },
    { forename: "Don", surname: "Donson", department: 1 },
    { forename: "Ron", surname: "Ronson", department: 2 }
  ]
};
