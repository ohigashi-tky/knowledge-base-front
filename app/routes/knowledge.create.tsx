import { Link } from 'react-router-dom';

export default function knowledgeCreate() {
  return (
    <div>
      <p className="text-2xl">
        ナレッジ登録
      </p>
      <div>
        <Link
          to="../knowledge"
          className="py-3 px-5 bg-blue-500 hover:bg-blue-600 text-white rounded inline-block"
        >
          戻る
        </Link>
      </div>
    </div>
  );
}