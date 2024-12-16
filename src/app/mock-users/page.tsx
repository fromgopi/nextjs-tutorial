import { revalidatePath } from "next/cache";

type MockUser = {
    id: number;
    name: string;
}

const MockUsers = async () => {
    const response = await fetch("https://5ec518da2a4ba000163d1aee.mockapi.io/api/v1/users")
    const users = await response.json();

    const addUser = async (formData: FormData) => {
        "use server"
        const name = formData.get("name");
        const res = await fetch(
            "https://5ec518da2a4ba000163d1aee.mockapi.io/api/v1/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name})
            }
        )
        const newUser = res.json();
        revalidatePath("/mock-users");
        console.log(newUser);
    }

    return(
        <div className="py-10">
            <form action={addUser} className="mb-5">
                <input 
                    type="text" 
                    name="name" 
                    required 
                    className="border p-2 mr-2" 
                />
                <button
                    
                    type="submit"
                    className="bg-blue-400 text-white px-2 py-2 rounded"
                >
                    Add User
                </button>
            </form>
            <div className="grid grid-cols-5 gap-5 py-5">
                {users.map((user: MockUser) => (
                    <div 
                        key={user.id} 
                        className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                    >
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MockUsers;

