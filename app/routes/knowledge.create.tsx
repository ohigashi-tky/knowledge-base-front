import { Link } from "@remix-run/react";
import { buttonVariants } from "app/components/ui/button"

export default function knowledgeCreate() {
  return (
    <div>
      <p className="text-2xl">
        ナレッジ登録
      </p>
      <div>
        <Link
          to="../knowledge"
          className={`${buttonVariants({ variant: "outline" })} py-3 px-5 bg-gray-200 hover:bg-gray-300`}
        >
          戻る
        </Link>
      </div>
    </div>
  );
}