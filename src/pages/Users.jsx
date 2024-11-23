import React, { useEffect, useRef, useState } from 'react'
import { getUser, userDelete, usersEdit, usersAdd , getRoles} from '../config/Api'
import { MainHeading, User, Modal } from '../components';
import Warning from '../assets/warning.png'

function Users() {

  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState({ username: "", email: "" });
  const [deleteUser, setDeleteUser] = useState({});
  const [addUser, setAddUser] = useState({ userId: "", username: "", email: "", status: true, role: "Admin" });
  const [roles, setRoles] = useState([]);

  const succesBtn = useRef(null);

  useEffect(() => {
    const fetchUsers = () => {
      const fetchedUsers = getUser();
      const fetchedRoles = getRoles();
      setUsers(fetchedUsers);
      setRoles(fetchedRoles)
    }
    fetchUsers();
  }, []);

  const editModel = (id) => {
    const userToEdit = users.find((u) => u.userId === id);
    if (userToEdit) {
      setEditUser(userToEdit);
    }
  };

  const deleteModel = (id) => {
    const userToDelete = users.find((u) => u.userId === id);
    if (userToDelete) {
      setDeleteUser(userToDelete);
    }
  };

  const handleDelete = (id) => {
    const data = userDelete(id);
    setUsers(data);
    setDeleteUser({});
  }

  const handleEditUser = () => {
    const data = usersEdit(editUser);
    setUsers(data);
  }

  const handleAddUser = async (e) => {
    e.preventDefault()
    const data2 = await usersAdd(addUser);
    setAddUser({ userId: "", username: "", email: "", status: true, role: "Admin" })
    setUsers(data2);
    succesBtn.current.click()
  }

  return (
    <div className='main-wrapper d-flex flex-column'>
      <div className="d-flex justify-content-between mb-4">
        <MainHeading heading="User Management" tagline="Manage your team members and their permissions here" />
        <User />
      </div>
      <div className="inner-wrapper h-100">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className='mb-0'>All Users <span>{users.length}</span></h2>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#usermodal"><i  className="fa-solid fa-plus me-2"></i>Add user</button>
        </div>
        <div className='overflow-auto d-flex flex-column table-container shadow'>
          <table className='w-100'>
            <thead>
              <tr>
                <th>User Id</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (<tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.status ? <><i className="fa-classic fa-regular fa-circle-dot fa-fw active me-1"></i><span className='active'>Active</span></> : <><i className="fa-classic fa-regular fa-circle-dot fa-fw inactive me-1"></i><span className='inactive'>Inactive</span></>}</td>
                <td>{user.role}</td>
                <td>
                  <span className='c-p me-3 text-info' title='Edit' onClick={() => { editModel(user.userId) }} data-bs-toggle="modal" data-bs-target="#editmodal"><i className="fa-solid fa-pen-to-square"></i></span>
                  <span className='c-p text-warning' title='Delete' onClick={() => { deleteModel(user.userId) }} data-bs-toggle="modal" data-bs-target="#deletemodal"><i className="fa-regular fa-trash-can"></i></span>
                </td>
              </tr>))}
            </tbody>
          </table>

          {/* Edit Modal */}
          <Modal id="editmodal">
            <form className='p-4'>
              <h4 className='mb-4'>Edit User</h4>
              <input
                className='w-100 mb-3'
                type="text"
                id="name"
                placeholder="User Name"
                value={editUser.username}
                onChange={(e) => setEditUser((prevState) => ({ ...prevState, username: e.target.value }))}
              />
              <br />

              <input
                className='w-100 mb-3'
                type="email"
                id="email"
                placeholder="Email Address"
                value={editUser.email}
                onChange={(e) => setEditUser((prevState) => ({ ...prevState, email: e.target.value }))}
              />
              <br />
              <div className='mb-3 d-flex'>
                <span className='me-3'>Status:</span>
                <input
                  type="radio"
                  id="active"
                  name="status"
                  value={true}
                  checked={editUser.status === true}
                  onChange={() => setEditUser((prevState) => ({ ...prevState, status: true }))}
                />
                <label htmlFor="active" className='me-3'>Active</label>

                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  value={false}
                  checked={editUser.status === false}
                  onChange={() => setEditUser((prevState) => ({ ...prevState, status: false }))}
                />
                <label htmlFor="inactive">Inactive</label>
              </div>

              <div className="mb-3">
                <label htmlFor="roles" className='me-3'>Role:</label>
                <select
                  id="roles"
                  name="role"
                  value={editUser.role}
                  onChange={(e) => setEditUser((prevState) => ({ ...prevState, role: e.target.value }))}
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>
              <div className="modal-footer pb-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setEditUser({ username: "", email: "" })}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleEditUser}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </Modal>

          {/* Delete Modal */}
          <Modal id="deletemodal">
            <div className="modal-body text-center">
              <img src={Warning} alt="" className='mb-3' /><br />
              <p className='text-danger mb-1'>This action will permanently delete the user&nbsp;
                "<span className='fw-bolder'>{deleteUser.username}</span>".</p>
              <br />
              <span>Are you sure you want to proceed?</span>
            </div>
            <div className="d-flex justify-content-center py-3">
              <button type="button" className="btn btn-secondary me-4" data-bs-dismiss="modal" onClick={() => setDeleteUser({})}>Cancel</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(deleteUser.userId)}>Delete User</button>
            </div>
          </Modal>

          {/* Add User Modal */}
          <Modal id="usermodal">
            <form className='p-4' onSubmit={(e) => handleAddUser(e)}>
              <h4 className='mb-4'>Add User</h4>
              <input
                required
                className='w-100 mb-3'
                type="text"
                id="name"
                placeholder="User Name"
                value={addUser.username}
                onChange={(e) => setAddUser((prevState) => ({ ...prevState, username: e.target.value }))}
              />
              <br />

              <input
                required
                className='w-100 mb-3'
                type="email"
                id="email"
                placeholder="Email Address"
                value={addUser.email}
                onChange={(e) => setAddUser((prevState) => ({ ...prevState, email: e.target.value }))}
              />
              <br />

              <div className='mb-3 d-flex'>
                <span className='me-3'>Status:</span>
                <input
                  type="radio"
                  id="active"
                  name="status"
                  value={true}
                  checked={addUser.status === true}
                  onChange={() => setAddUser((prevState) => ({ ...prevState, status: true }))}
                />
                <label htmlFor="active" className='me-3'>Active</label>

                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  value={false}
                  checked={addUser.status === false}
                  onChange={() => setAddUser((prevState) => ({ ...prevState, status: false }))}
                />
                <label htmlFor="inactive" className='me-3'>Inactive</label>
              </div>

              <label htmlFor="roles" className='me-3 mb-3'>Role:</label>
              <select
                id="roles"
                name="role"
                value={addUser.role}
                onChange={(e) => setAddUser((prevState) => ({ ...prevState, role: e.target.value }))}
              >
                {roles.map((role)=><option value={role.name} key={role.roleId}>{role.name}</option>)}
              </select>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setAddUser({ username: "", email: "", status: true, role: "Admin" })}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Add User
                </button>
              </div>
            </form>
          </Modal>

          <button className='success' ref={succesBtn} hidden data-bs-toggle="modal" data-bs-target="#successModal"></button>
          <Modal id="successModal">
            <span className='text-center py-3 fw-bold bg-success text-white'>
              New User Added successfully!
            </span>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Users
