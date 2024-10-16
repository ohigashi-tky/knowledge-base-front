import { Link } from "@remix-run/react";
import { Button, buttonVariants } from "app/components/ui/button"


export default function knowledge() {
  return (
    <div>
      <p className="text-2xl">
        ナレッジ管理
      </p>
      <div>
        {/* <Link
          to="create"
          className="py-3 px-5 bg-blue-500 hover:bg-blue-600 text-white rounded inline-block"
        >
          登録
        </Link> */}
        <Link
          to="create"
          className={`${buttonVariants({ variant: "outline" })} py-3 px-5 bg-gray-200 hover:bg-gray-300`}
        >
          登録
        </Link>
      </div>
    </div>
  );
}