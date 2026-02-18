
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model CreditCard
 * 
 */
export type CreditCard = $Result.DefaultSelection<Prisma.$CreditCardPayload>
/**
 * Model CardExpense
 * 
 */
export type CardExpense = $Result.DefaultSelection<Prisma.$CardExpensePayload>
/**
 * Model CustomIcon
 * 
 */
export type CustomIcon = $Result.DefaultSelection<Prisma.$CustomIconPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionType: {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]

}

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Transactions
 * const transactions = await prisma.transaction.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Transactions
   * const transactions = await prisma.transaction.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditCard`: Exposes CRUD operations for the **CreditCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditCards
    * const creditCards = await prisma.creditCard.findMany()
    * ```
    */
  get creditCard(): Prisma.CreditCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardExpense`: Exposes CRUD operations for the **CardExpense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardExpenses
    * const cardExpenses = await prisma.cardExpense.findMany()
    * ```
    */
  get cardExpense(): Prisma.CardExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customIcon`: Exposes CRUD operations for the **CustomIcon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomIcons
    * const customIcons = await prisma.customIcon.findMany()
    * ```
    */
  get customIcon(): Prisma.CustomIconDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Transaction: 'Transaction',
    CreditCard: 'CreditCard',
    CardExpense: 'CardExpense',
    CustomIcon: 'CustomIcon'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "transaction" | "creditCard" | "cardExpense" | "customIcon"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      CreditCard: {
        payload: Prisma.$CreditCardPayload<ExtArgs>
        fields: Prisma.CreditCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          findFirst: {
            args: Prisma.CreditCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          findMany: {
            args: Prisma.CreditCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          create: {
            args: Prisma.CreditCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          createMany: {
            args: Prisma.CreditCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          delete: {
            args: Prisma.CreditCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          update: {
            args: Prisma.CreditCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          deleteMany: {
            args: Prisma.CreditCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          upsert: {
            args: Prisma.CreditCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          aggregate: {
            args: Prisma.CreditCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditCard>
          }
          groupBy: {
            args: Prisma.CreditCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditCardCountArgs<ExtArgs>
            result: $Utils.Optional<CreditCardCountAggregateOutputType> | number
          }
        }
      }
      CardExpense: {
        payload: Prisma.$CardExpensePayload<ExtArgs>
        fields: Prisma.CardExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardExpensePayload>
          }
          findFirst: {
            args: Prisma.CardExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardExpensePayload>
          }
          findMany: {
            args: Prisma.CardExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardExpensePayload>[]
          }
          create: {
            args: Prisma.CardExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardExpensePayload>
          }
          createMany: {
            args: Prisma.CardExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardExpensePayload>[]
          }
          delete: {
            args: Prisma.CardExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardExpensePayload>
          }
          update: {
            args: Prisma.CardExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardExpensePayload>
          }
          deleteMany: {
            args: Prisma.CardExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardExpensePayload>[]
          }
          upsert: {
            args: Prisma.CardExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardExpensePayload>
          }
          aggregate: {
            args: Prisma.CardExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardExpense>
          }
          groupBy: {
            args: Prisma.CardExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<CardExpenseCountAggregateOutputType> | number
          }
        }
      }
      CustomIcon: {
        payload: Prisma.$CustomIconPayload<ExtArgs>
        fields: Prisma.CustomIconFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomIconFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIconPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomIconFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIconPayload>
          }
          findFirst: {
            args: Prisma.CustomIconFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIconPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomIconFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIconPayload>
          }
          findMany: {
            args: Prisma.CustomIconFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIconPayload>[]
          }
          create: {
            args: Prisma.CustomIconCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIconPayload>
          }
          createMany: {
            args: Prisma.CustomIconCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomIconCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIconPayload>[]
          }
          delete: {
            args: Prisma.CustomIconDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIconPayload>
          }
          update: {
            args: Prisma.CustomIconUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIconPayload>
          }
          deleteMany: {
            args: Prisma.CustomIconDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomIconUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomIconUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIconPayload>[]
          }
          upsert: {
            args: Prisma.CustomIconUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIconPayload>
          }
          aggregate: {
            args: Prisma.CustomIconAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomIcon>
          }
          groupBy: {
            args: Prisma.CustomIconGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomIconGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomIconCountArgs<ExtArgs>
            result: $Utils.Optional<CustomIconCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    transaction?: TransactionOmit
    creditCard?: CreditCardOmit
    cardExpense?: CardExpenseOmit
    customIcon?: CustomIconOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CreditCardCountOutputType
   */

  export type CreditCardCountOutputType = {
    expenses: number
    payments: number
  }

  export type CreditCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | CreditCardCountOutputTypeCountExpensesArgs
    payments?: boolean | CreditCardCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * CreditCardCountOutputType without action
   */
  export type CreditCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardCountOutputType
     */
    select?: CreditCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreditCardCountOutputType without action
   */
  export type CreditCardCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardExpenseWhereInput
  }

  /**
   * CreditCardCountOutputType without action
   */
  export type CreditCardCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    description: string | null
    amount: Decimal | null
    type: $Enums.TransactionType | null
    category: string | null
    date: Date | null
    isRecurring: boolean | null
    groupId: string | null
    relatedCardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    description: string | null
    amount: Decimal | null
    type: $Enums.TransactionType | null
    category: string | null
    date: Date | null
    isRecurring: boolean | null
    groupId: string | null
    relatedCardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    description: number
    amount: number
    type: number
    category: number
    date: number
    isRecurring: number
    installments: number
    groupId: number
    relatedCardId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    type?: true
    category?: true
    date?: true
    isRecurring?: true
    groupId?: true
    relatedCardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    type?: true
    category?: true
    date?: true
    isRecurring?: true
    groupId?: true
    relatedCardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    type?: true
    category?: true
    date?: true
    isRecurring?: true
    installments?: true
    groupId?: true
    relatedCardId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    description: string
    amount: Decimal
    type: $Enums.TransactionType
    category: string
    date: Date
    isRecurring: boolean
    installments: JsonValue | null
    groupId: string | null
    relatedCardId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    type?: boolean
    category?: boolean
    date?: boolean
    isRecurring?: boolean
    installments?: boolean
    groupId?: boolean
    relatedCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    card?: boolean | Transaction$cardArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    type?: boolean
    category?: boolean
    date?: boolean
    isRecurring?: boolean
    installments?: boolean
    groupId?: boolean
    relatedCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    card?: boolean | Transaction$cardArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    type?: boolean
    category?: boolean
    date?: boolean
    isRecurring?: boolean
    installments?: boolean
    groupId?: boolean
    relatedCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    card?: boolean | Transaction$cardArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    description?: boolean
    amount?: boolean
    type?: boolean
    category?: boolean
    date?: boolean
    isRecurring?: boolean
    installments?: boolean
    groupId?: boolean
    relatedCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "amount" | "type" | "category" | "date" | "isRecurring" | "installments" | "groupId" | "relatedCardId" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | Transaction$cardArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | Transaction$cardArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | Transaction$cardArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      card: Prisma.$CreditCardPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      amount: Prisma.Decimal
      type: $Enums.TransactionType
      category: string
      date: Date
      isRecurring: boolean
      installments: Prisma.JsonValue | null
      groupId: string | null
      relatedCardId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends Transaction$cardArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$cardArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly category: FieldRef<"Transaction", 'String'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly isRecurring: FieldRef<"Transaction", 'Boolean'>
    readonly installments: FieldRef<"Transaction", 'Json'>
    readonly groupId: FieldRef<"Transaction", 'String'>
    readonly relatedCardId: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.card
   */
  export type Transaction$cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    where?: CreditCardWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model CreditCard
   */

  export type AggregateCreditCard = {
    _count: CreditCardCountAggregateOutputType | null
    _avg: CreditCardAvgAggregateOutputType | null
    _sum: CreditCardSumAggregateOutputType | null
    _min: CreditCardMinAggregateOutputType | null
    _max: CreditCardMaxAggregateOutputType | null
  }

  export type CreditCardAvgAggregateOutputType = {
    limit: Decimal | null
    closingDay: number | null
    dueDay: number | null
  }

  export type CreditCardSumAggregateOutputType = {
    limit: Decimal | null
    closingDay: number | null
    dueDay: number | null
  }

  export type CreditCardMinAggregateOutputType = {
    id: string | null
    name: string | null
    limit: Decimal | null
    closingDay: number | null
    dueDay: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditCardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    limit: Decimal | null
    closingDay: number | null
    dueDay: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditCardCountAggregateOutputType = {
    id: number
    name: number
    limit: number
    closingDay: number
    dueDay: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreditCardAvgAggregateInputType = {
    limit?: true
    closingDay?: true
    dueDay?: true
  }

  export type CreditCardSumAggregateInputType = {
    limit?: true
    closingDay?: true
    dueDay?: true
  }

  export type CreditCardMinAggregateInputType = {
    id?: true
    name?: true
    limit?: true
    closingDay?: true
    dueDay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditCardMaxAggregateInputType = {
    id?: true
    name?: true
    limit?: true
    closingDay?: true
    dueDay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditCardCountAggregateInputType = {
    id?: true
    name?: true
    limit?: true
    closingDay?: true
    dueDay?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreditCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditCard to aggregate.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditCards
    **/
    _count?: true | CreditCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditCardMaxAggregateInputType
  }

  export type GetCreditCardAggregateType<T extends CreditCardAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditCard[P]>
      : GetScalarType<T[P], AggregateCreditCard[P]>
  }




  export type CreditCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditCardWhereInput
    orderBy?: CreditCardOrderByWithAggregationInput | CreditCardOrderByWithAggregationInput[]
    by: CreditCardScalarFieldEnum[] | CreditCardScalarFieldEnum
    having?: CreditCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditCardCountAggregateInputType | true
    _avg?: CreditCardAvgAggregateInputType
    _sum?: CreditCardSumAggregateInputType
    _min?: CreditCardMinAggregateInputType
    _max?: CreditCardMaxAggregateInputType
  }

  export type CreditCardGroupByOutputType = {
    id: string
    name: string
    limit: Decimal
    closingDay: number
    dueDay: number
    createdAt: Date
    updatedAt: Date
    _count: CreditCardCountAggregateOutputType | null
    _avg: CreditCardAvgAggregateOutputType | null
    _sum: CreditCardSumAggregateOutputType | null
    _min: CreditCardMinAggregateOutputType | null
    _max: CreditCardMaxAggregateOutputType | null
  }

  type GetCreditCardGroupByPayload<T extends CreditCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditCardGroupByOutputType[P]>
            : GetScalarType<T[P], CreditCardGroupByOutputType[P]>
        }
      >
    >


  export type CreditCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    limit?: boolean
    closingDay?: boolean
    dueDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expenses?: boolean | CreditCard$expensesArgs<ExtArgs>
    payments?: boolean | CreditCard$paymentsArgs<ExtArgs>
    _count?: boolean | CreditCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    limit?: boolean
    closingDay?: boolean
    dueDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    limit?: boolean
    closingDay?: boolean
    dueDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectScalar = {
    id?: boolean
    name?: boolean
    limit?: boolean
    closingDay?: boolean
    dueDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CreditCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "limit" | "closingDay" | "dueDay" | "createdAt" | "updatedAt", ExtArgs["result"]["creditCard"]>
  export type CreditCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | CreditCard$expensesArgs<ExtArgs>
    payments?: boolean | CreditCard$paymentsArgs<ExtArgs>
    _count?: boolean | CreditCardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CreditCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CreditCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CreditCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditCard"
    objects: {
      expenses: Prisma.$CardExpensePayload<ExtArgs>[]
      payments: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      limit: Prisma.Decimal
      closingDay: number
      dueDay: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["creditCard"]>
    composites: {}
  }

  type CreditCardGetPayload<S extends boolean | null | undefined | CreditCardDefaultArgs> = $Result.GetResult<Prisma.$CreditCardPayload, S>

  type CreditCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditCardCountAggregateInputType | true
    }

  export interface CreditCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditCard'], meta: { name: 'CreditCard' } }
    /**
     * Find zero or one CreditCard that matches the filter.
     * @param {CreditCardFindUniqueArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditCardFindUniqueArgs>(args: SelectSubset<T, CreditCardFindUniqueArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditCardFindUniqueOrThrowArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditCardFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindFirstArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditCardFindFirstArgs>(args?: SelectSubset<T, CreditCardFindFirstArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindFirstOrThrowArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditCardFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditCards
     * const creditCards = await prisma.creditCard.findMany()
     * 
     * // Get first 10 CreditCards
     * const creditCards = await prisma.creditCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditCardFindManyArgs>(args?: SelectSubset<T, CreditCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditCard.
     * @param {CreditCardCreateArgs} args - Arguments to create a CreditCard.
     * @example
     * // Create one CreditCard
     * const CreditCard = await prisma.creditCard.create({
     *   data: {
     *     // ... data to create a CreditCard
     *   }
     * })
     * 
     */
    create<T extends CreditCardCreateArgs>(args: SelectSubset<T, CreditCardCreateArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditCards.
     * @param {CreditCardCreateManyArgs} args - Arguments to create many CreditCards.
     * @example
     * // Create many CreditCards
     * const creditCard = await prisma.creditCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditCardCreateManyArgs>(args?: SelectSubset<T, CreditCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditCards and returns the data saved in the database.
     * @param {CreditCardCreateManyAndReturnArgs} args - Arguments to create many CreditCards.
     * @example
     * // Create many CreditCards
     * const creditCard = await prisma.creditCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditCards and only return the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditCardCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditCard.
     * @param {CreditCardDeleteArgs} args - Arguments to delete one CreditCard.
     * @example
     * // Delete one CreditCard
     * const CreditCard = await prisma.creditCard.delete({
     *   where: {
     *     // ... filter to delete one CreditCard
     *   }
     * })
     * 
     */
    delete<T extends CreditCardDeleteArgs>(args: SelectSubset<T, CreditCardDeleteArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditCard.
     * @param {CreditCardUpdateArgs} args - Arguments to update one CreditCard.
     * @example
     * // Update one CreditCard
     * const creditCard = await prisma.creditCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditCardUpdateArgs>(args: SelectSubset<T, CreditCardUpdateArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditCards.
     * @param {CreditCardDeleteManyArgs} args - Arguments to filter CreditCards to delete.
     * @example
     * // Delete a few CreditCards
     * const { count } = await prisma.creditCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditCardDeleteManyArgs>(args?: SelectSubset<T, CreditCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditCards
     * const creditCard = await prisma.creditCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditCardUpdateManyArgs>(args: SelectSubset<T, CreditCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditCards and returns the data updated in the database.
     * @param {CreditCardUpdateManyAndReturnArgs} args - Arguments to update many CreditCards.
     * @example
     * // Update many CreditCards
     * const creditCard = await prisma.creditCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditCards and only return the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.updateManyAndReturn({
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
    updateManyAndReturn<T extends CreditCardUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditCard.
     * @param {CreditCardUpsertArgs} args - Arguments to update or create a CreditCard.
     * @example
     * // Update or create a CreditCard
     * const creditCard = await prisma.creditCard.upsert({
     *   create: {
     *     // ... data to create a CreditCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditCard we want to update
     *   }
     * })
     */
    upsert<T extends CreditCardUpsertArgs>(args: SelectSubset<T, CreditCardUpsertArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardCountArgs} args - Arguments to filter CreditCards to count.
     * @example
     * // Count the number of CreditCards
     * const count = await prisma.creditCard.count({
     *   where: {
     *     // ... the filter for the CreditCards we want to count
     *   }
     * })
    **/
    count<T extends CreditCardCountArgs>(
      args?: Subset<T, CreditCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditCardAggregateArgs>(args: Subset<T, CreditCardAggregateArgs>): Prisma.PrismaPromise<GetCreditCardAggregateType<T>>

    /**
     * Group by CreditCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardGroupByArgs} args - Group by arguments.
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
      T extends CreditCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditCardGroupByArgs['orderBy'] }
        : { orderBy?: CreditCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditCard model
   */
  readonly fields: CreditCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenses<T extends CreditCard$expensesArgs<ExtArgs> = {}>(args?: Subset<T, CreditCard$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends CreditCard$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, CreditCard$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CreditCard model
   */
  interface CreditCardFieldRefs {
    readonly id: FieldRef<"CreditCard", 'String'>
    readonly name: FieldRef<"CreditCard", 'String'>
    readonly limit: FieldRef<"CreditCard", 'Decimal'>
    readonly closingDay: FieldRef<"CreditCard", 'Int'>
    readonly dueDay: FieldRef<"CreditCard", 'Int'>
    readonly createdAt: FieldRef<"CreditCard", 'DateTime'>
    readonly updatedAt: FieldRef<"CreditCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditCard findUnique
   */
  export type CreditCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard findUniqueOrThrow
   */
  export type CreditCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard findFirst
   */
  export type CreditCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditCards.
     */
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard findFirstOrThrow
   */
  export type CreditCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditCards.
     */
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard findMany
   */
  export type CreditCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCards to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard create
   */
  export type CreditCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditCard.
     */
    data: XOR<CreditCardCreateInput, CreditCardUncheckedCreateInput>
  }

  /**
   * CreditCard createMany
   */
  export type CreditCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditCards.
     */
    data: CreditCardCreateManyInput | CreditCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditCard createManyAndReturn
   */
  export type CreditCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * The data used to create many CreditCards.
     */
    data: CreditCardCreateManyInput | CreditCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditCard update
   */
  export type CreditCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditCard.
     */
    data: XOR<CreditCardUpdateInput, CreditCardUncheckedUpdateInput>
    /**
     * Choose, which CreditCard to update.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard updateMany
   */
  export type CreditCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditCards.
     */
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyInput>
    /**
     * Filter which CreditCards to update
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to update.
     */
    limit?: number
  }

  /**
   * CreditCard updateManyAndReturn
   */
  export type CreditCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * The data used to update CreditCards.
     */
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyInput>
    /**
     * Filter which CreditCards to update
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to update.
     */
    limit?: number
  }

  /**
   * CreditCard upsert
   */
  export type CreditCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditCard to update in case it exists.
     */
    where: CreditCardWhereUniqueInput
    /**
     * In case the CreditCard found by the `where` argument doesn't exist, create a new CreditCard with this data.
     */
    create: XOR<CreditCardCreateInput, CreditCardUncheckedCreateInput>
    /**
     * In case the CreditCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditCardUpdateInput, CreditCardUncheckedUpdateInput>
  }

  /**
   * CreditCard delete
   */
  export type CreditCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter which CreditCard to delete.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard deleteMany
   */
  export type CreditCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditCards to delete
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to delete.
     */
    limit?: number
  }

  /**
   * CreditCard.expenses
   */
  export type CreditCard$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardExpense
     */
    select?: CardExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardExpense
     */
    omit?: CardExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardExpenseInclude<ExtArgs> | null
    where?: CardExpenseWhereInput
    orderBy?: CardExpenseOrderByWithRelationInput | CardExpenseOrderByWithRelationInput[]
    cursor?: CardExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardExpenseScalarFieldEnum | CardExpenseScalarFieldEnum[]
  }

  /**
   * CreditCard.payments
   */
  export type CreditCard$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * CreditCard without action
   */
  export type CreditCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
  }


  /**
   * Model CardExpense
   */

  export type AggregateCardExpense = {
    _count: CardExpenseCountAggregateOutputType | null
    _avg: CardExpenseAvgAggregateOutputType | null
    _sum: CardExpenseSumAggregateOutputType | null
    _min: CardExpenseMinAggregateOutputType | null
    _max: CardExpenseMaxAggregateOutputType | null
  }

  export type CardExpenseAvgAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type CardExpenseSumAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type CardExpenseMinAggregateOutputType = {
    id: string | null
    description: string | null
    totalAmount: Decimal | null
    purchaseDate: Date | null
    isRecurring: boolean | null
    category: string | null
    cardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardExpenseMaxAggregateOutputType = {
    id: string | null
    description: string | null
    totalAmount: Decimal | null
    purchaseDate: Date | null
    isRecurring: boolean | null
    category: string | null
    cardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardExpenseCountAggregateOutputType = {
    id: number
    description: number
    totalAmount: number
    purchaseDate: number
    installments: number
    isRecurring: number
    category: number
    cardId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CardExpenseAvgAggregateInputType = {
    totalAmount?: true
  }

  export type CardExpenseSumAggregateInputType = {
    totalAmount?: true
  }

  export type CardExpenseMinAggregateInputType = {
    id?: true
    description?: true
    totalAmount?: true
    purchaseDate?: true
    isRecurring?: true
    category?: true
    cardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardExpenseMaxAggregateInputType = {
    id?: true
    description?: true
    totalAmount?: true
    purchaseDate?: true
    isRecurring?: true
    category?: true
    cardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardExpenseCountAggregateInputType = {
    id?: true
    description?: true
    totalAmount?: true
    purchaseDate?: true
    installments?: true
    isRecurring?: true
    category?: true
    cardId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CardExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardExpense to aggregate.
     */
    where?: CardExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardExpenses to fetch.
     */
    orderBy?: CardExpenseOrderByWithRelationInput | CardExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardExpenses
    **/
    _count?: true | CardExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardExpenseMaxAggregateInputType
  }

  export type GetCardExpenseAggregateType<T extends CardExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateCardExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardExpense[P]>
      : GetScalarType<T[P], AggregateCardExpense[P]>
  }




  export type CardExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardExpenseWhereInput
    orderBy?: CardExpenseOrderByWithAggregationInput | CardExpenseOrderByWithAggregationInput[]
    by: CardExpenseScalarFieldEnum[] | CardExpenseScalarFieldEnum
    having?: CardExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardExpenseCountAggregateInputType | true
    _avg?: CardExpenseAvgAggregateInputType
    _sum?: CardExpenseSumAggregateInputType
    _min?: CardExpenseMinAggregateInputType
    _max?: CardExpenseMaxAggregateInputType
  }

  export type CardExpenseGroupByOutputType = {
    id: string
    description: string
    totalAmount: Decimal
    purchaseDate: Date
    installments: JsonValue | null
    isRecurring: boolean
    category: string
    cardId: string
    createdAt: Date
    updatedAt: Date
    _count: CardExpenseCountAggregateOutputType | null
    _avg: CardExpenseAvgAggregateOutputType | null
    _sum: CardExpenseSumAggregateOutputType | null
    _min: CardExpenseMinAggregateOutputType | null
    _max: CardExpenseMaxAggregateOutputType | null
  }

  type GetCardExpenseGroupByPayload<T extends CardExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], CardExpenseGroupByOutputType[P]>
        }
      >
    >


  export type CardExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    totalAmount?: boolean
    purchaseDate?: boolean
    installments?: boolean
    isRecurring?: boolean
    category?: boolean
    cardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    card?: boolean | CreditCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardExpense"]>

  export type CardExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    totalAmount?: boolean
    purchaseDate?: boolean
    installments?: boolean
    isRecurring?: boolean
    category?: boolean
    cardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    card?: boolean | CreditCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardExpense"]>

  export type CardExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    totalAmount?: boolean
    purchaseDate?: boolean
    installments?: boolean
    isRecurring?: boolean
    category?: boolean
    cardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    card?: boolean | CreditCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardExpense"]>

  export type CardExpenseSelectScalar = {
    id?: boolean
    description?: boolean
    totalAmount?: boolean
    purchaseDate?: boolean
    installments?: boolean
    isRecurring?: boolean
    category?: boolean
    cardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CardExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "totalAmount" | "purchaseDate" | "installments" | "isRecurring" | "category" | "cardId" | "createdAt" | "updatedAt", ExtArgs["result"]["cardExpense"]>
  export type CardExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CreditCardDefaultArgs<ExtArgs>
  }
  export type CardExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CreditCardDefaultArgs<ExtArgs>
  }
  export type CardExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CreditCardDefaultArgs<ExtArgs>
  }

  export type $CardExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardExpense"
    objects: {
      card: Prisma.$CreditCardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      totalAmount: Prisma.Decimal
      purchaseDate: Date
      installments: Prisma.JsonValue | null
      isRecurring: boolean
      category: string
      cardId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cardExpense"]>
    composites: {}
  }

  type CardExpenseGetPayload<S extends boolean | null | undefined | CardExpenseDefaultArgs> = $Result.GetResult<Prisma.$CardExpensePayload, S>

  type CardExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardExpenseCountAggregateInputType | true
    }

  export interface CardExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardExpense'], meta: { name: 'CardExpense' } }
    /**
     * Find zero or one CardExpense that matches the filter.
     * @param {CardExpenseFindUniqueArgs} args - Arguments to find a CardExpense
     * @example
     * // Get one CardExpense
     * const cardExpense = await prisma.cardExpense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardExpenseFindUniqueArgs>(args: SelectSubset<T, CardExpenseFindUniqueArgs<ExtArgs>>): Prisma__CardExpenseClient<$Result.GetResult<Prisma.$CardExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardExpense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardExpenseFindUniqueOrThrowArgs} args - Arguments to find a CardExpense
     * @example
     * // Get one CardExpense
     * const cardExpense = await prisma.cardExpense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, CardExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardExpenseClient<$Result.GetResult<Prisma.$CardExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardExpense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardExpenseFindFirstArgs} args - Arguments to find a CardExpense
     * @example
     * // Get one CardExpense
     * const cardExpense = await prisma.cardExpense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardExpenseFindFirstArgs>(args?: SelectSubset<T, CardExpenseFindFirstArgs<ExtArgs>>): Prisma__CardExpenseClient<$Result.GetResult<Prisma.$CardExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardExpense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardExpenseFindFirstOrThrowArgs} args - Arguments to find a CardExpense
     * @example
     * // Get one CardExpense
     * const cardExpense = await prisma.cardExpense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, CardExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardExpenseClient<$Result.GetResult<Prisma.$CardExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardExpenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardExpenses
     * const cardExpenses = await prisma.cardExpense.findMany()
     * 
     * // Get first 10 CardExpenses
     * const cardExpenses = await prisma.cardExpense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardExpenseWithIdOnly = await prisma.cardExpense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardExpenseFindManyArgs>(args?: SelectSubset<T, CardExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardExpense.
     * @param {CardExpenseCreateArgs} args - Arguments to create a CardExpense.
     * @example
     * // Create one CardExpense
     * const CardExpense = await prisma.cardExpense.create({
     *   data: {
     *     // ... data to create a CardExpense
     *   }
     * })
     * 
     */
    create<T extends CardExpenseCreateArgs>(args: SelectSubset<T, CardExpenseCreateArgs<ExtArgs>>): Prisma__CardExpenseClient<$Result.GetResult<Prisma.$CardExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardExpenses.
     * @param {CardExpenseCreateManyArgs} args - Arguments to create many CardExpenses.
     * @example
     * // Create many CardExpenses
     * const cardExpense = await prisma.cardExpense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardExpenseCreateManyArgs>(args?: SelectSubset<T, CardExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardExpenses and returns the data saved in the database.
     * @param {CardExpenseCreateManyAndReturnArgs} args - Arguments to create many CardExpenses.
     * @example
     * // Create many CardExpenses
     * const cardExpense = await prisma.cardExpense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardExpenses and only return the `id`
     * const cardExpenseWithIdOnly = await prisma.cardExpense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, CardExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardExpense.
     * @param {CardExpenseDeleteArgs} args - Arguments to delete one CardExpense.
     * @example
     * // Delete one CardExpense
     * const CardExpense = await prisma.cardExpense.delete({
     *   where: {
     *     // ... filter to delete one CardExpense
     *   }
     * })
     * 
     */
    delete<T extends CardExpenseDeleteArgs>(args: SelectSubset<T, CardExpenseDeleteArgs<ExtArgs>>): Prisma__CardExpenseClient<$Result.GetResult<Prisma.$CardExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardExpense.
     * @param {CardExpenseUpdateArgs} args - Arguments to update one CardExpense.
     * @example
     * // Update one CardExpense
     * const cardExpense = await prisma.cardExpense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardExpenseUpdateArgs>(args: SelectSubset<T, CardExpenseUpdateArgs<ExtArgs>>): Prisma__CardExpenseClient<$Result.GetResult<Prisma.$CardExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardExpenses.
     * @param {CardExpenseDeleteManyArgs} args - Arguments to filter CardExpenses to delete.
     * @example
     * // Delete a few CardExpenses
     * const { count } = await prisma.cardExpense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardExpenseDeleteManyArgs>(args?: SelectSubset<T, CardExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardExpenses
     * const cardExpense = await prisma.cardExpense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardExpenseUpdateManyArgs>(args: SelectSubset<T, CardExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardExpenses and returns the data updated in the database.
     * @param {CardExpenseUpdateManyAndReturnArgs} args - Arguments to update many CardExpenses.
     * @example
     * // Update many CardExpenses
     * const cardExpense = await prisma.cardExpense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardExpenses and only return the `id`
     * const cardExpenseWithIdOnly = await prisma.cardExpense.updateManyAndReturn({
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
    updateManyAndReturn<T extends CardExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, CardExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardExpense.
     * @param {CardExpenseUpsertArgs} args - Arguments to update or create a CardExpense.
     * @example
     * // Update or create a CardExpense
     * const cardExpense = await prisma.cardExpense.upsert({
     *   create: {
     *     // ... data to create a CardExpense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardExpense we want to update
     *   }
     * })
     */
    upsert<T extends CardExpenseUpsertArgs>(args: SelectSubset<T, CardExpenseUpsertArgs<ExtArgs>>): Prisma__CardExpenseClient<$Result.GetResult<Prisma.$CardExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardExpenseCountArgs} args - Arguments to filter CardExpenses to count.
     * @example
     * // Count the number of CardExpenses
     * const count = await prisma.cardExpense.count({
     *   where: {
     *     // ... the filter for the CardExpenses we want to count
     *   }
     * })
    **/
    count<T extends CardExpenseCountArgs>(
      args?: Subset<T, CardExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardExpenseAggregateArgs>(args: Subset<T, CardExpenseAggregateArgs>): Prisma.PrismaPromise<GetCardExpenseAggregateType<T>>

    /**
     * Group by CardExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardExpenseGroupByArgs} args - Group by arguments.
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
      T extends CardExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardExpenseGroupByArgs['orderBy'] }
        : { orderBy?: CardExpenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardExpense model
   */
  readonly fields: CardExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardExpense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CreditCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditCardDefaultArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CardExpense model
   */
  interface CardExpenseFieldRefs {
    readonly id: FieldRef<"CardExpense", 'String'>
    readonly description: FieldRef<"CardExpense", 'String'>
    readonly totalAmount: FieldRef<"CardExpense", 'Decimal'>
    readonly purchaseDate: FieldRef<"CardExpense", 'DateTime'>
    readonly installments: FieldRef<"CardExpense", 'Json'>
    readonly isRecurring: FieldRef<"CardExpense", 'Boolean'>
    readonly category: FieldRef<"CardExpense", 'String'>
    readonly cardId: FieldRef<"CardExpense", 'String'>
    readonly createdAt: FieldRef<"CardExpense", 'DateTime'>
    readonly updatedAt: FieldRef<"CardExpense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CardExpense findUnique
   */
  export type CardExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardExpense
     */
    select?: CardExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardExpense
     */
    omit?: CardExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardExpenseInclude<ExtArgs> | null
    /**
     * Filter, which CardExpense to fetch.
     */
    where: CardExpenseWhereUniqueInput
  }

  /**
   * CardExpense findUniqueOrThrow
   */
  export type CardExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardExpense
     */
    select?: CardExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardExpense
     */
    omit?: CardExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardExpenseInclude<ExtArgs> | null
    /**
     * Filter, which CardExpense to fetch.
     */
    where: CardExpenseWhereUniqueInput
  }

  /**
   * CardExpense findFirst
   */
  export type CardExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardExpense
     */
    select?: CardExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardExpense
     */
    omit?: CardExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardExpenseInclude<ExtArgs> | null
    /**
     * Filter, which CardExpense to fetch.
     */
    where?: CardExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardExpenses to fetch.
     */
    orderBy?: CardExpenseOrderByWithRelationInput | CardExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardExpenses.
     */
    cursor?: CardExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardExpenses.
     */
    distinct?: CardExpenseScalarFieldEnum | CardExpenseScalarFieldEnum[]
  }

  /**
   * CardExpense findFirstOrThrow
   */
  export type CardExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardExpense
     */
    select?: CardExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardExpense
     */
    omit?: CardExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardExpenseInclude<ExtArgs> | null
    /**
     * Filter, which CardExpense to fetch.
     */
    where?: CardExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardExpenses to fetch.
     */
    orderBy?: CardExpenseOrderByWithRelationInput | CardExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardExpenses.
     */
    cursor?: CardExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardExpenses.
     */
    distinct?: CardExpenseScalarFieldEnum | CardExpenseScalarFieldEnum[]
  }

  /**
   * CardExpense findMany
   */
  export type CardExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardExpense
     */
    select?: CardExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardExpense
     */
    omit?: CardExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardExpenseInclude<ExtArgs> | null
    /**
     * Filter, which CardExpenses to fetch.
     */
    where?: CardExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardExpenses to fetch.
     */
    orderBy?: CardExpenseOrderByWithRelationInput | CardExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardExpenses.
     */
    cursor?: CardExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardExpenses.
     */
    skip?: number
    distinct?: CardExpenseScalarFieldEnum | CardExpenseScalarFieldEnum[]
  }

  /**
   * CardExpense create
   */
  export type CardExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardExpense
     */
    select?: CardExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardExpense
     */
    omit?: CardExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a CardExpense.
     */
    data: XOR<CardExpenseCreateInput, CardExpenseUncheckedCreateInput>
  }

  /**
   * CardExpense createMany
   */
  export type CardExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardExpenses.
     */
    data: CardExpenseCreateManyInput | CardExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardExpense createManyAndReturn
   */
  export type CardExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardExpense
     */
    select?: CardExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardExpense
     */
    omit?: CardExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many CardExpenses.
     */
    data: CardExpenseCreateManyInput | CardExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardExpense update
   */
  export type CardExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardExpense
     */
    select?: CardExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardExpense
     */
    omit?: CardExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a CardExpense.
     */
    data: XOR<CardExpenseUpdateInput, CardExpenseUncheckedUpdateInput>
    /**
     * Choose, which CardExpense to update.
     */
    where: CardExpenseWhereUniqueInput
  }

  /**
   * CardExpense updateMany
   */
  export type CardExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardExpenses.
     */
    data: XOR<CardExpenseUpdateManyMutationInput, CardExpenseUncheckedUpdateManyInput>
    /**
     * Filter which CardExpenses to update
     */
    where?: CardExpenseWhereInput
    /**
     * Limit how many CardExpenses to update.
     */
    limit?: number
  }

  /**
   * CardExpense updateManyAndReturn
   */
  export type CardExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardExpense
     */
    select?: CardExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardExpense
     */
    omit?: CardExpenseOmit<ExtArgs> | null
    /**
     * The data used to update CardExpenses.
     */
    data: XOR<CardExpenseUpdateManyMutationInput, CardExpenseUncheckedUpdateManyInput>
    /**
     * Filter which CardExpenses to update
     */
    where?: CardExpenseWhereInput
    /**
     * Limit how many CardExpenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardExpense upsert
   */
  export type CardExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardExpense
     */
    select?: CardExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardExpense
     */
    omit?: CardExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the CardExpense to update in case it exists.
     */
    where: CardExpenseWhereUniqueInput
    /**
     * In case the CardExpense found by the `where` argument doesn't exist, create a new CardExpense with this data.
     */
    create: XOR<CardExpenseCreateInput, CardExpenseUncheckedCreateInput>
    /**
     * In case the CardExpense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardExpenseUpdateInput, CardExpenseUncheckedUpdateInput>
  }

  /**
   * CardExpense delete
   */
  export type CardExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardExpense
     */
    select?: CardExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardExpense
     */
    omit?: CardExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardExpenseInclude<ExtArgs> | null
    /**
     * Filter which CardExpense to delete.
     */
    where: CardExpenseWhereUniqueInput
  }

  /**
   * CardExpense deleteMany
   */
  export type CardExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardExpenses to delete
     */
    where?: CardExpenseWhereInput
    /**
     * Limit how many CardExpenses to delete.
     */
    limit?: number
  }

  /**
   * CardExpense without action
   */
  export type CardExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardExpense
     */
    select?: CardExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardExpense
     */
    omit?: CardExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardExpenseInclude<ExtArgs> | null
  }


  /**
   * Model CustomIcon
   */

  export type AggregateCustomIcon = {
    _count: CustomIconCountAggregateOutputType | null
    _min: CustomIconMinAggregateOutputType | null
    _max: CustomIconMaxAggregateOutputType | null
  }

  export type CustomIconMinAggregateOutputType = {
    id: string | null
    keyword: string | null
    brandTerm: string | null
    customImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomIconMaxAggregateOutputType = {
    id: string | null
    keyword: string | null
    brandTerm: string | null
    customImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomIconCountAggregateOutputType = {
    id: number
    keyword: number
    brandTerm: number
    customImageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomIconMinAggregateInputType = {
    id?: true
    keyword?: true
    brandTerm?: true
    customImageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomIconMaxAggregateInputType = {
    id?: true
    keyword?: true
    brandTerm?: true
    customImageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomIconCountAggregateInputType = {
    id?: true
    keyword?: true
    brandTerm?: true
    customImageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomIconAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomIcon to aggregate.
     */
    where?: CustomIconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomIcons to fetch.
     */
    orderBy?: CustomIconOrderByWithRelationInput | CustomIconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomIconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomIcons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomIcons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomIcons
    **/
    _count?: true | CustomIconCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomIconMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomIconMaxAggregateInputType
  }

  export type GetCustomIconAggregateType<T extends CustomIconAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomIcon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomIcon[P]>
      : GetScalarType<T[P], AggregateCustomIcon[P]>
  }




  export type CustomIconGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomIconWhereInput
    orderBy?: CustomIconOrderByWithAggregationInput | CustomIconOrderByWithAggregationInput[]
    by: CustomIconScalarFieldEnum[] | CustomIconScalarFieldEnum
    having?: CustomIconScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomIconCountAggregateInputType | true
    _min?: CustomIconMinAggregateInputType
    _max?: CustomIconMaxAggregateInputType
  }

  export type CustomIconGroupByOutputType = {
    id: string
    keyword: string
    brandTerm: string | null
    customImageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomIconCountAggregateOutputType | null
    _min: CustomIconMinAggregateOutputType | null
    _max: CustomIconMaxAggregateOutputType | null
  }

  type GetCustomIconGroupByPayload<T extends CustomIconGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomIconGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomIconGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomIconGroupByOutputType[P]>
            : GetScalarType<T[P], CustomIconGroupByOutputType[P]>
        }
      >
    >


  export type CustomIconSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    brandTerm?: boolean
    customImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customIcon"]>

  export type CustomIconSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    brandTerm?: boolean
    customImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customIcon"]>

  export type CustomIconSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    brandTerm?: boolean
    customImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customIcon"]>

  export type CustomIconSelectScalar = {
    id?: boolean
    keyword?: boolean
    brandTerm?: boolean
    customImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomIconOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyword" | "brandTerm" | "customImageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["customIcon"]>

  export type $CustomIconPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomIcon"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      keyword: string
      brandTerm: string | null
      customImageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customIcon"]>
    composites: {}
  }

  type CustomIconGetPayload<S extends boolean | null | undefined | CustomIconDefaultArgs> = $Result.GetResult<Prisma.$CustomIconPayload, S>

  type CustomIconCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomIconFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomIconCountAggregateInputType | true
    }

  export interface CustomIconDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomIcon'], meta: { name: 'CustomIcon' } }
    /**
     * Find zero or one CustomIcon that matches the filter.
     * @param {CustomIconFindUniqueArgs} args - Arguments to find a CustomIcon
     * @example
     * // Get one CustomIcon
     * const customIcon = await prisma.customIcon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomIconFindUniqueArgs>(args: SelectSubset<T, CustomIconFindUniqueArgs<ExtArgs>>): Prisma__CustomIconClient<$Result.GetResult<Prisma.$CustomIconPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomIcon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomIconFindUniqueOrThrowArgs} args - Arguments to find a CustomIcon
     * @example
     * // Get one CustomIcon
     * const customIcon = await prisma.customIcon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomIconFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomIconFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomIconClient<$Result.GetResult<Prisma.$CustomIconPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomIcon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomIconFindFirstArgs} args - Arguments to find a CustomIcon
     * @example
     * // Get one CustomIcon
     * const customIcon = await prisma.customIcon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomIconFindFirstArgs>(args?: SelectSubset<T, CustomIconFindFirstArgs<ExtArgs>>): Prisma__CustomIconClient<$Result.GetResult<Prisma.$CustomIconPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomIcon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomIconFindFirstOrThrowArgs} args - Arguments to find a CustomIcon
     * @example
     * // Get one CustomIcon
     * const customIcon = await prisma.customIcon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomIconFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomIconFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomIconClient<$Result.GetResult<Prisma.$CustomIconPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomIcons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomIconFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomIcons
     * const customIcons = await prisma.customIcon.findMany()
     * 
     * // Get first 10 CustomIcons
     * const customIcons = await prisma.customIcon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customIconWithIdOnly = await prisma.customIcon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomIconFindManyArgs>(args?: SelectSubset<T, CustomIconFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomIconPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomIcon.
     * @param {CustomIconCreateArgs} args - Arguments to create a CustomIcon.
     * @example
     * // Create one CustomIcon
     * const CustomIcon = await prisma.customIcon.create({
     *   data: {
     *     // ... data to create a CustomIcon
     *   }
     * })
     * 
     */
    create<T extends CustomIconCreateArgs>(args: SelectSubset<T, CustomIconCreateArgs<ExtArgs>>): Prisma__CustomIconClient<$Result.GetResult<Prisma.$CustomIconPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomIcons.
     * @param {CustomIconCreateManyArgs} args - Arguments to create many CustomIcons.
     * @example
     * // Create many CustomIcons
     * const customIcon = await prisma.customIcon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomIconCreateManyArgs>(args?: SelectSubset<T, CustomIconCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomIcons and returns the data saved in the database.
     * @param {CustomIconCreateManyAndReturnArgs} args - Arguments to create many CustomIcons.
     * @example
     * // Create many CustomIcons
     * const customIcon = await prisma.customIcon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomIcons and only return the `id`
     * const customIconWithIdOnly = await prisma.customIcon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomIconCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomIconCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomIconPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomIcon.
     * @param {CustomIconDeleteArgs} args - Arguments to delete one CustomIcon.
     * @example
     * // Delete one CustomIcon
     * const CustomIcon = await prisma.customIcon.delete({
     *   where: {
     *     // ... filter to delete one CustomIcon
     *   }
     * })
     * 
     */
    delete<T extends CustomIconDeleteArgs>(args: SelectSubset<T, CustomIconDeleteArgs<ExtArgs>>): Prisma__CustomIconClient<$Result.GetResult<Prisma.$CustomIconPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomIcon.
     * @param {CustomIconUpdateArgs} args - Arguments to update one CustomIcon.
     * @example
     * // Update one CustomIcon
     * const customIcon = await prisma.customIcon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomIconUpdateArgs>(args: SelectSubset<T, CustomIconUpdateArgs<ExtArgs>>): Prisma__CustomIconClient<$Result.GetResult<Prisma.$CustomIconPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomIcons.
     * @param {CustomIconDeleteManyArgs} args - Arguments to filter CustomIcons to delete.
     * @example
     * // Delete a few CustomIcons
     * const { count } = await prisma.customIcon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomIconDeleteManyArgs>(args?: SelectSubset<T, CustomIconDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomIcons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomIconUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomIcons
     * const customIcon = await prisma.customIcon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomIconUpdateManyArgs>(args: SelectSubset<T, CustomIconUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomIcons and returns the data updated in the database.
     * @param {CustomIconUpdateManyAndReturnArgs} args - Arguments to update many CustomIcons.
     * @example
     * // Update many CustomIcons
     * const customIcon = await prisma.customIcon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomIcons and only return the `id`
     * const customIconWithIdOnly = await prisma.customIcon.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomIconUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomIconUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomIconPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomIcon.
     * @param {CustomIconUpsertArgs} args - Arguments to update or create a CustomIcon.
     * @example
     * // Update or create a CustomIcon
     * const customIcon = await prisma.customIcon.upsert({
     *   create: {
     *     // ... data to create a CustomIcon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomIcon we want to update
     *   }
     * })
     */
    upsert<T extends CustomIconUpsertArgs>(args: SelectSubset<T, CustomIconUpsertArgs<ExtArgs>>): Prisma__CustomIconClient<$Result.GetResult<Prisma.$CustomIconPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomIcons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomIconCountArgs} args - Arguments to filter CustomIcons to count.
     * @example
     * // Count the number of CustomIcons
     * const count = await prisma.customIcon.count({
     *   where: {
     *     // ... the filter for the CustomIcons we want to count
     *   }
     * })
    **/
    count<T extends CustomIconCountArgs>(
      args?: Subset<T, CustomIconCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomIconCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomIcon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomIconAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomIconAggregateArgs>(args: Subset<T, CustomIconAggregateArgs>): Prisma.PrismaPromise<GetCustomIconAggregateType<T>>

    /**
     * Group by CustomIcon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomIconGroupByArgs} args - Group by arguments.
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
      T extends CustomIconGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomIconGroupByArgs['orderBy'] }
        : { orderBy?: CustomIconGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomIconGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomIconGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomIcon model
   */
  readonly fields: CustomIconFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomIcon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomIconClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CustomIcon model
   */
  interface CustomIconFieldRefs {
    readonly id: FieldRef<"CustomIcon", 'String'>
    readonly keyword: FieldRef<"CustomIcon", 'String'>
    readonly brandTerm: FieldRef<"CustomIcon", 'String'>
    readonly customImageUrl: FieldRef<"CustomIcon", 'String'>
    readonly createdAt: FieldRef<"CustomIcon", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomIcon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomIcon findUnique
   */
  export type CustomIconFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIcon
     */
    select?: CustomIconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIcon
     */
    omit?: CustomIconOmit<ExtArgs> | null
    /**
     * Filter, which CustomIcon to fetch.
     */
    where: CustomIconWhereUniqueInput
  }

  /**
   * CustomIcon findUniqueOrThrow
   */
  export type CustomIconFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIcon
     */
    select?: CustomIconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIcon
     */
    omit?: CustomIconOmit<ExtArgs> | null
    /**
     * Filter, which CustomIcon to fetch.
     */
    where: CustomIconWhereUniqueInput
  }

  /**
   * CustomIcon findFirst
   */
  export type CustomIconFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIcon
     */
    select?: CustomIconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIcon
     */
    omit?: CustomIconOmit<ExtArgs> | null
    /**
     * Filter, which CustomIcon to fetch.
     */
    where?: CustomIconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomIcons to fetch.
     */
    orderBy?: CustomIconOrderByWithRelationInput | CustomIconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomIcons.
     */
    cursor?: CustomIconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomIcons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomIcons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomIcons.
     */
    distinct?: CustomIconScalarFieldEnum | CustomIconScalarFieldEnum[]
  }

  /**
   * CustomIcon findFirstOrThrow
   */
  export type CustomIconFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIcon
     */
    select?: CustomIconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIcon
     */
    omit?: CustomIconOmit<ExtArgs> | null
    /**
     * Filter, which CustomIcon to fetch.
     */
    where?: CustomIconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomIcons to fetch.
     */
    orderBy?: CustomIconOrderByWithRelationInput | CustomIconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomIcons.
     */
    cursor?: CustomIconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomIcons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomIcons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomIcons.
     */
    distinct?: CustomIconScalarFieldEnum | CustomIconScalarFieldEnum[]
  }

  /**
   * CustomIcon findMany
   */
  export type CustomIconFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIcon
     */
    select?: CustomIconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIcon
     */
    omit?: CustomIconOmit<ExtArgs> | null
    /**
     * Filter, which CustomIcons to fetch.
     */
    where?: CustomIconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomIcons to fetch.
     */
    orderBy?: CustomIconOrderByWithRelationInput | CustomIconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomIcons.
     */
    cursor?: CustomIconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomIcons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomIcons.
     */
    skip?: number
    distinct?: CustomIconScalarFieldEnum | CustomIconScalarFieldEnum[]
  }

  /**
   * CustomIcon create
   */
  export type CustomIconCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIcon
     */
    select?: CustomIconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIcon
     */
    omit?: CustomIconOmit<ExtArgs> | null
    /**
     * The data needed to create a CustomIcon.
     */
    data: XOR<CustomIconCreateInput, CustomIconUncheckedCreateInput>
  }

  /**
   * CustomIcon createMany
   */
  export type CustomIconCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomIcons.
     */
    data: CustomIconCreateManyInput | CustomIconCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomIcon createManyAndReturn
   */
  export type CustomIconCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIcon
     */
    select?: CustomIconSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIcon
     */
    omit?: CustomIconOmit<ExtArgs> | null
    /**
     * The data used to create many CustomIcons.
     */
    data: CustomIconCreateManyInput | CustomIconCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomIcon update
   */
  export type CustomIconUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIcon
     */
    select?: CustomIconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIcon
     */
    omit?: CustomIconOmit<ExtArgs> | null
    /**
     * The data needed to update a CustomIcon.
     */
    data: XOR<CustomIconUpdateInput, CustomIconUncheckedUpdateInput>
    /**
     * Choose, which CustomIcon to update.
     */
    where: CustomIconWhereUniqueInput
  }

  /**
   * CustomIcon updateMany
   */
  export type CustomIconUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomIcons.
     */
    data: XOR<CustomIconUpdateManyMutationInput, CustomIconUncheckedUpdateManyInput>
    /**
     * Filter which CustomIcons to update
     */
    where?: CustomIconWhereInput
    /**
     * Limit how many CustomIcons to update.
     */
    limit?: number
  }

  /**
   * CustomIcon updateManyAndReturn
   */
  export type CustomIconUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIcon
     */
    select?: CustomIconSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIcon
     */
    omit?: CustomIconOmit<ExtArgs> | null
    /**
     * The data used to update CustomIcons.
     */
    data: XOR<CustomIconUpdateManyMutationInput, CustomIconUncheckedUpdateManyInput>
    /**
     * Filter which CustomIcons to update
     */
    where?: CustomIconWhereInput
    /**
     * Limit how many CustomIcons to update.
     */
    limit?: number
  }

  /**
   * CustomIcon upsert
   */
  export type CustomIconUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIcon
     */
    select?: CustomIconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIcon
     */
    omit?: CustomIconOmit<ExtArgs> | null
    /**
     * The filter to search for the CustomIcon to update in case it exists.
     */
    where: CustomIconWhereUniqueInput
    /**
     * In case the CustomIcon found by the `where` argument doesn't exist, create a new CustomIcon with this data.
     */
    create: XOR<CustomIconCreateInput, CustomIconUncheckedCreateInput>
    /**
     * In case the CustomIcon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomIconUpdateInput, CustomIconUncheckedUpdateInput>
  }

  /**
   * CustomIcon delete
   */
  export type CustomIconDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIcon
     */
    select?: CustomIconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIcon
     */
    omit?: CustomIconOmit<ExtArgs> | null
    /**
     * Filter which CustomIcon to delete.
     */
    where: CustomIconWhereUniqueInput
  }

  /**
   * CustomIcon deleteMany
   */
  export type CustomIconDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomIcons to delete
     */
    where?: CustomIconWhereInput
    /**
     * Limit how many CustomIcons to delete.
     */
    limit?: number
  }

  /**
   * CustomIcon without action
   */
  export type CustomIconDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIcon
     */
    select?: CustomIconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIcon
     */
    omit?: CustomIconOmit<ExtArgs> | null
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


  export const TransactionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    amount: 'amount',
    type: 'type',
    category: 'category',
    date: 'date',
    isRecurring: 'isRecurring',
    installments: 'installments',
    groupId: 'groupId',
    relatedCardId: 'relatedCardId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const CreditCardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    limit: 'limit',
    closingDay: 'closingDay',
    dueDay: 'dueDay',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreditCardScalarFieldEnum = (typeof CreditCardScalarFieldEnum)[keyof typeof CreditCardScalarFieldEnum]


  export const CardExpenseScalarFieldEnum: {
    id: 'id',
    description: 'description',
    totalAmount: 'totalAmount',
    purchaseDate: 'purchaseDate',
    installments: 'installments',
    isRecurring: 'isRecurring',
    category: 'category',
    cardId: 'cardId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CardExpenseScalarFieldEnum = (typeof CardExpenseScalarFieldEnum)[keyof typeof CardExpenseScalarFieldEnum]


  export const CustomIconScalarFieldEnum: {
    id: 'id',
    keyword: 'keyword',
    brandTerm: 'brandTerm',
    customImageUrl: 'customImageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomIconScalarFieldEnum = (typeof CustomIconScalarFieldEnum)[keyof typeof CustomIconScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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
   * Deep Input Types
   */


  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    category?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    isRecurring?: BoolFilter<"Transaction"> | boolean
    installments?: JsonNullableFilter<"Transaction">
    groupId?: StringNullableFilter<"Transaction"> | string | null
    relatedCardId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    card?: XOR<CreditCardNullableScalarRelationFilter, CreditCardWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    category?: SortOrder
    date?: SortOrder
    isRecurring?: SortOrder
    installments?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    relatedCardId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    card?: CreditCardOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    description?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    category?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    isRecurring?: BoolFilter<"Transaction"> | boolean
    installments?: JsonNullableFilter<"Transaction">
    groupId?: StringNullableFilter<"Transaction"> | string | null
    relatedCardId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    card?: XOR<CreditCardNullableScalarRelationFilter, CreditCardWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    category?: SortOrder
    date?: SortOrder
    isRecurring?: SortOrder
    installments?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    relatedCardId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    description?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    category?: StringWithAggregatesFilter<"Transaction"> | string
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    isRecurring?: BoolWithAggregatesFilter<"Transaction"> | boolean
    installments?: JsonNullableWithAggregatesFilter<"Transaction">
    groupId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    relatedCardId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type CreditCardWhereInput = {
    AND?: CreditCardWhereInput | CreditCardWhereInput[]
    OR?: CreditCardWhereInput[]
    NOT?: CreditCardWhereInput | CreditCardWhereInput[]
    id?: StringFilter<"CreditCard"> | string
    name?: StringFilter<"CreditCard"> | string
    limit?: DecimalFilter<"CreditCard"> | Decimal | DecimalJsLike | number | string
    closingDay?: IntFilter<"CreditCard"> | number
    dueDay?: IntFilter<"CreditCard"> | number
    createdAt?: DateTimeFilter<"CreditCard"> | Date | string
    updatedAt?: DateTimeFilter<"CreditCard"> | Date | string
    expenses?: CardExpenseListRelationFilter
    payments?: TransactionListRelationFilter
  }

  export type CreditCardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    limit?: SortOrder
    closingDay?: SortOrder
    dueDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expenses?: CardExpenseOrderByRelationAggregateInput
    payments?: TransactionOrderByRelationAggregateInput
  }

  export type CreditCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreditCardWhereInput | CreditCardWhereInput[]
    OR?: CreditCardWhereInput[]
    NOT?: CreditCardWhereInput | CreditCardWhereInput[]
    name?: StringFilter<"CreditCard"> | string
    limit?: DecimalFilter<"CreditCard"> | Decimal | DecimalJsLike | number | string
    closingDay?: IntFilter<"CreditCard"> | number
    dueDay?: IntFilter<"CreditCard"> | number
    createdAt?: DateTimeFilter<"CreditCard"> | Date | string
    updatedAt?: DateTimeFilter<"CreditCard"> | Date | string
    expenses?: CardExpenseListRelationFilter
    payments?: TransactionListRelationFilter
  }, "id">

  export type CreditCardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    limit?: SortOrder
    closingDay?: SortOrder
    dueDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreditCardCountOrderByAggregateInput
    _avg?: CreditCardAvgOrderByAggregateInput
    _max?: CreditCardMaxOrderByAggregateInput
    _min?: CreditCardMinOrderByAggregateInput
    _sum?: CreditCardSumOrderByAggregateInput
  }

  export type CreditCardScalarWhereWithAggregatesInput = {
    AND?: CreditCardScalarWhereWithAggregatesInput | CreditCardScalarWhereWithAggregatesInput[]
    OR?: CreditCardScalarWhereWithAggregatesInput[]
    NOT?: CreditCardScalarWhereWithAggregatesInput | CreditCardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditCard"> | string
    name?: StringWithAggregatesFilter<"CreditCard"> | string
    limit?: DecimalWithAggregatesFilter<"CreditCard"> | Decimal | DecimalJsLike | number | string
    closingDay?: IntWithAggregatesFilter<"CreditCard"> | number
    dueDay?: IntWithAggregatesFilter<"CreditCard"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CreditCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreditCard"> | Date | string
  }

  export type CardExpenseWhereInput = {
    AND?: CardExpenseWhereInput | CardExpenseWhereInput[]
    OR?: CardExpenseWhereInput[]
    NOT?: CardExpenseWhereInput | CardExpenseWhereInput[]
    id?: StringFilter<"CardExpense"> | string
    description?: StringFilter<"CardExpense"> | string
    totalAmount?: DecimalFilter<"CardExpense"> | Decimal | DecimalJsLike | number | string
    purchaseDate?: DateTimeFilter<"CardExpense"> | Date | string
    installments?: JsonNullableFilter<"CardExpense">
    isRecurring?: BoolFilter<"CardExpense"> | boolean
    category?: StringFilter<"CardExpense"> | string
    cardId?: StringFilter<"CardExpense"> | string
    createdAt?: DateTimeFilter<"CardExpense"> | Date | string
    updatedAt?: DateTimeFilter<"CardExpense"> | Date | string
    card?: XOR<CreditCardScalarRelationFilter, CreditCardWhereInput>
  }

  export type CardExpenseOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    totalAmount?: SortOrder
    purchaseDate?: SortOrder
    installments?: SortOrderInput | SortOrder
    isRecurring?: SortOrder
    category?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    card?: CreditCardOrderByWithRelationInput
  }

  export type CardExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CardExpenseWhereInput | CardExpenseWhereInput[]
    OR?: CardExpenseWhereInput[]
    NOT?: CardExpenseWhereInput | CardExpenseWhereInput[]
    description?: StringFilter<"CardExpense"> | string
    totalAmount?: DecimalFilter<"CardExpense"> | Decimal | DecimalJsLike | number | string
    purchaseDate?: DateTimeFilter<"CardExpense"> | Date | string
    installments?: JsonNullableFilter<"CardExpense">
    isRecurring?: BoolFilter<"CardExpense"> | boolean
    category?: StringFilter<"CardExpense"> | string
    cardId?: StringFilter<"CardExpense"> | string
    createdAt?: DateTimeFilter<"CardExpense"> | Date | string
    updatedAt?: DateTimeFilter<"CardExpense"> | Date | string
    card?: XOR<CreditCardScalarRelationFilter, CreditCardWhereInput>
  }, "id">

  export type CardExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    totalAmount?: SortOrder
    purchaseDate?: SortOrder
    installments?: SortOrderInput | SortOrder
    isRecurring?: SortOrder
    category?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CardExpenseCountOrderByAggregateInput
    _avg?: CardExpenseAvgOrderByAggregateInput
    _max?: CardExpenseMaxOrderByAggregateInput
    _min?: CardExpenseMinOrderByAggregateInput
    _sum?: CardExpenseSumOrderByAggregateInput
  }

  export type CardExpenseScalarWhereWithAggregatesInput = {
    AND?: CardExpenseScalarWhereWithAggregatesInput | CardExpenseScalarWhereWithAggregatesInput[]
    OR?: CardExpenseScalarWhereWithAggregatesInput[]
    NOT?: CardExpenseScalarWhereWithAggregatesInput | CardExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CardExpense"> | string
    description?: StringWithAggregatesFilter<"CardExpense"> | string
    totalAmount?: DecimalWithAggregatesFilter<"CardExpense"> | Decimal | DecimalJsLike | number | string
    purchaseDate?: DateTimeWithAggregatesFilter<"CardExpense"> | Date | string
    installments?: JsonNullableWithAggregatesFilter<"CardExpense">
    isRecurring?: BoolWithAggregatesFilter<"CardExpense"> | boolean
    category?: StringWithAggregatesFilter<"CardExpense"> | string
    cardId?: StringWithAggregatesFilter<"CardExpense"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CardExpense"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CardExpense"> | Date | string
  }

  export type CustomIconWhereInput = {
    AND?: CustomIconWhereInput | CustomIconWhereInput[]
    OR?: CustomIconWhereInput[]
    NOT?: CustomIconWhereInput | CustomIconWhereInput[]
    id?: StringFilter<"CustomIcon"> | string
    keyword?: StringFilter<"CustomIcon"> | string
    brandTerm?: StringNullableFilter<"CustomIcon"> | string | null
    customImageUrl?: StringNullableFilter<"CustomIcon"> | string | null
    createdAt?: DateTimeFilter<"CustomIcon"> | Date | string
    updatedAt?: DateTimeFilter<"CustomIcon"> | Date | string
  }

  export type CustomIconOrderByWithRelationInput = {
    id?: SortOrder
    keyword?: SortOrder
    brandTerm?: SortOrderInput | SortOrder
    customImageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomIconWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    keyword?: string
    AND?: CustomIconWhereInput | CustomIconWhereInput[]
    OR?: CustomIconWhereInput[]
    NOT?: CustomIconWhereInput | CustomIconWhereInput[]
    brandTerm?: StringNullableFilter<"CustomIcon"> | string | null
    customImageUrl?: StringNullableFilter<"CustomIcon"> | string | null
    createdAt?: DateTimeFilter<"CustomIcon"> | Date | string
    updatedAt?: DateTimeFilter<"CustomIcon"> | Date | string
  }, "id" | "keyword">

  export type CustomIconOrderByWithAggregationInput = {
    id?: SortOrder
    keyword?: SortOrder
    brandTerm?: SortOrderInput | SortOrder
    customImageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomIconCountOrderByAggregateInput
    _max?: CustomIconMaxOrderByAggregateInput
    _min?: CustomIconMinOrderByAggregateInput
  }

  export type CustomIconScalarWhereWithAggregatesInput = {
    AND?: CustomIconScalarWhereWithAggregatesInput | CustomIconScalarWhereWithAggregatesInput[]
    OR?: CustomIconScalarWhereWithAggregatesInput[]
    NOT?: CustomIconScalarWhereWithAggregatesInput | CustomIconScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomIcon"> | string
    keyword?: StringWithAggregatesFilter<"CustomIcon"> | string
    brandTerm?: StringNullableWithAggregatesFilter<"CustomIcon"> | string | null
    customImageUrl?: StringNullableWithAggregatesFilter<"CustomIcon"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomIcon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomIcon"> | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    category: string
    date: Date | string
    isRecurring?: boolean
    installments?: NullableJsonNullValueInput | InputJsonValue
    groupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    card?: CreditCardCreateNestedOneWithoutPaymentsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    category: string
    date: Date | string
    isRecurring?: boolean
    installments?: NullableJsonNullValueInput | InputJsonValue
    groupId?: string | null
    relatedCardId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    installments?: NullableJsonNullValueInput | InputJsonValue
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    card?: CreditCardUpdateOneWithoutPaymentsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    installments?: NullableJsonNullValueInput | InputJsonValue
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedCardId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    category: string
    date: Date | string
    isRecurring?: boolean
    installments?: NullableJsonNullValueInput | InputJsonValue
    groupId?: string | null
    relatedCardId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    installments?: NullableJsonNullValueInput | InputJsonValue
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    installments?: NullableJsonNullValueInput | InputJsonValue
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedCardId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardCreateInput = {
    id?: string
    name: string
    limit: Decimal | DecimalJsLike | number | string
    closingDay: number
    dueDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: CardExpenseCreateNestedManyWithoutCardInput
    payments?: TransactionCreateNestedManyWithoutCardInput
  }

  export type CreditCardUncheckedCreateInput = {
    id?: string
    name: string
    limit: Decimal | DecimalJsLike | number | string
    closingDay: number
    dueDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: CardExpenseUncheckedCreateNestedManyWithoutCardInput
    payments?: TransactionUncheckedCreateNestedManyWithoutCardInput
  }

  export type CreditCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: CardExpenseUpdateManyWithoutCardNestedInput
    payments?: TransactionUpdateManyWithoutCardNestedInput
  }

  export type CreditCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: CardExpenseUncheckedUpdateManyWithoutCardNestedInput
    payments?: TransactionUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CreditCardCreateManyInput = {
    id?: string
    name: string
    limit: Decimal | DecimalJsLike | number | string
    closingDay: number
    dueDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardExpenseCreateInput = {
    id?: string
    description: string
    totalAmount: Decimal | DecimalJsLike | number | string
    purchaseDate: Date | string
    installments?: NullableJsonNullValueInput | InputJsonValue
    isRecurring?: boolean
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    card: CreditCardCreateNestedOneWithoutExpensesInput
  }

  export type CardExpenseUncheckedCreateInput = {
    id?: string
    description: string
    totalAmount: Decimal | DecimalJsLike | number | string
    purchaseDate: Date | string
    installments?: NullableJsonNullValueInput | InputJsonValue
    isRecurring?: boolean
    category: string
    cardId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installments?: NullableJsonNullValueInput | InputJsonValue
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    card?: CreditCardUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type CardExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installments?: NullableJsonNullValueInput | InputJsonValue
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardExpenseCreateManyInput = {
    id?: string
    description: string
    totalAmount: Decimal | DecimalJsLike | number | string
    purchaseDate: Date | string
    installments?: NullableJsonNullValueInput | InputJsonValue
    isRecurring?: boolean
    category: string
    cardId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installments?: NullableJsonNullValueInput | InputJsonValue
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installments?: NullableJsonNullValueInput | InputJsonValue
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomIconCreateInput = {
    id?: string
    keyword: string
    brandTerm?: string | null
    customImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomIconUncheckedCreateInput = {
    id?: string
    keyword: string
    brandTerm?: string | null
    customImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomIconUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    brandTerm?: NullableStringFieldUpdateOperationsInput | string | null
    customImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomIconUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    brandTerm?: NullableStringFieldUpdateOperationsInput | string | null
    customImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomIconCreateManyInput = {
    id?: string
    keyword: string
    brandTerm?: string | null
    customImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomIconUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    brandTerm?: NullableStringFieldUpdateOperationsInput | string | null
    customImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomIconUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    brandTerm?: NullableStringFieldUpdateOperationsInput | string | null
    customImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type CreditCardNullableScalarRelationFilter = {
    is?: CreditCardWhereInput | null
    isNot?: CreditCardWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    category?: SortOrder
    date?: SortOrder
    isRecurring?: SortOrder
    installments?: SortOrder
    groupId?: SortOrder
    relatedCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    category?: SortOrder
    date?: SortOrder
    isRecurring?: SortOrder
    groupId?: SortOrder
    relatedCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    category?: SortOrder
    date?: SortOrder
    isRecurring?: SortOrder
    groupId?: SortOrder
    relatedCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type CardExpenseListRelationFilter = {
    every?: CardExpenseWhereInput
    some?: CardExpenseWhereInput
    none?: CardExpenseWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type CardExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditCardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    limit?: SortOrder
    closingDay?: SortOrder
    dueDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardAvgOrderByAggregateInput = {
    limit?: SortOrder
    closingDay?: SortOrder
    dueDay?: SortOrder
  }

  export type CreditCardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    limit?: SortOrder
    closingDay?: SortOrder
    dueDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    limit?: SortOrder
    closingDay?: SortOrder
    dueDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardSumOrderByAggregateInput = {
    limit?: SortOrder
    closingDay?: SortOrder
    dueDay?: SortOrder
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

  export type CreditCardScalarRelationFilter = {
    is?: CreditCardWhereInput
    isNot?: CreditCardWhereInput
  }

  export type CardExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    totalAmount?: SortOrder
    purchaseDate?: SortOrder
    installments?: SortOrder
    isRecurring?: SortOrder
    category?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardExpenseAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type CardExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    totalAmount?: SortOrder
    purchaseDate?: SortOrder
    isRecurring?: SortOrder
    category?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    totalAmount?: SortOrder
    purchaseDate?: SortOrder
    isRecurring?: SortOrder
    category?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardExpenseSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type CustomIconCountOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    brandTerm?: SortOrder
    customImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomIconMaxOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    brandTerm?: SortOrder
    customImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomIconMinOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    brandTerm?: SortOrder
    customImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<CreditCardCreateWithoutPaymentsInput, CreditCardUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CreditCardCreateOrConnectWithoutPaymentsInput
    connect?: CreditCardWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CreditCardUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<CreditCardCreateWithoutPaymentsInput, CreditCardUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CreditCardCreateOrConnectWithoutPaymentsInput
    upsert?: CreditCardUpsertWithoutPaymentsInput
    disconnect?: CreditCardWhereInput | boolean
    delete?: CreditCardWhereInput | boolean
    connect?: CreditCardWhereUniqueInput
    update?: XOR<XOR<CreditCardUpdateToOneWithWhereWithoutPaymentsInput, CreditCardUpdateWithoutPaymentsInput>, CreditCardUncheckedUpdateWithoutPaymentsInput>
  }

  export type CardExpenseCreateNestedManyWithoutCardInput = {
    create?: XOR<CardExpenseCreateWithoutCardInput, CardExpenseUncheckedCreateWithoutCardInput> | CardExpenseCreateWithoutCardInput[] | CardExpenseUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardExpenseCreateOrConnectWithoutCardInput | CardExpenseCreateOrConnectWithoutCardInput[]
    createMany?: CardExpenseCreateManyCardInputEnvelope
    connect?: CardExpenseWhereUniqueInput | CardExpenseWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutCardInput = {
    create?: XOR<TransactionCreateWithoutCardInput, TransactionUncheckedCreateWithoutCardInput> | TransactionCreateWithoutCardInput[] | TransactionUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCardInput | TransactionCreateOrConnectWithoutCardInput[]
    createMany?: TransactionCreateManyCardInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type CardExpenseUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<CardExpenseCreateWithoutCardInput, CardExpenseUncheckedCreateWithoutCardInput> | CardExpenseCreateWithoutCardInput[] | CardExpenseUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardExpenseCreateOrConnectWithoutCardInput | CardExpenseCreateOrConnectWithoutCardInput[]
    createMany?: CardExpenseCreateManyCardInputEnvelope
    connect?: CardExpenseWhereUniqueInput | CardExpenseWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<TransactionCreateWithoutCardInput, TransactionUncheckedCreateWithoutCardInput> | TransactionCreateWithoutCardInput[] | TransactionUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCardInput | TransactionCreateOrConnectWithoutCardInput[]
    createMany?: TransactionCreateManyCardInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CardExpenseUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardExpenseCreateWithoutCardInput, CardExpenseUncheckedCreateWithoutCardInput> | CardExpenseCreateWithoutCardInput[] | CardExpenseUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardExpenseCreateOrConnectWithoutCardInput | CardExpenseCreateOrConnectWithoutCardInput[]
    upsert?: CardExpenseUpsertWithWhereUniqueWithoutCardInput | CardExpenseUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardExpenseCreateManyCardInputEnvelope
    set?: CardExpenseWhereUniqueInput | CardExpenseWhereUniqueInput[]
    disconnect?: CardExpenseWhereUniqueInput | CardExpenseWhereUniqueInput[]
    delete?: CardExpenseWhereUniqueInput | CardExpenseWhereUniqueInput[]
    connect?: CardExpenseWhereUniqueInput | CardExpenseWhereUniqueInput[]
    update?: CardExpenseUpdateWithWhereUniqueWithoutCardInput | CardExpenseUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardExpenseUpdateManyWithWhereWithoutCardInput | CardExpenseUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardExpenseScalarWhereInput | CardExpenseScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutCardNestedInput = {
    create?: XOR<TransactionCreateWithoutCardInput, TransactionUncheckedCreateWithoutCardInput> | TransactionCreateWithoutCardInput[] | TransactionUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCardInput | TransactionCreateOrConnectWithoutCardInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCardInput | TransactionUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: TransactionCreateManyCardInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCardInput | TransactionUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCardInput | TransactionUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CardExpenseUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardExpenseCreateWithoutCardInput, CardExpenseUncheckedCreateWithoutCardInput> | CardExpenseCreateWithoutCardInput[] | CardExpenseUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardExpenseCreateOrConnectWithoutCardInput | CardExpenseCreateOrConnectWithoutCardInput[]
    upsert?: CardExpenseUpsertWithWhereUniqueWithoutCardInput | CardExpenseUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardExpenseCreateManyCardInputEnvelope
    set?: CardExpenseWhereUniqueInput | CardExpenseWhereUniqueInput[]
    disconnect?: CardExpenseWhereUniqueInput | CardExpenseWhereUniqueInput[]
    delete?: CardExpenseWhereUniqueInput | CardExpenseWhereUniqueInput[]
    connect?: CardExpenseWhereUniqueInput | CardExpenseWhereUniqueInput[]
    update?: CardExpenseUpdateWithWhereUniqueWithoutCardInput | CardExpenseUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardExpenseUpdateManyWithWhereWithoutCardInput | CardExpenseUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardExpenseScalarWhereInput | CardExpenseScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<TransactionCreateWithoutCardInput, TransactionUncheckedCreateWithoutCardInput> | TransactionCreateWithoutCardInput[] | TransactionUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCardInput | TransactionCreateOrConnectWithoutCardInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCardInput | TransactionUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: TransactionCreateManyCardInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCardInput | TransactionUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCardInput | TransactionUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CreditCardCreateNestedOneWithoutExpensesInput = {
    create?: XOR<CreditCardCreateWithoutExpensesInput, CreditCardUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CreditCardCreateOrConnectWithoutExpensesInput
    connect?: CreditCardWhereUniqueInput
  }

  export type CreditCardUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<CreditCardCreateWithoutExpensesInput, CreditCardUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CreditCardCreateOrConnectWithoutExpensesInput
    upsert?: CreditCardUpsertWithoutExpensesInput
    connect?: CreditCardWhereUniqueInput
    update?: XOR<XOR<CreditCardUpdateToOneWithWhereWithoutExpensesInput, CreditCardUpdateWithoutExpensesInput>, CreditCardUncheckedUpdateWithoutExpensesInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type CreditCardCreateWithoutPaymentsInput = {
    id?: string
    name: string
    limit: Decimal | DecimalJsLike | number | string
    closingDay: number
    dueDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: CardExpenseCreateNestedManyWithoutCardInput
  }

  export type CreditCardUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    limit: Decimal | DecimalJsLike | number | string
    closingDay: number
    dueDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: CardExpenseUncheckedCreateNestedManyWithoutCardInput
  }

  export type CreditCardCreateOrConnectWithoutPaymentsInput = {
    where: CreditCardWhereUniqueInput
    create: XOR<CreditCardCreateWithoutPaymentsInput, CreditCardUncheckedCreateWithoutPaymentsInput>
  }

  export type CreditCardUpsertWithoutPaymentsInput = {
    update: XOR<CreditCardUpdateWithoutPaymentsInput, CreditCardUncheckedUpdateWithoutPaymentsInput>
    create: XOR<CreditCardCreateWithoutPaymentsInput, CreditCardUncheckedCreateWithoutPaymentsInput>
    where?: CreditCardWhereInput
  }

  export type CreditCardUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: CreditCardWhereInput
    data: XOR<CreditCardUpdateWithoutPaymentsInput, CreditCardUncheckedUpdateWithoutPaymentsInput>
  }

  export type CreditCardUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: CardExpenseUpdateManyWithoutCardNestedInput
  }

  export type CreditCardUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: CardExpenseUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardExpenseCreateWithoutCardInput = {
    id?: string
    description: string
    totalAmount: Decimal | DecimalJsLike | number | string
    purchaseDate: Date | string
    installments?: NullableJsonNullValueInput | InputJsonValue
    isRecurring?: boolean
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardExpenseUncheckedCreateWithoutCardInput = {
    id?: string
    description: string
    totalAmount: Decimal | DecimalJsLike | number | string
    purchaseDate: Date | string
    installments?: NullableJsonNullValueInput | InputJsonValue
    isRecurring?: boolean
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardExpenseCreateOrConnectWithoutCardInput = {
    where: CardExpenseWhereUniqueInput
    create: XOR<CardExpenseCreateWithoutCardInput, CardExpenseUncheckedCreateWithoutCardInput>
  }

  export type CardExpenseCreateManyCardInputEnvelope = {
    data: CardExpenseCreateManyCardInput | CardExpenseCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutCardInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    category: string
    date: Date | string
    isRecurring?: boolean
    installments?: NullableJsonNullValueInput | InputJsonValue
    groupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutCardInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    category: string
    date: Date | string
    isRecurring?: boolean
    installments?: NullableJsonNullValueInput | InputJsonValue
    groupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutCardInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCardInput, TransactionUncheckedCreateWithoutCardInput>
  }

  export type TransactionCreateManyCardInputEnvelope = {
    data: TransactionCreateManyCardInput | TransactionCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type CardExpenseUpsertWithWhereUniqueWithoutCardInput = {
    where: CardExpenseWhereUniqueInput
    update: XOR<CardExpenseUpdateWithoutCardInput, CardExpenseUncheckedUpdateWithoutCardInput>
    create: XOR<CardExpenseCreateWithoutCardInput, CardExpenseUncheckedCreateWithoutCardInput>
  }

  export type CardExpenseUpdateWithWhereUniqueWithoutCardInput = {
    where: CardExpenseWhereUniqueInput
    data: XOR<CardExpenseUpdateWithoutCardInput, CardExpenseUncheckedUpdateWithoutCardInput>
  }

  export type CardExpenseUpdateManyWithWhereWithoutCardInput = {
    where: CardExpenseScalarWhereInput
    data: XOR<CardExpenseUpdateManyMutationInput, CardExpenseUncheckedUpdateManyWithoutCardInput>
  }

  export type CardExpenseScalarWhereInput = {
    AND?: CardExpenseScalarWhereInput | CardExpenseScalarWhereInput[]
    OR?: CardExpenseScalarWhereInput[]
    NOT?: CardExpenseScalarWhereInput | CardExpenseScalarWhereInput[]
    id?: StringFilter<"CardExpense"> | string
    description?: StringFilter<"CardExpense"> | string
    totalAmount?: DecimalFilter<"CardExpense"> | Decimal | DecimalJsLike | number | string
    purchaseDate?: DateTimeFilter<"CardExpense"> | Date | string
    installments?: JsonNullableFilter<"CardExpense">
    isRecurring?: BoolFilter<"CardExpense"> | boolean
    category?: StringFilter<"CardExpense"> | string
    cardId?: StringFilter<"CardExpense"> | string
    createdAt?: DateTimeFilter<"CardExpense"> | Date | string
    updatedAt?: DateTimeFilter<"CardExpense"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutCardInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCardInput, TransactionUncheckedUpdateWithoutCardInput>
    create: XOR<TransactionCreateWithoutCardInput, TransactionUncheckedCreateWithoutCardInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCardInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCardInput, TransactionUncheckedUpdateWithoutCardInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCardInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCardInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    category?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    isRecurring?: BoolFilter<"Transaction"> | boolean
    installments?: JsonNullableFilter<"Transaction">
    groupId?: StringNullableFilter<"Transaction"> | string | null
    relatedCardId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type CreditCardCreateWithoutExpensesInput = {
    id?: string
    name: string
    limit: Decimal | DecimalJsLike | number | string
    closingDay: number
    dueDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: TransactionCreateNestedManyWithoutCardInput
  }

  export type CreditCardUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    limit: Decimal | DecimalJsLike | number | string
    closingDay: number
    dueDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: TransactionUncheckedCreateNestedManyWithoutCardInput
  }

  export type CreditCardCreateOrConnectWithoutExpensesInput = {
    where: CreditCardWhereUniqueInput
    create: XOR<CreditCardCreateWithoutExpensesInput, CreditCardUncheckedCreateWithoutExpensesInput>
  }

  export type CreditCardUpsertWithoutExpensesInput = {
    update: XOR<CreditCardUpdateWithoutExpensesInput, CreditCardUncheckedUpdateWithoutExpensesInput>
    create: XOR<CreditCardCreateWithoutExpensesInput, CreditCardUncheckedCreateWithoutExpensesInput>
    where?: CreditCardWhereInput
  }

  export type CreditCardUpdateToOneWithWhereWithoutExpensesInput = {
    where?: CreditCardWhereInput
    data: XOR<CreditCardUpdateWithoutExpensesInput, CreditCardUncheckedUpdateWithoutExpensesInput>
  }

  export type CreditCardUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: TransactionUpdateManyWithoutCardNestedInput
  }

  export type CreditCardUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: TransactionUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardExpenseCreateManyCardInput = {
    id?: string
    description: string
    totalAmount: Decimal | DecimalJsLike | number | string
    purchaseDate: Date | string
    installments?: NullableJsonNullValueInput | InputJsonValue
    isRecurring?: boolean
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyCardInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    category: string
    date: Date | string
    isRecurring?: boolean
    installments?: NullableJsonNullValueInput | InputJsonValue
    groupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardExpenseUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installments?: NullableJsonNullValueInput | InputJsonValue
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardExpenseUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installments?: NullableJsonNullValueInput | InputJsonValue
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardExpenseUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installments?: NullableJsonNullValueInput | InputJsonValue
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    installments?: NullableJsonNullValueInput | InputJsonValue
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    installments?: NullableJsonNullValueInput | InputJsonValue
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    installments?: NullableJsonNullValueInput | InputJsonValue
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
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