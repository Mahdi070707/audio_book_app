import React, { useState } from 'react';

export async function handleLogin(
  event: React.FormEvent,
  subscribe: boolean,
  onClose: () => void
) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const email = (form.elements.namedItem('username') as HTMLInputElement).value;
  const password = (form.elements.namedItem('password') as HTMLInputElement).value;

  console.log('Form submitted with:', { email, password, subscribe });

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log('Login response:', data);

    if (data.message === 'Login successful') {
      if (subscribe) {
        const subscribeResponse = await fetch('/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        const subscribeData = await subscribeResponse.json();
        console.log('Subscribe response:', subscribeData);
      }
      onClose();
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
}


export default handleLogin;
