import React from 'react';
import './input.css';

interface InputProps {
  /** All optional */

  /**
   * What type of input? (text, number, date, etc.)
   */
  type?: string;

  /**
   * Class name for css
   */
  className?: string;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Change handler
   */
  onChange?: () => void;

  /**
   * Placeholder value for input
   */
  placeholder?: string;

  /**
   * Name of the input
   */
  name?: string;

  /**
   * ID for input
   */
  id?: string;

  /**
   * Value for input
   */
  value?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
                        type,
                        className,
                        placeholder,
                        onClick,
                        onChange,
                        name,
                        value,
                        id,
                        ...props
                      }: InputProps) => {

  return (
    <input
      id={id}
      name={name}
      value={value}
      onClick={onClick}
      onChange={onChange}
      type={type}
      className={className}
      placeholder={placeholder}
      {...props}
    />
  );
};
