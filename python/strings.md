# Strings
## 1. index Slice
```python
n = "0123456789"
print(n) #0123456789
print(n[1]) # 1  -> index start from Zero
print(n[1:3]) # 12  -> Start and end-1 index, Print from 1 to 2 index 
print(n[6:]) # 6789
print(n[:5]) # 01234
```
## String function
```python
s = "Pilathraj"
print(len(s)) #9
#  Substring check
print("raj" in s) # True
# print array 
for c in "cse":
  print(c)  
  """ 
  output:
  c
  s
  e
  """
print(s.upper()) # PILATHRAJ
print(" Hello Pilathraj ".strip()) # trim the whitespace Hello Pilathraj
print(s.count("a")) # 2 <- how many times substring print in the string s.
print(s.find("raj")) # 6 <- retrun starting position
```

