const data = [
  {
    id: "1",
    name: "Product Launch",
    children: [
      {
        id: "10",
        name: "Marketing Materials",
        children: [
          {
            id: "100",
            name: "Brochures",
          },
          {
            id: "101",
            name: "Ads",
          },
        ],
      },
      {
        id: "11",
        name: "Sales Training",
        children: [
          {
            id: "102",
            name: "Webinars",
          },
          {
            id: "103",
            name: "Workshops",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Customer Support",
    children: [
      {
        id: "20",
        name: "FAQ",
        children: [
          {
            id: "200",
            name: "General",
          },
          {
            id: "201",
            name: "Technical",
          },
        ],
      },
      {
        id: "21",
        name: "Live Chat",
      },
    ],
  },
  {
    id: "3",
    name: "Human Resources",
    children: [
      {
        id: "30",
        name: "Recruitment",
        children: [
          {
            id: "300",
            name: "Job Postings",
          },
          {
            id: "301",
            name: "Interview Process",
          },
        ],
      },
      {
        id: "31",
        name: "Employee Engagement",
        children: [
          {
            id: "302",
            name: "Surveys",
          },
          {
            id: "303",
            name: "Feedback",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "IT Department",
    children: [
      {
        id: "40",
        name: "Infrastructure",
        children: [
          {
            id: "400",
            name: "Servers",
          },
          {
            id: "401",
            name: "Network",
          },
        ],
      },
      {
        id: "41",
        name: "Support",
        children: [
          {
            id: "402",
            name: "Help Desk",
          },
          {
            id: "403",
            name: "Technical Assistance",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Finance",
    children: [
      {
        id: "50",
        name: "Budgeting",
      },
      {
        id: "51",
        name: "Auditing",
      },
    ],
  },
];

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100, data);
  });
}

// ▼ ▶ •

export default fetchData;
