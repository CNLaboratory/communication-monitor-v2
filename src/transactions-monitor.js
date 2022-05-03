import React from 'react';
import * as S from './styles';
import {RiArrowRightSLine} from "react-icons/ri"

import NewDataDisplay from './new-data-display';
import { ENDPOINTS } from './constants';

export class TransactionsMonitor extends React.Component {

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
                    Transactions Depiction
                  </S.PageContentHeaderTitle>
                  <S.BreadCrumpsWrapper>
                    <S.BreadCrumpsNav>
                      <S.BreadCrumpList>
                        <S.BreadCrumpItem>
                          <S.BreadCrumpLink to={'/'}>
                            Communication Monitor
                          </S.BreadCrumpLink>
                        </S.BreadCrumpItem>
                        <S.BreadCrumpItem>
                          <S.BreadCrumpIcon>
                            <RiArrowRightSLine/>
                          </S.BreadCrumpIcon>
                        </S.BreadCrumpItem>
                        <S.BreadCrumpItem>
                          <S.BreadCrumpLink to='/visualizationtoolset'>
                            Visualization Toolset
                          </S.BreadCrumpLink>
                        </S.BreadCrumpItem>
                        <S.BreadCrumpItem>
                          <S.BreadCrumpIcon>
                            <RiArrowRightSLine/>
                          </S.BreadCrumpIcon>
                        </S.BreadCrumpItem>
                        <S.BreadCrumpItem>
                          <S.BreadCrumpLink to='/transactionsdepiction' >
                            Transactions Depiction
                          </S.BreadCrumpLink>
                        </S.BreadCrumpItem>
                      </S.BreadCrumpList>
                    </S.BreadCrumpsNav>
                  </S.BreadCrumpsWrapper>
                </S.PageContentHeader>
              </S.Col12>
            </S.Row>
            
            {<NewDataDisplay API_URL={ENDPOINTS.transactionsdepiction.url} headerText={ENDPOINTS.transactionsdepiction.pageTitle}/>}
            
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