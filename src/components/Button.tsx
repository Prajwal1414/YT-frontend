import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
        default: ["bg-secondary", "hover:bg-secondary-hover "],
        ghost: ["hover:bg-gray-100 "],
        dark: ["hover:bg-secondary-dark-hover", "bg-secondary-dark", "text-secondary"]
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "flex",
        "justify-center",
        "items-center",
        "w-10",
        "h-10",
        "rounded-full",
        "p-2.5",
      ],
    },

  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>

const Button = ({variant, size,className, ...props} : ButtonProps) => {
  return <button {...props} className={twMerge(buttonStyles({variant, size,}),className)}></button>;
};

export default Button;
