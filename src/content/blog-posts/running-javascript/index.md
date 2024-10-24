---
title: Running JavaScript
date: "2024-10-15"
description: Let's run some JavaScript!
postOrder: 2
tags: ["JavaScript", "NodeJS"]
skillLevel: ++
---

Once node is installed on your computer, you can use it to run the code in a JavaScript file.  Let's give it a try!

### Step 1

Open up a terminal window and make sure you're in the user root folder by running the following command.

```bash
cd ~
```

Now let's make a new folder, change directories into that folder and create a JavaScript file.  You can run the below commands individually or all at once, it's up to you.

```bash
mkdir node-sandbox
cd node-sandbox
touch index.js
```

### Step 2

Let's add some code to the file and run it.

```bash
echo "console.log('Hello World!')" >> index.js
node index.js
```

You should see the following output in your terminal.

```bash
Hello World!
```

Nice!