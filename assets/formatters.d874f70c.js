const t=r=>r===-1?{status:"Banned",chip:{color:"warning"}}:r===1?{status:"User",chip:{color:"success"}}:r===2?{status:"Moderator",chip:{color:"primary"}}:r===9?{status:"Admin",chip:{color:"error"}}:{status:"Unauthorized",chip:{color:"info"}};export{t as r};