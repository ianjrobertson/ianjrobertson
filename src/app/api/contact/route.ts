import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log(body);
  return NextResponse.json({ message: 'Success' })
}

export async function GET() {
  return NextResponse.json({ message: 'Hello' })
}