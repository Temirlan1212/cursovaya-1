import Apartment from "../../models/Apartment";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apartments = await Apartment.find();

    return NextResponse.json({ apartments }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const apartmentData = body.formData;

    await Apartment.create(apartmentData);

    return NextResponse.json({ message: "Apartment Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
