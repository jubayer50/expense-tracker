"use client";

import { AlertDialog, Button, toast } from "@heroui/react";
import { deleteExpense } from "../../../expense";
import { useRouter } from "next/navigation";

type deleteExpenseProps = {
  expenseId: string;
};

const DeleteExpense = ({ expenseId }: deleteExpenseProps) => {
  const router = useRouter();

  const handleDelete = async (expenseId: string) => {
    const result = await deleteExpense(expenseId);

    if (result.deletedCount > 0) {
      toast("Expense delete successfully");
      router.refresh();
    }
  };

  return (
    <AlertDialog>
      <Button size="sm" variant="danger" className={"rounded-md"}>
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="rounded-md">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Expense permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Expense</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                size="sm"
                slot="close"
                variant="tertiary"
                className={"rounded-md"}
              >
                Cancel
              </Button>

              <Button
                onClick={() => handleDelete(expenseId)}
                size="sm"
                slot="close"
                variant="danger"
                className={"rounded-md"}
              >
                Delete Expense
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteExpense;
