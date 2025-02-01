"use client";

import { useState } from "react";
import { createClient } from "../../../utils/supabase/client";
import { ToastContainer, toast } from 'react-toastify';

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {

    const notifySuccessfulSignUp = () => toast("You have been signed up successfully! Check your email");
    e.preventDefault();

    const supabase = createClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName, // Add first_name to raw_user_meta_data
        },
      },
    });

    if (error) {
      console.error("Error signing up:", error);
      return;
    }

    console.log("User signed up:", data);
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="text"
        placeholder="Enter your first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
