import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  uuid: any;
  numeric: any;
};

/** columns and relationships of "author" */
export type Author = {
  __typename?: 'author';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "author" */
export type Author_Aggregate = {
  __typename?: 'author_aggregate';
  aggregate?: Maybe<Author_Aggregate_Fields>;
  nodes: Array<Author>;
};

/** aggregate fields of "author" */
export type Author_Aggregate_Fields = {
  __typename?: 'author_aggregate_fields';
  avg?: Maybe<Author_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Author_Max_Fields>;
  min?: Maybe<Author_Min_Fields>;
  stddev?: Maybe<Author_Stddev_Fields>;
  stddev_pop?: Maybe<Author_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Author_Stddev_Samp_Fields>;
  sum?: Maybe<Author_Sum_Fields>;
  var_pop?: Maybe<Author_Var_Pop_Fields>;
  var_samp?: Maybe<Author_Var_Samp_Fields>;
  variance?: Maybe<Author_Variance_Fields>;
};


/** aggregate fields of "author" */
export type Author_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Author_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "author" */
export type Author_Aggregate_Order_By = {
  avg?: Maybe<Author_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Author_Max_Order_By>;
  min?: Maybe<Author_Min_Order_By>;
  stddev?: Maybe<Author_Stddev_Order_By>;
  stddev_pop?: Maybe<Author_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Author_Stddev_Samp_Order_By>;
  sum?: Maybe<Author_Sum_Order_By>;
  var_pop?: Maybe<Author_Var_Pop_Order_By>;
  var_samp?: Maybe<Author_Var_Samp_Order_By>;
  variance?: Maybe<Author_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "author" */
export type Author_Arr_Rel_Insert_Input = {
  data: Array<Author_Insert_Input>;
  on_conflict?: Maybe<Author_On_Conflict>;
};

/** aggregate avg on columns */
export type Author_Avg_Fields = {
  __typename?: 'author_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "author" */
export type Author_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "author". All fields are combined with a logical 'AND'. */
export type Author_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Author_Bool_Exp>>>;
  _not?: Maybe<Author_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Author_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "author" */
export enum Author_Constraint {
  /** unique or primary key constraint */
  AuthorPkey = 'author_pkey'
}

/** input type for incrementing integer column in table "author" */
export type Author_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "author" */
export type Author_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Author_Max_Fields = {
  __typename?: 'author_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "author" */
export type Author_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Author_Min_Fields = {
  __typename?: 'author_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "author" */
export type Author_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "author" */
export type Author_Mutation_Response = {
  __typename?: 'author_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Author>;
};

/** input type for inserting object relation for remote table "author" */
export type Author_Obj_Rel_Insert_Input = {
  data: Author_Insert_Input;
  on_conflict?: Maybe<Author_On_Conflict>;
};

/** on conflict condition type for table "author" */
export type Author_On_Conflict = {
  constraint: Author_Constraint;
  update_columns: Array<Author_Update_Column>;
  where?: Maybe<Author_Bool_Exp>;
};

/** ordering options when selecting data from "author" */
export type Author_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "author" */
export type Author_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "author" */
export enum Author_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "author" */
export type Author_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Author_Stddev_Fields = {
  __typename?: 'author_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "author" */
export type Author_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Author_Stddev_Pop_Fields = {
  __typename?: 'author_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "author" */
export type Author_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Author_Stddev_Samp_Fields = {
  __typename?: 'author_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "author" */
export type Author_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Author_Sum_Fields = {
  __typename?: 'author_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "author" */
export type Author_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "author" */
export enum Author_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Author_Var_Pop_Fields = {
  __typename?: 'author_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "author" */
export type Author_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Author_Var_Samp_Fields = {
  __typename?: 'author_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "author" */
export type Author_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Author_Variance_Fields = {
  __typename?: 'author_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "author" */
export type Author_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "author" */
  delete_author?: Maybe<Author_Mutation_Response>;
  /** delete single row from the table: "author" */
  delete_author_by_pk?: Maybe<Author>;
  /** delete data from the table: "product" */
  delete_product?: Maybe<Product_Mutation_Response>;
  /** delete single row from the table: "product" */
  delete_product_by_pk?: Maybe<Product>;
  /** insert data into the table: "author" */
  insert_author?: Maybe<Author_Mutation_Response>;
  /** insert a single row into the table: "author" */
  insert_author_one?: Maybe<Author>;
  /** insert data into the table: "product" */
  insert_product?: Maybe<Product_Mutation_Response>;
  /** insert a single row into the table: "product" */
  insert_product_one?: Maybe<Product>;
  /** update data of the table: "author" */
  update_author?: Maybe<Author_Mutation_Response>;
  /** update single row of the table: "author" */
  update_author_by_pk?: Maybe<Author>;
  /** update data of the table: "product" */
  update_product?: Maybe<Product_Mutation_Response>;
  /** update single row of the table: "product" */
  update_product_by_pk?: Maybe<Product>;
};


/** mutation root */
export type Mutation_RootDelete_AuthorArgs = {
  where: Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Author_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AuthorArgs = {
  objects: Array<Author_Insert_Input>;
  on_conflict?: Maybe<Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Author_OneArgs = {
  object: Author_Insert_Input;
  on_conflict?: Maybe<Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
  objects: Array<Product_Insert_Input>;
  on_conflict?: Maybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
  object: Product_Insert_Input;
  on_conflict?: Maybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthorArgs = {
  _inc?: Maybe<Author_Inc_Input>;
  _set?: Maybe<Author_Set_Input>;
  where: Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Author_By_PkArgs = {
  _inc?: Maybe<Author_Inc_Input>;
  _set?: Maybe<Author_Set_Input>;
  pk_columns: Author_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
  _inc?: Maybe<Product_Inc_Input>;
  _set?: Maybe<Product_Set_Input>;
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
  _inc?: Maybe<Product_Inc_Input>;
  _set?: Maybe<Product_Set_Input>;
  pk_columns: Product_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/**
 * Table storing the products
 *
 *
 * columns and relationships of "product"
 */
export type Product = {
  __typename?: 'product';
  date: Scalars['date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  price?: Maybe<Scalars['numeric']>;
  s3_url?: Maybe<Scalars['String']>;
  sold: Scalars['Boolean'];
  title: Scalars['String'];
};

/** aggregated selection of "product" */
export type Product_Aggregate = {
  __typename?: 'product_aggregate';
  aggregate?: Maybe<Product_Aggregate_Fields>;
  nodes: Array<Product>;
};

/** aggregate fields of "product" */
export type Product_Aggregate_Fields = {
  __typename?: 'product_aggregate_fields';
  avg?: Maybe<Product_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Max_Fields>;
  min?: Maybe<Product_Min_Fields>;
  stddev?: Maybe<Product_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Sum_Fields>;
  var_pop?: Maybe<Product_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Var_Samp_Fields>;
  variance?: Maybe<Product_Variance_Fields>;
};


/** aggregate fields of "product" */
export type Product_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product" */
export type Product_Aggregate_Order_By = {
  avg?: Maybe<Product_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Max_Order_By>;
  min?: Maybe<Product_Min_Order_By>;
  stddev?: Maybe<Product_Stddev_Order_By>;
  stddev_pop?: Maybe<Product_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Product_Stddev_Samp_Order_By>;
  sum?: Maybe<Product_Sum_Order_By>;
  var_pop?: Maybe<Product_Var_Pop_Order_By>;
  var_samp?: Maybe<Product_Var_Samp_Order_By>;
  variance?: Maybe<Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product" */
export type Product_Arr_Rel_Insert_Input = {
  data: Array<Product_Insert_Input>;
  on_conflict?: Maybe<Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Avg_Fields = {
  __typename?: 'product_avg_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product" */
export type Product_Avg_Order_By = {
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Bool_Exp>>>;
  _not?: Maybe<Product_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Bool_Exp>>>;
  date?: Maybe<Date_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  s3_url?: Maybe<String_Comparison_Exp>;
  sold?: Maybe<Boolean_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint */
  ProductPkey = 'product_pkey'
}

/** input type for incrementing integer column in table "product" */
export type Product_Inc_Input = {
  price?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  date?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  s3_url?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields';
  date?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  s3_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "product" */
export type Product_Max_Order_By = {
  date?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  s3_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields';
  date?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  s3_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "product" */
export type Product_Min_Order_By = {
  date?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  s3_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
  __typename?: 'product_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product>;
};

/** input type for inserting object relation for remote table "product" */
export type Product_Obj_Rel_Insert_Input = {
  data: Product_Insert_Input;
  on_conflict?: Maybe<Product_On_Conflict>;
};

/** on conflict condition type for table "product" */
export type Product_On_Conflict = {
  constraint: Product_Constraint;
  update_columns: Array<Product_Update_Column>;
  where?: Maybe<Product_Bool_Exp>;
};

/** ordering options when selecting data from "product" */
export type Product_Order_By = {
  date?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  s3_url?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "product" */
export type Product_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "product" */
export enum Product_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  S3Url = 's3_url',
  /** column name */
  Sold = 'sold',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  date?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  s3_url?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
  __typename?: 'product_stddev_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product" */
export type Product_Stddev_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
  __typename?: 'product_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product" */
export type Product_Stddev_Pop_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
  __typename?: 'product_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product" */
export type Product_Stddev_Samp_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  __typename?: 'product_sum_fields';
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "product" */
export type Product_Sum_Order_By = {
  price?: Maybe<Order_By>;
};

/** update columns of table "product" */
export enum Product_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  S3Url = 's3_url',
  /** column name */
  Sold = 'sold',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Product_Var_Pop_Fields = {
  __typename?: 'product_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product" */
export type Product_Var_Pop_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
  __typename?: 'product_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product" */
export type Product_Var_Samp_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Variance_Fields = {
  __typename?: 'product_variance_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product" */
export type Product_Variance_Order_By = {
  price?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "author" */
  author: Array<Author>;
  /** fetch aggregated fields from the table: "author" */
  author_aggregate: Author_Aggregate;
  /** fetch data from the table: "author" using primary key columns */
  author_by_pk?: Maybe<Author>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
};


/** query root */
export type Query_RootAuthorArgs = {
  distinct_on?: Maybe<Array<Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Order_By>>;
  where?: Maybe<Author_Bool_Exp>;
};


/** query root */
export type Query_RootAuthor_AggregateArgs = {
  distinct_on?: Maybe<Array<Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Order_By>>;
  where?: Maybe<Author_Bool_Exp>;
};


/** query root */
export type Query_RootAuthor_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootProductArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_By_PkArgs = {
  id: Scalars['uuid'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "author" */
  author: Array<Author>;
  /** fetch aggregated fields from the table: "author" */
  author_aggregate: Author_Aggregate;
  /** fetch data from the table: "author" using primary key columns */
  author_by_pk?: Maybe<Author>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
};


/** subscription root */
export type Subscription_RootAuthorArgs = {
  distinct_on?: Maybe<Array<Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Order_By>>;
  where?: Maybe<Author_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuthor_AggregateArgs = {
  distinct_on?: Maybe<Array<Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Order_By>>;
  where?: Maybe<Author_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuthor_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootProductArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type AddProductMutationVariables = Exact<{
  title: Scalars['String'];
  url: Scalars['String'];
}>;


export type AddProductMutation = (
  { __typename?: 'mutation_root' }
  & { insert_product?: Maybe<(
    { __typename?: 'product_mutation_response' }
    & Pick<Product_Mutation_Response, 'affected_rows'>
  )> }
);

export type GetAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorsQuery = (
  { __typename?: 'query_root' }
  & { author: Array<(
    { __typename?: 'author' }
    & Pick<Author, 'id' | 'name'>
  )> }
);


export const AddProductDocument = gql`
    mutation AddProduct($title: String!, $url: String!) {
  insert_product(objects: {title: $title, s3_url: $url}) {
    affected_rows
  }
}
    `;
export type AddProductMutationFn = Apollo.MutationFunction<AddProductMutation, AddProductMutationVariables>;

/**
 * __useAddProductMutation__
 *
 * To run a mutation, you first call `useAddProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductMutation, { data, loading, error }] = useAddProductMutation({
 *   variables: {
 *      title: // value for 'title'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useAddProductMutation(baseOptions?: Apollo.MutationHookOptions<AddProductMutation, AddProductMutationVariables>) {
        return Apollo.useMutation<AddProductMutation, AddProductMutationVariables>(AddProductDocument, baseOptions);
      }
export type AddProductMutationHookResult = ReturnType<typeof useAddProductMutation>;
export type AddProductMutationResult = Apollo.MutationResult<AddProductMutation>;
export type AddProductMutationOptions = Apollo.BaseMutationOptions<AddProductMutation, AddProductMutationVariables>;
export const GetAuthorsDocument = gql`
    query GetAuthors {
  author {
    id
    name
  }
}
    `;

/**
 * __useGetAuthorsQuery__
 *
 * To run a query within a React component, call `useGetAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
        return Apollo.useQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, baseOptions);
      }
export function useGetAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
          return Apollo.useLazyQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, baseOptions);
        }
export type GetAuthorsQueryHookResult = ReturnType<typeof useGetAuthorsQuery>;
export type GetAuthorsLazyQueryHookResult = ReturnType<typeof useGetAuthorsLazyQuery>;
export type GetAuthorsQueryResult = Apollo.QueryResult<GetAuthorsQuery, GetAuthorsQueryVariables>;