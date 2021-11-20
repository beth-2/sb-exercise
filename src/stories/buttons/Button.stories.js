import React from "react";
import Button from "./Button";

export default {
  title: "Buttons",
};

export const Normal = () => <Button className="active">Normal</Button>;
export const Disabled = () => <Button disabled>Normal</Button>;
