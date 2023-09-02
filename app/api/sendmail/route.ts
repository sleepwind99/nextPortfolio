import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const datas: string[] = (await req.json()).file;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.myEmail,
      pass: process.env.myPassword,
    },
  });
  try {
    const res = await transporter.sendMail({
      from: datas[1],
      to: process.env.myEmail,
      subject: datas[2],
      text: `email: ${datas[1]} \n name: ${datas[2]} \n content: ${datas[3]}`,
    });
    return NextResponse.json({ res });
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse("Failed to send email", {
      status: 500,
    });
  }
}
