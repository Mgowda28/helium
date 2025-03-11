import { serve } from '@hono/node-server'
import { Hono } from 'hono'


const reminders:string[]=[];
const app = new Hono()

app.get('/health',(c)=>{
  return c.json({message:"hello world"},200);
})

app.get('/reminders',(context)=>{
  return context.json(reminders,200);
});

app.post('/reminders',async (context)=>{
  const body = await context.req.json();

  const reminder = body["reminder"];

  reminders.push(reminder);
  return context.json(reminders,201);
});

serve(app);

console.log("Server is running on http://localhost:3000")