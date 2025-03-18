# Node Set

# Usage
```javascript

const { Set } = require("node-set/app");
/* OR
import { Set } from "node-set/app";
*/

const set = new Set();
set.on("new", (incomingCreation) => {
  console.log(incomingCreation);
})

set.shove(
  "A VALUE",
  0 // Index of Value ( default is -1 )
)

```
