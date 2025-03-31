import { NextResponse, NextRequest } from 'next/server';
import { DB } from '@repo/database-config/database';
import { NewsLetter } from '@repo/schema-config/Newsletter.Model';

DB(process.env.NEWLETTERDB!);
export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const info = await NewsLetter.findOne({ _id: data?.id }); // Ensure data.id is a valid ObjectId
    return NextResponse.json({ message: info }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'SERVER ERROR' }, { status: 500 });
  }
};
