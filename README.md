# Onboarding

A very first, very simple practice application. The goal here is to make sure everybody's on the same page and you can use the basic tools we'll be using in the future. In the following, I will briefly describe the steps you have to go through to get everything running and to make sure you can share code with everybody else.

### 1. Clone this Repository

First things first. You need to have [git](https://git-scm.com) installed on your computer and you'll need a [github](https://github.com) account. If you don't have this or you have trouble working with it, talk to me.

Next things next. With git installed, you can download this repository. Choose a folder where you would like to keep the code. Then if you're using the terminal, navigate to this folder and type
```
git clone https://github.com/mdumke/onboarding
```
Or maybe you have some ssh-keys on github already? Then get the repo via
```
git clone git@github.com:mdumke/onboarding.git
```
Here and in the following, I will write out the commands you need in order to run git from the terminal. If you're using a GUI-version of git, you can do the same things, and it will probably be even easier, but since the interfaces differ quite a lot, I don't know how to describe what exactly you have to do, so you'll have to play around with your git-tool a bit.


### 2. Install NodeJS

NodeJS is a JavaScript engine that runs on your computer (instead of just in your browser). In other words, with Node you can execute JavaScript programs directly on your computer. We want to run a server that is written in JavaScript. This is why we need Node. You can download it from [nodejs.org](https://nodejs.org/en/). This should be quite simple, just like installing any other program on your computer.

If everything goes well, you can open a terminal and type
```
node
```
This will start a little command line tool where you can type some JavaScript (like `1 + 3`). But that's not yet what we need, so stop the program (`ctrl-c` or `ctrl-d`) and navigate to the folder into which you have copied this repository. Here, type
```
npm -v
```
What's this? NodeJS comes with a program called `npm`, the 'Node Package Manager', that will make it easy to download other people's code. If you type `npm -v` it should print the version you have installed to the screen. This means you're good to go. If you don't see this, maybe you have to review the NodeJS installation process.


### 3. Download Dependencies

Let's say you have git on your computer, and you have downloaded this repository, and you have Node installed and npm and you are currently in the project folder. The next thing to do is to load all the JavaScript libraries needed to run the server (these libraries contain code that our application depends on, so we call them 'dependencies'). To get them, type
```
npm install
```
on the command line and wait for about half a minute. That should download everything we need. After that, there will be a new folder called `node_modules` in your project-folder which will be full of other people's code.


### 4. Start the Server

This is where the fun part begins. I have prepared a tiny server-program that can serve a website. To start it, simply type
```
npm start
```
on the command line (make sure you are in the project-folder). This command will start the server. If you read the output, it says something like 'Server up on port 3000'. Notice that the program does not simply end, but it keeps running - until you decide to quit it (by pressing `ctrl-c`, or `ctrl-d` or simply by closing the terminal window...). But let's not quit it right away. Instead, open you favorite browser and type the following into the address bar:
```
http://localhost:3000/
```
Can you see the little website? It says 'Ahoi' or something like that. If there's something not working and you have troubles figuring out what it is, don't hesitate to ask me.


### 5. Add your name to the site

For you to come aboard, you need to edit the html-file that is our website. To do so in the cleanest way possible (which is, of course, the only way we will consider...) you should go through the following steps:

#### 5.1 Create a branch

Use git to create a new branch. To do so, in the repository folder, type
```
git checkout -b adding-siegfried # (or whatever your name is...)
```
This will print out a little message that says you have successfully switched to a new branch.

#### 5.2 Add your name

There is a file named `index.html` that sits in one of the folders. Find it, and add a line that contains your name and whatever you want to add. If you save the file and reload your browser, you should see the changes you've made.


#### 5.3 Commit your changes

If you run `git status` in the terminal you should see that there is one changed file. Add this to the git staging area via
```
git add public/index.html
```
Now commit this to the repository by typing
```
git commit -m 'add siegfried to the website'
```


#### 5.4 Create a pull request

Finally, to integrate your changes with the rest of the project, you have to create what's called a `pull request`. To do so, the first step is to push your changes to github:
```
git push origin adding-siegfried
```
Now if you visit the github-page for this repository again, you will see a link to view the different branches at the top of the page. Go to your branch and click the `New pull request` button. You will get to a page that says 'Open a pull request'. Here, maybe fill out the textbox if you feel like it, make sure that `base` is set to `master` and then click the button `Create pull request`. I will then take care of the rest.


### 6. Final thoughts

I know these seem like a lot of steps - even if everything goes smoothly and you don't have to spend time debugging this or that. But these steps will always be the same: download code, make sure it runs, make changes, integrate them with the rest of the project. Once you get used to doing this, it becomes more or less automatic and you can start focussing on the more interesting things, so don't be discouraged if it feels a bit overwhelming in the beginning. And as I said, just talk to me if you have any troubles.

One last note. If you all manage to go through this process until next Saturday (March 11th), I can deploy the site and we can have it live on the *real internet* before our next meeting. However stupid it may be as a website, this would still be a nice goal to have, don't you think?
