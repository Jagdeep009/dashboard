import React, { useEffect, useState } from 'react'
import { getRoles, rolesDelete, rolesEdit, rolesAdd } from '../config/Api'
import { MainHeading, User, Modal } from '../components';
import Warning from '../assets/warning.png'

function RoleManagement() {

  const [roles, setRoles] = useState([]);
  const [deleteRole, setDeleteRole] = useState({});
  const [editRole, setEditRole] = useState({ name: "", actions: [] });
  const [addRole, setAddRole] = useState({ roleId: "", name: "", actions: []});

  useEffect(() => {
    const fetchUsers = () => {
      const fetchedRoles = getRoles();
      setRoles(fetchedRoles);
    }
    fetchUsers();
  }, []);

  const editModel = (id) => {
    const roleToEdit = roles.find((u) => u.roleId === id);
    if (roleToEdit) {
      setEditRole(roleToEdit);
    }
  };

  const deleteModel = (id) => {
    const roleToDelete = roles.find((u) => u.roleId === id);
    if (roleToDelete) {
      setDeleteRole(roleToDelete);
    }
  };

  const handleDelete = (id) => {
    const data = rolesDelete(id);
    setRoles(data);
    setDeleteRole({});
  }

  const handleEditRole = () => {
    const data = rolesEdit(editRole);
    setRoles(data);
    setEditRole({ name: "", actions: [] })
  }

  const handleAddRole = async () => {
    const data2 = await rolesAdd(addRole);
    setAddRole({ roleId: "", name: "", actions: []})
    setRoles(data2);
  }

  return (
    <div className='main-wrapper d-flex flex-column'>
      <div className="d-flex justify-content-between mb-4">
        <MainHeading heading="Role Management" tagline="Manage your team members and their permissions here" />
        <User />
      </div>
      <div className="inner-wrapper h-100">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className='mb-0'>All Roles <span>{roles.length}</span></h2>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#usermodal">Add Role</button>
        </div>
        <div className='overflow-auto d-flex flex-column table-container shadow'>
          <table className='w-100'>
            <thead>
              <tr>
                <th>Role Id</th>
                <th>Role Name</th>
                <th>Permissions</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (<tr key={role.roleId}>
                <td>{role.roleId}</td>
                <td>{role.name}</td>
                <td>{role.actions.map((r)=> (r+", "))}</td>
                <td>
                  <span className='c-p me-3 text-info' title='Edit' onClick={() => { editModel (role.roleId) }} data-bs-toggle="modal" data-bs-target="#editmodal"><i className="fa-solid fa-pen-to-square"></i></span>
                  <span className='c-p text-warning' title='Delete' onClick={() => { deleteModel(role.roleId) }} data-bs-toggle="modal" data-bs-target="#deletemodal"><i className="fa-regular fa-trash-can"></i></span>
                </td>
              </tr>))}
            </tbody>
          </table>

          {/* Edit Modal */}
          <Modal id="editmodal">
            <form>
              <input
                type="text"
                id="name"
                placeholder="Role Name"
                value={editRole.name}
                onChange={(e) => setEditRole((prevState) => ({ ...prevState, name: e.target.value }))}
              />
              <br />

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setEditRole({ name: "", actions: "" })}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleEditRole}
                >
                  Edit User
                </button>
              </div>
            </form>
          </Modal>

          {/* Delete Modal */}
          <Modal id="deletemodal">
            <div className="modal-body text-center">
              <img src={Warning} alt="" className='mb-3' /><br />
              <p className='text-danger mb-1'>This action will permanently delete the Role&nbsp;
                "<span className='fw-bolder'>{deleteRole.name}</span>".</p>
              <br />
              <span>Are you sure you want to proceed?</span>
            </div>
            <div className="d-flex justify-content-center py-3">
              <button type="button" className="btn btn-secondary me-4" data-bs-dismiss="modal" onClick={() => setDeleteRole({})}>Cancel</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(deleteRole.roleId)}>Delete User</button>
            </div>
          </Modal>

          {/* Add User Modal */}
          <Modal id="usermodal">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  id="name"
                  placeholder="Role Name"
                  value={addRole.name}
                  onChange={(e) => setAddRole((prevState) => ({ ...prevState, name: e.target.value }))}
                />
                <br />
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => setAddRole({roleId:"", name: "", actions: []})}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={handleAddRole}
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default RoleManagement
