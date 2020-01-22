## Optimizing go code
- **Optimization is a form of refactoring**. But each step, rather than improving some aspect of the source code (code duplication, clarity, etc), 
improves some aspect of the performance: lower CPU, memory usage, latency, etc. 
### Benefits: 
- This improvement generally comes at the cost of readability. 
- This means that in addition to a comprehensive set of unit tests (to ensure your changes haven't broken anything), 
you also need a good set of **benchmarks** to ensure your changes are having the desired effect on **performance**.
- You must be able to verify that your change really is **lowering CPU**

### Useful tools:
- [benchstat](https://godoc.org/golang.org/x/perf/cmd/benchstat) 
