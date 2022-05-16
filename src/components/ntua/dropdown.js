// Dropdown.js 

import React from "react";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
} from "./styles";
import * as S from '../../styles'

export function Dropdown(props) {
  return (
    <DropdownWrapper
      action={props.action}
      onChange={props.onChange}
    >
      <StyledLabel htmlFor="services">
        {props.formLabel}
      </StyledLabel>
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
      {/*<StyledButton type="submit" value={props.buttonText} />*/}
    </DropdownWrapper>
  );
}
export function DropdownHorizontal(props) {
  return (
    <S.DropDownHorizontalWrapper
      action={props.action}
      onChange={props.onChange}
    >
      <S.DropDownStyledLabel htmlFor="services">
        {props.formLabel}
      </S.DropDownStyledLabel>
      <S.DropDownStyledSelect id="services" name="services">
        {props.children}
      </S.DropDownStyledSelect>
      {/*<StyledButton type="submit" value={props.buttonText} />*/}
    </S.DropDownHorizontalWrapper>
  );
}

export function Option(props) {
  return (
    <StyledOption selected={props.selected}>
      {props.value}
    </StyledOption>
  );
}