import * as Icons from '@radix-ui/react-icons';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen py-5">
      <nav id="sidebar">
        <ul>
          <li>
            <NavLink
              to="dashboard"
              className={({ isActive, isPending }) =>
                `my-1 py-3 flex items-center gap-2 ${isPending ? "pending" : isActive ? "active" : ""}`
              }
            >
              <Icons.HomeIcon className="w-5 h-5" />
              <span>ダッシュボード</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="knowledge"
              className={({ isActive, isPending }) =>
                `my-1 py-3 flex items-center gap-2  ${isPending ? "pending" : isActive ? "active" : ""}`
              }
            >
              <Icons.HomeIcon className="w-5 h-5" />
              <span>ナレッジ管理</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="setting"
              className={({ isActive, isPending }) =>
                `my-1 py-3 flex items-center gap-2  ${isPending ? "pending" : isActive ? "active" : ""}`
              }
            >
              <Icons.HomeIcon className="w-5 h-5" />
              <span>設定</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
