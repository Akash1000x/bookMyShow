import SignIn from "@/components/form/sign-in";
import React from "react";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

export default function page(props: Props) {
  return (
    <div className="flex h-full items-center justify-center">
      <SignIn error={props.searchParams?.error} callbackUrl={props.searchParams?.callbackUrl} />
    </div>
  );
}
