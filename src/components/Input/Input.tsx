import styled from "styled-components";

interface Props {
    label: string;
    type?:string;
    name: string;
    value: string;
    placeholder: any;
    onChange?: (e: any) => void;
}

const Input = ({
    label,
    name,
    type,
    value,
    placeholder,
    onChange,
    }: Props) => {
    return (
        <Label>
            {label}
            <InputField 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
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

const InputField = styled.input`
    padding: 13px 20px;
    font-size: 18px;
    border-radius: 8px;
    border: 2px solid #c7c7c7;
`;

export default Input;