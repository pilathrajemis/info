## CSS-Grid
  1. CSS-Grid is a two-dimentional system.(row x column).
  2. Flexbox  is a simpler and one-dimentional.
	
**Css layout**
we used 
1. table	
2. floats
3. positioning and inline-block

**Solution.**
1. Flexbox  (but it's one-dimentional.)
2. CSS-Grid (two-dimentional)
	
> Best solution:
   Flexbox and Grid actually work very well together.

### To get Start:
	step 1. Container should have display:grid
	step 2. Set grid-template-columns and grid-template-rows
	step 3. In place its child elements into the grid with grid-column and grid-row

### Terminology:		
**1. Grid Container:**
	Direct parent of all the grid items.
	ex. In this example container is the grid container.
	 ```
			<div class="container">
				<div class="item item-1"></div>
				<div class="item item-2"></div>
				<div class="item item-3"></div>
			</div>
	```
**2. Grid Item:**
  The children (e.g. direct descendants) of the grid container.
  ex. Here the item elements are grid items, but sub-item isn't.
  ```			
				<div class="container">
					<div class="item"></div> 
					<div class="item">
						<p class="sub-item"></p>
					</div>
					<div class="item"></div>
				</div>
```
				
	        c. Grid Line:
		------------
		The dividing lines that make up the structure of the grid.
		  - vertical line (column grid line)
			- horizontal line ( row grid line)
			
		d. Grid Track:
		--------------
		  The space between two adjacent grid lines. (You can think of them like the columns or rows of the grid).
			
		e. Grid Cell: (Single Unit)
		------------
		  The space between two adjacent row and two adjacent column grid lines.
		
		f. Grid Area:
		-------------
		The total space surrounded by four grid lines.
		   - A grid area may be comprised of any number of grid cells.

### Properties for the Grid Container
- display
- grid-template-columns
- grid-template-rows
- grid-template-areas
- grid-template
- grid-column-gap
- grid-row-gap
- grid-gap
- justify-items
- align-items
- place-items
- justify-content
- align-content
- place-content
- grid-auto-columns
- grid-auto-rows
- grid-auto-flow
- grid
	
### Properties for the Grid Items
- grid-column-start
- grid-column-end
- grid-row-start
- grid-row-end
- grid-column
- grid-row
- grid-area
- justify-self
- align-self
- place-self

      	 
