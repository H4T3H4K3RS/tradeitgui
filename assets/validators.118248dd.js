const s=r=>r==null||r===""?!0:!!(Array.isArray(r)&&r.length===0),e=r=>r==null,i=r=>Array.isArray(r)&&r.length===0,o=r=>e(r)||i(r)||r===!1?"\u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F":!!String(r).trim().length||"\u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F",a=r=>{if(s(r))return!0;const t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(r)?r.every(n=>t.test(String(n)))||"\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430":t.test(String(r))||"\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430"},d=r=>/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/.test(r)||"\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C 1 \u0441\u0442\u0440\u043E\u0447\u043D\u0443\u044E, 1 \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u0443\u044E, 1 \u0446\u0438\u0444\u0440\u0443 \u0438 1 \u0441\u043F\u0435\u0446. \u0441\u0438\u043C\u0432\u043E\u043B \u0438 \u043E\u0431\u0449\u0443\u044E \u0434\u043B\u0438\u043D\u0443 \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",A=r=>s(r)?!0:/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(String(r))||"\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 URL";export{a as e,d as p,o as r,A as u};
