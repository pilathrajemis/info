## GraphQL
- What it GraphQL?
   - new API Standard that was invented by facebook and open source
   - declarative data fetching in the client.
   - single end point.
- **Why Fb develope GraphQL:**
   - increase mobile usage - need to efficient data-loading.
   - To fit the single API for different client and framework.
   - Fast and Rapid developement

**Usage:**
- GraphQL is almost everywhere, where used API(client&server).(any languange and frameworks).
**Why best than rest:**
- GraphQL was develope for more flexibility and efficiency for client-server communication.
-  Single End point.
- Reslove the problem of Over and under fetching 
- under fetching means (n+1) request problem, we need to send separate request for fetch additional data.
- over fetching unnecessary information.

**Rest** - structure endpoint accrodingly to client's need.
- d/b:  Any change in the UI that need to be adjust with Backend
- GraphQL: no need to API changes when UI or requriment changes.

**Benefits of schemas & type:**
- GraphQL use the strong type system do define the capabilities of API.
- Schema severs contract b/w client and server.
- Frontend and backend teams work indepently.	 

**Fundamental operation in GraphQL:**
* schema
* query, 
* mutation,
* subscription

**1. Schema :** It write with schema definition languange (SDL)
	GraphQL has its own type system that’s used to define the schema of an API. 
ex for defining simple type:
```
type Person {  
name: String!
age: Int!					
}

type Post {
title: String!
}
```

! - means require field.

#### Adding releationship b/w types:
```
type Person {  
name: String!
age: Int!
posts: [Post!]! 
}

type Post {
title: String!
author: Person!
}
```

P one to many Post relation.

**2. Query:**
ex. i.                                
```   {
  allPersons {
		name
	}
}

output:
{
	allPersons:[
		{name: "test"},
		{name: "test2"},
		{name: "test3"}								
	]
}
``` 	

allPersons - Root field
Everyting that followed by root field as "Payload".
ex. ii.
```  {
	allPersons{
		name
		posts{
			title
		}
	}
}
``` 
ex.  iii. Query with arguments.
```   {
	allPersons(last: 2) {
		name
	}
}
return last two person that stored in the database.
```

**3. Mutation:**
Next to requesting information from a server, the majority of applications also need some way of making changes to the 
data that’s currently stored in the backend. 
With GraphQL, these changes are made using so-called mutations. 
There generally are three kinds of mutations:
- creating new data
- updating existing data
- deleting existing data

> Mutations follow the same syntactical structure as queries, but they always need to start with the mutation keyword.
ex.

```
mutation {
createPerson(name: "Bob", age: 36) {
	id
}
}
```
output:
```
	{
	  data: {
			createPerson:[
				{id: "sdadsadsadfdfdf"}									
			]
    }
  }
```
**4. Realtime Updates with Subscriptions **
	- Another important requirement for many applications today is to have a realtime connection to the server in order to get immediately 
	informed about important events. 
	For this use case, GraphQL offers the concept of subscriptions.
	- When a client subscribes to an event, it will initiate and hold 
	a steady connection to the server. Whenever that particular event 
	then actually happens, the server pushes the corresponding data to the client. 
	Unlike queries and mutations that follow a typical “request-response-cycle”, 
	subscriptions represent a stream of data sent over to the client.
	
	ex.
```
		subscription {
			newPerson {
				name
				age
			}
		}
```
## GraphQL Server 
 ** GraphQL Server common architecture:**
  1. GraphQL server with connected database.
	2. GraphQL server to integrated system.
	3. GraphQL Server with a connected database and integrated system.
	
	1. GraphQL server with connected database.
		   client --> communicate with single -> GraphQL Server. 
	2. GraphQL server to integrated system.
	    GraphQL act as the middle ware to fetch data from the all legacy system and services  that respond to client.
	3. GraphQL Server with a connected database and integrated system.
	 
** Reslover function**
  - GraphQL queries/mutations consists of set of fields
	- GraphQL has a one resolver function per field.
	- Purpose of resolver function to retrive data for its corresponding field.
## GraphQL Client:
  - GraphQL is great for frontend developers as data fetching complexity can be pushed to the server side.
	- Client doesn't know where data is coming from.
	- opportunity for new abstractions on the frontend.
  - **Declarative data fetching**
	    - describe data requriments
      - display the information in the UI			



- When we start working with variables, we need to do three things:
1. Replace the static value in the query with $variableName
2. Declare $variableName as one of the variables accepted by the query
3. Pass variableName: value in the separate, transport-specific (usually JSON) variables dictionary

```
query HeroNameAndFriends($episode: Episode) {
hero(episode: $episode) {
name
friends {
	name
}
}
}
```

- Variable definitions
  . variables:- prefixed by $, followed by their type, in this case Episode.
  . variables must be either scalars, enums, or input object types
  . Default variables :- Default values can also be assigned to the variables in the query by adding the default value after the type declaration.

```
query HeroNameAndFriends($episode: Episode = JEDI) {
hero(episode: $episode) {
	name
	friends {
		name
	}
}
}				
```
- **Directives:**
   
	 

		
