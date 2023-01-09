
## FLIGHT AND SEARCH MICROSERVICE
This micro-service mainly focuses on creation, deletion, updation and fetching all the flights, airports and cities in the database. The APIs which read the flights from databases are exposed to the customers, others can only be accessed by the Admins.

Features:

-Create, Read, Update and Delete cities (For Admins)
-Create, Read, Update and Delete Airports for a particular city (For Admins)
-Read Flights (For customers as well as for Admins) based on certain filters. (filters are  not mandatory)
-Create, Update and Delete Flights (For Admins)
   ## DB Design
    - Airplane Table
    - Flight Table
    - Airport
    - City
    
 
    - A flight belongs to an airlplane but one airplane can be used in multiple flights
    - A city has many airports but one airport belongs to a city
    - One airport can have many flights, but a flight belong to one airport
    

## Tables
  
### City  --> id, nmae, created_at, updated_at
### Airport  --> id , name, address, city_id, created_at, updated_at
    Relationship  --> City has many airports and Airport belongs to a city (one to many)

```  
npx sequelize model:generate --name Airport --attributes name:string,address:string,cityId:integer

```