# is42
NPM module for testing if a value is 42.

## Examples

```javascript
var lib = require('is42');

lib.is42(42);
lib.is42(43);
lib.is42('forty-two');
lib.is42(null);

>> true
>> false
>> true
>> false
```
