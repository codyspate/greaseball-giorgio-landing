export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html>
<head>
    <title>GreaseBall Giorgio</title>
    <style>
        body { 
            background-color: #FFA500; 
            color: black; 
            font-family: Arial, sans-serif; 
            text-align: center; 
            padding: 20px; 
            margin: 0;
        } 

        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        p {
            font-size: 1.2em;
            margin-bottom: 20px;
        }
        
        a.button { 
            display: inline-block; 
            padding: 15px 30px; 
            background-color: #333; 
            color: white; 
            text-decoration: none; 
            border-radius: 8px; 
            font-size: 1.1em;
            font-weight: bold;
            transition: background-color 0.3s ease;
            margin: 10px;
        } 
        
        a.button:hover { 
            background-color: #555; 
        }
        
        .image-container {
            margin: 30px 0;
        }
        
        img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        
        @media (max-width: 600px) {
            h1 { font-size: 2em; }
            p { font-size: 1em; }
            a.button { padding: 12px 24px; font-size: 1em; }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to GreaseBall Giorgio!</h1>
        <p>Check out my YouTube channel for the latest content!</p>

        <a href="https://youtube.com/@greaseballgiorgio" class="button" target="_blank">
            🎬 Visit My Channel
        </a>
        
        <div class="image-container">
            <img src="https://i.imgur.com/1ZEXv8u.jpg" alt="GreaseBall Giorgio - Alien Encounter" onerror="this.style.display='none'">
        </div>
        
        <p>🛸 Ancient Aliens Expert & Content Creator 🛸</p>
    </div>
</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=300'
      }
    });
  }
};
