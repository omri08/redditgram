import middy from "@middy/core";
import cors from "@middy/http-cors";
import httpErrorHanlder from "@middy/http-error-handler";

export default (hanlder) => middy(hanlder).use([httpErrorHanlder(), cors()]);
