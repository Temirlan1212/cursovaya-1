import Apartment from "../../../models/Apartment";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundApartment = await Apartment.findOne({ _id: id });
  return NextResponse.json({ foundApartment }, { status: 200 });
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const apartmentData = body.formData;

    const updateApartmentData = await Apartment.findByIdAndUpdate(id, {
      ...apartmentData,
    });

    return NextResponse.json({ message: "Apartment updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Apartment.findByIdAndDelete(id);
    return NextResponse.json({ message: "Apartment Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
