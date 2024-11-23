let users = [
  { userId: 1, username: "John Doe", email: "john.doe@example.com", status: true, role: "Admin" },
  { userId: 2, username: "Jane Smith", email: "jane.smith@example.com", status: false, role: "Editor" },
  { userId: 3, username: "Mike Jones", email: "mike.jones@example.com", status: true, role: "Viewer" },
  { userId: 4, username: "Alice Brown", email: "alice.brown@example.com", status: true, role: "Admin" },
  { userId: 5, username: "Bob White", email: "bob.white@example.com", status: false, role: "Editor" },
  { userId: 6, username: "Linda Black", email: "linda.black@example.com", status: true, role: "Viewer" },
  { userId: 7, username: "Susan Lee", email: "susan.lee@example.com", status: true, role: "Editor" },
  { userId: 8, username: "Tom King", email: "tom.king@example.com", status: true, role: "Admin" },
  { userId: 9, username: "Charles Clark", email: "charles.clark@example.com", status: false, role: "Viewer" },
  { userId: 10, username: "Natalie Wright", email: "natalie.wright@example.com", status: true, role: "Editor" },
  { userId: 11, username: "Joseph Martin", email: "joseph.martin@example.com", status: true, role: "Viewer" },
  { userId: 12, username: "Elizabeth Taylor", email: "elizabeth.taylor@example.com", status: true, role: "Admin" },
  { userId: 13, username: "Olivia Moore", email: "olivia.moore@example.com", status: false, role: "Editor" },
  { userId: 14, username: "William Smith", email: "william.smith@example.com", status: true, role: "Viewer" },
  { userId: 15, username: "Henry Evans", email: "henry.evans@example.com", status: true, role: "Admin" },
  { userId: 16, username: "Lisa Scott", email: "lisa.scott@example.com", status: false, role: "Editor" },
  { userId: 17, username: "George Wilson", email: "george.wilson@example.com", status: true, role: "Viewer" },
  { userId: 18, username: "Mary Johnson", email: "mary.johnson@example.com", status: true, role: "Editor" },
  { userId: 19, username: "Lucas Hall", email: "lucas.hall@example.com", status: false, role: "Admin" },
  { userId: 20, username: "Rebecca Lee", email: "rebecca.lee@example.com", status: true, role: "Viewer" }
];

const getUser = () => {
    return users;
}

const userDelete = (id) => {
  const index = users.findIndex((user) => user.userId === id);
  if (index !== -1) {
    users.splice(index, 1);
  }
  return users;
}

const usersEdit = (editUser) => {
  console.log(editUser)
  return users.map((user)=> {if(user.userId == editUser.userId) {return (editUser)} else{return (user)}});
}

const usersAdd = (addUser) => {
  addUser.userId= 21;
  users.push(addUser);
  return users
}

const roles = [
  {
    roleId: '1',
    name: "Admin",
    actions: ['Create', 'Read', 'Update', 'Delete']
  },
  {
    roleId: '2',
    name: "Editor",
    actions: ['Read', 'Update']
  },
  {
    roleId: '3',
    name: "Viewer",
    actions: ['Read']
  }
];

const getRoles = () => {
  return roles;
}

const rolesDelete = (id) => {
  const index = roles.findIndex((role) => role.roleId === id);
  if (index !== -1) {
    roles.splice(index, 1);
  }
  return roles;
}

const rolesEdit = (editrole) => {
return roles.map((role)=> {if(role.roleId == editrole.roleId) {return (editrole)} else{return (role)}});
}

const rolesAdd = (addrole) => {
addrole.roleId= 4;
roles.push(addrole);
return roles
}

export {getUser, userDelete, usersEdit, usersAdd, getRoles, rolesDelete,rolesEdit, rolesAdd}