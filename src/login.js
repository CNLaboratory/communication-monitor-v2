import React, {useState} from "react";
import { useForm } from "react-hook-form";
import AuthService from "./services/auth.service";
import * as S from "./styles"
import BackgroundMain from './assets/images/background-main.jpg';
import BackgroundMain2 from './assets/images/dim-gunger-Am9Se-CMNvM-unsplash.jpg'
import BackgroundMain3 from './assets/images/luca-bravo-alS7ewQ41M8-unsplash.jpg'
import BackgroundMain4 from './assets/images/nasa-Q1p7bh3SHj8-unsplash.jpg'
import BackgroundMain5 from './assets/images/nathan-watson-9l98kFByiao-unsplash.jpg'
import BackgroundMain6 from './assets/images/ricardo-gomez-angel-5YM26lUicfU-unsplash.jpg'
import BackgroundMain7 from './assets/images/5.jpg'
import BackgroundMain8 from './assets/images/9.jpg'
import BackgroundMain9 from './assets/images/7.jpg'
import BackgroundMain10 from './assets/images/324-23-blue-tech-geom-HUD-gear.jpg'
import LogoLight from './assets/images/comm-monitor-logo-light.png';

import { FaUser, FaLock } from "react-icons/fa";

export function LoginOne (props) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');


  const onSubmit = data => {
    console.log(data);
    setLoading(true);
    AuthService.login(data.username, data.password).then(
        () => {
            setLoading(false);
            props.logIn();
        },
        error => {
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

                setLoading(false);
                setMessage(resMessage);
        }
    );
  }

  return (
    <div>
      <S.ContainerFluid>
        <S.Row>
          <S.LogInOneLoginColumnWrapper className='login-column-wrapper'>
            <S.LoginOneLoginContentWrapper className='login-content-wrapper'>
              <S.LoginOneHeaderWrapper>
                <S.LoginOneHeaderLogo src={LogoLight}/>
                <S.LoginOneHeaderTitle>Welcome Back!</S.LoginOneHeaderTitle>
                <S.LoginOneHeaderSubTitle>Sign in to access all available tools</S.LoginOneHeaderSubTitle>
              </S.LoginOneHeaderWrapper>
              <S.LoginOneFormWrapper>
                <S.LoginOneForm onSubmit={handleSubmit(onSubmit)}>
                  <S.LogInOneFormField>
                    <S.LoginOneFormFieldIconWrap><FaUser/></S.LoginOneFormFieldIconWrap>
                    <S.LoginOneFormFieldLabel htmlFor="username">Username</S.LoginOneFormFieldLabel>
                    <S.LoginOneFormFieldInput 
                      type="text" 
                      placeholder="Enter your username" 
                      {...register("username", { required: true })}></S.LoginOneFormFieldInput>
                  </S.LogInOneFormField>
                  <S.LogInOneFormField>
                    <S.LoginOneFormFieldIconWrap><FaLock/></S.LoginOneFormFieldIconWrap>
                    <S.LoginOneFormFieldLabel htmlFor="password">Password</S.LoginOneFormFieldLabel>
                    <S.LoginOneFormFieldInput type="password" placeholder="Enter your password" {...register("password", { required: true })}></S.LoginOneFormFieldInput>
                  </S.LogInOneFormField>
                  <S.LoginOneFormSubmitButtonWrapper>
                    <S.LoginOneFormSubmitButton>
                      {loading && (<span className="spinner-border spinner-border-sm"></span>)}
                      Log In
                      </S.LoginOneFormSubmitButton>
                    
                  </S.LoginOneFormSubmitButtonWrapper>
                  {message && (
                        <div className="form-group" style={{marginTop: '20px'}}>
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                </S.LoginOneForm>
              </S.LoginOneFormWrapper>
              <S.LoginOneFooterWrapper>
                <p>Don't have an account? Please <S.PrimaryLink href='mailto:cmpalouk@gmail.com' >contact your administrator</S.PrimaryLink>.</p>
                <p>© 2022 Communication Monitor - EnsureSec - NTUA</p>
              </S.LoginOneFooterWrapper>
              

            </S.LoginOneLoginContentWrapper>
          </S.LogInOneLoginColumnWrapper>
          <S.LoginOneBannerWrapper backgroundImage={BackgroundMain10}>

          </S.LoginOneBannerWrapper>
        </S.Row>
      </S.ContainerFluid>

    </div>
  );
}