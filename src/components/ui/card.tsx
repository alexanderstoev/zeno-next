import { ReactNode } from "react";

export type CardProps = {
  children?: ReactNode;
  className?: string;
};
export const Card = ({ className, children }: CardProps) => {
  return <div className={`card bg-base-100 shadow-sm ${className}`}>{children}</div>;
};

export type CardTitleProps = {
  children?: ReactNode;
  className?: string;
};
export const CardTitle = ({ className, children }: CardTitleProps) => {
  return <h2 className={`card-title text-accent ${className}`}>{children}</h2>;
};

export type CardBodyProps = {
  children?: ReactNode;
  className?: string;
};
export const CardBody = ({ className, children }: CardBodyProps) => {
  return <div className={`card-body ${className}`}>{children}</div>;
};
