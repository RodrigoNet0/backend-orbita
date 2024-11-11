import { NextResponse } from 'next/server';
import { userService } from '@/app/services/userService';
import { createUserSchema, updateUserSchema } from '@/app/validations/UserValidation';



export async function GET() {
  const response = await userService.fetchAllUsers();
  return NextResponse.json(response, { status: 200 });
}

export async function POST(req: Request) {
  const body = await req.json();
  const validationResult = createUserSchema.safeParse(body);
  if (!validationResult.success) {
    return NextResponse.json({ success: false, errors: validationResult.error.format() }, { status: 400 });
  }

  const response = await userService.addUser(body);
  return NextResponse.json(response, { status: 201 });
}

export async function PUT(req: Request) {
  const { id, ...body } = await req.json();
  const validationResult = updateUserSchema.safeParse(body);
  if (!validationResult.success) {
    return NextResponse.json({ success: false, errors: validationResult.error.format() }, { status: 400 });
  }

  const response = await userService.updateUser(id, body);
  return NextResponse.json(response, { status: 200 });
}


export async function DELETE(req: Request) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ success: false, error: 'ID do usuário é obrigatório' }, { status: 400 });
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const response = await userService.deleteUser(id);
  return NextResponse.json({ success: true, message: 'Usuário deletado com sucesso' }, { status: 200 });
}