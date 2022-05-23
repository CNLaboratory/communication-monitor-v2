import React from 'react';
import * as S from './styles';
import LogoLight from './assets/images/comm-monitor-logo-light.png';
import { Container, Row, Col } from 'react-bootstrap';
import { visualizationToolset, fusionToolset, advancedReasonerToolset, threadAndIncidentToolset } from './components/NavBar/sidebarData';

export function VisualizationToolsetComponent () {
  return(
    <Container>
        <Row>
          <Col md>
            <S.Card>
              <S.CardBody>
                <S.MediumWidthDiv>
                <S.FlexCenterDirColumnDiv>
                  <h2>{visualizationToolset.title}</h2>
                  
                  <S.MainComponentLinksWrapper>
                    {visualizationToolset.subNav.map((tool, index) => (
                      <S.MainComponentRouteLink to={tool.path}>{tool.pageTitle}</S.MainComponentRouteLink>
                    ))};
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

export default class Toolset extends React.Component {

  render () {

    return(
      <Container>
        <Row>
          <Col md>
            <S.Card>
              <S.CardBody>
                <S.MediumWidthDiv>
                <S.FlexCenterDirColumnDiv>
                  <h2>{this.props.title}</h2>
                  <p>Thank you for using our Communication Monitor toolset. <br/>Please select one of the tools from the sidebar.</p>
                  <S.MainComponentLinksWrapper>
                    <S.MainComponentLink href='https://commonitor-docum.codeheaven.gr/' target='_blank'>Documentation</S.MainComponentLink>
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