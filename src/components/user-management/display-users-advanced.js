import React from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import * as S from '../../styles'
import NewFilterTable from '../../new-filtertable';

export default class DisplayUsersAdvanced extends React.Component {
    
  constructor(props) {
    super(props);

    this.newFilterTableRef = React.createRef();

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
    let users = this.props.users;
    let columnNames = ['#', 'UserName', 'First Name', 'Last Name', 'Email', 'Phone Number', 'Roles', 'Disabled', 'Actions'];
    let columnAccessors = ['id', 'username', 'firstName', 'lastName', 'email', 'phoneNumber', 'roles', 'disabled', 'actions'];
    let tableColumns = [];
    let tableData = [];

    for (let i = 0; i < columnNames.length; i++) {
      tableColumns.push({
        Header: columnNames[i],
        accessor: columnAccessors[i]
      })
    }

    for (let index = 0; index < users.length; index++) {
      
      let user = users[index];
      console.log('user:', user);
      tableData.push({
        'id': user.id,
        'username': user.username,
        'firstName': user.firstName,
        'lastName': user.lastName,
        'email': user.email,
        'phoneNumber': user.phoneNumber,
        'roles': this.convertRolesToString(user.roles),
        'disabled': user.disabled ? 'YES' : 'NO',
        'actions': [<S.StyledButtonPrimary
          variant="info"
          title="Edit user details"
          value={user.username}
          onClick={this.onEdit}
          >
          <FaPencilAlt className='noPointerEvent'/> 
          </S.StyledButtonPrimary>," ",
          <S.StyledButtonPrimary
          variant="danger"
          title="Delete user"
          value={user.username}
          onClick={this.onDelete}
          >
          <FaTrashAlt className='noPointerEvent'/>
          </S.StyledButtonPrimary>]
      })
    }

    return (
      <NewFilterTable 
      getFilteredDataFunc={this.newFilterTableRef}
      columns={tableColumns} 
      data={tableData} 
      columnFiltersEnabled={false}
      columnDensity='standard'
      stickyHeaderEnabled={false}
      paginationEnabled={false}
      stripped
    />
    );
  }
}