import { Children, cloneElement } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { TextInput } from "..";
import useCheckInfo from "@/hooks/useCheckInfo";

function Form({ schema, defaultValues = {}, formProps, onSubmit, children }) {
  const allowedComponents = [TextInput];

  const config = {
    resolver: yupResolver(schema),
    defaultValues,
    ...formProps,
  };

  const formControl = useForm(config);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formControl;

  useCheckInfo("email", formControl);

  const inputs = Children.toArray(children).map((child) => {
    if (!allowedComponents.includes(child.type)) return child;

    return cloneElement(child, {
      register: register(child.props.name),
      message: errors[child.props.name]?.message,
    });
  });

  return <form onSubmit={handleSubmit(onSubmit)}>{inputs}</form>;
}

export default Form;
