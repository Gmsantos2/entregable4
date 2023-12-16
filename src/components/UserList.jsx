import { IconEdit, IconTrashFilled } from "@tabler/icons-react"

const UserList = ({ users, deleteUser, handleUpdateUser }) => {
  return (
    <section className="grid gap-6 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1200px] mx-auto py-10">
      {
        users.map((user) => (
          <article className="border-2 rounded-md py-2 px-4 hover:shadow-lg transition-shadow grid gap-2" key={user.id}>
            <h4 className="text-left font-bold">
              {user.first_name} {user.last_name}
            </h4>
            <span className="text-black/30" >Email</span>
            <span>{user.email}</span>
            <span className="text-black/30" >Birthday</span>
            <span>{user.birthday}</span>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-500/80 p-2 rounded-md"
              >
                <IconTrashFilled />
              </button>
              <button
                onClick={() => handleUpdateUser(user)}
                className="bg-black/5 p-2 rounded-md">
                <IconEdit />
              </button>
            </div>


          </article>
        ))
      }
    </section>
  )
}
export default UserList