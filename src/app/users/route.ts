export const users = [
    {"id": 1, "name": "Tom"},
    {"id": 2, "name": "Alena"},
    {"id": 3, "name": "Raj"}
]

export const GET = async () => {
    return Response.json(users)
};

export const POST = async (request: Request) => {
    const user = await request.json();
    console.log(user)
    const newUser = {
        id: users.length + 1,
        name: user.name
    }
    users.push(newUser)

    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    });
}