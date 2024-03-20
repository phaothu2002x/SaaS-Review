import { NextResponse } from "next/server";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function GET() {
    return NextResponse.json({
        name: "thuan",
    });
}

export async function POST(req: Request) {
    const data = await req.json();
    console.log(data.newMessage);

    // const chatCompletion = await openai.createChatCompletion({
    //     model: "gpt-4",
    //     messages: data.newMessage,
    // });
    // console.log(chatCompletion);
    return NextResponse.json({
        data,
    });
}
