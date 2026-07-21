"use client";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

type LoadingButtonProps = ComponentProps<typeof Button> & {
  loading?: boolean;
};

export default function LoadingButton({
  loading,
  children,
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <Button disabled={disabled || loading} {...props}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

      {children}
    </Button>
  );
}
