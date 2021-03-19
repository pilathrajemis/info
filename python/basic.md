## Python Basics
```python 
#Variable Declaration
a = "test"
x, y, z, n = "Orange", "Banana", "Cherry", 5
s = t = v = "Orange"
# Single line command

""""
Multi
line 
cmd"""

# array === list
a = [1,2,3] # override
# Unpack a list:
b,c,d = a

print(x)
print(y, end=" ")
print(z)
print(n)
print(a)
print(b,c,d)
print(s+t+v) #Concatenation Operator
```
## Output
```
Orange
Banana Cherry
5
[1, 2, 3]
1 2 3
OrangeOrangeOrange
```
### Variable scoping
```python
x = "awesome"

def myfunc():
  global x, z
  x = "fantastic"
  y = "testing"
  z = "global variable create inside a function"

myfunc()

print("x: " + x)
#print("Access local variable " + y) #NameError: name 'y' is not defined
print("z: " + z)
#print("Access undefined variables ", xyz) #NameError: name 'xyz' is not defined

```
### output
```
x: fantastic
z: global variable created inside a function
```
### Data types
|Description| type| example|
|-----------|-----|--------|
|Text Type:|	str| s = "Pilath"  (or) S= 'raj'|
|Numeric Types:	int, float, complex | i,f,c = 10, 10.10, 10+i10|
|Sequence Types:|	list, tuple, range|
|Mapping Type:|	dict|
|Set Types:	set, frozenset|
|Boolean Type:|	bool| b =true|
|Binary Types:|	bytes, bytearray, memoryview|

