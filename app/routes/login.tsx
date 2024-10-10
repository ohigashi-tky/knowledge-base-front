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
    <Form method="post">
      <input type="email" name="email" required placeholder="Email" />
      <input type="password" name="password" required placeholder="Password" />
      <button type="submit">Log In</button>
      {actionData?.error && <p>{actionData.error}</p>}
    </Form>
  );
}