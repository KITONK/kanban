import React from "react";
import styled from "styled-components";

interface Props {
  value: string;
  placeholder: string;
  options: string[];
  label?: string;
  name?: string;
  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
}

const Select = ({
  value,
  label,
  options,
  name,
  placeholder = "",
  onClick,
  onChange,
}: Props) => (
    <Label>
      {label}
      <Selectfiled
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      >
        <Option selected>{placeholder}</Option>
        {options.map((option) => (
          <Option onClick={onClick} key={Math.random()}>
            {option}
          </Option>
        ))}
      </Selectfiled>
    </Label>
);

const Selectfiled = styled.select`
  text-indent: 1px;
  text-overflow: "";
  width: 100%;
  border: 1px solid #c7c7c7;
  border-radius: 8px;
  padding: 13px 20px;
  font-size: 18px;
`;

const Option = styled.option``;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px 0;
    font-size: 20px;
    margin-bottom: 40px;
`;

export default Select;
