let organisations = [
  {
    name: "Santa Monica",
    number: 1995,
    credit_amount: "$10,800",
    created: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    credit_amount: "$8,000",
    created: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    credit_amount: "$9,500",
    created: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    credit_amount: "$14,000",
    created: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    credit_amount: "$4,600",
    created: "01/27/1998",
  },
];

export function getOrganisations() {
  return organisations;
};
export function getOrganisation(number) {
  return organisations.find(
    (organisation) => organisation.number === number
  );
};
export function deleteOrganisation(number) {
  organisations = organisations.filter(
    (organisation) => organisation.number !== number
  );
}