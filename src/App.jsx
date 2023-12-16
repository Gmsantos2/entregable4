import axios from "axios";
import { useEffect, useState } from "react"
import UserList from "./components/userList";
import Modal from "./components/Modal";
import { useForm } from "react-hook-form";


const BASE_URL = "https://users-crud.academlo.tech";

function App() {

  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
      image_url: "",
    });
    setUserToEdit(null);
  }
  
  const handleUpdateUser = (user) => {
    handleOpenModal();
    setUserToEdit(user);
  };
  const createUser = (newUser) => {
    axios
      .post(BASE_URL + "/users/", newUser)
      .then(({ data: newUser }) => {
        setUsers([...users, newUser]);
        handleCloseModal();
      })
      .catch((err) => console.log(err))

  };

  const deleteUser = (id) => {
    axios
      .delete(BASE_URL + "/users/" + id)
      .then(() => {
        setUsers(users.filter((user => user.id !== id)))
        alert('usuario eliminado con exito');
      })
      .catch((err) => console.log(err))
  }

  const updateUser = (user) => {
    axios
      .patch(BASE_URL + `/users/${userToEdit.id}/`, user)
      .then(({ data: updatedUser }) => {
        const newUser = users.map((user) =>
          user.id === userToEdit.id ? updatedUser : user
        );
        setUsers(newUser);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(BASE_URL + "/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))

  }, [])

  useEffect(() => {
    if (userToEdit !== null) {
    
      reset(userToEdit);
    }
  }, [userToEdit]);


  return (
    <main className="bg-white text-black min-h-screen font-semibold text-lg p-4">
      <header className="flex justify-between p-2">
        <h1 className='text-center p-2 font-bold text-4xl'>Users</h1>
        <button
          className="bg-indigo-950 text-white font-semibold p-2 rounded-sm hover:bg-indigo-800 transition-all flex gap-1 items-center"
          onClick={handleOpenModal}
        >
          Create User</button>
      </header>
      <Modal 
      showModal={showModal} 
      onCloseModal={handleCloseModal} 
      handleSubmit={handleSubmit}
      register={register}
      createUser={createUser}
      isUpdating={!!userToEdit}
      updateUser={updateUser} />
      <UserList
        users={users}
        deleteUser={deleteUser}
        handleUpdateUser={handleUpdateUser}
      />
    </ main>
  )
}

export default App