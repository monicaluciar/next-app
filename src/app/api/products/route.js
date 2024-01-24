import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export async function GET() {
	const products = await prisma.product.findMany();
	return NextResponse.json(products);
}
export async function POST(request) {
	const body = await request.json();
	await prisma.product.create({
		data: {
			name: body.name,
			description: body.description,
			price: Number(body.price),
		},
	});
	return NextResponse.json({ message: "Product created" });
}
