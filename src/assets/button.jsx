
import React from "react";
import { cn } from "./utils"; 
import { buttonVariants } from "./buttonvariant";


const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export default Button;
