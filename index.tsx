import { renderToReadableStream } from "react-dom/server";
import {Pokemon} from './src/components';

Bun.serve({
  async fetch() {
    const stream = await renderToReadableStream(<Pokemon/>);

    return new Response(stream, {
      headers: {'Content-Type': 'text/html'},
    })
  }
 
  });
  
  console.log(`Listening  ...`);