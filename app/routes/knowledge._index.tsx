import { Link } from "@remix-run/react";
import { buttonVariants } from "app/components/ui/button"
import DataTable from "app/components/DataTable"

export default function knowledge() {
  const items = [
    { id: 1, category: 'カテゴリA', question: '課題1', answer: '回答1' },
    { id: 2, category: 'カテゴリB', question: '課題2', answer: '回答2' },
    { id: 3, category: 'カテゴリC', question: '課題3', answer: '回答3' },
    { id: 4, category: 'カテゴリA', question: '課題4', answer: '回答4' },
    { id: 5, category: 'カテゴリB', question: '課題5', answer: '回答5' },
  ];

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
        <DataTable items={items}/>
      </div>
    </div>
  );
}