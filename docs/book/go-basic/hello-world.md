# Hello World 程序
很多语言入门的第一课都是 `Hello World`，`Go` 语言也不例外。`Go` 语言的 `Hello World` 程序如下所示：

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
}

```

**代码解释：**
- `package main`：包声明，`Go` 语言的源代码都是以包为单位的，`main` 包比较特殊，它表示一个可独立运行的程序，每个可独立运行的程序都必须有一个 `main` 包。
- `import "fmt"`：包导入，`fmt` 包提供了格式化输入输出的功能。
- `func main()`：函数声明，`main` 函数是 `Go` 语言的入口函数，程序总是从 `main` 函数开始执行。
- `fmt.Println("Hello，World！")`：`fmt` 包中的 `Println` 函数用于打印输出内容，`Hello，World！` 是要输出的内容。
- `//`：单行注释，注释内容会被编译器忽略。

**运行程序：**

1、将上述代码保存到 `hello.go` 文件里。

2、打开终端或命令行，进入 `hello.go` 文件所在目录。

3、运行 `go run hello.go` 命令执行程序，得到的执行结果：

```txt
Hello, World!
```

**编译程序：**

`Go` 语言是编译型语言，你可以将程序编译为二进制文件，以便后续使用：

```bash
go build hello.go
```

编译后得到一个可执行文件 `hello`（`windows` 系统下为 `hello.exe`）。你可以直接运行所生成的文件：

```bash
./hello # 或在 windows 下执行 hello.exe
```