import { addPost, deletePost, getPosts, updatePost } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET  = async (req: Request, res: Response) => {
    try {
        const posts = getPosts();
        return NextResponse.json({message: "OK", posts}, {status: 200});
    } catch (err) {
        return NextResponse.json({message: "error", err}, {status: 500});

    }
}

export const POST = async (req: Request, res: Response) => {
    try {
        const data = await req.json();  // Parse the JSON body from the request

        // console.log('Received data:', data);  // Log the received data

        const result = await addPost(data);
        // You can now use 'data' to handle the incoming request
        return NextResponse.json(result, { status: 200 });

    } catch (err) {
        return NextResponse.json({ message: "error", err }, { status: 500 });
    }
};
export const DELETE = async (req: Request, res: Response) => {
    try {
        const data = await req.json();  // Parse the JSON body from the request

        // console.log('Received data:', data);  // Log the received data

        const result = await deletePost(data.id);
        // You can now use 'data' to handle the incoming request
        return NextResponse.json(result, {status: 200 });

    } catch (err) {
        return NextResponse.json({ message: "error", err }, { status: 500 });
    }
};
export const PUT = async (req: Request, res: Response) => {
    try {
        const data = await req.json();  // Parse the JSON body from the request

        const result = await updatePost(data.id, data.title, data.desc);
        console.log('updated post', result.post);
        // You can now use 'data' to handle the incoming request
        return NextResponse.json(result, {status: 200 });

    } catch (err) {
        return NextResponse.json({ message: "error", err }, { status: 500 });
    }
};