import { json, redirect } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { createServerClient } from '@supabase/auth-helpers-remix';

export const action = async ({ request }) => {
  const response = new Response();
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return json({ error: "Supabase credentials are not set" }, { status: 500 });
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, { request, response });

  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  const { error } = await supabase.auth.signInWithPassword({
    email: email as string,
    password: password as string,
  });

  if (error) {
    return json({ error: error.message });
  }

  return redirect('/dashboard');
};

export default function Login() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          ログイン
        </h2> */}
        <Form method="post" className="space-y-6">
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              placeholder=""
              className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2.5 text-sm text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              required
              placeholder=""
              className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <label
              htmlFor="password"
              className="absolute left-3 -top-2.5 text-sm text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Log In
          </button>
          {actionData?.error && (
            <p className="text-red-500 text-center">{actionData.error}</p>
          )}
        </Form>
        <div className="text-center mt-6">
          <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
            パスワードを忘れましたか？
          </a>
        </div>
      </div>
    </div>
  );
}