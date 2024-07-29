"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "../ui/label";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  Address: string;
};
export default function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Password and confirm password should be the same",
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ ...data }),
      });
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-auto my-16 max-w-[30rem] rounded-sm border p-4">
      <h2 className="text-center text-3xl font-bold uppercase">sign up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="firstName">First Name*</Label>
        <Input type="text" placeholder="Akash" id="firstName" {...register("firstName", { required: true })} />
        {errors.firstName && <p className="text-red-500">first name is required</p>}

        <Label htmlFor="lastName">Last Name</Label>
        <Input type="text" placeholder="kumar" id="lastName" {...register("lastName")} />

        <Label htmlFor="email">Email</Label>
        <Input type="email" placeholder="kumawatap63@gmail.com" id="email" {...register("email")} />

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

        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input type="password" placeholder="****" id="confirmPassword" {...register("confirmPassword")} />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

        <Label htmlFor="address">Address*</Label>
        <Input type="text" placeholder="address.." id="address" {...register("Address", { required: true })} />
        {errors.Address && <p className="text-red-500">address is required</p>}
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </div>
  );
}
