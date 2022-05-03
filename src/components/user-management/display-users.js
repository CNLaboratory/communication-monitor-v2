import React from 'react';
import {
    Button,
    Table,
  } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import * as S from '../../styles'



export default class DisplayUsers extends React.Component {
    
  constructor(props) {
      super(props);

      this.state = {
          username: ''
      }

      this.onEdit = this.onEdit.bind(this);
      this.onDelete = this.onDelete.bind(this);
      this.convertRolesToString = this.convertRolesToString.bind(this);
  }

  onEdit = (e) => {
      console.log('e',e);
      console.log('e.target.value',e.target.value);
      this.props.onEdit(e.target.value);

  }
  onDelete = (e) => {
      console.log('e',e);
      console.log('e.target.value',e.target.value);
      this.props.onDelete(e.target.value);
  }
  convertRolesToString(roles) {
      let rolesString = '';
      let addComma = false;
      for (let i = 0; i < roles.length; i++) {
          if (addComma) {
              rolesString += ', ';
          }
          rolesString += roles[i];
          addComma = true;
      }
      return rolesString;
  }
    

  render() {
    return (
      <S.ResponsiveTableWrapper>
            
        <S.TableResponsive>
        <S.TableResponsiveTHead>
            <S.TableResponsiveTRow>
                <S.TableResponsiveTHeaderColumn>#</S.TableResponsiveTHeaderColumn>
                <S.TableResponsiveTHeaderColumn>UserName</S.TableResponsiveTHeaderColumn>
                <S.TableResponsiveTHeaderColumn>First Name</S.TableResponsiveTHeaderColumn>
                <S.TableResponsiveTHeaderColumn>Last Name</S.TableResponsiveTHeaderColumn>
                <S.TableResponsiveTHeaderColumn>Email</S.TableResponsiveTHeaderColumn>
                <S.TableResponsiveTHeaderColumn>Phone Number</S.TableResponsiveTHeaderColumn>
                <S.TableResponsiveTHeaderColumn>Roles</S.TableResponsiveTHeaderColumn>
                <S.TableResponsiveTHeaderColumn>Disabled</S.TableResponsiveTHeaderColumn>
                <S.TableResponsiveTHeaderColumn>Actions</S.TableResponsiveTHeaderColumn>
                
            </S.TableResponsiveTRow>
        </S.TableResponsiveTHead>
        <S.TableResponsiveTBody>
          {console.log('this.props.users:', this.props.users)}
          {this.props.users && this.props.users.map((item) => (
              
            <S.TableResponsiveTRowStripped key={item.id}>
                {console.log('item.username', item.username)}
            <S.TableResponsiveTColumn>{item.id}</S.TableResponsiveTColumn>
            <S.TableResponsiveTColumn>{item.username}</S.TableResponsiveTColumn>
            <S.TableResponsiveTColumn>{item.firstName}</S.TableResponsiveTColumn>
            <S.TableResponsiveTColumn>{item.lastName}</S.TableResponsiveTColumn>
            <S.TableResponsiveTColumn>{item.email}</S.TableResponsiveTColumn>
            <S.TableResponsiveTColumn>{item.phoneNumber}</S.TableResponsiveTColumn>
            <S.TableResponsiveTColumn>{this.convertRolesToString(item.roles)}</S.TableResponsiveTColumn>
            <S.TableResponsiveTColumn>{item.disabled ? 'YES':'NO'}</S.TableResponsiveTColumn>
                
            <S.TableResponsiveTColumn><S.StyledButtonPrimary
                variant="info"
                title="Edit user details"
                value={item.username}
                onClick={this.onEdit}
                >
                <FaPencilAlt className='noPointerEvent'/> 
                </S.StyledButtonPrimary>{" "}
                <S.StyledButtonPrimary
                variant="danger"
                title="Delete user"
                value={item.username}
                onClick={this.onDelete}
                >
                <FaTrashAlt className='noPointerEvent'/>
                </S.StyledButtonPrimary>
            </S.TableResponsiveTColumn>
            </S.TableResponsiveTRowStripped>
          ))}
        </S.TableResponsiveTBody>
        </S.TableResponsive>
      </S.ResponsiveTableWrapper>
    )
  }
}