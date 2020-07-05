## alt:V - Quick Start

This repo will do everything for you; including download the latest server files.

This is a forked version of the `altv-quickstart` repository.

## Requirements

-   [Git](https://git-scm.com/downloads)
-   [NodeJS 13+](https://nodejs.org/en/download/current/)

## Official Links

-   [alt:V Website](https://altv.mp/#/)
-   [alt:V Forums](https://forum.altv.mp/)
-   [alt:V Discord](https://discordapp.com/invite/q3zUUEC)

### Installation

#### GIF Instructions:

[Step 1 GIF](https://gfycat.com/DefiniteConstantJoey)

[Step 2 GIF](https://gfycat.com/PowerfulOrderlyGartersnake)

[Step 3 GIF](https://gfycat.com/CourageousDefensiveHarpyeagle)

#### Text Instructions:

0. Open a command prompt in a folder.

1. Run this:

```
git clone https://github.com/Stuyk/altv-quickstart
cd altv-quickstart
```

2. Run the code block below this.

    2.1. This can be used whenever you need to update your server files.

    2.2. Run the code block below; wait for packages to install.

    2.3. Then follow the instructions on screen.

```
npm run update
```

3. Bootup the Server

    3.1. This script downloads for Linux or Windows automatically.

    3.2. Use a screen on Linux to run the server in the background.

    3.3. Use a built in command prompt such as in VSCode to run the server.

    3.4. You may press `Ctrl + C` to stop the server at any time.

Linux:

```
./start.sh
```

Windows (CMD):

```
altv-server.exe
```

Windows (Powershell):

```
./altv-server.exe
```

### Connecting to your Quick-Start alt:V Server

Simply put in the following direct connect url: `127.0.0.1:7788`

### Broadcasting Your Server

Your server can be broadcasted by getting a token from the alt:V bot in the Discord.

Message `Master-Bot#3667` and it will instruct you on what to type.

After doing this simply set announce to true in your `server.cfg`.

### Reconnecting to your Server

If you wish to reconnect to your server after restarting you need to enable debug mode on both your client and your server.

In your server.cfg put the following:

`debug: true`

In your altv.cfg for your alt:V client put the following:
`debug: true`

This will fully allow you to reconnect to your server by press `f8` and typing `reconnect <password>`

### Recommend VSCode Plugins

-   [alt:V Auto Complete for VSCode](https://marketplace.visualstudio.com/items?itemName=stuyk.atlv-complete)

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

-   [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
