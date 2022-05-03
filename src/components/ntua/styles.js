import styled from "styled-components";

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;
  
export const StyledSelect = styled.select`
  
  display: block;
  width: 100%;
  padding: .47rem 1.75rem .47rem .75rem;
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.5;
  color: #505d69;
  
  border: 1px solid #ced4da;
  border-radius: .25rem;
  
  margin: 0;
  font-family: 'Inter';

`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
  display: block;
  width: 100%;
  padding: .47rem 1.75rem .47rem .75rem;
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.5;
  color: #505d69;
  
  border: 1px solid #ced4da;
  border-radius: .25rem;
  
  margin: 0;
  font-family: 'Inter';
`;

export const StyledLabel = styled.label`
  font-size: 15px;
  margin: 0 0 7px;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;



export const SectionWrapper = styled.div`
  display: flex;
`;
export const ChartWrapper = styled.div`
  width: 70%;
  margin: 20px;
`;
export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 30%;
  margin: 50px 20px;
  background-color: #F1F5F7;
  padding: 20px;
  border-radius: 10px;
`;
export const Button = styled.button`
  color: #fff;
  background: #5664d2;
  border-color: #5664d2;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  padding: 0.47rem 0.75rem;
  font-size: .9rem;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  margin-top: 20px;
  margin-bottom: 10px;
`;