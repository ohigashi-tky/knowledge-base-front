import * as Icons from '@radix-ui/react-icons';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <nav>
        <ul>
          <li className="py-2 flex items-center gap-2">
            <Icons.HomeIcon className="w-5 h-5" />
            <span>ホーム</span>
          </li>
          <li className="py-2 flex items-center gap-2">
            <Icons.PersonIcon className="w-5 h-5" />
            <span>情報管理</span>
          </li>
          <li className="py-2 flex items-center gap-2">
            <Icons.GearIcon className="w-5 h-5" />
            <span>設定</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
