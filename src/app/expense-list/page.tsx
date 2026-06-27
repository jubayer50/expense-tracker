import { Table } from "@heroui/react";
import { getExpenses } from "../../../expense";
import UpdateExpense from "../../Components/UpdateExpense/UpdateExpense";
import DeleteExpense from "../../Components/DeleteExpense/DeleteExpense";

const ExpenseList = async () => {
  const expenses = await getExpenses();

  return (
    <div className="max-w-330 px-3 mx-auto flex justify-center mt-5">
      <div>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-500 text-center">
          Expense List
        </h2>

        <div></div>

        <div className="mt-6">
          <Table className="max-w-200 mx-auto w-full">
            <Table.ScrollContainer>
              <Table.Content
                aria-label="Team members"
                className=" max-w-200 mx-auto w-full"
              >
                <Table.Header>
                  <Table.Column isRowHeader>#No.</Table.Column>
                  <Table.Column>Title</Table.Column>
                  <Table.Column>Amount</Table.Column>
                  <Table.Column>Date</Table.Column>
                  <Table.Column>Action</Table.Column>
                </Table.Header>

                <Table.Body>
                  {expenses.map((expense, i) => (
                    <Table.Row key={expense._id}>
                      <Table.Cell>{i + 1}</Table.Cell>
                      <Table.Cell>{expense.title}</Table.Cell>
                      <Table.Cell>${expense.amount}</Table.Cell>
                      <Table.Cell>{expense.date}</Table.Cell>

                      <Table.Cell className={"flex gap-3"}>
                        <UpdateExpense expense={expense}></UpdateExpense>

                        <DeleteExpense expenseId={expense._id}></DeleteExpense>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
