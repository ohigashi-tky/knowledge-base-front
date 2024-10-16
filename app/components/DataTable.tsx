import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "app/components/ui/table"

type Item = {
  id: number;
  category: string;
  question: string;
  answer: string;
};

type DataTableProps = {
  items: Item[];
}

export default function DataTable({items}: DataTableProps ) {
  return (
    <Table>
        <TableHeader>
        <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead className="w-[150px]">カテゴリ</TableHead>
            <TableHead className="w-[300px]">課題</TableHead>
            <TableHead className="w-[600px]">回答</TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
        {items.map((item) => (
            <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.question}</TableCell>
            <TableCell>{item.answer}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
  );
}
