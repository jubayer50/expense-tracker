const base_url = process.env.NEXT_PUBLIC_BASE_URL;

type expenseData = {
  title: string;
  amount: number;
  category: string;
  date: string;
};

type createExpenseResponse = {
  acknowledged: boolean;
  insertedId: string;
};

export const createExpense = async (
  data: expenseData,
): Promise<createExpenseResponse> => {
  const res = await fetch(`${base_url}/api/expenses`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};
