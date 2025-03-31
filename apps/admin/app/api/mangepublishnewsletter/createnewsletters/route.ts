import { NextRequest, NextResponse } from 'next/server';
import { DB } from '@repo/database-config/database';
import { NewsLetter } from '@repo/schema-config/Newsletter.Model';

DB(process.env.NEWLETTERDB!);
export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const publishedNewsLetter = await new NewsLetter(data);
    await publishedNewsLetter.save();
    return NextResponse.json({ message: 'CREATES' }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'SERVER ERROR' }, { status: 500 });
  }
};
