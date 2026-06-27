export type expenseData = {
  _id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  createAt: string;
};

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export const getExpenses = async (): Promise<expenseData[]> => {
  const res = await fetch(`${base_url}/api/expenses`);

  const data: expenseData[] = await res.json();

  return data;
};

// for update
type expenseDataUpdate = {
  title: string;
  amount: number;
  category: string;
  date: string;
};

type updatePromise = {
  acknowledged: boolean;
  modifiedCount: number;
  upsertedId: null | string;
  upsertedCount: number;
  matchedCount: number;
};

export const updateExpense = async (
  updateExpenseData: expenseDataUpdate,
  expenseId: string,
): Promise<updatePromise> => {
  const res = await fetch(`${base_url}/api/expenses/${expenseId}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(updateExpenseData),
  });

  return res.json();
};

// for delete
type deleteExpenseResponse = {
  acknowledged: boolean;
  deletedCount: number;
};

export const deleteExpense = async (
  expenseId: string,
): Promise<deleteExpenseResponse> => {
  const res = await fetch(`${base_url}/api/expenses/${expenseId}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  });
  return res.json();
};
