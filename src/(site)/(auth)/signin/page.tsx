import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In | Property",
};

const SigninPage = () => {
  redirect("/");
};

export default SigninPage;
