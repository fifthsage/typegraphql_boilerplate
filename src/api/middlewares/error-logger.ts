import { Service } from "typedi";
import {
  MiddlewareInterface,
  NextFn,
  ResolverData,
  ArgumentValidationError
} from "type-graphql";

interface Context {
  currentUser: any;
}

@Service()
export class ErrorLoggerMiddleware implements MiddlewareInterface<Context> {
  // constructor(private readonly logger: any) {}

  async use({  }: /*context, info*/ ResolverData<Context>, next: NextFn) {
    try {
      return await next();
    } catch (err) {
      // error logging (like sentry)
      if (!(err instanceof ArgumentValidationError)) {
        throw new Error("Unknown error occurred. Try again later!");
      }
      throw err;
    }
  }
}
