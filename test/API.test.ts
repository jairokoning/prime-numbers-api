import axios from "axios";

test("Should test API returning first 10 prime numbers", async () => {
  const {data: primeNumbersOutput} = await axios({
    url: "http://localhost:3000/prime-numbers",
    method: "get"
  });
  
  expect(primeNumbersOutput).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
})