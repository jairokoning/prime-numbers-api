import express, { Request, Response } from "express";
import PrintPrimeNumbers from "./PrintPrimeNumbers";

const app = express();

app.get("/prime-numbers", async function(request: Request, response: Response) {
  const printPrimeNumbers = new PrintPrimeNumbers();
  const primeNumbers = await printPrimeNumbers.execute();  
  response.json(primeNumbers);
})

app.listen(3000);