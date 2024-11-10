import { FC, PropsWithChildren } from "react";
import { cn } from "../../styles/utils";

type ButtonProps = {
    onClick?: () => void;
    className?: string;
    // other props
};

const Button: FC<ButtonProps & PropsWithChildren> = ({
    onClick,
    className,
    children,
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "bg-mts-500 px-4 py-2 rounded-xl text-black text-sm",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
