/
  -src/
      index.js // server
      models/
      controllers/
      middlewares/
      services/
      utils/
      config/
      respository
   -test/[later]
   -static/
   -temp/

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