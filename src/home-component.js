import React from 'react';
import * as S from './styles';
import LogoLight from './assets/images/comm-monitor-logo-light.png';
import { Container, Row, Col } from 'react-bootstrap';

export default class HomeComponent extends React.Component {

  render () {

    return(
      <Container>
        <Row>
          <Col md>
            <S.Card>
              <S.CardBody>
                <S.MediumWidthDiv>
                <S.FlexCenterDirColumnDiv>
                  <S.MainComponentHeaderLogo src={LogoLight}></S.MainComponentHeaderLogo>
                  <p>Thank you for using our Communication Monitor toolset. <br/>Please select one of the tools from the sidebar.</p>
                  <S.MainComponentLinksWrapper>
                    <S.MainComponentLink href='https://cndevs.cn.ntua.gr/docs/commonitor/' target='_blank'>Documentation</S.MainComponentLink>
                    <S.MainComponentLink href='mailto:cmpalouk@gmail.com'>Contact</S.MainComponentLink>
                  </S.MainComponentLinksWrapper>
                  
                </S.FlexCenterDirColumnDiv>
                </S.MediumWidthDiv>
              </S.CardBody>
            </S.Card>
          </Col>
        </Row>
      </Container>
    )
  }

}