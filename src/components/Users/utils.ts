export function createData(
  name: string,
  email: string,
  company: string,
  access: string
) {
  return {
    name,
    email,
    company,
    access,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}
