"use client";

import * as React from "react";

export type FieldValues = Record<string, unknown>;
export type FieldPath<TFieldValues extends FieldValues> = Extract<
  keyof TFieldValues,
  string
>;

export interface ControllerRenderProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> {
  field: {
    name: TName;
    value: TFieldValues[TName] | undefined;
    onChange: (value: unknown) => void;
    onBlur: () => void;
    ref: (element: unknown) => void;
  };
}

export interface ControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName;
  control?: unknown;
  render?: (props: ControllerRenderProps<TFieldValues, TName>) => React.ReactNode;
}

export function Controller<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ name, render }: ControllerProps<TFieldValues, TName>) {
  if (!render) {
    return null;
  }
  return render({
    field: {
      name,
      value: undefined,
      onChange: () => undefined,
      onBlur: () => undefined,
      ref: () => undefined,
    },
  });
}

export const FormProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => <>{children}</>;

export const useFormContext = () => ({
  getFieldState: (_name?: unknown, _formState?: unknown) => {
    void _name;
    void _formState;
    return {
      error: null as { message?: string } | null,
      invalid: false,
      isTouched: false,
      isDirty: false,
    };
  },
});

export const useFormState = (..._args: unknown[]) => {
  void _args;
  return {};
};
