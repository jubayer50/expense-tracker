"use client";

type expenseData = {
  title: string;
  amount: number;
  category: string;
  date: string;
};

import { createExpense } from "@/lib/action/addExpense";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  DateField,
  toast,
} from "@heroui/react";

const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const formData = new FormData(form);

  const expenseData: expenseData = {
    title: formData.get("title") as string,
    amount: Number(formData.get("amount")),
    category: formData.get("category") as string,
    date: formData.get("date") as string,
  };

  const result = await createExpense(expenseData);

  if (result.insertedId) {
    toast.success("Expense added!");
  }

  form.reset();
};

const AddExpense = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-330 mx-auto px-3 flex justify-center items-center">
        <div className="max-w-136 w-full mx-auto rounded-lg border border-slate-800 shadow p-3 md:p-6">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-600">
            Add New Expense
          </h2>

          {/* Form */}

          <div className="mt-8">
            <Form onSubmit={onSubmit} className="flex flex-col gap-4">
              <TextField isRequired name="title">
                <Label>Title</Label>
                <Input
                  placeholder="Enter your expense title"
                  className={"border border-gray-300 shadow-none rounded-md"}
                />
              </TextField>

              <TextField isRequired name="amount">
                <Label>Expense Amount</Label>
                <Input
                  type="number"
                  placeholder="Enter your expense amount"
                  className={"border border-gray-300 shadow-none rounded-md"}
                />
              </TextField>

              <div>
                <Select isRequired name="category" placeholder="Select one">
                  <Label>Category</Label>
                  <Select.Trigger
                    className={"rounded-md border border-gray-300 shadow-none"}
                  >
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover className={"rounded-md"}>
                    <ListBox>
                      <ListBox.Item id="shopping" textValue="Shopping">
                        Shopping
                      </ListBox.Item>

                      <ListBox.Item id="food" textValue="Food">
                        Food
                      </ListBox.Item>

                      <ListBox.Item id="transport" textValue="Transport">
                        Transport
                      </ListBox.Item>

                      <ListBox.Item id="bills" textValue="Bills">
                        Bills
                      </ListBox.Item>

                      <ListBox.Item
                        id="entertainment"
                        textValue="Entertainment"
                      >
                        Entertainment
                      </ListBox.Item>

                      <ListBox.Item id="health" textValue="Health">
                        Health
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              <div>
                <DateField isRequired name="date">
                  <Label>Date</Label>
                  <DateField.Group
                    className={"rounded-md border border-gray-300 shadow-none"}
                  >
                    <DateField.Input>
                      {(segment) => <DateField.Segment segment={segment} />}
                    </DateField.Input>
                  </DateField.Group>
                </DateField>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className={"rounded-md"}>
                  Submit Expense
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddExpense;
