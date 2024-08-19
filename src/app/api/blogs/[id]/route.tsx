import { getById } from "@/lib/data";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    const url = req.url;
    let id: string='';
    if (url) id = url.split('blogs/')[1];

    const result = getById(id);
    return NextResponse.json({message: "All posts retrieved successfully!", status: 200, result});
}
export const POST = async (req: Request, res: Response) => {
    console.log("POST by id");
    return NextResponse.json({message: "All posts retrieved successfully!", status: 200});

}
export const PUT = async (req: Request, res: Response) => {
    console.log("GET");
}
export const DELETE = async (req: Request, res: Response) => {
    console.log("GET");
}