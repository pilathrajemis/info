1. v-for
-----------------------

   1. For array element:
      <ul id="example-1">
        <li v-for="item in items">
          {{ item.message }}
        </li>
      </ul>
    ex.
       
       var example1 = new Vue({
        el: '#example-1',
        data: {
          items: [
            { message: 'Foo' },
            { message: 'Bar' }
          ]
        }
       });
       
  2. v-for blocks we have full access to parent scope properties:
  
    <ul id="example-2">
      <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
    
    ex.
    
    var example2 = new Vue({
      el: '#example-2',
      data: {
        parentMessage: 'Parent',
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ]
      }
    })
    
  3. v-for with an Object
  
    <ul id="v-for-object" class="demo">
      <li v-for="value in object">
        {{ value }}
      </li>
    </ul>
    
    new Vue({
      el: '#v-for-object',
      data: {
        object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        }
      }
    })
    o/p: -
      John
      Doe
      30
  
  4. object value, key and index:-
    <div v-for="(value, key, index) in object">
     {{ index }}. {{ key }}: {{ value }}
    </div>


  
   