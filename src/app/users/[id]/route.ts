import { users } from "../route";

export const GET = async (_request: Request, { params }: { params: {id: string}}) => {
    const { id } = await params;
    const user = users.find(user => user.id === parseInt(id));
    return Response.json(user);
}