import {
    StyledFormElementContainer,
    StyledFormElementHeader,
    StyledInput, StyledInputIcon,
    StyledInputWrapper
} from "@/ui/Form/styled";
import { Property } from "csstype";
import { StyledTextarea } from "../Textarea/styled";
type DefaultInputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type PropsType = DefaultInputType & {
    readOnly: boolean,
    onClick: () => void,
    onChange: () => void,
    title?: string
    isOpen: boolean,
    bgColor?: Property.BackgroundColor,
    rightIcon?: React.ReactNode,
    leftIcon: React.ReactNode,
    searchValue?: string,
    setSearchValue?: (value: string) => void,
    searchForm?: boolean,
    textarea?: boolean,

}
export default function FormElement(props: any) {
    const onClickHandler = () => {
        props.onClick();
    };

    return (
        // Подсказка:
        // <Form>
        //     <FormRow>
        //         <FormColumn>
        //             element
        //         </FormColumn>
        //         <FormColumn>
        //             element
        //         </FormColumn>
        //     </FormRow>
        // </Form>

        <StyledFormElementContainer>
            {props.title && <StyledFormElementHeader>{props.title}</StyledFormElementHeader>}
            {props.textarea && <StyledTextarea />}
            {props.textarea || (
                <StyledInputWrapper bgColor={props.bgColor}>
                    <StyledInput
                        readOnly={props.readOnly}
                        value={props.searchValue}
                        onClick={() => !!props.onClick && onClickHandler()}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                        type={props.type}
                        name={props.name}
                    />
                    {props.rightIcon && (
                        <StyledInputIcon right onClick={onClickHandler} isOpen={props.isOpen}>
                            {props.rightIcon}
                        </StyledInputIcon>
                    )}
                </StyledInputWrapper>
            )}
        </StyledFormElementContainer>
    );
}
