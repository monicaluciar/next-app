import { NextResponse } from "next/server";
import { prisma } from "../../../../libs/prisma";

export async function GET(request, { params }) {
  //obtener los parametros de la url
  // console.log(params);
  // console.log(request.nextUrl);
  // console.log(request.nextUrl.pathname);
  //obtener los querys params de la url
  // console.log(request.nextUrl.searchParams);
  // console.log(request.nextUrl.searchParams.get("type"));

  return NextResponse.json(
    await prisma.product.findUnique({
      where: {
        id: Number(params.productId),
      },
    })
  );
}
export async function PUT(request, { params }) {
  //obtener el body de la peticion
  const data = await request.json();

  return NextResponse.json(
    await prisma.product.update({
      where: {
        id: Number(params.productId),
      },
      data,
    })
  );
}

export async function DELETE(request, { params }) {
  return NextResponse.json(
    await prisma.product.delete({
      where: {
        id: Number(params.productId),
      },
    })
  );
}
