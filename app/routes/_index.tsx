import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "ナレッジべース" },
    { name: "description", content: "ナレッジべース" },
  ];
};

export default function Index() {
  return (
    <h1 className="text-3xl font-bold underline">
      HOME
    </h1>
  )
}