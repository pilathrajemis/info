***
Class and Style Bindings
***
1. We can pass an object to v-bind:class to dynamically toggle classes.
    -1. Pass object inline (it's supports mutilple properties).
    ex. <div v-bind:class="{ active: isActive }"></div>  # active class will be added, when isActive have TRUE.
    - 2. we can use, classObject
        ex.
           data: {
              classObject: {
                active: true,
                'text-danger': false
              }
            }
          <div v-bind:class="classObject"></div>
    -3. Use Compute property for classObject (most common and powerful pattern):
        ex.
          <div v-bind:class="classObject"></div>
          data: {
            isActive: true,
            error: null
          },
          computed: {
            classObject: function () {
              return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
              }
            }
          }
          