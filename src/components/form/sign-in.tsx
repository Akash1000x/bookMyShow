"use client";
import { Label } from "@radix-ui/react-label";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Inputs = {
  phoneNumber: string;
  password: string;
};

export default function SignIn() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await signIn("credentials", {
        phone: data.phoneNumber,
        password: data.password,
        redirect: false,
      });
      if (res?.ok) {
        router.push("/home");
      } else if (!res?.ok) {
        setError("password", { message: "Invalid phone number or password" });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="mx-auto min-w-[25rem] rounded-sm border p-4">
      <h2 className="text-center text-3xl font-bold uppercase">sign in</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="phone">Phone*</Label>
        <Input
          type="tel"
          placeholder="phone.."
          id="phone"
          {...register("phoneNumber", { required: true, minLength: 10, maxLength: 10, pattern: /^[0-9]+$/ })}
        />
        {errors.phoneNumber && <p className="text-red-500">write a valid phone number</p>}

        <Label htmlFor="password">Password*</Label>
        <Input
          type="password"
          placeholder="****"
          id="password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "password should be at least 8 characters",
            },
            maxLength: {
              value: 20,
              message: "password should be at most 20 characters",
            },
            required: "password is required",
          })}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        <Button type="submit" className="mt-4">
          Sign In
        </Button>
      </form>
    </div>
  );
}
