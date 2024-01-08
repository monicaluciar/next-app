import { NextResponse } from "next/server";

export function GET(request, { params }) {
  //obtener los parametros de la url
  console.log(params);
  console.log(request.nextUrl);
  console.log(request.nextUrl.pathname);
  //obtener los querys params de la url
  console.log(request.nextUrl.searchParams);
  console.log(request.nextUrl.searchParams.get("type"));
  return NextResponse.json({ msj: "joooo" });
}
export async function POST(request, { params }) {
  //obtener el body de la peticion
  const data = await request.json();
  console.log(data);
  return NextResponse.json({ msj: "joooo" });
}
