## GoLang
### Links
- [A Tour of Go](https://tour.golang.org/welcome/1)
- [Effective Go](https://golang.org/doc/effective_go.html)
- [Learn golang series](https://golangbot.com/learn-golang-series/)
- [The Go Programming Language Specification](https://golang.org/ref/spec)
- [Golang - wiki](https://github.com/golang/go/wiki)
- [gobyexample](https://gobyexample.com/)
- [*Vs code with Go*](https://github.com/Microsoft/vscode-go/wiki/Go-tools-that-the-Go-extension-depends-on)
- [The Go Playground](https://play.golang.org/)  used to run go program in online :)
- [Getting started with Go CPU and memory profiling](https://flaviocopes.com/golang-profiling/)
- [subtests](https://blog.golang.org/subtests)

### Comments
 - line comments //
 - block comments /* */
 - More info:
 Every package should have a package comment. It should immediately precede the package statement in one of the files in the package. (It only needs to appear in one file.) It should begin with a single sentence that begins "Package packagename" and give a concise summary of the package functionality. This introductory sentence will be used in godoc's list of all packages.

Subsequent sentences and/or paragraphs can give more details. Sentences should be properly punctuated.

```go
// Package superman implements methods for saving the world.
//
// Experience has shown that a small number of procedures can prove
// helpful when attempting to save the world.
package superman
```
Nearly every top-level type, const, var and func should have a comment. A comment for bar should be in the form "bar floats on high o'er vales and hills.". The first letter of bar should not be capitalized unless it's capitalized in the code.

```go
// enterOrbit causes Superman to fly into low Earth orbit, a position
// that presents several possibilities for planet salvation.
func enterOrbit() os.Error {
  ...
}
```

### Names
- visibility of a name **outside** a package is determined by whether its first character is **upper case**
- *upper case*  - exported
- *lower case* - unexported
- **Package names**
  - ex for import package   import "bytes"
  - By convention, packages are given **lower case, single-word names;** there should be no need for underscores or mixedCaps.
  - ~~Don't use the import . notation~~  
  - ~~Long names don't automatically make things more readable.~~ A helpful doc comment can often be more valuable than an extra long name.  
- Finally, the convention in Go is to use *MixedCaps or mixedCaps* rather than ~~underscores~~ to write multiword names.

### Semicolons
- Like C, Go's formal grammar uses semicolons to terminate statements, but unlike in C, those semicolons **do not appear** in the source (insert **semicolons automatically**, so you should Very carefully  to use // on braces) 
-A semicolon can also be omitted immediately before a closing brace, so a statement such as
```go
go func() { for { dst <- <-src } }()
```
Note: Go programs have semicolons only in places such as for loop clauses, to separate the initializer, condition, and continuation elements.

### Redeclaration and reassignment
```go
f, err := os.Open(name)
d, err := f.Stat()
```
Note err appears in both statements. This duplication is legal: err is declared by the first statement, but only re-assigned in the second.


### Control structures
- If
- For
- Switch
- ~~No do or while loop~~
- ~~Ternary operator~~
### If
  ex

```go  
if x > 0 {
    return y
}
```
- Since if and switch accept an initialization statement, it's common to see one used to set up a local variable.
- break, continue, goto, or return—the unnecessary else is omitted
```go
if err := file.Chmod(0664); err != nil {
    log.Print(err)
    return err
}
```
- If else if example:
```go
// Branching with `if` and `else` in Go is
// straight-forward.

package main

import "fmt"

func main() {

    // Here's a basic example.
    if 7%2 == 0 {
        fmt.Println("7 is even")
    } else {
        fmt.Println("7 is odd")
    }

    // You can have an `if` statement without an else.
    if 8%4 == 0 {
        fmt.Println("8 is divisible by 4")
    }

    // A statement can precede conditionals; any variables
    // declared in this statement are available in all
    // branches.
    if num := 9; num < 0 {
        fmt.Println(num, "is negative")
    } else if num < 10 {
        fmt.Println(num, "has 1 digit")
    } else {
        fmt.Println(num, "has multiple digits")
    }
}

// Note that you don't need parentheses around conditions
// in Go, but that the braces are required.
```

### For
The Go for loop is similar to—but not the same as—C's. It unifies for and while and there is no ~~do-while~~.
- For commom usage.
```go
  // Like a C for
  for init; condition; post { }

  // Like a C while
  for condition { }

  // Like a C for(;;)
  for { }
  ```
  ex.
```go
  sum := 0
  for i := 0; i < 10; i++ {
      sum += i
  }
```

- Looping over looping over an array, slice, string, or map, or reading from a channel, a range clause
```go
  for key, value := range oldMap {
    newMap[key] = value
  }
```

- If you only need the first item in the range (the key or index), drop the second:
```go
  for key := range m {
      if key.expired() {
          delete(m, key)
      }
  }
```

- If you only need the second item in the range (the value), use the blank identifier, an underscore, to discard the first:
```go
  sum := 0
  for _, value := range array {
      sum += value
  }
```
- Go has no ~~comma operator and ++ and --~~ are statements not expressions.
  Thus if you want to run multiple variables in a for you should use parallel assignment (although that precludes ++ and --).
  ex.
```go
// Reverse a
for i, j := 0, len(a)-1; i < j; i, j = i+1, j-1 {
    a[i], a[j] = a[j], a[i]
}
```
### Switch

Spec: https://golang.org/ref/spec#Switch_statements

Go's ` switch ` statements are pretty neat. For one thing, you don't need to break at the end of each case.

```go
switch c {
case '&':
	esc = "&amp;"
case '\'':
	esc = "&apos;"
case '<':
	esc = "&lt;"
case '>':
	esc = "&gt;"
case '"':
	esc = "&quot;"
default:
	panic("unrecognized escape character")
}
```

[src/pkg/html/escape.go](http://golang.org/src/pkg/html/escape.go#L178)

#### Not just integers

Switches work on values of any type.

```go
switch syscall.OS {
case "windows":
	sd = &sysDir{
		Getenv("SystemRoot") + `\system32\drivers\etc`,
		[]string{
			"hosts",
			"networks",
			"protocol",
			"services",
		},
	}
case "plan9":
	sd = &sysDir{
		"/lib/ndb",
		[]string{
			"common",
			"local",
		},
	}
default:
	sd = &sysDir{
		"/etc",
		[]string{
			"group",
			"hosts",
			"passwd",
		},
	}
}
```

#### Missing expression

In fact, you don't need to switch on anything at all. A switch with no value means "switch true", making it a cleaner version of an if-else chain, as in this example from Effective Go:

```go
func unhex(c byte) byte {
	switch {
	case '0' <= c && c <= '9':
		return c - '0'
	case 'a' <= c && c <= 'f':
		return c - 'a' + 10
	case 'A' <= c && c <= 'F':
		return c - 'A' + 10
	}
	return 0
}
```

#### Break

Go's ` switch ` statements ` break ` implicitly, but ` break ` is still useful:

```go
command := ReadCommand()
argv := strings.Fields(command)
switch argv[0] {
case "echo":
	fmt.Print(argv[1:]...)
case "cat":
	if len(argv) <= 1 {
		fmt.Println("Usage: cat <filename>")
		break
	}
	PrintFile(argv[1])
default:
	fmt.Println("Unknown command; try 'echo' or 'cat'")
}
```

#### Fall through

To fall through to a subsequent case, use the ` fallthrough ` keyword:

```go
v := 42
switch v {
case 100:
	fmt.Println(100)
	fallthrough
case 42:
	fmt.Println(42)
	fallthrough
case 1:
	fmt.Println(1)
	fallthrough
default:
	fmt.Println("default")
}
// Output:
// 42
// 1
// default
```

Another example:

```go
// Unpack 4 bytes into uint32 to repack into base 85 5-byte.
var v uint32
switch len(src) {
default:
	v |= uint32(src[3])
	fallthrough
case 3:
	v |= uint32(src[2]) << 8
	fallthrough
case 2:
	v |= uint32(src[1]) << 16
	fallthrough
case 1:
	v |= uint32(src[0]) << 24
}
```
[src/pkg/encoding/ascii85/ascii85.go](http://golang.org/src/pkg/encoding/ascii85/ascii85.go#L43)

The 'fallthrough' must be the last thing in the case; you can't write something like

```go
switch {
case f():
	if g() {
		fallthrough // Does not work!
	}
	h()
default:
	error()
}
```
However, you can work around this by using a 'labeled' `fallthrough`:

```go
switch {
case f():
	if g() {
		goto nextCase // Works now!
	}
	h()
    break
nextCase:
    fallthrough
default:
	error()
}
```
Note: `fallthrough` does not work in type switch.

#### Multiple cases

If you want to use multiple values in the same case, use a comma-separated list.

```go
func letterOp(code int) bool {
	switch chars[code].category {
	case "Lu", "Ll", "Lt", "Lm", "Lo":
		return true
	}
	return false
}
```
#### Type switch

With a type switch you can switch on the type of an interface value (only):

```go
func typeName(v interface{}) string {
	switch v.(type) {
	case int:
		return "int"
	case string:
		return "string"
	default:
		return "unknown"
	}
}
```

You can also declare a variable and it will have the type of each ` case `:

```go
func do(v interface{}) string {
	switch u := v.(type) {
	case int:
		return strconv.Itoa(u*2) // u has type int
	case string:
		mid := len(u) / 2 // split - u has type string
		return u[mid:] + u[:mid] // join
	}
	return "unknown"
}

do(21) == "42"
do("bitrab") == "rabbit"
do(3.142) == "unknown"
```

#### Noop case

Sometimes it useful to have cases that require no action. This can look confusing, because it can appear that both the noop case and the subsequent case have the same action, but isn't so.

```go
func pluralEnding(n int) string {
	ending := ""

	switch n {
	case 1:
	default:
		ending = "s"
	}

	return ending
}

fmt.Sprintf("foo%s\n", pluralEnding(1))  == "foo"
fmt.Sprintf("bar%s\n", pluralEnding(2))  == "bars"

```

### Functions
- functions and methods can return **multiple value**
```go
func getInfo(url string) (string, error) {
  name := 'test'
	return name, nil
}

res, err := getInfo(url)
```

### Named result parameters
```go
func getInfo(url string) (name string, err error) {
  name = 'test'
  return //no arguments
}

res, err := getInfo(url)
```

### Defer
- Defer statement schedules a function call.
- Defer is used to ensure that a function call is performed later in a program’s execution, usually for purposes of cleanup. 
- defer is often used where e.g. ensure and finally would be used in other languages.
```go 
// _Defer_ is used to ensure that a function call is
// performed later in a program's execution, usually for
// purposes of cleanup. `defer` is often used where e.g.
// `ensure` and `finally` would be used in other languages.

package main

import "fmt"
import "os"

// Suppose we wanted to create a file, write to it,
// and then close when we're done. Here's how we could
// do that with `defer`.
func main() {

    // Immediately after getting a file object with
    // `createFile`, we defer the closing of that file
    // with `closeFile`. This will be executed at the end
    // of the enclosing function (`main`), after
    // `writeFile` has finished.
    f := createFile("/tmp/defer.txt")
    defer closeFile(f)
    writeFile(f)
}

func createFile(p string) *os.File {
    fmt.Println("creating")
    f, err := os.Create(p)
    if err != nil {
        panic(err)
    }
    return f
}

func writeFile(f *os.File) {
    fmt.Println("writing")
    fmt.Fprintln(f, "data")

}

func closeFile(f *os.File) {
    fmt.Println("closing")
    f.Close()
}
```
- Suppose we wanted to create a file, write to it, and then close when we’re done. Here’s how we could do that with defer.
- Immediately after getting a file object with createFile, we defer the closing of that file with closeFile. This will be executed at the end of the enclosing function (main), after writeFile has finished.

## Data
### Allocation 
- Go has two allocation primitives, the built-in functions **new** and **make**.
#### new
  - The built-in function new takes a type T, allocates storage for a variable of that type at run time, and returns a value of type \*T pointing to it. The   variable is initialized as described in the section on initial values
 ```go
   new(T)
   
 ```
 For instance
 ```go
  type S struct { a int; b float64 }
  s := new(S)
  fmt.Println(s)
  
```
  - allocates storage for a variable of type S, initializes it (a=0, b=0.0), and returns a value of type \*S containing the address of the location.
  - It's a built-in function that allocates memory, but unlike its namesakes in some other languages it does not initialize the memory, it only zeros it. That is, new(T) allocates zeroed storage for a new item of type T and returns its address, a value of type \*T.
  - **Go terminology, new returns a pointer to a newly allocated zero value of type T.**
#### Constructors and composite literals
  -  The expressions *new(File)* and *&File{}* are equivalent.
  - Sometimes the zero value isn't good enough and an initializing constructor is necessary, example derived from package os.
```go
  func NewFile(fd int, name string) *File {
    if fd < 0 {
        return nil
    }
    f := new(File)
    f.fd = fd
    f.name = name
    f.dirinfo = nil
    f.nepipe = 0
    return f
  } 
```
**We can simplify it using a composite literal**
```go 
  func NewFile(fd int, name string) *File {
    if fd < 0 {
        return nil
    }
    
    //  f := File{fd, name, nil, 0} -  need to pass parameters on same order
    //  f := File{fd: fd, name: name} initializers can appear in any order, 
    // with the missing ones. I go key:vales paris :)
    
    // return f - combine these last two lines below as single line. 
    return &File{fd: fd, name: name}
}
```

#### Make
The built-in function make takes a type T, which must be a **slice, map or channel** type, optionally followed by a type-specific list of expressions. It returns a value of type T (not \*T). The memory is initialized as described in the section on initial values.
```go

Call             Type T     Result

make(T, n)       slice      slice of type T with length n and capacity n
make(T, n, m)    slice      slice of type T with length n and capacity m

make(T)          map        map of type T
make(T, n)       map        map of type T with initial space for approximately n elements

make(T)          channel    unbuffered channel of type T
make(T, n)       channel    buffered channel of type T, buffer size n

```

Each of the size arguments n and m must be of integer type or an untyped constant. A constant size argument must be non-negative and representable by a value of type int; if it is an untyped constant it is given type int. If both n and m are provided and are constant, then n must be no larger than m. If n is negative or larger than m at run time, a run-time panic occurs.

```go

s := make([]int, 10, 100)       // slice with len(s) == 10, cap(s) == 100
s := make([]int, 1e3)           // slice with len(s) == cap(s) == 1000
s := make([]int, 1<<63)         // illegal: len(s) is not representable by a value of type int
s := make([]int, 10, 0)         // illegal: len(s) > cap(s)
c := make(chan int, 10)         // channel with a buffer size of 10
m := make(map[string]int, 100)  // map with initial space for approximately 100 elements
//Calling make with a map type and size hint n will create a map with initial space to hold n map elements. 
//The precise behavior is implementation-dependent.

```

- The reason for the distinction is that these three types represent, under the covers, references to data structures that must be initialized before use.

- These examples illustrate the **difference between new and make.**
```go
var p *[]int = new([]int)       // allocates slice structure; *p == nil; rarely useful
var v  []int = make([]int, 100) // the slice v now refers to a new array of 100 ints

// Unnecessarily complex:
var p *[]int = new([]int)
*p = make([]int, 100, 100)

// Idiomatic:
v := make([]int, 100)
```
- Remember that make applies only to **maps**, **slices** and **channels** and **does not return a pointer**. 
To obtain an explicit pointer allocate with new or take the address of a variable explicitly.

#### Arrays
- An array is a numbered sequence of elements of a single type, called the element type. The number of elements is called the length of the array and is never negative.

```go
ArrayType   = "[" ArrayLength "]" ElementType .
ArrayLength = Expression .
ElementType = Type .
```
- The length is part of the array's type; it must evaluate to a non-negative constant representable by a value of type int. The length of array a can be discovered using the built-in function len. The elements can be addressed by integer indices 0 through len(a)-1. Array types are always one-dimensional but may be composed to form multi-dimensional types.

```
[32]byte
[2*N] struct { x, y int32 }
[1000]*float64
[3][5]int
[2][2][2]float64  // same as [2]([2]([2]float64))

```

- There are major **differences between the ways arrays work in Go and C**. In Go,
  - Arrays are values. Assigning one array to another copies all the elements.
  - In particular, if you pass an array to a function, it will receive a copy of the array, not a pointer to it.
  - The size of an array is part of its type. The types [10]int and [20]int are distinct.

  
 **~~if you want C-like behavior and efficiency~~** but isn't idiomatic Go. **Use slices** instead
```go

func Sum(a *[3]float64) (sum float64) {
    for _, v := range *a {
        sum += v
    }
    return
}

array := [...]float64{7.0, 8.5, 9.1}
x := Sum(&array)  // Note the explicit address-of operator

```
Ex.

```go
// In Go, an _array_ is a numbered sequence of elements of a
// specific length.

package main

import "fmt"

func main() {

    // Here we create an array `a` that will hold exactly
    // 5 `int`s. The type of elements and length are both
    // part of the array's type. By default an array is
    // zero-valued, which for `int`s means `0`s.
    var a [5]int
    fmt.Println("emp:", a)

    // We can set a value at an index using the
    // `array[index] = value` syntax, and get a value with
    // `array[index]`.
    a[4] = 100
    fmt.Println("set:", a)
    fmt.Println("get:", a[4])

    // The builtin `len` returns the length of an array.
    fmt.Println("len:", len(a))

    // Use this syntax to declare and initialize an array
    // in one line.
    b := [5]int{1, 2, 3, 4, 5}
    fmt.Println("dcl:", b)

    // Array types are one-dimensional, but you can
    // compose types to build multi-dimensional data
    // structures.
    var twoD [2][3]int
    for i := 0; i < 2; i++ {
        for j := 0; j < 3; j++ {
            twoD[i][j] = i + j
        }
    }
    fmt.Println("2d: ", twoD)
}
```



 
