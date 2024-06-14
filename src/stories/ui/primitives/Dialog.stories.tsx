import type { Meta, StoryObj } from "@storybook/react";
import { IconMenu } from "icons";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogBody,
  DialogButton,
  DialogClose,
  DialogDescription,
  DialogModal,
  DialogTitle,
  InputField,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHead,
  TableRow,
} from "ui/primitives";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: "UI Primitives/Dialog",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args) => (
    <DialogButton
      {...args}
      variant="primary"
      icon={<IconMenu />}
      label="Open Dialog"
    >
      {({ close }) => (
        <>
          <DialogClose onPress={close} />
          <DialogTitle>Open Dialog</DialogTitle>
          <DialogDescription>
            The refund will be reflected in the customer’s bank account 2 to 3
            business days after processing.
          </DialogDescription>
          <DialogBody>
            <InputField label="Amount" name="amount" placeholder="$0.00" />
          </DialogBody>
          <ButtonGroup>
            <Button onPress={close}>Refund</Button>
            <Button variant="subtle" onPress={close}>
              Cancel
            </Button>
          </ButtonGroup>
        </>
      )}
    </DialogButton>
  ),
};
export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onPress={() => setIsOpen(!isOpen)}>Open Dialog</Button>
        <DialogModal
          isDismissable
          isOpen={isOpen}
          onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
        >
          <Dialog>
            <DialogTitle>Open Dialog</DialogTitle>
            <DialogDescription>
              The refund will be reflected in the customer’s bank account 2 to 3
              business days after processing.
            </DialogDescription>
            <DialogBody>
              <InputField label="Amount" name="amount" placeholder="$0.00" />
            </DialogBody>
            <ButtonGroup>
              <Button onPress={() => setIsOpen(false)}>Refund</Button>
              <Button variant="subtle" onPress={() => setIsOpen(false)}>
                Cancel
              </Button>
            </ButtonGroup>
          </Dialog>
        </DialogModal>
      </>
    );
  },
};

export const BodyBleed: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onPress={() => setIsOpen(!isOpen)}>Open Dialog</Button>
        <DialogModal
          isDismissable
          isOpen={isOpen}
          onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
        >
          <Dialog>
            <DialogTitle>Open Dialog</DialogTitle>
            <DialogDescription>
              The refund will be reflected in the customer’s bank account 2 to 3
              business days after processing.
            </DialogDescription>
            <DialogBody bleed={true}>
              <Table bleed={true}>
                <TableHead>
                  <TableRow>
                    <TableColumn isRowHeader>Name</TableColumn>
                    <TableColumn>Number</TableColumn>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Jake</TableCell>
                    <TableCell>7</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Kale</TableCell>
                    <TableCell>8</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </DialogBody>
            <ButtonGroup>
              <Button onPress={() => setIsOpen(false)}>Refund</Button>
              <Button variant="subtle" onPress={() => setIsOpen(false)}>
                Cancel
              </Button>
            </ButtonGroup>
          </Dialog>
        </DialogModal>
      </>
    );
  },
};
