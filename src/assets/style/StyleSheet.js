import styled from "styled-components";

export const Title = styled.h1`
  font-family: Nunito;
  font-weight: 1000;
  font-size: 2rem;
  text-align: center;
  color: #000000;
`;

export const PageTitle = styled.h1`
  font-family: Nunito;
  font-weight: 1000;
  font-size: 2rem;
  text-align: left;
`;

export const PageSubTitle = styled.h5`
  font-family: Nunito;
  font-weight: 400;
  text-align: left;
  color: #979797;
  opacity: 1;
`;
export const PageTitleModal = styled.h1`
  font-family: Nunito;
  font-weight: 1000;
  font-size: 2rem;
  text-align: center;
  color:#000000;
`;

export const PageSubTitleModal = styled.h5`
  font-family: Nunito;
  font-weight: 400;
  text-align: center;
  color: #979797;
  opacity: 1;
`;

export const ModalComponent = styled.div`
background-color: #ffffff;
border-radius:18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28%; /* Set the fixed width */
  height: auto; /* Set the fixed height */
  margin: auto; /* Center horizontally */
  margin-top: 12%; /* Adjust the top margin for vertical centering */
  padding: 80px; /* Add padding if needed */
 
`;

export const OtpDiv = styled.div`
display: flex;
flexDirection:row; 
gap: 1rem;
`;

export const OtpInputField = styled.input`
border: 1px solid #979797;
width: 4rem;
height: 4rem;
border-radius: 0.5rem;
font-size: 1.5rem;
text-align: center;
`;

export const OtpFiledTitle = styled.div`
font:normal normal 600 20px/27px Nunito;
font-Size: 1.2rem;
`;

export const PasswordText = styled.div`
font:normal normal 600 20px/27px Nunito;
font-Size: 1.5rem;
font-weight: 610;
color: red;
margin-top:2rem;
`;

export const FormTitle =styled.div`
color:black;
font-weight:700;
`;