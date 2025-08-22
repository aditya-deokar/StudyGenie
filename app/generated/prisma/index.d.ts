
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Assessment
 * 
 */
export type Assessment = $Result.DefaultSelection<Prisma.$AssessmentPayload>
/**
 * Model IndustryInsights
 * 
 */
export type IndustryInsights = $Result.DefaultSelection<Prisma.$IndustryInsightsPayload>
/**
 * Model CourseList
 * 
 */
export type CourseList = $Result.DefaultSelection<Prisma.$CourseListPayload>
/**
 * Model Chapters
 * 
 */
export type Chapters = $Result.DefaultSelection<Prisma.$ChaptersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DemandLevel: {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  NEGATIVE: 'NEGATIVE'
};

export type DemandLevel = (typeof DemandLevel)[keyof typeof DemandLevel]


export const MarketOutlook: {
  POSITIVE: 'POSITIVE',
  NEUTRAL: 'NEUTRAL',
  NEGATIVE: 'NEGATIVE'
};

export type MarketOutlook = (typeof MarketOutlook)[keyof typeof MarketOutlook]

}

export type DemandLevel = $Enums.DemandLevel

export const DemandLevel: typeof $Enums.DemandLevel

export type MarketOutlook = $Enums.MarketOutlook

export const MarketOutlook: typeof $Enums.MarketOutlook

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessment`: Exposes CRUD operations for the **Assessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assessments
    * const assessments = await prisma.assessment.findMany()
    * ```
    */
  get assessment(): Prisma.AssessmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.industryInsights`: Exposes CRUD operations for the **IndustryInsights** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndustryInsights
    * const industryInsights = await prisma.industryInsights.findMany()
    * ```
    */
  get industryInsights(): Prisma.IndustryInsightsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseList`: Exposes CRUD operations for the **CourseList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseLists
    * const courseLists = await prisma.courseList.findMany()
    * ```
    */
  get courseList(): Prisma.CourseListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapters`: Exposes CRUD operations for the **Chapters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapters.findMany()
    * ```
    */
  get chapters(): Prisma.ChaptersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Assessment: 'Assessment',
    IndustryInsights: 'IndustryInsights',
    CourseList: 'CourseList',
    Chapters: 'Chapters'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "assessment" | "industryInsights" | "courseList" | "chapters"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Assessment: {
        payload: Prisma.$AssessmentPayload<ExtArgs>
        fields: Prisma.AssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findFirst: {
            args: Prisma.AssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findMany: {
            args: Prisma.AssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          create: {
            args: Prisma.AssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          createMany: {
            args: Prisma.AssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          delete: {
            args: Prisma.AssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          update: {
            args: Prisma.AssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssessmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          upsert: {
            args: Prisma.AssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessment>
          }
          groupBy: {
            args: Prisma.AssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentCountAggregateOutputType> | number
          }
        }
      }
      IndustryInsights: {
        payload: Prisma.$IndustryInsightsPayload<ExtArgs>
        fields: Prisma.IndustryInsightsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndustryInsightsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndustryInsightsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightsPayload>
          }
          findFirst: {
            args: Prisma.IndustryInsightsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndustryInsightsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightsPayload>
          }
          findMany: {
            args: Prisma.IndustryInsightsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightsPayload>[]
          }
          create: {
            args: Prisma.IndustryInsightsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightsPayload>
          }
          createMany: {
            args: Prisma.IndustryInsightsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndustryInsightsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightsPayload>[]
          }
          delete: {
            args: Prisma.IndustryInsightsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightsPayload>
          }
          update: {
            args: Prisma.IndustryInsightsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightsPayload>
          }
          deleteMany: {
            args: Prisma.IndustryInsightsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndustryInsightsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndustryInsightsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightsPayload>[]
          }
          upsert: {
            args: Prisma.IndustryInsightsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightsPayload>
          }
          aggregate: {
            args: Prisma.IndustryInsightsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndustryInsights>
          }
          groupBy: {
            args: Prisma.IndustryInsightsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndustryInsightsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndustryInsightsCountArgs<ExtArgs>
            result: $Utils.Optional<IndustryInsightsCountAggregateOutputType> | number
          }
        }
      }
      CourseList: {
        payload: Prisma.$CourseListPayload<ExtArgs>
        fields: Prisma.CourseListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseListPayload>
          }
          findFirst: {
            args: Prisma.CourseListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseListPayload>
          }
          findMany: {
            args: Prisma.CourseListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseListPayload>[]
          }
          create: {
            args: Prisma.CourseListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseListPayload>
          }
          createMany: {
            args: Prisma.CourseListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseListPayload>[]
          }
          delete: {
            args: Prisma.CourseListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseListPayload>
          }
          update: {
            args: Prisma.CourseListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseListPayload>
          }
          deleteMany: {
            args: Prisma.CourseListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseListPayload>[]
          }
          upsert: {
            args: Prisma.CourseListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseListPayload>
          }
          aggregate: {
            args: Prisma.CourseListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseList>
          }
          groupBy: {
            args: Prisma.CourseListGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseListGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseListCountArgs<ExtArgs>
            result: $Utils.Optional<CourseListCountAggregateOutputType> | number
          }
        }
      }
      Chapters: {
        payload: Prisma.$ChaptersPayload<ExtArgs>
        fields: Prisma.ChaptersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChaptersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChaptersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          findFirst: {
            args: Prisma.ChaptersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChaptersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          findMany: {
            args: Prisma.ChaptersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>[]
          }
          create: {
            args: Prisma.ChaptersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          createMany: {
            args: Prisma.ChaptersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChaptersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>[]
          }
          delete: {
            args: Prisma.ChaptersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          update: {
            args: Prisma.ChaptersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          deleteMany: {
            args: Prisma.ChaptersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChaptersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChaptersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>[]
          }
          upsert: {
            args: Prisma.ChaptersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          aggregate: {
            args: Prisma.ChaptersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapters>
          }
          groupBy: {
            args: Prisma.ChaptersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChaptersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChaptersCountArgs<ExtArgs>
            result: $Utils.Optional<ChaptersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    assessment?: AssessmentOmit
    industryInsights?: IndustryInsightsOmit
    courseList?: CourseListOmit
    chapters?: ChaptersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assessments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessments?: boolean | UserCountOutputTypeCountAssessmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
  }


  /**
   * Count Type IndustryInsightsCountOutputType
   */

  export type IndustryInsightsCountOutputType = {
    user: number
  }

  export type IndustryInsightsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | IndustryInsightsCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * IndustryInsightsCountOutputType without action
   */
  export type IndustryInsightsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsightsCountOutputType
     */
    select?: IndustryInsightsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IndustryInsightsCountOutputType without action
   */
  export type IndustryInsightsCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type CourseListCountOutputType
   */

  export type CourseListCountOutputType = {
    chapters: number
    assessments: number
  }

  export type CourseListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | CourseListCountOutputTypeCountChaptersArgs
    assessments?: boolean | CourseListCountOutputTypeCountAssessmentsArgs
  }

  // Custom InputTypes
  /**
   * CourseListCountOutputType without action
   */
  export type CourseListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseListCountOutputType
     */
    select?: CourseListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseListCountOutputType without action
   */
  export type CourseListCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChaptersWhereInput
  }

  /**
   * CourseListCountOutputType without action
   */
  export type CourseListCountOutputTypeCountAssessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    experience: number | null
  }

  export type UserSumAggregateOutputType = {
    experience: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    industry: string | null
    createdAt: Date | null
    updatedAt: Date | null
    bio: string | null
    experience: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    industry: string | null
    createdAt: Date | null
    updatedAt: Date | null
    bio: string | null
    experience: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkUserId: number
    email: number
    name: number
    imageUrl: number
    industry: number
    createdAt: number
    updatedAt: number
    bio: number
    experience: number
    skills: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    experience?: true
  }

  export type UserSumAggregateInputType = {
    experience?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    industry?: true
    createdAt?: true
    updatedAt?: true
    bio?: true
    experience?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    industry?: true
    createdAt?: true
    updatedAt?: true
    bio?: true
    experience?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    industry?: true
    createdAt?: true
    updatedAt?: true
    bio?: true
    experience?: true
    skills?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkUserId: string
    email: string
    name: string | null
    imageUrl: string | null
    industry: string | null
    createdAt: Date
    updatedAt: Date
    bio: string | null
    experience: number | null
    skills: string[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bio?: boolean
    experience?: boolean
    skills?: boolean
    industryInsights?: boolean | User$industryInsightsArgs<ExtArgs>
    assessments?: boolean | User$assessmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bio?: boolean
    experience?: boolean
    skills?: boolean
    industryInsights?: boolean | User$industryInsightsArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bio?: boolean
    experience?: boolean
    skills?: boolean
    industryInsights?: boolean | User$industryInsightsArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bio?: boolean
    experience?: boolean
    skills?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "email" | "name" | "imageUrl" | "industry" | "createdAt" | "updatedAt" | "bio" | "experience" | "skills", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industryInsights?: boolean | User$industryInsightsArgs<ExtArgs>
    assessments?: boolean | User$assessmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industryInsights?: boolean | User$industryInsightsArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industryInsights?: boolean | User$industryInsightsArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      industryInsights: Prisma.$IndustryInsightsPayload<ExtArgs> | null
      assessments: Prisma.$AssessmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      email: string
      name: string | null
      imageUrl: string | null
      industry: string | null
      createdAt: Date
      updatedAt: Date
      bio: string | null
      experience: number | null
      skills: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    industryInsights<T extends User$industryInsightsArgs<ExtArgs> = {}>(args?: Subset<T, User$industryInsightsArgs<ExtArgs>>): Prisma__IndustryInsightsClient<$Result.GetResult<Prisma.$IndustryInsightsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assessments<T extends User$assessmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkUserId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly industry: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly bio: FieldRef<"User", 'String'>
    readonly experience: FieldRef<"User", 'Int'>
    readonly skills: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.industryInsights
   */
  export type User$industryInsightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsights
     */
    select?: IndustryInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsights
     */
    omit?: IndustryInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightsInclude<ExtArgs> | null
    where?: IndustryInsightsWhereInput
  }

  /**
   * User.assessments
   */
  export type User$assessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    cursor?: AssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Assessment
   */

  export type AggregateAssessment = {
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  export type AssessmentAvgAggregateOutputType = {
    quizScore: number | null
  }

  export type AssessmentSumAggregateOutputType = {
    quizScore: number | null
  }

  export type AssessmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    quizScore: number | null
    category: string | null
    improvementTip: string | null
    createdAt: Date | null
    updatedAt: Date | null
    courseListId: string | null
  }

  export type AssessmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    quizScore: number | null
    category: string | null
    improvementTip: string | null
    createdAt: Date | null
    updatedAt: Date | null
    courseListId: string | null
  }

  export type AssessmentCountAggregateOutputType = {
    id: number
    userId: number
    quizScore: number
    questions: number
    category: number
    improvementTip: number
    createdAt: number
    updatedAt: number
    courseListId: number
    _all: number
  }


  export type AssessmentAvgAggregateInputType = {
    quizScore?: true
  }

  export type AssessmentSumAggregateInputType = {
    quizScore?: true
  }

  export type AssessmentMinAggregateInputType = {
    id?: true
    userId?: true
    quizScore?: true
    category?: true
    improvementTip?: true
    createdAt?: true
    updatedAt?: true
    courseListId?: true
  }

  export type AssessmentMaxAggregateInputType = {
    id?: true
    userId?: true
    quizScore?: true
    category?: true
    improvementTip?: true
    createdAt?: true
    updatedAt?: true
    courseListId?: true
  }

  export type AssessmentCountAggregateInputType = {
    id?: true
    userId?: true
    quizScore?: true
    questions?: true
    category?: true
    improvementTip?: true
    createdAt?: true
    updatedAt?: true
    courseListId?: true
    _all?: true
  }

  export type AssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessment to aggregate.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assessments
    **/
    _count?: true | AssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentMaxAggregateInputType
  }

  export type GetAssessmentAggregateType<T extends AssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessment[P]>
      : GetScalarType<T[P], AggregateAssessment[P]>
  }




  export type AssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithAggregationInput | AssessmentOrderByWithAggregationInput[]
    by: AssessmentScalarFieldEnum[] | AssessmentScalarFieldEnum
    having?: AssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentCountAggregateInputType | true
    _avg?: AssessmentAvgAggregateInputType
    _sum?: AssessmentSumAggregateInputType
    _min?: AssessmentMinAggregateInputType
    _max?: AssessmentMaxAggregateInputType
  }

  export type AssessmentGroupByOutputType = {
    id: string
    userId: string
    quizScore: number
    questions: JsonValue[]
    category: string
    improvementTip: string | null
    createdAt: Date
    updatedAt: Date
    courseListId: string | null
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  type GetAssessmentGroupByPayload<T extends AssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizScore?: boolean
    questions?: boolean
    category?: boolean
    improvementTip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseListId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseList?: boolean | Assessment$courseListArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizScore?: boolean
    questions?: boolean
    category?: boolean
    improvementTip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseListId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseList?: boolean | Assessment$courseListArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizScore?: boolean
    questions?: boolean
    category?: boolean
    improvementTip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseListId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseList?: boolean | Assessment$courseListArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectScalar = {
    id?: boolean
    userId?: boolean
    quizScore?: boolean
    questions?: boolean
    category?: boolean
    improvementTip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseListId?: boolean
  }

  export type AssessmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "quizScore" | "questions" | "category" | "improvementTip" | "createdAt" | "updatedAt" | "courseListId", ExtArgs["result"]["assessment"]>
  export type AssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseList?: boolean | Assessment$courseListArgs<ExtArgs>
  }
  export type AssessmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseList?: boolean | Assessment$courseListArgs<ExtArgs>
  }
  export type AssessmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseList?: boolean | Assessment$courseListArgs<ExtArgs>
  }

  export type $AssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assessment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      courseList: Prisma.$CourseListPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      quizScore: number
      questions: Prisma.JsonValue[]
      category: string
      improvementTip: string | null
      createdAt: Date
      updatedAt: Date
      courseListId: string | null
    }, ExtArgs["result"]["assessment"]>
    composites: {}
  }

  type AssessmentGetPayload<S extends boolean | null | undefined | AssessmentDefaultArgs> = $Result.GetResult<Prisma.$AssessmentPayload, S>

  type AssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessmentCountAggregateInputType | true
    }

  export interface AssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assessment'], meta: { name: 'Assessment' } }
    /**
     * Find zero or one Assessment that matches the filter.
     * @param {AssessmentFindUniqueArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentFindUniqueArgs>(args: SelectSubset<T, AssessmentFindUniqueArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assessment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessmentFindUniqueOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentFindFirstArgs>(args?: SelectSubset<T, AssessmentFindFirstArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assessments
     * const assessments = await prisma.assessment.findMany()
     * 
     * // Get first 10 Assessments
     * const assessments = await prisma.assessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentWithIdOnly = await prisma.assessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentFindManyArgs>(args?: SelectSubset<T, AssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assessment.
     * @param {AssessmentCreateArgs} args - Arguments to create a Assessment.
     * @example
     * // Create one Assessment
     * const Assessment = await prisma.assessment.create({
     *   data: {
     *     // ... data to create a Assessment
     *   }
     * })
     * 
     */
    create<T extends AssessmentCreateArgs>(args: SelectSubset<T, AssessmentCreateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assessments.
     * @param {AssessmentCreateManyArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentCreateManyArgs>(args?: SelectSubset<T, AssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assessments and returns the data saved in the database.
     * @param {AssessmentCreateManyAndReturnArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assessment.
     * @param {AssessmentDeleteArgs} args - Arguments to delete one Assessment.
     * @example
     * // Delete one Assessment
     * const Assessment = await prisma.assessment.delete({
     *   where: {
     *     // ... filter to delete one Assessment
     *   }
     * })
     * 
     */
    delete<T extends AssessmentDeleteArgs>(args: SelectSubset<T, AssessmentDeleteArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assessment.
     * @param {AssessmentUpdateArgs} args - Arguments to update one Assessment.
     * @example
     * // Update one Assessment
     * const assessment = await prisma.assessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentUpdateArgs>(args: SelectSubset<T, AssessmentUpdateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assessments.
     * @param {AssessmentDeleteManyArgs} args - Arguments to filter Assessments to delete.
     * @example
     * // Delete a few Assessments
     * const { count } = await prisma.assessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentDeleteManyArgs>(args?: SelectSubset<T, AssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentUpdateManyArgs>(args: SelectSubset<T, AssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments and returns the data updated in the database.
     * @param {AssessmentUpdateManyAndReturnArgs} args - Arguments to update many Assessments.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssessmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssessmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assessment.
     * @param {AssessmentUpsertArgs} args - Arguments to update or create a Assessment.
     * @example
     * // Update or create a Assessment
     * const assessment = await prisma.assessment.upsert({
     *   create: {
     *     // ... data to create a Assessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assessment we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentUpsertArgs>(args: SelectSubset<T, AssessmentUpsertArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentCountArgs} args - Arguments to filter Assessments to count.
     * @example
     * // Count the number of Assessments
     * const count = await prisma.assessment.count({
     *   where: {
     *     // ... the filter for the Assessments we want to count
     *   }
     * })
    **/
    count<T extends AssessmentCountArgs>(
      args?: Subset<T, AssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessmentAggregateArgs>(args: Subset<T, AssessmentAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAggregateType<T>>

    /**
     * Group by Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assessment model
   */
  readonly fields: AssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courseList<T extends Assessment$courseListArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$courseListArgs<ExtArgs>>): Prisma__CourseListClient<$Result.GetResult<Prisma.$CourseListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assessment model
   */
  interface AssessmentFieldRefs {
    readonly id: FieldRef<"Assessment", 'String'>
    readonly userId: FieldRef<"Assessment", 'String'>
    readonly quizScore: FieldRef<"Assessment", 'Float'>
    readonly questions: FieldRef<"Assessment", 'Json[]'>
    readonly category: FieldRef<"Assessment", 'String'>
    readonly improvementTip: FieldRef<"Assessment", 'String'>
    readonly createdAt: FieldRef<"Assessment", 'DateTime'>
    readonly updatedAt: FieldRef<"Assessment", 'DateTime'>
    readonly courseListId: FieldRef<"Assessment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Assessment findUnique
   */
  export type AssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findUniqueOrThrow
   */
  export type AssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findFirst
   */
  export type AssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findFirstOrThrow
   */
  export type AssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findMany
   */
  export type AssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment create
   */
  export type AssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assessment.
     */
    data: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
  }

  /**
   * Assessment createMany
   */
  export type AssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessment createManyAndReturn
   */
  export type AssessmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assessment update
   */
  export type AssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assessment.
     */
    data: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
    /**
     * Choose, which Assessment to update.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment updateMany
   */
  export type AssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
  }

  /**
   * Assessment updateManyAndReturn
   */
  export type AssessmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assessment upsert
   */
  export type AssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assessment to update in case it exists.
     */
    where: AssessmentWhereUniqueInput
    /**
     * In case the Assessment found by the `where` argument doesn't exist, create a new Assessment with this data.
     */
    create: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
    /**
     * In case the Assessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
  }

  /**
   * Assessment delete
   */
  export type AssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter which Assessment to delete.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment deleteMany
   */
  export type AssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessments to delete
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to delete.
     */
    limit?: number
  }

  /**
   * Assessment.courseList
   */
  export type Assessment$courseListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseList
     */
    select?: CourseListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseList
     */
    omit?: CourseListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseListInclude<ExtArgs> | null
    where?: CourseListWhereInput
  }

  /**
   * Assessment without action
   */
  export type AssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
  }


  /**
   * Model IndustryInsights
   */

  export type AggregateIndustryInsights = {
    _count: IndustryInsightsCountAggregateOutputType | null
    _avg: IndustryInsightsAvgAggregateOutputType | null
    _sum: IndustryInsightsSumAggregateOutputType | null
    _min: IndustryInsightsMinAggregateOutputType | null
    _max: IndustryInsightsMaxAggregateOutputType | null
  }

  export type IndustryInsightsAvgAggregateOutputType = {
    growthRate: number | null
  }

  export type IndustryInsightsSumAggregateOutputType = {
    growthRate: number | null
  }

  export type IndustryInsightsMinAggregateOutputType = {
    id: string | null
    industry: string | null
    growthRate: number | null
    demandLevel: $Enums.DemandLevel | null
    marketOutlook: $Enums.MarketOutlook | null
    lastUpdated: Date | null
    nextUpdate: Date | null
  }

  export type IndustryInsightsMaxAggregateOutputType = {
    id: string | null
    industry: string | null
    growthRate: number | null
    demandLevel: $Enums.DemandLevel | null
    marketOutlook: $Enums.MarketOutlook | null
    lastUpdated: Date | null
    nextUpdate: Date | null
  }

  export type IndustryInsightsCountAggregateOutputType = {
    id: number
    industry: number
    salaryRange: number
    growthRate: number
    demandLevel: number
    topSkills: number
    marketOutlook: number
    keyTrends: number
    recommendedSkills: number
    lastUpdated: number
    nextUpdate: number
    _all: number
  }


  export type IndustryInsightsAvgAggregateInputType = {
    growthRate?: true
  }

  export type IndustryInsightsSumAggregateInputType = {
    growthRate?: true
  }

  export type IndustryInsightsMinAggregateInputType = {
    id?: true
    industry?: true
    growthRate?: true
    demandLevel?: true
    marketOutlook?: true
    lastUpdated?: true
    nextUpdate?: true
  }

  export type IndustryInsightsMaxAggregateInputType = {
    id?: true
    industry?: true
    growthRate?: true
    demandLevel?: true
    marketOutlook?: true
    lastUpdated?: true
    nextUpdate?: true
  }

  export type IndustryInsightsCountAggregateInputType = {
    id?: true
    industry?: true
    salaryRange?: true
    growthRate?: true
    demandLevel?: true
    topSkills?: true
    marketOutlook?: true
    keyTrends?: true
    recommendedSkills?: true
    lastUpdated?: true
    nextUpdate?: true
    _all?: true
  }

  export type IndustryInsightsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndustryInsights to aggregate.
     */
    where?: IndustryInsightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryInsights to fetch.
     */
    orderBy?: IndustryInsightsOrderByWithRelationInput | IndustryInsightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndustryInsightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndustryInsights
    **/
    _count?: true | IndustryInsightsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndustryInsightsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndustryInsightsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndustryInsightsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndustryInsightsMaxAggregateInputType
  }

  export type GetIndustryInsightsAggregateType<T extends IndustryInsightsAggregateArgs> = {
        [P in keyof T & keyof AggregateIndustryInsights]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndustryInsights[P]>
      : GetScalarType<T[P], AggregateIndustryInsights[P]>
  }




  export type IndustryInsightsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndustryInsightsWhereInput
    orderBy?: IndustryInsightsOrderByWithAggregationInput | IndustryInsightsOrderByWithAggregationInput[]
    by: IndustryInsightsScalarFieldEnum[] | IndustryInsightsScalarFieldEnum
    having?: IndustryInsightsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndustryInsightsCountAggregateInputType | true
    _avg?: IndustryInsightsAvgAggregateInputType
    _sum?: IndustryInsightsSumAggregateInputType
    _min?: IndustryInsightsMinAggregateInputType
    _max?: IndustryInsightsMaxAggregateInputType
  }

  export type IndustryInsightsGroupByOutputType = {
    id: string
    industry: string
    salaryRange: JsonValue
    growthRate: number
    demandLevel: $Enums.DemandLevel
    topSkills: string[]
    marketOutlook: $Enums.MarketOutlook
    keyTrends: string[]
    recommendedSkills: string[]
    lastUpdated: Date
    nextUpdate: Date
    _count: IndustryInsightsCountAggregateOutputType | null
    _avg: IndustryInsightsAvgAggregateOutputType | null
    _sum: IndustryInsightsSumAggregateOutputType | null
    _min: IndustryInsightsMinAggregateOutputType | null
    _max: IndustryInsightsMaxAggregateOutputType | null
  }

  type GetIndustryInsightsGroupByPayload<T extends IndustryInsightsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndustryInsightsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndustryInsightsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndustryInsightsGroupByOutputType[P]>
            : GetScalarType<T[P], IndustryInsightsGroupByOutputType[P]>
        }
      >
    >


  export type IndustryInsightsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    industry?: boolean
    salaryRange?: boolean
    growthRate?: boolean
    demandLevel?: boolean
    topSkills?: boolean
    marketOutlook?: boolean
    keyTrends?: boolean
    recommendedSkills?: boolean
    lastUpdated?: boolean
    nextUpdate?: boolean
    user?: boolean | IndustryInsights$userArgs<ExtArgs>
    _count?: boolean | IndustryInsightsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["industryInsights"]>

  export type IndustryInsightsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    industry?: boolean
    salaryRange?: boolean
    growthRate?: boolean
    demandLevel?: boolean
    topSkills?: boolean
    marketOutlook?: boolean
    keyTrends?: boolean
    recommendedSkills?: boolean
    lastUpdated?: boolean
    nextUpdate?: boolean
  }, ExtArgs["result"]["industryInsights"]>

  export type IndustryInsightsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    industry?: boolean
    salaryRange?: boolean
    growthRate?: boolean
    demandLevel?: boolean
    topSkills?: boolean
    marketOutlook?: boolean
    keyTrends?: boolean
    recommendedSkills?: boolean
    lastUpdated?: boolean
    nextUpdate?: boolean
  }, ExtArgs["result"]["industryInsights"]>

  export type IndustryInsightsSelectScalar = {
    id?: boolean
    industry?: boolean
    salaryRange?: boolean
    growthRate?: boolean
    demandLevel?: boolean
    topSkills?: boolean
    marketOutlook?: boolean
    keyTrends?: boolean
    recommendedSkills?: boolean
    lastUpdated?: boolean
    nextUpdate?: boolean
  }

  export type IndustryInsightsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "industry" | "salaryRange" | "growthRate" | "demandLevel" | "topSkills" | "marketOutlook" | "keyTrends" | "recommendedSkills" | "lastUpdated" | "nextUpdate", ExtArgs["result"]["industryInsights"]>
  export type IndustryInsightsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | IndustryInsights$userArgs<ExtArgs>
    _count?: boolean | IndustryInsightsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IndustryInsightsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IndustryInsightsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IndustryInsightsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndustryInsights"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      industry: string
      salaryRange: Prisma.JsonValue
      growthRate: number
      demandLevel: $Enums.DemandLevel
      topSkills: string[]
      marketOutlook: $Enums.MarketOutlook
      keyTrends: string[]
      recommendedSkills: string[]
      lastUpdated: Date
      nextUpdate: Date
    }, ExtArgs["result"]["industryInsights"]>
    composites: {}
  }

  type IndustryInsightsGetPayload<S extends boolean | null | undefined | IndustryInsightsDefaultArgs> = $Result.GetResult<Prisma.$IndustryInsightsPayload, S>

  type IndustryInsightsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndustryInsightsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndustryInsightsCountAggregateInputType | true
    }

  export interface IndustryInsightsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndustryInsights'], meta: { name: 'IndustryInsights' } }
    /**
     * Find zero or one IndustryInsights that matches the filter.
     * @param {IndustryInsightsFindUniqueArgs} args - Arguments to find a IndustryInsights
     * @example
     * // Get one IndustryInsights
     * const industryInsights = await prisma.industryInsights.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndustryInsightsFindUniqueArgs>(args: SelectSubset<T, IndustryInsightsFindUniqueArgs<ExtArgs>>): Prisma__IndustryInsightsClient<$Result.GetResult<Prisma.$IndustryInsightsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IndustryInsights that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndustryInsightsFindUniqueOrThrowArgs} args - Arguments to find a IndustryInsights
     * @example
     * // Get one IndustryInsights
     * const industryInsights = await prisma.industryInsights.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndustryInsightsFindUniqueOrThrowArgs>(args: SelectSubset<T, IndustryInsightsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndustryInsightsClient<$Result.GetResult<Prisma.$IndustryInsightsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndustryInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightsFindFirstArgs} args - Arguments to find a IndustryInsights
     * @example
     * // Get one IndustryInsights
     * const industryInsights = await prisma.industryInsights.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndustryInsightsFindFirstArgs>(args?: SelectSubset<T, IndustryInsightsFindFirstArgs<ExtArgs>>): Prisma__IndustryInsightsClient<$Result.GetResult<Prisma.$IndustryInsightsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndustryInsights that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightsFindFirstOrThrowArgs} args - Arguments to find a IndustryInsights
     * @example
     * // Get one IndustryInsights
     * const industryInsights = await prisma.industryInsights.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndustryInsightsFindFirstOrThrowArgs>(args?: SelectSubset<T, IndustryInsightsFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndustryInsightsClient<$Result.GetResult<Prisma.$IndustryInsightsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IndustryInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndustryInsights
     * const industryInsights = await prisma.industryInsights.findMany()
     * 
     * // Get first 10 IndustryInsights
     * const industryInsights = await prisma.industryInsights.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const industryInsightsWithIdOnly = await prisma.industryInsights.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndustryInsightsFindManyArgs>(args?: SelectSubset<T, IndustryInsightsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryInsightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IndustryInsights.
     * @param {IndustryInsightsCreateArgs} args - Arguments to create a IndustryInsights.
     * @example
     * // Create one IndustryInsights
     * const IndustryInsights = await prisma.industryInsights.create({
     *   data: {
     *     // ... data to create a IndustryInsights
     *   }
     * })
     * 
     */
    create<T extends IndustryInsightsCreateArgs>(args: SelectSubset<T, IndustryInsightsCreateArgs<ExtArgs>>): Prisma__IndustryInsightsClient<$Result.GetResult<Prisma.$IndustryInsightsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IndustryInsights.
     * @param {IndustryInsightsCreateManyArgs} args - Arguments to create many IndustryInsights.
     * @example
     * // Create many IndustryInsights
     * const industryInsights = await prisma.industryInsights.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndustryInsightsCreateManyArgs>(args?: SelectSubset<T, IndustryInsightsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndustryInsights and returns the data saved in the database.
     * @param {IndustryInsightsCreateManyAndReturnArgs} args - Arguments to create many IndustryInsights.
     * @example
     * // Create many IndustryInsights
     * const industryInsights = await prisma.industryInsights.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndustryInsights and only return the `id`
     * const industryInsightsWithIdOnly = await prisma.industryInsights.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndustryInsightsCreateManyAndReturnArgs>(args?: SelectSubset<T, IndustryInsightsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryInsightsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IndustryInsights.
     * @param {IndustryInsightsDeleteArgs} args - Arguments to delete one IndustryInsights.
     * @example
     * // Delete one IndustryInsights
     * const IndustryInsights = await prisma.industryInsights.delete({
     *   where: {
     *     // ... filter to delete one IndustryInsights
     *   }
     * })
     * 
     */
    delete<T extends IndustryInsightsDeleteArgs>(args: SelectSubset<T, IndustryInsightsDeleteArgs<ExtArgs>>): Prisma__IndustryInsightsClient<$Result.GetResult<Prisma.$IndustryInsightsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IndustryInsights.
     * @param {IndustryInsightsUpdateArgs} args - Arguments to update one IndustryInsights.
     * @example
     * // Update one IndustryInsights
     * const industryInsights = await prisma.industryInsights.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndustryInsightsUpdateArgs>(args: SelectSubset<T, IndustryInsightsUpdateArgs<ExtArgs>>): Prisma__IndustryInsightsClient<$Result.GetResult<Prisma.$IndustryInsightsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IndustryInsights.
     * @param {IndustryInsightsDeleteManyArgs} args - Arguments to filter IndustryInsights to delete.
     * @example
     * // Delete a few IndustryInsights
     * const { count } = await prisma.industryInsights.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndustryInsightsDeleteManyArgs>(args?: SelectSubset<T, IndustryInsightsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndustryInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndustryInsights
     * const industryInsights = await prisma.industryInsights.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndustryInsightsUpdateManyArgs>(args: SelectSubset<T, IndustryInsightsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndustryInsights and returns the data updated in the database.
     * @param {IndustryInsightsUpdateManyAndReturnArgs} args - Arguments to update many IndustryInsights.
     * @example
     * // Update many IndustryInsights
     * const industryInsights = await prisma.industryInsights.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndustryInsights and only return the `id`
     * const industryInsightsWithIdOnly = await prisma.industryInsights.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IndustryInsightsUpdateManyAndReturnArgs>(args: SelectSubset<T, IndustryInsightsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryInsightsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IndustryInsights.
     * @param {IndustryInsightsUpsertArgs} args - Arguments to update or create a IndustryInsights.
     * @example
     * // Update or create a IndustryInsights
     * const industryInsights = await prisma.industryInsights.upsert({
     *   create: {
     *     // ... data to create a IndustryInsights
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndustryInsights we want to update
     *   }
     * })
     */
    upsert<T extends IndustryInsightsUpsertArgs>(args: SelectSubset<T, IndustryInsightsUpsertArgs<ExtArgs>>): Prisma__IndustryInsightsClient<$Result.GetResult<Prisma.$IndustryInsightsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IndustryInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightsCountArgs} args - Arguments to filter IndustryInsights to count.
     * @example
     * // Count the number of IndustryInsights
     * const count = await prisma.industryInsights.count({
     *   where: {
     *     // ... the filter for the IndustryInsights we want to count
     *   }
     * })
    **/
    count<T extends IndustryInsightsCountArgs>(
      args?: Subset<T, IndustryInsightsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndustryInsightsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndustryInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndustryInsightsAggregateArgs>(args: Subset<T, IndustryInsightsAggregateArgs>): Prisma.PrismaPromise<GetIndustryInsightsAggregateType<T>>

    /**
     * Group by IndustryInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IndustryInsightsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndustryInsightsGroupByArgs['orderBy'] }
        : { orderBy?: IndustryInsightsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IndustryInsightsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndustryInsightsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndustryInsights model
   */
  readonly fields: IndustryInsightsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndustryInsights.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndustryInsightsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends IndustryInsights$userArgs<ExtArgs> = {}>(args?: Subset<T, IndustryInsights$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IndustryInsights model
   */
  interface IndustryInsightsFieldRefs {
    readonly id: FieldRef<"IndustryInsights", 'String'>
    readonly industry: FieldRef<"IndustryInsights", 'String'>
    readonly salaryRange: FieldRef<"IndustryInsights", 'Json'>
    readonly growthRate: FieldRef<"IndustryInsights", 'Float'>
    readonly demandLevel: FieldRef<"IndustryInsights", 'DemandLevel'>
    readonly topSkills: FieldRef<"IndustryInsights", 'String[]'>
    readonly marketOutlook: FieldRef<"IndustryInsights", 'MarketOutlook'>
    readonly keyTrends: FieldRef<"IndustryInsights", 'String[]'>
    readonly recommendedSkills: FieldRef<"IndustryInsights", 'String[]'>
    readonly lastUpdated: FieldRef<"IndustryInsights", 'DateTime'>
    readonly nextUpdate: FieldRef<"IndustryInsights", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IndustryInsights findUnique
   */
  export type IndustryInsightsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsights
     */
    select?: IndustryInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsights
     */
    omit?: IndustryInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightsInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsights to fetch.
     */
    where: IndustryInsightsWhereUniqueInput
  }

  /**
   * IndustryInsights findUniqueOrThrow
   */
  export type IndustryInsightsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsights
     */
    select?: IndustryInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsights
     */
    omit?: IndustryInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightsInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsights to fetch.
     */
    where: IndustryInsightsWhereUniqueInput
  }

  /**
   * IndustryInsights findFirst
   */
  export type IndustryInsightsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsights
     */
    select?: IndustryInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsights
     */
    omit?: IndustryInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightsInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsights to fetch.
     */
    where?: IndustryInsightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryInsights to fetch.
     */
    orderBy?: IndustryInsightsOrderByWithRelationInput | IndustryInsightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndustryInsights.
     */
    cursor?: IndustryInsightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndustryInsights.
     */
    distinct?: IndustryInsightsScalarFieldEnum | IndustryInsightsScalarFieldEnum[]
  }

  /**
   * IndustryInsights findFirstOrThrow
   */
  export type IndustryInsightsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsights
     */
    select?: IndustryInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsights
     */
    omit?: IndustryInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightsInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsights to fetch.
     */
    where?: IndustryInsightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryInsights to fetch.
     */
    orderBy?: IndustryInsightsOrderByWithRelationInput | IndustryInsightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndustryInsights.
     */
    cursor?: IndustryInsightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndustryInsights.
     */
    distinct?: IndustryInsightsScalarFieldEnum | IndustryInsightsScalarFieldEnum[]
  }

  /**
   * IndustryInsights findMany
   */
  export type IndustryInsightsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsights
     */
    select?: IndustryInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsights
     */
    omit?: IndustryInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightsInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsights to fetch.
     */
    where?: IndustryInsightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryInsights to fetch.
     */
    orderBy?: IndustryInsightsOrderByWithRelationInput | IndustryInsightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndustryInsights.
     */
    cursor?: IndustryInsightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryInsights.
     */
    skip?: number
    distinct?: IndustryInsightsScalarFieldEnum | IndustryInsightsScalarFieldEnum[]
  }

  /**
   * IndustryInsights create
   */
  export type IndustryInsightsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsights
     */
    select?: IndustryInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsights
     */
    omit?: IndustryInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightsInclude<ExtArgs> | null
    /**
     * The data needed to create a IndustryInsights.
     */
    data: XOR<IndustryInsightsCreateInput, IndustryInsightsUncheckedCreateInput>
  }

  /**
   * IndustryInsights createMany
   */
  export type IndustryInsightsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndustryInsights.
     */
    data: IndustryInsightsCreateManyInput | IndustryInsightsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndustryInsights createManyAndReturn
   */
  export type IndustryInsightsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsights
     */
    select?: IndustryInsightsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsights
     */
    omit?: IndustryInsightsOmit<ExtArgs> | null
    /**
     * The data used to create many IndustryInsights.
     */
    data: IndustryInsightsCreateManyInput | IndustryInsightsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndustryInsights update
   */
  export type IndustryInsightsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsights
     */
    select?: IndustryInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsights
     */
    omit?: IndustryInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightsInclude<ExtArgs> | null
    /**
     * The data needed to update a IndustryInsights.
     */
    data: XOR<IndustryInsightsUpdateInput, IndustryInsightsUncheckedUpdateInput>
    /**
     * Choose, which IndustryInsights to update.
     */
    where: IndustryInsightsWhereUniqueInput
  }

  /**
   * IndustryInsights updateMany
   */
  export type IndustryInsightsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndustryInsights.
     */
    data: XOR<IndustryInsightsUpdateManyMutationInput, IndustryInsightsUncheckedUpdateManyInput>
    /**
     * Filter which IndustryInsights to update
     */
    where?: IndustryInsightsWhereInput
    /**
     * Limit how many IndustryInsights to update.
     */
    limit?: number
  }

  /**
   * IndustryInsights updateManyAndReturn
   */
  export type IndustryInsightsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsights
     */
    select?: IndustryInsightsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsights
     */
    omit?: IndustryInsightsOmit<ExtArgs> | null
    /**
     * The data used to update IndustryInsights.
     */
    data: XOR<IndustryInsightsUpdateManyMutationInput, IndustryInsightsUncheckedUpdateManyInput>
    /**
     * Filter which IndustryInsights to update
     */
    where?: IndustryInsightsWhereInput
    /**
     * Limit how many IndustryInsights to update.
     */
    limit?: number
  }

  /**
   * IndustryInsights upsert
   */
  export type IndustryInsightsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsights
     */
    select?: IndustryInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsights
     */
    omit?: IndustryInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightsInclude<ExtArgs> | null
    /**
     * The filter to search for the IndustryInsights to update in case it exists.
     */
    where: IndustryInsightsWhereUniqueInput
    /**
     * In case the IndustryInsights found by the `where` argument doesn't exist, create a new IndustryInsights with this data.
     */
    create: XOR<IndustryInsightsCreateInput, IndustryInsightsUncheckedCreateInput>
    /**
     * In case the IndustryInsights was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndustryInsightsUpdateInput, IndustryInsightsUncheckedUpdateInput>
  }

  /**
   * IndustryInsights delete
   */
  export type IndustryInsightsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsights
     */
    select?: IndustryInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsights
     */
    omit?: IndustryInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightsInclude<ExtArgs> | null
    /**
     * Filter which IndustryInsights to delete.
     */
    where: IndustryInsightsWhereUniqueInput
  }

  /**
   * IndustryInsights deleteMany
   */
  export type IndustryInsightsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndustryInsights to delete
     */
    where?: IndustryInsightsWhereInput
    /**
     * Limit how many IndustryInsights to delete.
     */
    limit?: number
  }

  /**
   * IndustryInsights.user
   */
  export type IndustryInsights$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * IndustryInsights without action
   */
  export type IndustryInsightsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsights
     */
    select?: IndustryInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsights
     */
    omit?: IndustryInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightsInclude<ExtArgs> | null
  }


  /**
   * Model CourseList
   */

  export type AggregateCourseList = {
    _count: CourseListCountAggregateOutputType | null
    _min: CourseListMinAggregateOutputType | null
    _max: CourseListMaxAggregateOutputType | null
  }

  export type CourseListMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    name: string | null
    category: string | null
    level: string | null
    includeVideo: string | null
    createdBy: string | null
    userName: string | null
    userProfileImage: string | null
    courseBanner: string | null
    publish: boolean | null
  }

  export type CourseListMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    name: string | null
    category: string | null
    level: string | null
    includeVideo: string | null
    createdBy: string | null
    userName: string | null
    userProfileImage: string | null
    courseBanner: string | null
    publish: boolean | null
  }

  export type CourseListCountAggregateOutputType = {
    id: number
    courseId: number
    name: number
    category: number
    level: number
    includeVideo: number
    courseOutput: number
    createdBy: number
    userName: number
    userProfileImage: number
    courseBanner: number
    publish: number
    _all: number
  }


  export type CourseListMinAggregateInputType = {
    id?: true
    courseId?: true
    name?: true
    category?: true
    level?: true
    includeVideo?: true
    createdBy?: true
    userName?: true
    userProfileImage?: true
    courseBanner?: true
    publish?: true
  }

  export type CourseListMaxAggregateInputType = {
    id?: true
    courseId?: true
    name?: true
    category?: true
    level?: true
    includeVideo?: true
    createdBy?: true
    userName?: true
    userProfileImage?: true
    courseBanner?: true
    publish?: true
  }

  export type CourseListCountAggregateInputType = {
    id?: true
    courseId?: true
    name?: true
    category?: true
    level?: true
    includeVideo?: true
    courseOutput?: true
    createdBy?: true
    userName?: true
    userProfileImage?: true
    courseBanner?: true
    publish?: true
    _all?: true
  }

  export type CourseListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseList to aggregate.
     */
    where?: CourseListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseLists to fetch.
     */
    orderBy?: CourseListOrderByWithRelationInput | CourseListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseLists
    **/
    _count?: true | CourseListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseListMaxAggregateInputType
  }

  export type GetCourseListAggregateType<T extends CourseListAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseList[P]>
      : GetScalarType<T[P], AggregateCourseList[P]>
  }




  export type CourseListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseListWhereInput
    orderBy?: CourseListOrderByWithAggregationInput | CourseListOrderByWithAggregationInput[]
    by: CourseListScalarFieldEnum[] | CourseListScalarFieldEnum
    having?: CourseListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseListCountAggregateInputType | true
    _min?: CourseListMinAggregateInputType
    _max?: CourseListMaxAggregateInputType
  }

  export type CourseListGroupByOutputType = {
    id: string
    courseId: string
    name: string
    category: string
    level: string
    includeVideo: string
    courseOutput: JsonValue
    createdBy: string
    userName: string | null
    userProfileImage: string | null
    courseBanner: string
    publish: boolean
    _count: CourseListCountAggregateOutputType | null
    _min: CourseListMinAggregateOutputType | null
    _max: CourseListMaxAggregateOutputType | null
  }

  type GetCourseListGroupByPayload<T extends CourseListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseListGroupByOutputType[P]>
            : GetScalarType<T[P], CourseListGroupByOutputType[P]>
        }
      >
    >


  export type CourseListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    name?: boolean
    category?: boolean
    level?: boolean
    includeVideo?: boolean
    courseOutput?: boolean
    createdBy?: boolean
    userName?: boolean
    userProfileImage?: boolean
    courseBanner?: boolean
    publish?: boolean
    chapters?: boolean | CourseList$chaptersArgs<ExtArgs>
    assessments?: boolean | CourseList$assessmentsArgs<ExtArgs>
    _count?: boolean | CourseListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseList"]>

  export type CourseListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    name?: boolean
    category?: boolean
    level?: boolean
    includeVideo?: boolean
    courseOutput?: boolean
    createdBy?: boolean
    userName?: boolean
    userProfileImage?: boolean
    courseBanner?: boolean
    publish?: boolean
  }, ExtArgs["result"]["courseList"]>

  export type CourseListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    name?: boolean
    category?: boolean
    level?: boolean
    includeVideo?: boolean
    courseOutput?: boolean
    createdBy?: boolean
    userName?: boolean
    userProfileImage?: boolean
    courseBanner?: boolean
    publish?: boolean
  }, ExtArgs["result"]["courseList"]>

  export type CourseListSelectScalar = {
    id?: boolean
    courseId?: boolean
    name?: boolean
    category?: boolean
    level?: boolean
    includeVideo?: boolean
    courseOutput?: boolean
    createdBy?: boolean
    userName?: boolean
    userProfileImage?: boolean
    courseBanner?: boolean
    publish?: boolean
  }

  export type CourseListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "name" | "category" | "level" | "includeVideo" | "courseOutput" | "createdBy" | "userName" | "userProfileImage" | "courseBanner" | "publish", ExtArgs["result"]["courseList"]>
  export type CourseListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | CourseList$chaptersArgs<ExtArgs>
    assessments?: boolean | CourseList$assessmentsArgs<ExtArgs>
    _count?: boolean | CourseListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CourseListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseList"
    objects: {
      chapters: Prisma.$ChaptersPayload<ExtArgs>[]
      assessments: Prisma.$AssessmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      name: string
      category: string
      level: string
      includeVideo: string
      courseOutput: Prisma.JsonValue
      createdBy: string
      userName: string | null
      userProfileImage: string | null
      courseBanner: string
      publish: boolean
    }, ExtArgs["result"]["courseList"]>
    composites: {}
  }

  type CourseListGetPayload<S extends boolean | null | undefined | CourseListDefaultArgs> = $Result.GetResult<Prisma.$CourseListPayload, S>

  type CourseListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseListCountAggregateInputType | true
    }

  export interface CourseListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseList'], meta: { name: 'CourseList' } }
    /**
     * Find zero or one CourseList that matches the filter.
     * @param {CourseListFindUniqueArgs} args - Arguments to find a CourseList
     * @example
     * // Get one CourseList
     * const courseList = await prisma.courseList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseListFindUniqueArgs>(args: SelectSubset<T, CourseListFindUniqueArgs<ExtArgs>>): Prisma__CourseListClient<$Result.GetResult<Prisma.$CourseListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseListFindUniqueOrThrowArgs} args - Arguments to find a CourseList
     * @example
     * // Get one CourseList
     * const courseList = await prisma.courseList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseListFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseListClient<$Result.GetResult<Prisma.$CourseListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseListFindFirstArgs} args - Arguments to find a CourseList
     * @example
     * // Get one CourseList
     * const courseList = await prisma.courseList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseListFindFirstArgs>(args?: SelectSubset<T, CourseListFindFirstArgs<ExtArgs>>): Prisma__CourseListClient<$Result.GetResult<Prisma.$CourseListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseListFindFirstOrThrowArgs} args - Arguments to find a CourseList
     * @example
     * // Get one CourseList
     * const courseList = await prisma.courseList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseListFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseListFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseListClient<$Result.GetResult<Prisma.$CourseListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseLists
     * const courseLists = await prisma.courseList.findMany()
     * 
     * // Get first 10 CourseLists
     * const courseLists = await prisma.courseList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseListWithIdOnly = await prisma.courseList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseListFindManyArgs>(args?: SelectSubset<T, CourseListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseList.
     * @param {CourseListCreateArgs} args - Arguments to create a CourseList.
     * @example
     * // Create one CourseList
     * const CourseList = await prisma.courseList.create({
     *   data: {
     *     // ... data to create a CourseList
     *   }
     * })
     * 
     */
    create<T extends CourseListCreateArgs>(args: SelectSubset<T, CourseListCreateArgs<ExtArgs>>): Prisma__CourseListClient<$Result.GetResult<Prisma.$CourseListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseLists.
     * @param {CourseListCreateManyArgs} args - Arguments to create many CourseLists.
     * @example
     * // Create many CourseLists
     * const courseList = await prisma.courseList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseListCreateManyArgs>(args?: SelectSubset<T, CourseListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseLists and returns the data saved in the database.
     * @param {CourseListCreateManyAndReturnArgs} args - Arguments to create many CourseLists.
     * @example
     * // Create many CourseLists
     * const courseList = await prisma.courseList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseLists and only return the `id`
     * const courseListWithIdOnly = await prisma.courseList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseListCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseList.
     * @param {CourseListDeleteArgs} args - Arguments to delete one CourseList.
     * @example
     * // Delete one CourseList
     * const CourseList = await prisma.courseList.delete({
     *   where: {
     *     // ... filter to delete one CourseList
     *   }
     * })
     * 
     */
    delete<T extends CourseListDeleteArgs>(args: SelectSubset<T, CourseListDeleteArgs<ExtArgs>>): Prisma__CourseListClient<$Result.GetResult<Prisma.$CourseListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseList.
     * @param {CourseListUpdateArgs} args - Arguments to update one CourseList.
     * @example
     * // Update one CourseList
     * const courseList = await prisma.courseList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseListUpdateArgs>(args: SelectSubset<T, CourseListUpdateArgs<ExtArgs>>): Prisma__CourseListClient<$Result.GetResult<Prisma.$CourseListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseLists.
     * @param {CourseListDeleteManyArgs} args - Arguments to filter CourseLists to delete.
     * @example
     * // Delete a few CourseLists
     * const { count } = await prisma.courseList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseListDeleteManyArgs>(args?: SelectSubset<T, CourseListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseLists
     * const courseList = await prisma.courseList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseListUpdateManyArgs>(args: SelectSubset<T, CourseListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseLists and returns the data updated in the database.
     * @param {CourseListUpdateManyAndReturnArgs} args - Arguments to update many CourseLists.
     * @example
     * // Update many CourseLists
     * const courseList = await prisma.courseList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseLists and only return the `id`
     * const courseListWithIdOnly = await prisma.courseList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseListUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseList.
     * @param {CourseListUpsertArgs} args - Arguments to update or create a CourseList.
     * @example
     * // Update or create a CourseList
     * const courseList = await prisma.courseList.upsert({
     *   create: {
     *     // ... data to create a CourseList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseList we want to update
     *   }
     * })
     */
    upsert<T extends CourseListUpsertArgs>(args: SelectSubset<T, CourseListUpsertArgs<ExtArgs>>): Prisma__CourseListClient<$Result.GetResult<Prisma.$CourseListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseListCountArgs} args - Arguments to filter CourseLists to count.
     * @example
     * // Count the number of CourseLists
     * const count = await prisma.courseList.count({
     *   where: {
     *     // ... the filter for the CourseLists we want to count
     *   }
     * })
    **/
    count<T extends CourseListCountArgs>(
      args?: Subset<T, CourseListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseListAggregateArgs>(args: Subset<T, CourseListAggregateArgs>): Prisma.PrismaPromise<GetCourseListAggregateType<T>>

    /**
     * Group by CourseList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseListGroupByArgs['orderBy'] }
        : { orderBy?: CourseListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseList model
   */
  readonly fields: CourseListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapters<T extends CourseList$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, CourseList$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assessments<T extends CourseList$assessmentsArgs<ExtArgs> = {}>(args?: Subset<T, CourseList$assessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseList model
   */
  interface CourseListFieldRefs {
    readonly id: FieldRef<"CourseList", 'String'>
    readonly courseId: FieldRef<"CourseList", 'String'>
    readonly name: FieldRef<"CourseList", 'String'>
    readonly category: FieldRef<"CourseList", 'String'>
    readonly level: FieldRef<"CourseList", 'String'>
    readonly includeVideo: FieldRef<"CourseList", 'String'>
    readonly courseOutput: FieldRef<"CourseList", 'Json'>
    readonly createdBy: FieldRef<"CourseList", 'String'>
    readonly userName: FieldRef<"CourseList", 'String'>
    readonly userProfileImage: FieldRef<"CourseList", 'String'>
    readonly courseBanner: FieldRef<"CourseList", 'String'>
    readonly publish: FieldRef<"CourseList", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CourseList findUnique
   */
  export type CourseListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseList
     */
    select?: CourseListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseList
     */
    omit?: CourseListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseListInclude<ExtArgs> | null
    /**
     * Filter, which CourseList to fetch.
     */
    where: CourseListWhereUniqueInput
  }

  /**
   * CourseList findUniqueOrThrow
   */
  export type CourseListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseList
     */
    select?: CourseListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseList
     */
    omit?: CourseListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseListInclude<ExtArgs> | null
    /**
     * Filter, which CourseList to fetch.
     */
    where: CourseListWhereUniqueInput
  }

  /**
   * CourseList findFirst
   */
  export type CourseListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseList
     */
    select?: CourseListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseList
     */
    omit?: CourseListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseListInclude<ExtArgs> | null
    /**
     * Filter, which CourseList to fetch.
     */
    where?: CourseListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseLists to fetch.
     */
    orderBy?: CourseListOrderByWithRelationInput | CourseListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseLists.
     */
    cursor?: CourseListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseLists.
     */
    distinct?: CourseListScalarFieldEnum | CourseListScalarFieldEnum[]
  }

  /**
   * CourseList findFirstOrThrow
   */
  export type CourseListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseList
     */
    select?: CourseListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseList
     */
    omit?: CourseListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseListInclude<ExtArgs> | null
    /**
     * Filter, which CourseList to fetch.
     */
    where?: CourseListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseLists to fetch.
     */
    orderBy?: CourseListOrderByWithRelationInput | CourseListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseLists.
     */
    cursor?: CourseListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseLists.
     */
    distinct?: CourseListScalarFieldEnum | CourseListScalarFieldEnum[]
  }

  /**
   * CourseList findMany
   */
  export type CourseListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseList
     */
    select?: CourseListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseList
     */
    omit?: CourseListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseListInclude<ExtArgs> | null
    /**
     * Filter, which CourseLists to fetch.
     */
    where?: CourseListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseLists to fetch.
     */
    orderBy?: CourseListOrderByWithRelationInput | CourseListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseLists.
     */
    cursor?: CourseListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseLists.
     */
    skip?: number
    distinct?: CourseListScalarFieldEnum | CourseListScalarFieldEnum[]
  }

  /**
   * CourseList create
   */
  export type CourseListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseList
     */
    select?: CourseListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseList
     */
    omit?: CourseListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseListInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseList.
     */
    data: XOR<CourseListCreateInput, CourseListUncheckedCreateInput>
  }

  /**
   * CourseList createMany
   */
  export type CourseListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseLists.
     */
    data: CourseListCreateManyInput | CourseListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseList createManyAndReturn
   */
  export type CourseListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseList
     */
    select?: CourseListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseList
     */
    omit?: CourseListOmit<ExtArgs> | null
    /**
     * The data used to create many CourseLists.
     */
    data: CourseListCreateManyInput | CourseListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseList update
   */
  export type CourseListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseList
     */
    select?: CourseListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseList
     */
    omit?: CourseListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseListInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseList.
     */
    data: XOR<CourseListUpdateInput, CourseListUncheckedUpdateInput>
    /**
     * Choose, which CourseList to update.
     */
    where: CourseListWhereUniqueInput
  }

  /**
   * CourseList updateMany
   */
  export type CourseListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseLists.
     */
    data: XOR<CourseListUpdateManyMutationInput, CourseListUncheckedUpdateManyInput>
    /**
     * Filter which CourseLists to update
     */
    where?: CourseListWhereInput
    /**
     * Limit how many CourseLists to update.
     */
    limit?: number
  }

  /**
   * CourseList updateManyAndReturn
   */
  export type CourseListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseList
     */
    select?: CourseListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseList
     */
    omit?: CourseListOmit<ExtArgs> | null
    /**
     * The data used to update CourseLists.
     */
    data: XOR<CourseListUpdateManyMutationInput, CourseListUncheckedUpdateManyInput>
    /**
     * Filter which CourseLists to update
     */
    where?: CourseListWhereInput
    /**
     * Limit how many CourseLists to update.
     */
    limit?: number
  }

  /**
   * CourseList upsert
   */
  export type CourseListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseList
     */
    select?: CourseListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseList
     */
    omit?: CourseListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseListInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseList to update in case it exists.
     */
    where: CourseListWhereUniqueInput
    /**
     * In case the CourseList found by the `where` argument doesn't exist, create a new CourseList with this data.
     */
    create: XOR<CourseListCreateInput, CourseListUncheckedCreateInput>
    /**
     * In case the CourseList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseListUpdateInput, CourseListUncheckedUpdateInput>
  }

  /**
   * CourseList delete
   */
  export type CourseListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseList
     */
    select?: CourseListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseList
     */
    omit?: CourseListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseListInclude<ExtArgs> | null
    /**
     * Filter which CourseList to delete.
     */
    where: CourseListWhereUniqueInput
  }

  /**
   * CourseList deleteMany
   */
  export type CourseListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseLists to delete
     */
    where?: CourseListWhereInput
    /**
     * Limit how many CourseLists to delete.
     */
    limit?: number
  }

  /**
   * CourseList.chapters
   */
  export type CourseList$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    where?: ChaptersWhereInput
    orderBy?: ChaptersOrderByWithRelationInput | ChaptersOrderByWithRelationInput[]
    cursor?: ChaptersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChaptersScalarFieldEnum | ChaptersScalarFieldEnum[]
  }

  /**
   * CourseList.assessments
   */
  export type CourseList$assessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    cursor?: AssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * CourseList without action
   */
  export type CourseListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseList
     */
    select?: CourseListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseList
     */
    omit?: CourseListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseListInclude<ExtArgs> | null
  }


  /**
   * Model Chapters
   */

  export type AggregateChapters = {
    _count: ChaptersCountAggregateOutputType | null
    _avg: ChaptersAvgAggregateOutputType | null
    _sum: ChaptersSumAggregateOutputType | null
    _min: ChaptersMinAggregateOutputType | null
    _max: ChaptersMaxAggregateOutputType | null
  }

  export type ChaptersAvgAggregateOutputType = {
    id: number | null
    chapterId: number | null
  }

  export type ChaptersSumAggregateOutputType = {
    id: number | null
    chapterId: number | null
  }

  export type ChaptersMinAggregateOutputType = {
    id: number | null
    courseId: string | null
    chapterId: number | null
    videoId: string | null
  }

  export type ChaptersMaxAggregateOutputType = {
    id: number | null
    courseId: string | null
    chapterId: number | null
    videoId: string | null
  }

  export type ChaptersCountAggregateOutputType = {
    id: number
    courseId: number
    chapterId: number
    content: number
    videoId: number
    _all: number
  }


  export type ChaptersAvgAggregateInputType = {
    id?: true
    chapterId?: true
  }

  export type ChaptersSumAggregateInputType = {
    id?: true
    chapterId?: true
  }

  export type ChaptersMinAggregateInputType = {
    id?: true
    courseId?: true
    chapterId?: true
    videoId?: true
  }

  export type ChaptersMaxAggregateInputType = {
    id?: true
    courseId?: true
    chapterId?: true
    videoId?: true
  }

  export type ChaptersCountAggregateInputType = {
    id?: true
    courseId?: true
    chapterId?: true
    content?: true
    videoId?: true
    _all?: true
  }

  export type ChaptersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to aggregate.
     */
    where?: ChaptersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChaptersOrderByWithRelationInput | ChaptersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChaptersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChaptersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChaptersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChaptersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChaptersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChaptersMaxAggregateInputType
  }

  export type GetChaptersAggregateType<T extends ChaptersAggregateArgs> = {
        [P in keyof T & keyof AggregateChapters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapters[P]>
      : GetScalarType<T[P], AggregateChapters[P]>
  }




  export type ChaptersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChaptersWhereInput
    orderBy?: ChaptersOrderByWithAggregationInput | ChaptersOrderByWithAggregationInput[]
    by: ChaptersScalarFieldEnum[] | ChaptersScalarFieldEnum
    having?: ChaptersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChaptersCountAggregateInputType | true
    _avg?: ChaptersAvgAggregateInputType
    _sum?: ChaptersSumAggregateInputType
    _min?: ChaptersMinAggregateInputType
    _max?: ChaptersMaxAggregateInputType
  }

  export type ChaptersGroupByOutputType = {
    id: number
    courseId: string
    chapterId: number
    content: JsonValue
    videoId: string
    _count: ChaptersCountAggregateOutputType | null
    _avg: ChaptersAvgAggregateOutputType | null
    _sum: ChaptersSumAggregateOutputType | null
    _min: ChaptersMinAggregateOutputType | null
    _max: ChaptersMaxAggregateOutputType | null
  }

  type GetChaptersGroupByPayload<T extends ChaptersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChaptersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChaptersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChaptersGroupByOutputType[P]>
            : GetScalarType<T[P], ChaptersGroupByOutputType[P]>
        }
      >
    >


  export type ChaptersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    chapterId?: boolean
    content?: boolean
    videoId?: boolean
    course?: boolean | CourseListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapters"]>

  export type ChaptersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    chapterId?: boolean
    content?: boolean
    videoId?: boolean
    course?: boolean | CourseListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapters"]>

  export type ChaptersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    chapterId?: boolean
    content?: boolean
    videoId?: boolean
    course?: boolean | CourseListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapters"]>

  export type ChaptersSelectScalar = {
    id?: boolean
    courseId?: boolean
    chapterId?: boolean
    content?: boolean
    videoId?: boolean
  }

  export type ChaptersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "chapterId" | "content" | "videoId", ExtArgs["result"]["chapters"]>
  export type ChaptersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseListDefaultArgs<ExtArgs>
  }
  export type ChaptersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseListDefaultArgs<ExtArgs>
  }
  export type ChaptersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseListDefaultArgs<ExtArgs>
  }

  export type $ChaptersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapters"
    objects: {
      course: Prisma.$CourseListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: string
      chapterId: number
      content: Prisma.JsonValue
      videoId: string
    }, ExtArgs["result"]["chapters"]>
    composites: {}
  }

  type ChaptersGetPayload<S extends boolean | null | undefined | ChaptersDefaultArgs> = $Result.GetResult<Prisma.$ChaptersPayload, S>

  type ChaptersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChaptersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChaptersCountAggregateInputType | true
    }

  export interface ChaptersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapters'], meta: { name: 'Chapters' } }
    /**
     * Find zero or one Chapters that matches the filter.
     * @param {ChaptersFindUniqueArgs} args - Arguments to find a Chapters
     * @example
     * // Get one Chapters
     * const chapters = await prisma.chapters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChaptersFindUniqueArgs>(args: SelectSubset<T, ChaptersFindUniqueArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapters that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChaptersFindUniqueOrThrowArgs} args - Arguments to find a Chapters
     * @example
     * // Get one Chapters
     * const chapters = await prisma.chapters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChaptersFindUniqueOrThrowArgs>(args: SelectSubset<T, ChaptersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersFindFirstArgs} args - Arguments to find a Chapters
     * @example
     * // Get one Chapters
     * const chapters = await prisma.chapters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChaptersFindFirstArgs>(args?: SelectSubset<T, ChaptersFindFirstArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersFindFirstOrThrowArgs} args - Arguments to find a Chapters
     * @example
     * // Get one Chapters
     * const chapters = await prisma.chapters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChaptersFindFirstOrThrowArgs>(args?: SelectSubset<T, ChaptersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapters.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapters.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chaptersWithIdOnly = await prisma.chapters.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChaptersFindManyArgs>(args?: SelectSubset<T, ChaptersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapters.
     * @param {ChaptersCreateArgs} args - Arguments to create a Chapters.
     * @example
     * // Create one Chapters
     * const Chapters = await prisma.chapters.create({
     *   data: {
     *     // ... data to create a Chapters
     *   }
     * })
     * 
     */
    create<T extends ChaptersCreateArgs>(args: SelectSubset<T, ChaptersCreateArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChaptersCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapters = await prisma.chapters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChaptersCreateManyArgs>(args?: SelectSubset<T, ChaptersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chapters and returns the data saved in the database.
     * @param {ChaptersCreateManyAndReturnArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapters = await prisma.chapters.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chapters and only return the `id`
     * const chaptersWithIdOnly = await prisma.chapters.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChaptersCreateManyAndReturnArgs>(args?: SelectSubset<T, ChaptersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chapters.
     * @param {ChaptersDeleteArgs} args - Arguments to delete one Chapters.
     * @example
     * // Delete one Chapters
     * const Chapters = await prisma.chapters.delete({
     *   where: {
     *     // ... filter to delete one Chapters
     *   }
     * })
     * 
     */
    delete<T extends ChaptersDeleteArgs>(args: SelectSubset<T, ChaptersDeleteArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapters.
     * @param {ChaptersUpdateArgs} args - Arguments to update one Chapters.
     * @example
     * // Update one Chapters
     * const chapters = await prisma.chapters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChaptersUpdateArgs>(args: SelectSubset<T, ChaptersUpdateArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChaptersDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChaptersDeleteManyArgs>(args?: SelectSubset<T, ChaptersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapters = await prisma.chapters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChaptersUpdateManyArgs>(args: SelectSubset<T, ChaptersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters and returns the data updated in the database.
     * @param {ChaptersUpdateManyAndReturnArgs} args - Arguments to update many Chapters.
     * @example
     * // Update many Chapters
     * const chapters = await prisma.chapters.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chapters and only return the `id`
     * const chaptersWithIdOnly = await prisma.chapters.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChaptersUpdateManyAndReturnArgs>(args: SelectSubset<T, ChaptersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chapters.
     * @param {ChaptersUpsertArgs} args - Arguments to update or create a Chapters.
     * @example
     * // Update or create a Chapters
     * const chapters = await prisma.chapters.upsert({
     *   create: {
     *     // ... data to create a Chapters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapters we want to update
     *   }
     * })
     */
    upsert<T extends ChaptersUpsertArgs>(args: SelectSubset<T, ChaptersUpsertArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapters.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChaptersCountArgs>(
      args?: Subset<T, ChaptersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChaptersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChaptersAggregateArgs>(args: Subset<T, ChaptersAggregateArgs>): Prisma.PrismaPromise<GetChaptersAggregateType<T>>

    /**
     * Group by Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChaptersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChaptersGroupByArgs['orderBy'] }
        : { orderBy?: ChaptersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChaptersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChaptersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapters model
   */
  readonly fields: ChaptersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChaptersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseListDefaultArgs<ExtArgs>>): Prisma__CourseListClient<$Result.GetResult<Prisma.$CourseListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chapters model
   */
  interface ChaptersFieldRefs {
    readonly id: FieldRef<"Chapters", 'Int'>
    readonly courseId: FieldRef<"Chapters", 'String'>
    readonly chapterId: FieldRef<"Chapters", 'Int'>
    readonly content: FieldRef<"Chapters", 'Json'>
    readonly videoId: FieldRef<"Chapters", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chapters findUnique
   */
  export type ChaptersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where: ChaptersWhereUniqueInput
  }

  /**
   * Chapters findUniqueOrThrow
   */
  export type ChaptersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where: ChaptersWhereUniqueInput
  }

  /**
   * Chapters findFirst
   */
  export type ChaptersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChaptersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChaptersOrderByWithRelationInput | ChaptersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChaptersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChaptersScalarFieldEnum | ChaptersScalarFieldEnum[]
  }

  /**
   * Chapters findFirstOrThrow
   */
  export type ChaptersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChaptersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChaptersOrderByWithRelationInput | ChaptersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChaptersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChaptersScalarFieldEnum | ChaptersScalarFieldEnum[]
  }

  /**
   * Chapters findMany
   */
  export type ChaptersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChaptersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChaptersOrderByWithRelationInput | ChaptersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChaptersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    distinct?: ChaptersScalarFieldEnum | ChaptersScalarFieldEnum[]
  }

  /**
   * Chapters create
   */
  export type ChaptersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapters.
     */
    data: XOR<ChaptersCreateInput, ChaptersUncheckedCreateInput>
  }

  /**
   * Chapters createMany
   */
  export type ChaptersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChaptersCreateManyInput | ChaptersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapters createManyAndReturn
   */
  export type ChaptersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * The data used to create many Chapters.
     */
    data: ChaptersCreateManyInput | ChaptersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapters update
   */
  export type ChaptersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapters.
     */
    data: XOR<ChaptersUpdateInput, ChaptersUncheckedUpdateInput>
    /**
     * Choose, which Chapters to update.
     */
    where: ChaptersWhereUniqueInput
  }

  /**
   * Chapters updateMany
   */
  export type ChaptersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChaptersUpdateManyMutationInput, ChaptersUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChaptersWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapters updateManyAndReturn
   */
  export type ChaptersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChaptersUpdateManyMutationInput, ChaptersUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChaptersWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapters upsert
   */
  export type ChaptersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapters to update in case it exists.
     */
    where: ChaptersWhereUniqueInput
    /**
     * In case the Chapters found by the `where` argument doesn't exist, create a new Chapters with this data.
     */
    create: XOR<ChaptersCreateInput, ChaptersUncheckedCreateInput>
    /**
     * In case the Chapters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChaptersUpdateInput, ChaptersUncheckedUpdateInput>
  }

  /**
   * Chapters delete
   */
  export type ChaptersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter which Chapters to delete.
     */
    where: ChaptersWhereUniqueInput
  }

  /**
   * Chapters deleteMany
   */
  export type ChaptersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChaptersWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapters without action
   */
  export type ChaptersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    email: 'email',
    name: 'name',
    imageUrl: 'imageUrl',
    industry: 'industry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    bio: 'bio',
    experience: 'experience',
    skills: 'skills'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AssessmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    quizScore: 'quizScore',
    questions: 'questions',
    category: 'category',
    improvementTip: 'improvementTip',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    courseListId: 'courseListId'
  };

  export type AssessmentScalarFieldEnum = (typeof AssessmentScalarFieldEnum)[keyof typeof AssessmentScalarFieldEnum]


  export const IndustryInsightsScalarFieldEnum: {
    id: 'id',
    industry: 'industry',
    salaryRange: 'salaryRange',
    growthRate: 'growthRate',
    demandLevel: 'demandLevel',
    topSkills: 'topSkills',
    marketOutlook: 'marketOutlook',
    keyTrends: 'keyTrends',
    recommendedSkills: 'recommendedSkills',
    lastUpdated: 'lastUpdated',
    nextUpdate: 'nextUpdate'
  };

  export type IndustryInsightsScalarFieldEnum = (typeof IndustryInsightsScalarFieldEnum)[keyof typeof IndustryInsightsScalarFieldEnum]


  export const CourseListScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    name: 'name',
    category: 'category',
    level: 'level',
    includeVideo: 'includeVideo',
    courseOutput: 'courseOutput',
    createdBy: 'createdBy',
    userName: 'userName',
    userProfileImage: 'userProfileImage',
    courseBanner: 'courseBanner',
    publish: 'publish'
  };

  export type CourseListScalarFieldEnum = (typeof CourseListScalarFieldEnum)[keyof typeof CourseListScalarFieldEnum]


  export const ChaptersScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    chapterId: 'chapterId',
    content: 'content',
    videoId: 'videoId'
  };

  export type ChaptersScalarFieldEnum = (typeof ChaptersScalarFieldEnum)[keyof typeof ChaptersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DemandLevel'
   */
  export type EnumDemandLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DemandLevel'>
    


  /**
   * Reference to a field of type 'DemandLevel[]'
   */
  export type ListEnumDemandLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DemandLevel[]'>
    


  /**
   * Reference to a field of type 'MarketOutlook'
   */
  export type EnumMarketOutlookFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarketOutlook'>
    


  /**
   * Reference to a field of type 'MarketOutlook[]'
   */
  export type ListEnumMarketOutlookFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarketOutlook[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    industry?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bio?: StringNullableFilter<"User"> | string | null
    experience?: IntNullableFilter<"User"> | number | null
    skills?: StringNullableListFilter<"User">
    industryInsights?: XOR<IndustryInsightsNullableScalarRelationFilter, IndustryInsightsWhereInput> | null
    assessments?: AssessmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    skills?: SortOrder
    industryInsights?: IndustryInsightsOrderByWithRelationInput
    assessments?: AssessmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    industry?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bio?: StringNullableFilter<"User"> | string | null
    experience?: IntNullableFilter<"User"> | number | null
    skills?: StringNullableListFilter<"User">
    industryInsights?: XOR<IndustryInsightsNullableScalarRelationFilter, IndustryInsightsWhereInput> | null
    assessments?: AssessmentListRelationFilter
  }, "id" | "clerkUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    skills?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkUserId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    industry?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    experience?: IntNullableWithAggregatesFilter<"User"> | number | null
    skills?: StringNullableListFilter<"User">
  }

  export type AssessmentWhereInput = {
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    id?: StringFilter<"Assessment"> | string
    userId?: StringFilter<"Assessment"> | string
    quizScore?: FloatFilter<"Assessment"> | number
    questions?: JsonNullableListFilter<"Assessment">
    category?: StringFilter<"Assessment"> | string
    improvementTip?: StringNullableFilter<"Assessment"> | string | null
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeFilter<"Assessment"> | Date | string
    courseListId?: StringNullableFilter<"Assessment"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    courseList?: XOR<CourseListNullableScalarRelationFilter, CourseListWhereInput> | null
  }

  export type AssessmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizScore?: SortOrder
    questions?: SortOrder
    category?: SortOrder
    improvementTip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseListId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    courseList?: CourseListOrderByWithRelationInput
  }

  export type AssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    userId?: StringFilter<"Assessment"> | string
    quizScore?: FloatFilter<"Assessment"> | number
    questions?: JsonNullableListFilter<"Assessment">
    category?: StringFilter<"Assessment"> | string
    improvementTip?: StringNullableFilter<"Assessment"> | string | null
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeFilter<"Assessment"> | Date | string
    courseListId?: StringNullableFilter<"Assessment"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    courseList?: XOR<CourseListNullableScalarRelationFilter, CourseListWhereInput> | null
  }, "id">

  export type AssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizScore?: SortOrder
    questions?: SortOrder
    category?: SortOrder
    improvementTip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseListId?: SortOrderInput | SortOrder
    _count?: AssessmentCountOrderByAggregateInput
    _avg?: AssessmentAvgOrderByAggregateInput
    _max?: AssessmentMaxOrderByAggregateInput
    _min?: AssessmentMinOrderByAggregateInput
    _sum?: AssessmentSumOrderByAggregateInput
  }

  export type AssessmentScalarWhereWithAggregatesInput = {
    AND?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    OR?: AssessmentScalarWhereWithAggregatesInput[]
    NOT?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assessment"> | string
    userId?: StringWithAggregatesFilter<"Assessment"> | string
    quizScore?: FloatWithAggregatesFilter<"Assessment"> | number
    questions?: JsonNullableListFilter<"Assessment">
    category?: StringWithAggregatesFilter<"Assessment"> | string
    improvementTip?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
    courseListId?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
  }

  export type IndustryInsightsWhereInput = {
    AND?: IndustryInsightsWhereInput | IndustryInsightsWhereInput[]
    OR?: IndustryInsightsWhereInput[]
    NOT?: IndustryInsightsWhereInput | IndustryInsightsWhereInput[]
    id?: StringFilter<"IndustryInsights"> | string
    industry?: StringFilter<"IndustryInsights"> | string
    salaryRange?: JsonFilter<"IndustryInsights">
    growthRate?: FloatFilter<"IndustryInsights"> | number
    demandLevel?: EnumDemandLevelFilter<"IndustryInsights"> | $Enums.DemandLevel
    topSkills?: StringNullableListFilter<"IndustryInsights">
    marketOutlook?: EnumMarketOutlookFilter<"IndustryInsights"> | $Enums.MarketOutlook
    keyTrends?: StringNullableListFilter<"IndustryInsights">
    recommendedSkills?: StringNullableListFilter<"IndustryInsights">
    lastUpdated?: DateTimeFilter<"IndustryInsights"> | Date | string
    nextUpdate?: DateTimeFilter<"IndustryInsights"> | Date | string
    user?: UserListRelationFilter
  }

  export type IndustryInsightsOrderByWithRelationInput = {
    id?: SortOrder
    industry?: SortOrder
    salaryRange?: SortOrder
    growthRate?: SortOrder
    demandLevel?: SortOrder
    topSkills?: SortOrder
    marketOutlook?: SortOrder
    keyTrends?: SortOrder
    recommendedSkills?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
    user?: UserOrderByRelationAggregateInput
  }

  export type IndustryInsightsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    industry?: string
    AND?: IndustryInsightsWhereInput | IndustryInsightsWhereInput[]
    OR?: IndustryInsightsWhereInput[]
    NOT?: IndustryInsightsWhereInput | IndustryInsightsWhereInput[]
    salaryRange?: JsonFilter<"IndustryInsights">
    growthRate?: FloatFilter<"IndustryInsights"> | number
    demandLevel?: EnumDemandLevelFilter<"IndustryInsights"> | $Enums.DemandLevel
    topSkills?: StringNullableListFilter<"IndustryInsights">
    marketOutlook?: EnumMarketOutlookFilter<"IndustryInsights"> | $Enums.MarketOutlook
    keyTrends?: StringNullableListFilter<"IndustryInsights">
    recommendedSkills?: StringNullableListFilter<"IndustryInsights">
    lastUpdated?: DateTimeFilter<"IndustryInsights"> | Date | string
    nextUpdate?: DateTimeFilter<"IndustryInsights"> | Date | string
    user?: UserListRelationFilter
  }, "id" | "industry">

  export type IndustryInsightsOrderByWithAggregationInput = {
    id?: SortOrder
    industry?: SortOrder
    salaryRange?: SortOrder
    growthRate?: SortOrder
    demandLevel?: SortOrder
    topSkills?: SortOrder
    marketOutlook?: SortOrder
    keyTrends?: SortOrder
    recommendedSkills?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
    _count?: IndustryInsightsCountOrderByAggregateInput
    _avg?: IndustryInsightsAvgOrderByAggregateInput
    _max?: IndustryInsightsMaxOrderByAggregateInput
    _min?: IndustryInsightsMinOrderByAggregateInput
    _sum?: IndustryInsightsSumOrderByAggregateInput
  }

  export type IndustryInsightsScalarWhereWithAggregatesInput = {
    AND?: IndustryInsightsScalarWhereWithAggregatesInput | IndustryInsightsScalarWhereWithAggregatesInput[]
    OR?: IndustryInsightsScalarWhereWithAggregatesInput[]
    NOT?: IndustryInsightsScalarWhereWithAggregatesInput | IndustryInsightsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IndustryInsights"> | string
    industry?: StringWithAggregatesFilter<"IndustryInsights"> | string
    salaryRange?: JsonWithAggregatesFilter<"IndustryInsights">
    growthRate?: FloatWithAggregatesFilter<"IndustryInsights"> | number
    demandLevel?: EnumDemandLevelWithAggregatesFilter<"IndustryInsights"> | $Enums.DemandLevel
    topSkills?: StringNullableListFilter<"IndustryInsights">
    marketOutlook?: EnumMarketOutlookWithAggregatesFilter<"IndustryInsights"> | $Enums.MarketOutlook
    keyTrends?: StringNullableListFilter<"IndustryInsights">
    recommendedSkills?: StringNullableListFilter<"IndustryInsights">
    lastUpdated?: DateTimeWithAggregatesFilter<"IndustryInsights"> | Date | string
    nextUpdate?: DateTimeWithAggregatesFilter<"IndustryInsights"> | Date | string
  }

  export type CourseListWhereInput = {
    AND?: CourseListWhereInput | CourseListWhereInput[]
    OR?: CourseListWhereInput[]
    NOT?: CourseListWhereInput | CourseListWhereInput[]
    id?: StringFilter<"CourseList"> | string
    courseId?: StringFilter<"CourseList"> | string
    name?: StringFilter<"CourseList"> | string
    category?: StringFilter<"CourseList"> | string
    level?: StringFilter<"CourseList"> | string
    includeVideo?: StringFilter<"CourseList"> | string
    courseOutput?: JsonFilter<"CourseList">
    createdBy?: StringFilter<"CourseList"> | string
    userName?: StringNullableFilter<"CourseList"> | string | null
    userProfileImage?: StringNullableFilter<"CourseList"> | string | null
    courseBanner?: StringFilter<"CourseList"> | string
    publish?: BoolFilter<"CourseList"> | boolean
    chapters?: ChaptersListRelationFilter
    assessments?: AssessmentListRelationFilter
  }

  export type CourseListOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    level?: SortOrder
    includeVideo?: SortOrder
    courseOutput?: SortOrder
    createdBy?: SortOrder
    userName?: SortOrderInput | SortOrder
    userProfileImage?: SortOrderInput | SortOrder
    courseBanner?: SortOrder
    publish?: SortOrder
    chapters?: ChaptersOrderByRelationAggregateInput
    assessments?: AssessmentOrderByRelationAggregateInput
  }

  export type CourseListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId?: string
    AND?: CourseListWhereInput | CourseListWhereInput[]
    OR?: CourseListWhereInput[]
    NOT?: CourseListWhereInput | CourseListWhereInput[]
    name?: StringFilter<"CourseList"> | string
    category?: StringFilter<"CourseList"> | string
    level?: StringFilter<"CourseList"> | string
    includeVideo?: StringFilter<"CourseList"> | string
    courseOutput?: JsonFilter<"CourseList">
    createdBy?: StringFilter<"CourseList"> | string
    userName?: StringNullableFilter<"CourseList"> | string | null
    userProfileImage?: StringNullableFilter<"CourseList"> | string | null
    courseBanner?: StringFilter<"CourseList"> | string
    publish?: BoolFilter<"CourseList"> | boolean
    chapters?: ChaptersListRelationFilter
    assessments?: AssessmentListRelationFilter
  }, "id" | "courseId">

  export type CourseListOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    level?: SortOrder
    includeVideo?: SortOrder
    courseOutput?: SortOrder
    createdBy?: SortOrder
    userName?: SortOrderInput | SortOrder
    userProfileImage?: SortOrderInput | SortOrder
    courseBanner?: SortOrder
    publish?: SortOrder
    _count?: CourseListCountOrderByAggregateInput
    _max?: CourseListMaxOrderByAggregateInput
    _min?: CourseListMinOrderByAggregateInput
  }

  export type CourseListScalarWhereWithAggregatesInput = {
    AND?: CourseListScalarWhereWithAggregatesInput | CourseListScalarWhereWithAggregatesInput[]
    OR?: CourseListScalarWhereWithAggregatesInput[]
    NOT?: CourseListScalarWhereWithAggregatesInput | CourseListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseList"> | string
    courseId?: StringWithAggregatesFilter<"CourseList"> | string
    name?: StringWithAggregatesFilter<"CourseList"> | string
    category?: StringWithAggregatesFilter<"CourseList"> | string
    level?: StringWithAggregatesFilter<"CourseList"> | string
    includeVideo?: StringWithAggregatesFilter<"CourseList"> | string
    courseOutput?: JsonWithAggregatesFilter<"CourseList">
    createdBy?: StringWithAggregatesFilter<"CourseList"> | string
    userName?: StringNullableWithAggregatesFilter<"CourseList"> | string | null
    userProfileImage?: StringNullableWithAggregatesFilter<"CourseList"> | string | null
    courseBanner?: StringWithAggregatesFilter<"CourseList"> | string
    publish?: BoolWithAggregatesFilter<"CourseList"> | boolean
  }

  export type ChaptersWhereInput = {
    AND?: ChaptersWhereInput | ChaptersWhereInput[]
    OR?: ChaptersWhereInput[]
    NOT?: ChaptersWhereInput | ChaptersWhereInput[]
    id?: IntFilter<"Chapters"> | number
    courseId?: StringFilter<"Chapters"> | string
    chapterId?: IntFilter<"Chapters"> | number
    content?: JsonFilter<"Chapters">
    videoId?: StringFilter<"Chapters"> | string
    course?: XOR<CourseListScalarRelationFilter, CourseListWhereInput>
  }

  export type ChaptersOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    chapterId?: SortOrder
    content?: SortOrder
    videoId?: SortOrder
    course?: CourseListOrderByWithRelationInput
  }

  export type ChaptersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    courseId_chapterId?: ChaptersCourseIdChapterIdCompoundUniqueInput
    AND?: ChaptersWhereInput | ChaptersWhereInput[]
    OR?: ChaptersWhereInput[]
    NOT?: ChaptersWhereInput | ChaptersWhereInput[]
    courseId?: StringFilter<"Chapters"> | string
    chapterId?: IntFilter<"Chapters"> | number
    content?: JsonFilter<"Chapters">
    videoId?: StringFilter<"Chapters"> | string
    course?: XOR<CourseListScalarRelationFilter, CourseListWhereInput>
  }, "id" | "courseId_chapterId">

  export type ChaptersOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    chapterId?: SortOrder
    content?: SortOrder
    videoId?: SortOrder
    _count?: ChaptersCountOrderByAggregateInput
    _avg?: ChaptersAvgOrderByAggregateInput
    _max?: ChaptersMaxOrderByAggregateInput
    _min?: ChaptersMinOrderByAggregateInput
    _sum?: ChaptersSumOrderByAggregateInput
  }

  export type ChaptersScalarWhereWithAggregatesInput = {
    AND?: ChaptersScalarWhereWithAggregatesInput | ChaptersScalarWhereWithAggregatesInput[]
    OR?: ChaptersScalarWhereWithAggregatesInput[]
    NOT?: ChaptersScalarWhereWithAggregatesInput | ChaptersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chapters"> | number
    courseId?: StringWithAggregatesFilter<"Chapters"> | string
    chapterId?: IntWithAggregatesFilter<"Chapters"> | number
    content?: JsonWithAggregatesFilter<"Chapters">
    videoId?: StringWithAggregatesFilter<"Chapters"> | string
  }

  export type UserCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    industryInsights?: IndustryInsightsCreateNestedOneWithoutUserInput
    assessments?: AssessmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    assessments?: AssessmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    industryInsights?: IndustryInsightsUpdateOneWithoutUserNestedInput
    assessments?: AssessmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    assessments?: AssessmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
  }

  export type AssessmentCreateInput = {
    id?: string
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAssessmentsInput
    courseList?: CourseListCreateNestedOneWithoutAssessmentsInput
  }

  export type AssessmentUncheckedCreateInput = {
    id?: string
    userId: string
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseListId?: string | null
  }

  export type AssessmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssessmentsNestedInput
    courseList?: CourseListUpdateOneWithoutAssessmentsNestedInput
  }

  export type AssessmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseListId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssessmentCreateManyInput = {
    id?: string
    userId: string
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseListId?: string | null
  }

  export type AssessmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseListId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IndustryInsightsCreateInput = {
    id?: string
    industry: string
    salaryRange: JsonNullValueInput | InputJsonValue
    growthRate: number
    demandLevel: $Enums.DemandLevel
    topSkills?: IndustryInsightsCreatetopSkillsInput | string[]
    marketOutlook: $Enums.MarketOutlook
    keyTrends?: IndustryInsightsCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightsCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
    user?: UserCreateNestedManyWithoutIndustryInsightsInput
  }

  export type IndustryInsightsUncheckedCreateInput = {
    id?: string
    industry: string
    salaryRange: JsonNullValueInput | InputJsonValue
    growthRate: number
    demandLevel: $Enums.DemandLevel
    topSkills?: IndustryInsightsCreatetopSkillsInput | string[]
    marketOutlook: $Enums.MarketOutlook
    keyTrends?: IndustryInsightsCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightsCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
    user?: UserUncheckedCreateNestedManyWithoutIndustryInsightsInput
  }

  export type IndustryInsightsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRange?: JsonNullValueInput | InputJsonValue
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandLevel?: EnumDemandLevelFieldUpdateOperationsInput | $Enums.DemandLevel
    topSkills?: IndustryInsightsUpdatetopSkillsInput | string[]
    marketOutlook?: EnumMarketOutlookFieldUpdateOperationsInput | $Enums.MarketOutlook
    keyTrends?: IndustryInsightsUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightsUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutIndustryInsightsNestedInput
  }

  export type IndustryInsightsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRange?: JsonNullValueInput | InputJsonValue
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandLevel?: EnumDemandLevelFieldUpdateOperationsInput | $Enums.DemandLevel
    topSkills?: IndustryInsightsUpdatetopSkillsInput | string[]
    marketOutlook?: EnumMarketOutlookFieldUpdateOperationsInput | $Enums.MarketOutlook
    keyTrends?: IndustryInsightsUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightsUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutIndustryInsightsNestedInput
  }

  export type IndustryInsightsCreateManyInput = {
    id?: string
    industry: string
    salaryRange: JsonNullValueInput | InputJsonValue
    growthRate: number
    demandLevel: $Enums.DemandLevel
    topSkills?: IndustryInsightsCreatetopSkillsInput | string[]
    marketOutlook: $Enums.MarketOutlook
    keyTrends?: IndustryInsightsCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightsCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
  }

  export type IndustryInsightsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRange?: JsonNullValueInput | InputJsonValue
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandLevel?: EnumDemandLevelFieldUpdateOperationsInput | $Enums.DemandLevel
    topSkills?: IndustryInsightsUpdatetopSkillsInput | string[]
    marketOutlook?: EnumMarketOutlookFieldUpdateOperationsInput | $Enums.MarketOutlook
    keyTrends?: IndustryInsightsUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightsUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryInsightsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRange?: JsonNullValueInput | InputJsonValue
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandLevel?: EnumDemandLevelFieldUpdateOperationsInput | $Enums.DemandLevel
    topSkills?: IndustryInsightsUpdatetopSkillsInput | string[]
    marketOutlook?: EnumMarketOutlookFieldUpdateOperationsInput | $Enums.MarketOutlook
    keyTrends?: IndustryInsightsUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightsUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseListCreateInput = {
    id?: string
    courseId: string
    name: string
    category: string
    level: string
    includeVideo?: string
    courseOutput: JsonNullValueInput | InputJsonValue
    createdBy: string
    userName?: string | null
    userProfileImage?: string | null
    courseBanner?: string
    publish?: boolean
    chapters?: ChaptersCreateNestedManyWithoutCourseInput
    assessments?: AssessmentCreateNestedManyWithoutCourseListInput
  }

  export type CourseListUncheckedCreateInput = {
    id?: string
    courseId: string
    name: string
    category: string
    level: string
    includeVideo?: string
    courseOutput: JsonNullValueInput | InputJsonValue
    createdBy: string
    userName?: string | null
    userProfileImage?: string | null
    courseBanner?: string
    publish?: boolean
    chapters?: ChaptersUncheckedCreateNestedManyWithoutCourseInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutCourseListInput
  }

  export type CourseListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    includeVideo?: StringFieldUpdateOperationsInput | string
    courseOutput?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    courseBanner?: StringFieldUpdateOperationsInput | string
    publish?: BoolFieldUpdateOperationsInput | boolean
    chapters?: ChaptersUpdateManyWithoutCourseNestedInput
    assessments?: AssessmentUpdateManyWithoutCourseListNestedInput
  }

  export type CourseListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    includeVideo?: StringFieldUpdateOperationsInput | string
    courseOutput?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    courseBanner?: StringFieldUpdateOperationsInput | string
    publish?: BoolFieldUpdateOperationsInput | boolean
    chapters?: ChaptersUncheckedUpdateManyWithoutCourseNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutCourseListNestedInput
  }

  export type CourseListCreateManyInput = {
    id?: string
    courseId: string
    name: string
    category: string
    level: string
    includeVideo?: string
    courseOutput: JsonNullValueInput | InputJsonValue
    createdBy: string
    userName?: string | null
    userProfileImage?: string | null
    courseBanner?: string
    publish?: boolean
  }

  export type CourseListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    includeVideo?: StringFieldUpdateOperationsInput | string
    courseOutput?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    courseBanner?: StringFieldUpdateOperationsInput | string
    publish?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    includeVideo?: StringFieldUpdateOperationsInput | string
    courseOutput?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    courseBanner?: StringFieldUpdateOperationsInput | string
    publish?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChaptersCreateInput = {
    chapterId: number
    content: JsonNullValueInput | InputJsonValue
    videoId: string
    course: CourseListCreateNestedOneWithoutChaptersInput
  }

  export type ChaptersUncheckedCreateInput = {
    id?: number
    courseId: string
    chapterId: number
    content: JsonNullValueInput | InputJsonValue
    videoId: string
  }

  export type ChaptersUpdateInput = {
    chapterId?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    videoId?: StringFieldUpdateOperationsInput | string
    course?: CourseListUpdateOneRequiredWithoutChaptersNestedInput
  }

  export type ChaptersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    chapterId?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type ChaptersCreateManyInput = {
    id?: number
    courseId: string
    chapterId: number
    content: JsonNullValueInput | InputJsonValue
    videoId: string
  }

  export type ChaptersUpdateManyMutationInput = {
    chapterId?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type ChaptersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    chapterId?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IndustryInsightsNullableScalarRelationFilter = {
    is?: IndustryInsightsWhereInput | null
    isNot?: IndustryInsightsWhereInput | null
  }

  export type AssessmentListRelationFilter = {
    every?: AssessmentWhereInput
    some?: AssessmentWhereInput
    none?: AssessmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssessmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrder
    experience?: SortOrder
    skills?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    experience?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrder
    experience?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrder
    experience?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    experience?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CourseListNullableScalarRelationFilter = {
    is?: CourseListWhereInput | null
    isNot?: CourseListWhereInput | null
  }

  export type AssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizScore?: SortOrder
    questions?: SortOrder
    category?: SortOrder
    improvementTip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseListId?: SortOrder
  }

  export type AssessmentAvgOrderByAggregateInput = {
    quizScore?: SortOrder
  }

  export type AssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizScore?: SortOrder
    category?: SortOrder
    improvementTip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseListId?: SortOrder
  }

  export type AssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizScore?: SortOrder
    category?: SortOrder
    improvementTip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseListId?: SortOrder
  }

  export type AssessmentSumOrderByAggregateInput = {
    quizScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumDemandLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DemandLevel | EnumDemandLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDemandLevelFilter<$PrismaModel> | $Enums.DemandLevel
  }

  export type EnumMarketOutlookFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketOutlook | EnumMarketOutlookFieldRefInput<$PrismaModel>
    in?: $Enums.MarketOutlook[] | ListEnumMarketOutlookFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketOutlook[] | ListEnumMarketOutlookFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketOutlookFilter<$PrismaModel> | $Enums.MarketOutlook
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndustryInsightsCountOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    salaryRange?: SortOrder
    growthRate?: SortOrder
    demandLevel?: SortOrder
    topSkills?: SortOrder
    marketOutlook?: SortOrder
    keyTrends?: SortOrder
    recommendedSkills?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
  }

  export type IndustryInsightsAvgOrderByAggregateInput = {
    growthRate?: SortOrder
  }

  export type IndustryInsightsMaxOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    growthRate?: SortOrder
    demandLevel?: SortOrder
    marketOutlook?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
  }

  export type IndustryInsightsMinOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    growthRate?: SortOrder
    demandLevel?: SortOrder
    marketOutlook?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
  }

  export type IndustryInsightsSumOrderByAggregateInput = {
    growthRate?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumDemandLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DemandLevel | EnumDemandLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDemandLevelWithAggregatesFilter<$PrismaModel> | $Enums.DemandLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDemandLevelFilter<$PrismaModel>
    _max?: NestedEnumDemandLevelFilter<$PrismaModel>
  }

  export type EnumMarketOutlookWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketOutlook | EnumMarketOutlookFieldRefInput<$PrismaModel>
    in?: $Enums.MarketOutlook[] | ListEnumMarketOutlookFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketOutlook[] | ListEnumMarketOutlookFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketOutlookWithAggregatesFilter<$PrismaModel> | $Enums.MarketOutlook
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarketOutlookFilter<$PrismaModel>
    _max?: NestedEnumMarketOutlookFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChaptersListRelationFilter = {
    every?: ChaptersWhereInput
    some?: ChaptersWhereInput
    none?: ChaptersWhereInput
  }

  export type ChaptersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseListCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    level?: SortOrder
    includeVideo?: SortOrder
    courseOutput?: SortOrder
    createdBy?: SortOrder
    userName?: SortOrder
    userProfileImage?: SortOrder
    courseBanner?: SortOrder
    publish?: SortOrder
  }

  export type CourseListMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    level?: SortOrder
    includeVideo?: SortOrder
    createdBy?: SortOrder
    userName?: SortOrder
    userProfileImage?: SortOrder
    courseBanner?: SortOrder
    publish?: SortOrder
  }

  export type CourseListMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    level?: SortOrder
    includeVideo?: SortOrder
    createdBy?: SortOrder
    userName?: SortOrder
    userProfileImage?: SortOrder
    courseBanner?: SortOrder
    publish?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CourseListScalarRelationFilter = {
    is?: CourseListWhereInput
    isNot?: CourseListWhereInput
  }

  export type ChaptersCourseIdChapterIdCompoundUniqueInput = {
    courseId: string
    chapterId: number
  }

  export type ChaptersCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    chapterId?: SortOrder
    content?: SortOrder
    videoId?: SortOrder
  }

  export type ChaptersAvgOrderByAggregateInput = {
    id?: SortOrder
    chapterId?: SortOrder
  }

  export type ChaptersMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    chapterId?: SortOrder
    videoId?: SortOrder
  }

  export type ChaptersMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    chapterId?: SortOrder
    videoId?: SortOrder
  }

  export type ChaptersSumOrderByAggregateInput = {
    id?: SortOrder
    chapterId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserCreateskillsInput = {
    set: string[]
  }

  export type IndustryInsightsCreateNestedOneWithoutUserInput = {
    create?: XOR<IndustryInsightsCreateWithoutUserInput, IndustryInsightsUncheckedCreateWithoutUserInput>
    connectOrCreate?: IndustryInsightsCreateOrConnectWithoutUserInput
    connect?: IndustryInsightsWhereUniqueInput
  }

  export type AssessmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput> | AssessmentCreateWithoutUserInput[] | AssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutUserInput | AssessmentCreateOrConnectWithoutUserInput[]
    createMany?: AssessmentCreateManyUserInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type AssessmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput> | AssessmentCreateWithoutUserInput[] | AssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutUserInput | AssessmentCreateOrConnectWithoutUserInput[]
    createMany?: AssessmentCreateManyUserInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IndustryInsightsUpdateOneWithoutUserNestedInput = {
    create?: XOR<IndustryInsightsCreateWithoutUserInput, IndustryInsightsUncheckedCreateWithoutUserInput>
    connectOrCreate?: IndustryInsightsCreateOrConnectWithoutUserInput
    upsert?: IndustryInsightsUpsertWithoutUserInput
    disconnect?: IndustryInsightsWhereInput | boolean
    delete?: IndustryInsightsWhereInput | boolean
    connect?: IndustryInsightsWhereUniqueInput
    update?: XOR<XOR<IndustryInsightsUpdateToOneWithWhereWithoutUserInput, IndustryInsightsUpdateWithoutUserInput>, IndustryInsightsUncheckedUpdateWithoutUserInput>
  }

  export type AssessmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput> | AssessmentCreateWithoutUserInput[] | AssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutUserInput | AssessmentCreateOrConnectWithoutUserInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutUserInput | AssessmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssessmentCreateManyUserInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutUserInput | AssessmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutUserInput | AssessmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type AssessmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput> | AssessmentCreateWithoutUserInput[] | AssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutUserInput | AssessmentCreateOrConnectWithoutUserInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutUserInput | AssessmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssessmentCreateManyUserInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutUserInput | AssessmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutUserInput | AssessmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type AssessmentCreatequestionsInput = {
    set: InputJsonValue[]
  }

  export type UserCreateNestedOneWithoutAssessmentsInput = {
    create?: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssessmentsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseListCreateNestedOneWithoutAssessmentsInput = {
    create?: XOR<CourseListCreateWithoutAssessmentsInput, CourseListUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: CourseListCreateOrConnectWithoutAssessmentsInput
    connect?: CourseListWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssessmentUpdatequestionsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type UserUpdateOneRequiredWithoutAssessmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssessmentsInput
    upsert?: UserUpsertWithoutAssessmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssessmentsInput, UserUpdateWithoutAssessmentsInput>, UserUncheckedUpdateWithoutAssessmentsInput>
  }

  export type CourseListUpdateOneWithoutAssessmentsNestedInput = {
    create?: XOR<CourseListCreateWithoutAssessmentsInput, CourseListUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: CourseListCreateOrConnectWithoutAssessmentsInput
    upsert?: CourseListUpsertWithoutAssessmentsInput
    disconnect?: CourseListWhereInput | boolean
    delete?: CourseListWhereInput | boolean
    connect?: CourseListWhereUniqueInput
    update?: XOR<XOR<CourseListUpdateToOneWithWhereWithoutAssessmentsInput, CourseListUpdateWithoutAssessmentsInput>, CourseListUncheckedUpdateWithoutAssessmentsInput>
  }

  export type IndustryInsightsCreatetopSkillsInput = {
    set: string[]
  }

  export type IndustryInsightsCreatekeyTrendsInput = {
    set: string[]
  }

  export type IndustryInsightsCreaterecommendedSkillsInput = {
    set: string[]
  }

  export type UserCreateNestedManyWithoutIndustryInsightsInput = {
    create?: XOR<UserCreateWithoutIndustryInsightsInput, UserUncheckedCreateWithoutIndustryInsightsInput> | UserCreateWithoutIndustryInsightsInput[] | UserUncheckedCreateWithoutIndustryInsightsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutIndustryInsightsInput | UserCreateOrConnectWithoutIndustryInsightsInput[]
    createMany?: UserCreateManyIndustryInsightsInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutIndustryInsightsInput = {
    create?: XOR<UserCreateWithoutIndustryInsightsInput, UserUncheckedCreateWithoutIndustryInsightsInput> | UserCreateWithoutIndustryInsightsInput[] | UserUncheckedCreateWithoutIndustryInsightsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutIndustryInsightsInput | UserCreateOrConnectWithoutIndustryInsightsInput[]
    createMany?: UserCreateManyIndustryInsightsInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumDemandLevelFieldUpdateOperationsInput = {
    set?: $Enums.DemandLevel
  }

  export type IndustryInsightsUpdatetopSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumMarketOutlookFieldUpdateOperationsInput = {
    set?: $Enums.MarketOutlook
  }

  export type IndustryInsightsUpdatekeyTrendsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IndustryInsightsUpdaterecommendedSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateManyWithoutIndustryInsightsNestedInput = {
    create?: XOR<UserCreateWithoutIndustryInsightsInput, UserUncheckedCreateWithoutIndustryInsightsInput> | UserCreateWithoutIndustryInsightsInput[] | UserUncheckedCreateWithoutIndustryInsightsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutIndustryInsightsInput | UserCreateOrConnectWithoutIndustryInsightsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutIndustryInsightsInput | UserUpsertWithWhereUniqueWithoutIndustryInsightsInput[]
    createMany?: UserCreateManyIndustryInsightsInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutIndustryInsightsInput | UserUpdateWithWhereUniqueWithoutIndustryInsightsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutIndustryInsightsInput | UserUpdateManyWithWhereWithoutIndustryInsightsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutIndustryInsightsNestedInput = {
    create?: XOR<UserCreateWithoutIndustryInsightsInput, UserUncheckedCreateWithoutIndustryInsightsInput> | UserCreateWithoutIndustryInsightsInput[] | UserUncheckedCreateWithoutIndustryInsightsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutIndustryInsightsInput | UserCreateOrConnectWithoutIndustryInsightsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutIndustryInsightsInput | UserUpsertWithWhereUniqueWithoutIndustryInsightsInput[]
    createMany?: UserCreateManyIndustryInsightsInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutIndustryInsightsInput | UserUpdateWithWhereUniqueWithoutIndustryInsightsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutIndustryInsightsInput | UserUpdateManyWithWhereWithoutIndustryInsightsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ChaptersCreateNestedManyWithoutCourseInput = {
    create?: XOR<ChaptersCreateWithoutCourseInput, ChaptersUncheckedCreateWithoutCourseInput> | ChaptersCreateWithoutCourseInput[] | ChaptersUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ChaptersCreateOrConnectWithoutCourseInput | ChaptersCreateOrConnectWithoutCourseInput[]
    createMany?: ChaptersCreateManyCourseInputEnvelope
    connect?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
  }

  export type AssessmentCreateNestedManyWithoutCourseListInput = {
    create?: XOR<AssessmentCreateWithoutCourseListInput, AssessmentUncheckedCreateWithoutCourseListInput> | AssessmentCreateWithoutCourseListInput[] | AssessmentUncheckedCreateWithoutCourseListInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutCourseListInput | AssessmentCreateOrConnectWithoutCourseListInput[]
    createMany?: AssessmentCreateManyCourseListInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type ChaptersUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ChaptersCreateWithoutCourseInput, ChaptersUncheckedCreateWithoutCourseInput> | ChaptersCreateWithoutCourseInput[] | ChaptersUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ChaptersCreateOrConnectWithoutCourseInput | ChaptersCreateOrConnectWithoutCourseInput[]
    createMany?: ChaptersCreateManyCourseInputEnvelope
    connect?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
  }

  export type AssessmentUncheckedCreateNestedManyWithoutCourseListInput = {
    create?: XOR<AssessmentCreateWithoutCourseListInput, AssessmentUncheckedCreateWithoutCourseListInput> | AssessmentCreateWithoutCourseListInput[] | AssessmentUncheckedCreateWithoutCourseListInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutCourseListInput | AssessmentCreateOrConnectWithoutCourseListInput[]
    createMany?: AssessmentCreateManyCourseListInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChaptersUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ChaptersCreateWithoutCourseInput, ChaptersUncheckedCreateWithoutCourseInput> | ChaptersCreateWithoutCourseInput[] | ChaptersUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ChaptersCreateOrConnectWithoutCourseInput | ChaptersCreateOrConnectWithoutCourseInput[]
    upsert?: ChaptersUpsertWithWhereUniqueWithoutCourseInput | ChaptersUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ChaptersCreateManyCourseInputEnvelope
    set?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    disconnect?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    delete?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    connect?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    update?: ChaptersUpdateWithWhereUniqueWithoutCourseInput | ChaptersUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ChaptersUpdateManyWithWhereWithoutCourseInput | ChaptersUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ChaptersScalarWhereInput | ChaptersScalarWhereInput[]
  }

  export type AssessmentUpdateManyWithoutCourseListNestedInput = {
    create?: XOR<AssessmentCreateWithoutCourseListInput, AssessmentUncheckedCreateWithoutCourseListInput> | AssessmentCreateWithoutCourseListInput[] | AssessmentUncheckedCreateWithoutCourseListInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutCourseListInput | AssessmentCreateOrConnectWithoutCourseListInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutCourseListInput | AssessmentUpsertWithWhereUniqueWithoutCourseListInput[]
    createMany?: AssessmentCreateManyCourseListInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutCourseListInput | AssessmentUpdateWithWhereUniqueWithoutCourseListInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutCourseListInput | AssessmentUpdateManyWithWhereWithoutCourseListInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type ChaptersUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ChaptersCreateWithoutCourseInput, ChaptersUncheckedCreateWithoutCourseInput> | ChaptersCreateWithoutCourseInput[] | ChaptersUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ChaptersCreateOrConnectWithoutCourseInput | ChaptersCreateOrConnectWithoutCourseInput[]
    upsert?: ChaptersUpsertWithWhereUniqueWithoutCourseInput | ChaptersUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ChaptersCreateManyCourseInputEnvelope
    set?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    disconnect?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    delete?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    connect?: ChaptersWhereUniqueInput | ChaptersWhereUniqueInput[]
    update?: ChaptersUpdateWithWhereUniqueWithoutCourseInput | ChaptersUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ChaptersUpdateManyWithWhereWithoutCourseInput | ChaptersUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ChaptersScalarWhereInput | ChaptersScalarWhereInput[]
  }

  export type AssessmentUncheckedUpdateManyWithoutCourseListNestedInput = {
    create?: XOR<AssessmentCreateWithoutCourseListInput, AssessmentUncheckedCreateWithoutCourseListInput> | AssessmentCreateWithoutCourseListInput[] | AssessmentUncheckedCreateWithoutCourseListInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutCourseListInput | AssessmentCreateOrConnectWithoutCourseListInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutCourseListInput | AssessmentUpsertWithWhereUniqueWithoutCourseListInput[]
    createMany?: AssessmentCreateManyCourseListInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutCourseListInput | AssessmentUpdateWithWhereUniqueWithoutCourseListInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutCourseListInput | AssessmentUpdateManyWithWhereWithoutCourseListInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type CourseListCreateNestedOneWithoutChaptersInput = {
    create?: XOR<CourseListCreateWithoutChaptersInput, CourseListUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: CourseListCreateOrConnectWithoutChaptersInput
    connect?: CourseListWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseListUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<CourseListCreateWithoutChaptersInput, CourseListUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: CourseListCreateOrConnectWithoutChaptersInput
    upsert?: CourseListUpsertWithoutChaptersInput
    connect?: CourseListWhereUniqueInput
    update?: XOR<XOR<CourseListUpdateToOneWithWhereWithoutChaptersInput, CourseListUpdateWithoutChaptersInput>, CourseListUncheckedUpdateWithoutChaptersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumDemandLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DemandLevel | EnumDemandLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDemandLevelFilter<$PrismaModel> | $Enums.DemandLevel
  }

  export type NestedEnumMarketOutlookFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketOutlook | EnumMarketOutlookFieldRefInput<$PrismaModel>
    in?: $Enums.MarketOutlook[] | ListEnumMarketOutlookFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketOutlook[] | ListEnumMarketOutlookFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketOutlookFilter<$PrismaModel> | $Enums.MarketOutlook
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumDemandLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DemandLevel | EnumDemandLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDemandLevelWithAggregatesFilter<$PrismaModel> | $Enums.DemandLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDemandLevelFilter<$PrismaModel>
    _max?: NestedEnumDemandLevelFilter<$PrismaModel>
  }

  export type NestedEnumMarketOutlookWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketOutlook | EnumMarketOutlookFieldRefInput<$PrismaModel>
    in?: $Enums.MarketOutlook[] | ListEnumMarketOutlookFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketOutlook[] | ListEnumMarketOutlookFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketOutlookWithAggregatesFilter<$PrismaModel> | $Enums.MarketOutlook
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarketOutlookFilter<$PrismaModel>
    _max?: NestedEnumMarketOutlookFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IndustryInsightsCreateWithoutUserInput = {
    id?: string
    industry: string
    salaryRange: JsonNullValueInput | InputJsonValue
    growthRate: number
    demandLevel: $Enums.DemandLevel
    topSkills?: IndustryInsightsCreatetopSkillsInput | string[]
    marketOutlook: $Enums.MarketOutlook
    keyTrends?: IndustryInsightsCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightsCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
  }

  export type IndustryInsightsUncheckedCreateWithoutUserInput = {
    id?: string
    industry: string
    salaryRange: JsonNullValueInput | InputJsonValue
    growthRate: number
    demandLevel: $Enums.DemandLevel
    topSkills?: IndustryInsightsCreatetopSkillsInput | string[]
    marketOutlook: $Enums.MarketOutlook
    keyTrends?: IndustryInsightsCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightsCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
  }

  export type IndustryInsightsCreateOrConnectWithoutUserInput = {
    where: IndustryInsightsWhereUniqueInput
    create: XOR<IndustryInsightsCreateWithoutUserInput, IndustryInsightsUncheckedCreateWithoutUserInput>
  }

  export type AssessmentCreateWithoutUserInput = {
    id?: string
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseList?: CourseListCreateNestedOneWithoutAssessmentsInput
  }

  export type AssessmentUncheckedCreateWithoutUserInput = {
    id?: string
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseListId?: string | null
  }

  export type AssessmentCreateOrConnectWithoutUserInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput>
  }

  export type AssessmentCreateManyUserInputEnvelope = {
    data: AssessmentCreateManyUserInput | AssessmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IndustryInsightsUpsertWithoutUserInput = {
    update: XOR<IndustryInsightsUpdateWithoutUserInput, IndustryInsightsUncheckedUpdateWithoutUserInput>
    create: XOR<IndustryInsightsCreateWithoutUserInput, IndustryInsightsUncheckedCreateWithoutUserInput>
    where?: IndustryInsightsWhereInput
  }

  export type IndustryInsightsUpdateToOneWithWhereWithoutUserInput = {
    where?: IndustryInsightsWhereInput
    data: XOR<IndustryInsightsUpdateWithoutUserInput, IndustryInsightsUncheckedUpdateWithoutUserInput>
  }

  export type IndustryInsightsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRange?: JsonNullValueInput | InputJsonValue
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandLevel?: EnumDemandLevelFieldUpdateOperationsInput | $Enums.DemandLevel
    topSkills?: IndustryInsightsUpdatetopSkillsInput | string[]
    marketOutlook?: EnumMarketOutlookFieldUpdateOperationsInput | $Enums.MarketOutlook
    keyTrends?: IndustryInsightsUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightsUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryInsightsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRange?: JsonNullValueInput | InputJsonValue
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandLevel?: EnumDemandLevelFieldUpdateOperationsInput | $Enums.DemandLevel
    topSkills?: IndustryInsightsUpdatetopSkillsInput | string[]
    marketOutlook?: EnumMarketOutlookFieldUpdateOperationsInput | $Enums.MarketOutlook
    keyTrends?: IndustryInsightsUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightsUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AssessmentWhereUniqueInput
    update: XOR<AssessmentUpdateWithoutUserInput, AssessmentUncheckedUpdateWithoutUserInput>
    create: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput>
  }

  export type AssessmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AssessmentWhereUniqueInput
    data: XOR<AssessmentUpdateWithoutUserInput, AssessmentUncheckedUpdateWithoutUserInput>
  }

  export type AssessmentUpdateManyWithWhereWithoutUserInput = {
    where: AssessmentScalarWhereInput
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AssessmentScalarWhereInput = {
    AND?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    OR?: AssessmentScalarWhereInput[]
    NOT?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    id?: StringFilter<"Assessment"> | string
    userId?: StringFilter<"Assessment"> | string
    quizScore?: FloatFilter<"Assessment"> | number
    questions?: JsonNullableListFilter<"Assessment">
    category?: StringFilter<"Assessment"> | string
    improvementTip?: StringNullableFilter<"Assessment"> | string | null
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeFilter<"Assessment"> | Date | string
    courseListId?: StringNullableFilter<"Assessment"> | string | null
  }

  export type UserCreateWithoutAssessmentsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    industryInsights?: IndustryInsightsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssessmentsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
  }

  export type UserCreateOrConnectWithoutAssessmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
  }

  export type CourseListCreateWithoutAssessmentsInput = {
    id?: string
    courseId: string
    name: string
    category: string
    level: string
    includeVideo?: string
    courseOutput: JsonNullValueInput | InputJsonValue
    createdBy: string
    userName?: string | null
    userProfileImage?: string | null
    courseBanner?: string
    publish?: boolean
    chapters?: ChaptersCreateNestedManyWithoutCourseInput
  }

  export type CourseListUncheckedCreateWithoutAssessmentsInput = {
    id?: string
    courseId: string
    name: string
    category: string
    level: string
    includeVideo?: string
    courseOutput: JsonNullValueInput | InputJsonValue
    createdBy: string
    userName?: string | null
    userProfileImage?: string | null
    courseBanner?: string
    publish?: boolean
    chapters?: ChaptersUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseListCreateOrConnectWithoutAssessmentsInput = {
    where: CourseListWhereUniqueInput
    create: XOR<CourseListCreateWithoutAssessmentsInput, CourseListUncheckedCreateWithoutAssessmentsInput>
  }

  export type UserUpsertWithoutAssessmentsInput = {
    update: XOR<UserUpdateWithoutAssessmentsInput, UserUncheckedUpdateWithoutAssessmentsInput>
    create: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssessmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssessmentsInput, UserUncheckedUpdateWithoutAssessmentsInput>
  }

  export type UserUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    industryInsights?: IndustryInsightsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
  }

  export type CourseListUpsertWithoutAssessmentsInput = {
    update: XOR<CourseListUpdateWithoutAssessmentsInput, CourseListUncheckedUpdateWithoutAssessmentsInput>
    create: XOR<CourseListCreateWithoutAssessmentsInput, CourseListUncheckedCreateWithoutAssessmentsInput>
    where?: CourseListWhereInput
  }

  export type CourseListUpdateToOneWithWhereWithoutAssessmentsInput = {
    where?: CourseListWhereInput
    data: XOR<CourseListUpdateWithoutAssessmentsInput, CourseListUncheckedUpdateWithoutAssessmentsInput>
  }

  export type CourseListUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    includeVideo?: StringFieldUpdateOperationsInput | string
    courseOutput?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    courseBanner?: StringFieldUpdateOperationsInput | string
    publish?: BoolFieldUpdateOperationsInput | boolean
    chapters?: ChaptersUpdateManyWithoutCourseNestedInput
  }

  export type CourseListUncheckedUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    includeVideo?: StringFieldUpdateOperationsInput | string
    courseOutput?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    courseBanner?: StringFieldUpdateOperationsInput | string
    publish?: BoolFieldUpdateOperationsInput | boolean
    chapters?: ChaptersUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutIndustryInsightsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    assessments?: AssessmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIndustryInsightsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    assessments?: AssessmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIndustryInsightsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIndustryInsightsInput, UserUncheckedCreateWithoutIndustryInsightsInput>
  }

  export type UserCreateManyIndustryInsightsInputEnvelope = {
    data: UserCreateManyIndustryInsightsInput | UserCreateManyIndustryInsightsInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutIndustryInsightsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutIndustryInsightsInput, UserUncheckedUpdateWithoutIndustryInsightsInput>
    create: XOR<UserCreateWithoutIndustryInsightsInput, UserUncheckedCreateWithoutIndustryInsightsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutIndustryInsightsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutIndustryInsightsInput, UserUncheckedUpdateWithoutIndustryInsightsInput>
  }

  export type UserUpdateManyWithWhereWithoutIndustryInsightsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutIndustryInsightsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    clerkUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    industry?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bio?: StringNullableFilter<"User"> | string | null
    experience?: IntNullableFilter<"User"> | number | null
    skills?: StringNullableListFilter<"User">
  }

  export type ChaptersCreateWithoutCourseInput = {
    chapterId: number
    content: JsonNullValueInput | InputJsonValue
    videoId: string
  }

  export type ChaptersUncheckedCreateWithoutCourseInput = {
    id?: number
    chapterId: number
    content: JsonNullValueInput | InputJsonValue
    videoId: string
  }

  export type ChaptersCreateOrConnectWithoutCourseInput = {
    where: ChaptersWhereUniqueInput
    create: XOR<ChaptersCreateWithoutCourseInput, ChaptersUncheckedCreateWithoutCourseInput>
  }

  export type ChaptersCreateManyCourseInputEnvelope = {
    data: ChaptersCreateManyCourseInput | ChaptersCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentCreateWithoutCourseListInput = {
    id?: string
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAssessmentsInput
  }

  export type AssessmentUncheckedCreateWithoutCourseListInput = {
    id?: string
    userId: string
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentCreateOrConnectWithoutCourseListInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutCourseListInput, AssessmentUncheckedCreateWithoutCourseListInput>
  }

  export type AssessmentCreateManyCourseListInputEnvelope = {
    data: AssessmentCreateManyCourseListInput | AssessmentCreateManyCourseListInput[]
    skipDuplicates?: boolean
  }

  export type ChaptersUpsertWithWhereUniqueWithoutCourseInput = {
    where: ChaptersWhereUniqueInput
    update: XOR<ChaptersUpdateWithoutCourseInput, ChaptersUncheckedUpdateWithoutCourseInput>
    create: XOR<ChaptersCreateWithoutCourseInput, ChaptersUncheckedCreateWithoutCourseInput>
  }

  export type ChaptersUpdateWithWhereUniqueWithoutCourseInput = {
    where: ChaptersWhereUniqueInput
    data: XOR<ChaptersUpdateWithoutCourseInput, ChaptersUncheckedUpdateWithoutCourseInput>
  }

  export type ChaptersUpdateManyWithWhereWithoutCourseInput = {
    where: ChaptersScalarWhereInput
    data: XOR<ChaptersUpdateManyMutationInput, ChaptersUncheckedUpdateManyWithoutCourseInput>
  }

  export type ChaptersScalarWhereInput = {
    AND?: ChaptersScalarWhereInput | ChaptersScalarWhereInput[]
    OR?: ChaptersScalarWhereInput[]
    NOT?: ChaptersScalarWhereInput | ChaptersScalarWhereInput[]
    id?: IntFilter<"Chapters"> | number
    courseId?: StringFilter<"Chapters"> | string
    chapterId?: IntFilter<"Chapters"> | number
    content?: JsonFilter<"Chapters">
    videoId?: StringFilter<"Chapters"> | string
  }

  export type AssessmentUpsertWithWhereUniqueWithoutCourseListInput = {
    where: AssessmentWhereUniqueInput
    update: XOR<AssessmentUpdateWithoutCourseListInput, AssessmentUncheckedUpdateWithoutCourseListInput>
    create: XOR<AssessmentCreateWithoutCourseListInput, AssessmentUncheckedCreateWithoutCourseListInput>
  }

  export type AssessmentUpdateWithWhereUniqueWithoutCourseListInput = {
    where: AssessmentWhereUniqueInput
    data: XOR<AssessmentUpdateWithoutCourseListInput, AssessmentUncheckedUpdateWithoutCourseListInput>
  }

  export type AssessmentUpdateManyWithWhereWithoutCourseListInput = {
    where: AssessmentScalarWhereInput
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyWithoutCourseListInput>
  }

  export type CourseListCreateWithoutChaptersInput = {
    id?: string
    courseId: string
    name: string
    category: string
    level: string
    includeVideo?: string
    courseOutput: JsonNullValueInput | InputJsonValue
    createdBy: string
    userName?: string | null
    userProfileImage?: string | null
    courseBanner?: string
    publish?: boolean
    assessments?: AssessmentCreateNestedManyWithoutCourseListInput
  }

  export type CourseListUncheckedCreateWithoutChaptersInput = {
    id?: string
    courseId: string
    name: string
    category: string
    level: string
    includeVideo?: string
    courseOutput: JsonNullValueInput | InputJsonValue
    createdBy: string
    userName?: string | null
    userProfileImage?: string | null
    courseBanner?: string
    publish?: boolean
    assessments?: AssessmentUncheckedCreateNestedManyWithoutCourseListInput
  }

  export type CourseListCreateOrConnectWithoutChaptersInput = {
    where: CourseListWhereUniqueInput
    create: XOR<CourseListCreateWithoutChaptersInput, CourseListUncheckedCreateWithoutChaptersInput>
  }

  export type CourseListUpsertWithoutChaptersInput = {
    update: XOR<CourseListUpdateWithoutChaptersInput, CourseListUncheckedUpdateWithoutChaptersInput>
    create: XOR<CourseListCreateWithoutChaptersInput, CourseListUncheckedCreateWithoutChaptersInput>
    where?: CourseListWhereInput
  }

  export type CourseListUpdateToOneWithWhereWithoutChaptersInput = {
    where?: CourseListWhereInput
    data: XOR<CourseListUpdateWithoutChaptersInput, CourseListUncheckedUpdateWithoutChaptersInput>
  }

  export type CourseListUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    includeVideo?: StringFieldUpdateOperationsInput | string
    courseOutput?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    courseBanner?: StringFieldUpdateOperationsInput | string
    publish?: BoolFieldUpdateOperationsInput | boolean
    assessments?: AssessmentUpdateManyWithoutCourseListNestedInput
  }

  export type CourseListUncheckedUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    includeVideo?: StringFieldUpdateOperationsInput | string
    courseOutput?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    courseBanner?: StringFieldUpdateOperationsInput | string
    publish?: BoolFieldUpdateOperationsInput | boolean
    assessments?: AssessmentUncheckedUpdateManyWithoutCourseListNestedInput
  }

  export type AssessmentCreateManyUserInput = {
    id?: string
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseListId?: string | null
  }

  export type AssessmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseList?: CourseListUpdateOneWithoutAssessmentsNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseListId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssessmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseListId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyIndustryInsightsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
  }

  export type UserUpdateWithoutIndustryInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    assessments?: AssessmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIndustryInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    assessments?: AssessmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutIndustryInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
  }

  export type ChaptersCreateManyCourseInput = {
    id?: number
    chapterId: number
    content: JsonNullValueInput | InputJsonValue
    videoId: string
  }

  export type AssessmentCreateManyCourseListInput = {
    id?: string
    userId: string
    quizScore: number
    questions?: AssessmentCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChaptersUpdateWithoutCourseInput = {
    chapterId?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type ChaptersUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    chapterId?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type ChaptersUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    chapterId?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type AssessmentUpdateWithoutCourseListInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssessmentsNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutCourseListInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateManyWithoutCourseListInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}