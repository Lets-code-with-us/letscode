import { NextResponse } from 'next/server';
import { DB } from '@repo/database-config/database';
import { NewsLetter } from '@repo/schema-config/Newsletter.Model';

DB(process.env.NEWLETTERDB!);
export const GET = async () => {
  try {
    const data = await NewsLetter.find({});
    return NextResponse.json({ message: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'SERVER ERROR' }, { status: 500 });
  }
};
