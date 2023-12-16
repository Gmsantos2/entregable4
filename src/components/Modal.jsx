import { IconArrowsMinimize } from "@tabler/icons-react"



const Modal = ({
    showModal,
    onCloseModal,
    handleSubmit,
    register,
    createUser,
    isUpdating,
    updateUser,
}) => {


    const submit = (currentUser) => {
        isUpdating ? updateUser(currentUser) : createUser(currentUser);
    };

    const titleForm = isUpdating ? "Update User" : "Create User";
    const textButtonSubmit = isUpdating ? "Save Changes" : "Create";
    return (
        <section
            className={`fixed bg-black/60 top-0 left-0 right-0 h-screen flex justify-center items-center transition-all p-2 ${showModal ? "visible opacity-100" : "invisible opacity-0"
                }`}
        >
            <form
                onSubmit={handleSubmit(submit)}
                className="max-w-[300px] mx-auto grid gap-2 bg-white p-4 rounded-md relative"
            >
                <button onClick={onCloseModal} type="button" className="absolute top-2 right-2">
                    <IconArrowsMinimize size={15} />
                </button>
                <h2 className="text-center">{titleForm}</h2>
                <label className="grid gap-2" >
                    <span>
                        Email
                        <span className="text-red-500">*</span>
                    </span>
                    <input type="text" className="text-black border-2 rounded-md p-1 outline-none" placeholder="Email"
                        {...register("email")} required />
                </label>
                <label className="grid gap-2" >
                    <span>
                        Password
                        <span className="text-red-500">*</span>
                    </span>
                    <input name="password" type="text" className="text-black border-2 rounded-md p-1 outline-none" placeholder="Password"
                        {...register("password")} required />
                </label>
                <label className="grid gap-2" >
                    <span>
                        First Name
                        <span className="text-red-500">*</span>
                    </span>
                    <input name="first_name" type="text" className="text-black border-2 rounded-md p-1 outline-none" placeholder="First Name"
                        {...register("first_name")} required/>
                </label>
                <label className="grid gap-2" >
                    <span>
                        Last Name
                        <span className="text-red-500">*</span>
                    </span>
                    <input name="last_name" type="text" className="text-black border-2 rounded-md p-1 outline-none" placeholder="Last Name"
                        {...register("last_name")} required />
                </label>
                <label className="grid gap-2" >
                    <span>
                        Birthday
                        <span className="text-red-500">*</span>
                    </span>
                    <input name="birthday" type="date" className="text-black border-2 rounded-md p-1 outline-none" placeholder="Birthday"
                        {...register("birthday")} required />
                </label>
                <label className="grid gap-2" >
                    <span>
                        Image
                        <span className="text-red-500">*</span>
                    </span>
                    <input name="image_url" type="text" className="text-black border-2 rounded-md p-1 outline-none" placeholder="Image"
                        {...register("image_url")} required />
                </label>
                <button className="bg-indigo-950 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded" >
                    {textButtonSubmit}
                </button>
            </form>
        </section>

    )
}
export default Modal