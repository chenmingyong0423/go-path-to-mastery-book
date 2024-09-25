# 安装与配置环境
## 下载链接
- 官网：https://golang.org/dl
- 中国大陆的镜像站点：https://golang.google.cn/dl/

  在中国，推荐使用中国大陆的镜像站点下载，可以大幅度提升下载的速度。
## Windows 操作系统下安装
- 1、前往 [Go 官网下载页面](https://golang.org/dl/) 或 [中国大陆的镜像站点](https://golang.google.cn/dl/)。
- 2、下载适用于 `Windows 64` 位系统最新版本的 `.msi` 安装包（通常格式为 `go1.xx.x.windows-amd64.msi`）。如果想下载 `Windows 32` 位系统版本或其他 `Go` 版本的安装包，可在 `Stable versions` 栏目选择。
- 3、下载完成后，双击 `.msi` 文件并按照提示安装 `Go` 环境。安装完成之后，系统会自动帮我们添加 `GOROOT`、`GOPATH` 和 `PATH` 环境变量，一般来说，我们可能会修改 `GOPATH` 为我们自定义的路径，在环境变量里面找到 `GOPATH` 变量进行修改即可。
- 4、最后验证 `Go` 是否安装成功：
   ```bash
   go version
   ```
  如果安装成功，你将会看到类似以下的输出：

   ```bash
  go version go1.23.0 windows/amd64
   ```

## Linux 操作系统下安装
- 1、下载安装包
```shell
sudo wget https://golang.google.cn/dl/go1.23.0.linux-amd64.tar.gz
```

- 2、解压安装包
```shell
sudo tar zxvf go1.23.0.linux-amd64.tar.gz -C /home/chenmingyong/software/
```
通过 `tar` 命令进行解压，`-C` 后面指定解压路径。

- 3、环境配置
```shell
// 创建自定义的 GOPATH 目录
sudo mkdir -p /home/chenmingyong/data/go_path
// 配置环境变量
vim ~/.bashrc
// 加入以下几行
export GOROOT=/home/chenmingyong/software/go
export GOPATH=/home/chenmingyong/data/go_path
export PATH=$PATH:/home/chenmingyong/software/go/bin
// 保存文件之后，执行以下命令使环境变量生效
source ~/.bashrc
```
- 4、最后验证 `Go` 是否安装成功：
   ```bash
   go version
   ```
  如果安装成功，你将会看到类似以下的输出：

   ```bash
  go version go1.23.0 linux/amd64
   ```



**注意：** 请将 `/home/chenmingyong/software` 和 `/home/chenmingyong/data/go_path` 修改成自己的路径。

## Mac OS 操作系统下安装
### 通过 Homebrew 安装（推荐）
[Homebrew](https://brew.sh/) 是 `macOS` 上最流行的包管理工具，使用它来安装 `Go` 非常简单。

步骤：
- 1、确保 `Homebrew` 已安装。你可以通过输入以下命令来检查：
   ```bash
   brew -v
   ```
   如果 `Homebrew` 没有安装，可以通过以下命令安装：
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
- 2、安装 `Go` 环境：
   ```bash
   brew install go
   ```
- 3、验证 `Go` 是否安装成功：
   ```bash
   go version
   ```
   如果安装成功，你将会看到类似以下的输出：

   ```bash
   go version go1.23.0 darwin/amd64
   ```

### 通过官方包安装
你也可以从 `Go` 语言的官方网站下载并安装官方的 `Go` 安装包。

步骤：
- 1、前往 [Go 官网下载页面](https://golang.org/dl/) 或 [中国大陆的镜像站点](https://golang.google.cn/dl/)。 
- 2、下载适用于 macOS 的 `.pkg` 安装包（通常格式为 `go1.xx.x.darwin-amd64.pkg` 或 `go1.xx.x.darwin-arm64.pkg`，根据你的 Mac 是 Intel 还是 Apple Silicon 来选择）。
- 3、下载完成后，双击 `.pkg` 文件并按照提示安装 `Go` 环境。 
- 4、安装完成后，打开终端，输入以下命令验证 `Go` 是否安装成功：
   ```bash
   go version
   ```
  
   如果安装成功，你将会看到类似以下的输出：
  ```bash
  go version go1.23.0 darwin/amd64
  ```

### 配置 Go 环境变量（可选）
默认情况下，Go 会将工作区设置在 `$HOME/go`，如果你想自定义 Go 工作区或使用 Go Modules，可以设置以下环境变量：

1. 打开或创建 `~/.bash_profile`（或 `.zshrc`，根据你使用的 shell）文件：
   ```bash
   nano ~/.bash_profile
   ```
   或
   ```bash
   nano ~/.zshrc
   ```

2. 添加以下内容：
   ```bash
   export GOPATH=$HOME/go
   export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin
   ```

3. 保存并退出编辑器，然后在终端中运行以下命令以使更改生效：
   ```bash
   source ~/.bash_profile
   ```
   或
   ```bash
   source ~/.zshrc
   ```

## 安装多个 Go 版本
`Go` 自身提供的版本下载和管理机制，可以直接通过 `go install` 命令安装特定版本的 `Go`，并使用该版本而无需额外的工具。

步骤：
- 1、安装指定的 `Go` 版本下载器。

    ```bash
    go install golang.org/dl/go1.23.0@latest
    ```
  这条命令会安装一个用于下载和管理 `Go 1.23.0` 版本的工具，这个工具会被安装到你的 `$GOPATH/bin` 或者 `$HOME/go/bin` 目录下。
- 2、下载并安装 `Go 1.23.0`。

    ```bash
    go1.23.0 download
    ```
  运行这条命令后，`go1.23.0` 会下载并安装 `Go 1.23.0` 版本到你的本地环境中。
- 3、使用。
    ```bash
    go1.23.0 version
    go1.23.0 run main.go
    ```

## 常用环境变量的解释
- `GOROOT`

  `Go` 的安装路径
- `GOPATH`

  用于指定 `Go` 工作空间的路径。
  `GOPATH` 目录下主要包含以下三个目录: `bin`、`pkg`、`src`：
    - `bin`：主要存放可执行文件。
    - `pkg`：存放编译好的库文件。
    - `src`：存放 `Go` 的代码源文件（即 Go 项目代码）。
- `GO111MODULE`

  `GO111MODULE` 是 `Go 1.11` 引入的新版模块管理方式，它的值决定了当前使用的构建模式是传统的 `GOPATH` 模式还是新引入的 `Go Module` 模式，默认值是 `on`。

  如果你使用 `Go Modules`，`GOPATH` 不再是项目的必需路径。你可以在任意目录下创建 `Go` 项目，并使用 `go.mod` 文件管理依赖包。
- `GOPROXY`
  用来配置 `Go Module proxy`，默认值是 `https://proxy.golang.org,direct`，在中国，为了加速获取 `Module` 的速度，我们可以将 `GOPROXY` 的值设置为 `https://goproxy.cn,direct`。
