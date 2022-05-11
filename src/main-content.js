import React from 'react';
import * as S from './styles';
import {RiArrowRightSLine} from "react-icons/ri"

import NewDataDisplay from './new-data-display';
import { ENDPOINTS } from './constants';

export class MainContent extends React.Component {

  componentDidMount() {
    console.log('MainContent');
  }

  render() {
  return (
    <>
      <S.MainContent>
        <S.PageContent>
          <S.ContainerFluid>
            <S.Row>
              <S.Col12>
                <S.PageContentHeader>
                  <S.PageContentHeaderTitle>
                    {this.props.title}
                  </S.PageContentHeaderTitle>
                  <S.BreadCrumpsWrapper>
                    <S.BreadCrumpsNav>
                      <S.BreadCrumpList>
                        <S.BreadCrumpItem key='0'>
                          <S.BreadCrumpLink to={'/'}>
                            Communication Monitor
                          </S.BreadCrumpLink>
                        </S.BreadCrumpItem>
                        <S.BreadCrumpItem key='1'>
                          <S.BreadCrumpIcon>
                            <RiArrowRightSLine/>
                          </S.BreadCrumpIcon>
                        </S.BreadCrumpItem>
                        <S.BreadCrumpItem key='2'>
                          {this.props.breadcrumpToolsetLink && <S.BreadCrumpLink to={this.props.breadcrumpToolsetLink}>
                            {this.props.breadcrumpToolsetTitle}
                          </S.BreadCrumpLink>}
                        </S.BreadCrumpItem>
                        { this.props.breadcrumpToolLink && <S.BreadCrumpItem key='3'>
                          <S.BreadCrumpIcon>
                            <RiArrowRightSLine/>
                          </S.BreadCrumpIcon>
                        </S.BreadCrumpItem> }

                        { this.props.breadcrumpToolLink && <S.BreadCrumpItem key='4'>
                          <S.BreadCrumpLink to={this.props.breadcrumpToolLink}>
                            {this.props.breadcrumpToolTitle}
                          </S.BreadCrumpLink>
                        </S.BreadCrumpItem> } 
                      </S.BreadCrumpList>
                    </S.BreadCrumpsNav>
                  </S.BreadCrumpsWrapper>
                </S.PageContentHeader>
              </S.Col12>
            </S.Row>
            
            {this.props.mainComponent}
            
            
            
          </S.ContainerFluid>
        </S.PageContent>
        <S.Footer>
          <S.ContainerFluid>
            <S.Row>
              Communication Monitor - Developed by NTUA
            </S.Row>
          </S.ContainerFluid>
        </S.Footer>
      </S.MainContent>
    </>


  );
}
}