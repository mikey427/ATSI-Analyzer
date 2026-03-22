import express, { Request, Response } from "express"
import { agent } from "./ai/graph"
import { HumanMessage } from "@langchain/core/messages"

const app = express()
app.use(express.json());
const port = 3001




app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.post('/analyze', async (req, res) => {
  console.log("hit /analyze")
  const result = await agent.invoke({
    messages: [new HumanMessage(req.body.message)],
  })
  res.json({ messages: result.messages })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

