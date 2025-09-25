import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = "button",
    className = "",
    disabled = false
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${className} ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'hover:opacity-90'
                }`}
        >
            {children}
        </button>
    );
};

export default Button;