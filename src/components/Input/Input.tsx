import styled from "styled-components";

interface Props {
    label: string;
    type?: string;
    name: string;
    value: string;
    placeholder: any;
    onChange: any;
}

const Input = ({
    label,
    type,
    name,
    value,
    placeholder,
    onChange,
    }: Props) => {
    return (
        <Label>
            {label}
        <InputField 
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
        </Label>
    );
};

const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px 0;
    font-size: 20px;
    margin-bottom: 40px;
`;

const InputField = styled.input<{type?: string}>`
    padding: 8px 15px;
    font-size: 18px;
    border-radius: 8px;
    border: 2px solid #c7c7c7;

    ${({ type }) =>
        type === "description" &&
    `
           height: 200px;
    `}
`;

export default Input;