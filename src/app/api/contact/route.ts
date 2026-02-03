import { NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { insertContactMessageSchema } from "@/shared/schema";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = insertContactMessageSchema.parse(body);
    const message = await storage.createContactMessage(validatedData);
    
    console.log("New contact message received:", {
      name: message.name,
      email: message.email,
      phone: message.phone,
      message: message.message,
    });
    
    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error processing contact form:", error);
    if (error instanceof ZodError) {
      return NextResponse.json({ success: false, message: "Invalid form data", errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const messages = await storage.getContactMessages();
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch messages" }, { status: 500 });
  }
}
