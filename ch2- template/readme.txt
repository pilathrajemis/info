Vue basic template syntax.

1. Vue js life cycle:
     Tip: create, mount, update and destory. (each to have before)
     Orders:-
          1. beforeCreate
          2. Created
          3. beforeMount
          4. mounted 
          5. beforeUpdate
          6. updated
          7. beforeDestroy
          8. Destroyed
          
2. Templates:
     1. Text:(interpolations)   use mustache  syntax  {{ msg }}   -- olny for text
         eg. <span>Message: {{ msg }}</span>
     2. One time text interpolations use  v-once
         eg. <span v-once>This will never change: {{ msg }}</span>
     3. Html interprets use v-html="variableName"
        eg. <p>Using v-html directive: <span v-html="rawHtml"></span></p>
     4. Html attributes update, you should used v-bind
         ex. <div v-bind:id="dynamicId"></div>
     5. JavaScript Expressions
          - we can use single line JS expression in both "Mustache" and v-bind
          
3. Directives
      Vue Directives are special attributes with the v- prefix.  Used to reactively manipulate DOM. 
        -  single line JS expression (expect v-for)
       eg. <p v-if="seen">Now you see me</p>
       
      3.1. Arguments
            - Some directives can take an “argument”, denoted by a colon after the directive name.
                eg. <a v-bind:href="url"> ... </a>
      3.2 Modifiers
            - Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way.
            For example, the .prevent modifier tells the v-on directive to call event.preventDefault() on the triggered event:
            <form v-on:submit.prevent="onSubmit"> ... </form>
            
4. Shorthands
        1. v-bind Shorthand
            <!-- full syntax -->
            <a v-bind:href="url"> ... </a>

            <!-- shorthand -->
            <a :href="url"> ... </a>
            
        2. v-on Shorthand
            <!-- full syntax -->
            <a v-on:click="doSomething"> ... </a>

            <!-- shorthand -->
            <a @click="doSomething"> ... </a>
            
            
        