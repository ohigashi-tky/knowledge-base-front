import { Link } from "@remix-run/react";
import { buttonVariants } from "app/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "app/components/ui/table"

export default function knowledge() {
  return (
    <div>
      <p className="text-2xl">
        ナレッジ管理
      </p>
      <div className="m-5">
        <Link
          to="create"
          className={`${buttonVariants({ variant: "outline" })} py-3 px-5 bg-gray-200 hover:bg-gray-300`}
        >
          登録
        </Link>
      </div>

      <div className="m-5">
        {/* component化 DataTable */}
        <Table>
          {/* <TableCaption>ナレッジテーブル</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">ID</TableHead>
              <TableHead className="w-[150px]">カテゴリ</TableHead>
              <TableHead className="w-[300px]">課題</TableHead>
              <TableHead className="w-[600px]">回答</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Wi-Fi</TableCell>
              <TableCell>Wi-Fiが繋がらない</TableCell>
              <TableCell>別の端末で繋がるか確認。繋がる場合は端末の再起動または設定の見直し。繋がらない場合はルーターの再起動などを行う。</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}