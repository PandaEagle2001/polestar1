import { test, expect } from '@playwright/test';

test ("Get method", async ({ request }) => {

  const response = await request.get("https://reqres.in/api/users?page=2");
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test ("Put method", async ({ request }) => {

  const response = await request.put("https://reqres.in/api/users/2", {
    data :{
      name: 'mew name',
      job : 'new job',

    },
  })
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test ("Post method", async ({ request }) => {

  const response = await request.post("https://reqres.in/api/login", {
    data :{
      email: 'panda@test.com',
      //password: '4t3t5t5r',
    },
  })
  console.log(await response.json());
  expect(response.status()).toBe(400);
});

test ("Delete method", async ({ request }) => {

  const response = await request.delete("https://reqres.in/api/users/2");
  //console.log(await response.json());
  expect(response.status()).toBe(204);
});
