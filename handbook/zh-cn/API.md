# API
API Decorator is the `recommended` way to register API now.

#### Basic Example

Do **NOT** forget **import** API class in your index.js

```javascript
// file: index.js
import './user.js'  // import, that's all
```

```javascript
// file: user.js

// Define API collection
@API()
class User
{
    create = 'https://www.qq.com/user'
}

// Call API (lower case `user` used here)
API('user.create', { name: 'copydog' }) // 'GET' method will be used

```

#### Restful Example With Other Decorators
```javascript
// Define API collection
@API({
    defaultDomain: 'https://www.qq.com',
    defaultMethod: 'GET',
})
class User
{
    @Validator(someValidator)
    @Form(true)
    @Method('POST')
    create = '/user';
    
    @Form(true)
    @Method('PATCH')
    update = '/user/:id';
    
    read = '/user/:id';
    
    @Form(true)
    @Method('DELETE')
    delete = '/user/:id';
}

// Call API (lower case `user` used here)
API('user.create', { name: 'copydog' });
API('user.delete', { id: 11 });
```

### Documentation

#### @API()

Parameter|Intro|default value
---------|-----|-------------
defaultDomain|Creates and registers API for you|undefined
defaultMethod|123|'GET'