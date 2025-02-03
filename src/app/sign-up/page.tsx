"use client";

import { useState } from "react";
import { createClient } from "../../../utils/supabase/client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    const notifySuccessfulSignUp = () =>
      toast("You have been signed up successfully! Check your email");
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
      toast.error("Failed to sign up. Please try again.");
      return;
    }

    toast.success(
      "Registration successful! Please check your email to confirm."
    );
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
