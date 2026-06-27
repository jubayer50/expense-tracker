"use client";

import {
  Button,
  DateField,
  Form,
  Input,
  Label,
  Select,
  ListBox,
  Modal,
  Surface,
  TextField,
  toast,
} from "@heroui/react";
import { parseDate } from "@internationalized/date";
import { FaRegEdit } from "react-icons/fa";
import { updateExpense } from "../../../expense";
import { useRouter } from "next/navigation";

type expenseDataUpdate = {
  title: string;
  amount: number;
  category: string;
  date: string;
};

type expenseData = {
  _id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  createAt: string;
};

type updateExpenseProps = {
  expense: expenseData;
};

const UpdateExpense = ({ expense }: updateExpenseProps) => {
  const { _id, title, amount, category, date } = expense;

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const expenseDataUpdate: expenseDataUpdate = {
      title: formData.get("title") as string,
      amount: Number(formData.get("amount")),
      category: formData.get("category") as string,
      date: formData.get("date") as string,
    };

    const result = await updateExpense(expenseDataUpdate, _id);

    if (result.modifiedCount > 0) {
      toast.success("Expense update successfully");
      router.refresh();
    }
  };

  return (
    <Modal>
      <Button size="sm" className={"rounded-md"}>
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="rounded-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaRegEdit className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Expense</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-3">
              <Surface variant="default">
                <Form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField isRequired name="title" defaultValue={title}>
                    <Label>Title</Label>
                    <Input
                      placeholder="Enter your expense title"
                      className={
                        "border border-gray-300 shadow-none rounded-md"
                      }
                    />
                  </TextField>

                  <TextField isRequired name="amount" defaultValue={amount}>
                    <Label>Expense Amount</Label>
                    <Input
                      type="number"
                      placeholder="Enter your expense amount"
                      className={
                        "border border-gray-300 shadow-none rounded-md"
                      }
                    />
                  </TextField>

                  <div>
                    <Select
                      isRequired
                      name="category"
                      defaultValue={category}
                      placeholder="Select one"
                    >
                      <Label>Category</Label>
                      <Select.Trigger
                        className={
                          "rounded-md border border-gray-300 shadow-none"
                        }
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
                    <DateField
                      isRequired
                      name="date"
                      defaultValue={parseDate(date)}
                    >
                      <Label>Date</Label>
                      <DateField.Group
                        className={
                          "rounded-md border border-gray-300 shadow-none"
                        }
                      >
                        <DateField.Input>
                          {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                      </DateField.Group>
                    </DateField>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      slot={"close"}
                      className={"rounded-md"}
                    >
                      Update Expense
                    </Button>
                  </div>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateExpense;
