import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up | Property",
};

const SignupPage = () => {
  redirect("/");
};

export default SignupPage;
