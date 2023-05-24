"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Inputs/Input";
import { data } from "autoprefixer";
import { useCallback, useState } from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [loading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // to do
    }
    if (variant === "LOGIN") {
      // to do
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // to do
  };

  return (
    <div
      className="
            mt-8
            sm:mx-auto
            sm:w-full
            sm:max-w-md"
    >
      <div
        className="
            bg-white
            px-4  
            py-8
            shadow
            sm:rounded-lg
            sm:px-10"
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              errors={errors}
              id="name"
              type="name"
              label="Name"
              register={register}
            />
          )}

          <Input
            errors={errors}
            id="email"
            type="email"
            label="Email"
            register={register}
          />

          <Input
            errors={errors}
            id="password"
            type="password"
            label="Password"
            register={register}
          />

          <div>
            <Button>{variant === "REGISTER" ? "Register" : "Login"}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
