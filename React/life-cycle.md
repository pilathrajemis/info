## Lifecycle of Components
- Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
- The three phases are: Mounting, Updating, and Unmounting.
### Mounting
1. constructor()
2. getDerivedStateFromProps(props, state) - return state
3. render()
4. componentDidMount()

### Updating
  1. getDerivedStateFromProps(props, state) - return state
  2. shouldComponentUpdate()  - return boolean.
  3. render()
  4. getSnapshotBeforeUpdate(prevprops,prevstate)
  5. componentDidUpdate()
 ### Unmounting
   1. componentWillUnmount()

## React Event:
- React events are written in camelCase syntax.
- onClick={shoot}  instead of onClick="shoot()".
- passing arguments 
- onClick={() => this.shoot("Goal")}
