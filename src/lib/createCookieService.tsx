'use server';


import { cookies } from 'next/headers';

export async function createCookie(accessToken: string) {
  

  cookies().set('accessToken', accessToken);
}
